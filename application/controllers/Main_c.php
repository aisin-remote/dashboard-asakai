<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Main_c extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Production_result_m');
		$this->load->model('Issue_m');
		$this->load->model('Issue_detail_m');
		$this->load->model('User_m');

		$this->ip_address = gethostbyaddr($_SERVER['REMOTE_ADDR']);
		$datetimelocal = new DateTime("now", new DateTimeZone('Asia/Jakarta'));
		$this->datetime = $datetimelocal->format('Y-m-d H:i:s');
		$this->time = $datetimelocal->format('H:i:s');
		$this->date = $datetimelocal->format('Ymd');
		$this->session_array = $this->session->all_userdata();

		$this->getSession();

		$this->layout = 'main';
		$this->back_to_manage = $this->router->directory . $this->router->class . '/index/';
	}

	public function getSession()
	{
		$user = $this->User_m->get(array('CHR_IP' => $this->ip_address, 'BIT_STATUS' => 1));

		if ($user->num_rows() > 0) {
			return $user->row();
		} else {
			redirect(ROOT . 'ais-admin');
		}
	}

	public function index($date_issue = null)
	{
		$data['user'] = $this->getSession();
		$date_issue = is_null($date_issue) ? date('Y-m-d', strtotime(date('Y-m-d') . "-1 days")) : $date_issue;

		$prod_results = $this->Production_result_m->getProdResult($date_issue)->result();
		$line_stops = $this->Production_result_m->getLineStop($date_issue)->result();
		$oees = $this->Production_result_m->getOee($date_issue)->result();

		foreach ($prod_results as $key) {
			$data_prod_results[$key->CHR_SHOP_NAME] = $key->TOTAL;
		}

		foreach ($line_stops as $key) {

			$hour = $key->TOTAL;
			$minute = ($key->TOTAL) % 60;

			$data_line_stops[$key->CHR_SHOP_NAME] = $hour . ':' . $minute;
		}

		foreach ($oees as $key) {
			$data_oees[$key->CHR_SHOP_NAME] = $key->TOTAL;
		}

		$data['date_issue'] = $date_issue;
		$data['prod_results'] = (object) $data_prod_results;
		$data['line_stops'] = (object) $data_line_stops;
		$data['value_charts'] = (object) $data_oees;

		$data['status'] = (object) array(
			'SAFETY_CP' 		=> '-',
			'SAFETY_BP' 		=> '-',
			'SAFETY_EP' 		=> '-',
			'SAFETY_SI' 		=> '-',
			'CLAIM_CP' 			=> '-',
			'CLAIM_BP' 			=> '-',
			'CLAIM_EP' 			=> '-',
			'CLAIM_SI' 			=> '-',
			'RIL_CP' 			=> '-',
			'RIL_BP' 			=> '-',
			'RIL_EP' 			=> '-',
			'RIL_SI' 			=> '-',
			'DELIVERY_CP' 		=> '-',
			'DELIVERY_BP' 		=> '-',
			'DELIVERY_EP' 		=> '-',
			'DELIVERY_SI' 		=> '-',
		);

		$data['status_color'] = (object) array(
			'SAFETY_CP' 		=> 'default',
			'SAFETY_BP' 		=> 'default',
			'SAFETY_EP' 		=> 'default',
			'SAFETY_SI' 		=> 'default',
			'CLAIM_CP' 			=> 'default',
			'CLAIM_BP' 			=> 'default',
			'CLAIM_EP' 			=> 'default',
			'CLAIM_SI' 			=> 'default',
			'RIL_CP' 			=> 'default',
			'RIL_BP' 			=> 'default',
			'RIL_EP' 			=> 'default',
			'RIL_SI' 			=> 'default',
			'DELIVERY_CP' 		=> 'default',
			'DELIVERY_BP' 		=> 'default',
			'DELIVERY_EP' 		=> 'default',
			'DELIVERY_SI' 		=> 'default',
		);

		$data['issues'] = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => 'main issue'))->result();

		// $data['eng_comments'] = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => 'eng'))->result();
		// $data['qua_comments'] = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => 'qua'))->result();
		// $data['ppic_comments'] = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => 'ppic'))->result();
		// $data['mte_comments'] = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => 'mte'))->result();

		$this->load->view($this->layout, $data);
	}

	public function save()
	{
		$user = $this->getSession();

		if ($user) {

			$id = $this->input->post('INT_ID');
			$type_issue = $this->input->post('CHR_TYPE');
			$issue = $this->input->post('CHR_ISSUE');
			$date_issue = $this->input->post('DAT_ISSUE_AT');
			$shop = $this->input->post('CHR_SHOP_NAME');
			$title = $this->input->post('CHR_TITLE');
			$curr_preventive = $this->input->post('CHR_CURR_PREVENTIVE');
			$yokoten = $this->input->post('CHR_YOKOTEN');
			$permanent = $this->input->post('CHR_PERMANENT_ACTIVITY');
			$temp_action = $this->input->post('CHR_TEMP_ACTION');
			$revocery_planned_at = $this->input->post('CHR_PLANNED_AT');
			$is_new = true;
			$is_delete = false;

			if ($id != null || $id != '') {

				if ($issue == '') {
					$is_delete = true;
					$this->Issue_m->delete(array('INT_ID' => $id));
				} else {
					$data = array(
						'CHR_TITLE' => $title,
						'CHR_ISSUE' => $issue,
						'CHR_TEMP_ACTION' => $temp_action,
						'CHR_CURR_PREVENTIVE' => $curr_preventive,
						'CHR_YOKOTEN' => $yokoten,
						'CHR_PERMANENT_ACTIVITY' => $permanent,
						'DAT_RECOVER_PLAN_AT' => $revocery_planned_at,
						'TIM_ISSUE_AT' => $this->time,
						'CHR_MODIFIED_BY' => $user->CHR_USERNAME,
						'DAT_MODIFIED_AT' => $this->datetime,
					);
					$this->Issue_m->update($data, array('INT_ID' => $id));
				}

				$is_new = false;
			} else {
				$data = array(
					'CHR_TITLE' => $title,
					'CHR_TYPE' => $type_issue,
					'CHR_SHOP_NAME' => $shop,
					'CHR_ISSUE' => $issue,
					'CHR_TEMP_ACTION' => $temp_action,
					'CHR_CURR_PREVENTIVE' => $curr_preventive,
					'CHR_YOKOTEN' => $yokoten,
					'CHR_PERMANENT_ACTIVITY' => $permanent,
					'DAT_RECOVER_PLAN_AT' => $revocery_planned_at,
					'DAT_ISSUE_AT' => $date_issue,
					'TIM_ISSUE_AT' => $this->time,
					'CHR_CREATED_BY' => $user->CHR_USERNAME,
					'DAT_CREATED_AT' => $this->datetime,
				);
				$id = $this->Issue_m->save($data);
			}

			$data_json = array(
				'is_delete' => $is_delete,
				'is_new' => $is_new,
				'issue_id' => $id,
			);

			echo json_encode($data_json);
		} else {
			echo json_encode(false);
		}
	}

	public function getMain()
	{
		$type_issue = $this->input->post('CHR_TYPE');
		$date_issue = $this->input->post('DAT_ISSUE_AT');

		$issues = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => $type_issue))->result();

		$data = '';
		foreach ($issues as $issue) {

			$data .= '<div class="card-body class-main" id="main-issue-' . $issue->INT_ID . '" >';
			$data .= '<div class="d-flex flex-start align-items-center">';
			$data .= '<img class="rounded-circle shadow-1-strong me-3" src="' . base_url('assets/images/user.jpg') . '" alt="avatar" width="60" height="60" />';
			$data .= '<div>';
			$data .= '<h6 class="fw-bold text-primary mb-1">' . $issue->CHR_LAST_CREATED_BY . '</h6>';
			$data .= '<p class="text-muted small fst-italic mb-0">Post at - ' . $issue->DAT_ISSUE_AT . '</p>';
			$data .= '</div>';
			$data .= '</div>';
			$data .= '<p id="main-label-issue-' . $issue->INT_ID . '" class="mt-3 mb-0 pb-0">' . $issue->CHR_ISSUE . '</p>';
			$data .= '<p style="display:none;" id="main-label-issue-format-' . $issue->INT_ID . '" class="mt-3 mb-0 pb-0">' . $issue->CHR_ISSUE_FORMAT . '</p>';
			$data .= '</div>';
		}

		echo json_encode($data);
	}

	public function get()
	{
		$date_issue = $this->input->post('DAT_ISSUE_AT');
		$shop = $this->input->post('CHR_SHOP_NAME');

		$issues = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_SHOP_NAME' => $shop))->result();
		$efficiencies = $this->Production_result_m->getOeeDetail($shop, $date_issue)->result_array();

		$prd_data = '';
		$eng_data = '';
		$qua_data = '';
		$ppic_data = '';
		$mte_data = '';
		foreach ($issues as $issue) {

			if ($issue->CHR_TYPE == 'prd') {

				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$prd_data .= '<div class="card-body class-prd" id="prd-comment-' . $issue->INT_ID . '" >';
				$prd_data .= '	<div class="row">';
				$prd_data .= '		<div class="col-md-12 col-lg-12 col-xl-12">';
				$prd_data .= '			<div class="d-flex align-items-center mb-0">';
				$prd_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-message"></i></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<span id="prd-comment-label-title-' . $issue->INT_ID . '" class="fw-bold fs-5">' . $issue->CHR_TITLE . '</span>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex mb-2">';
				$prd_data .= '				<div class="me-45"></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex align-items-center mb-2">';
				$prd_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-outdent"></i></div>';
				$prd_data .= '				<div><span class="fw-bold fs-6">Descriptions</span></div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex mb-4">';
				$prd_data .= '				<div class="me-45"></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<p id="prd-comment-label-issue-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$prd_data .= '					<p style="display:none;" id="prd-comment-label-issue-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '		</div>';
				$prd_data .= '	</div>';
				$prd_data .= '	<div class="row">';
				$prd_data .= '		<div class="col-md-8 col-lg-8 col-xl-8">';
				$prd_data .= '			<div class="d-flex align-items-center mb-2">';
				$prd_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$prd_data .= '				<div><span class="fw-bold fs-6">Temporary Actions</span></div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex mb-4">';
				$prd_data .= '				<div class="me-45"></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<p id="prd-comment-label-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$prd_data .= '					<p style="display:none;" id="prd-comment-label-temp-action-format-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '		</div>';
				$prd_data .= '		<div class="col-md-4 col-lg-4 col-xl-4">';
				$prd_data .= '			<div class="d-flex align-items-center mb-2">';
				$prd_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-calendar"></i></div>';
				$prd_data .= '				<div><span class="fw-bold fs-6">Planning Recovery</span></div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex mb-4">';
				$prd_data .= '				<div class="me-45"></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<p id="prd-comment-label-recovery-date-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->DAT_RECOVER_PLAN_AT . '</p>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '		</div>';
				$prd_data .= '	</div>';
				$prd_data .= '	<div class="row">';
				$prd_data .= '		<div class="col-md-8 col-lg-8 col-xl-8">';
				$prd_data .= '			<div class="d-flex align-items-center mb-2">';
				$prd_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				$prd_data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				$prd_data .= '			</div>';
				$prd_data .= 			$img_data;
				$prd_data .= '		</div>';
				$prd_data .= '		<div class="col-md-4 col-lg-4 col-xl-4">';
				$prd_data .= '			<div class="d-flex align-items-center mb-1">';
				$prd_data .= '				<div class="me-3"><i class="fa-solid fa-users-gear"></i></div>';
				$prd_data .= '				<div><span class="fw-bold fs-6">Ownnership Mte.</span></div>';
				$prd_data .= '			</div>';
				$prd_data .= '			<div class="d-flex mb-4">';
				$prd_data .= '				<div class="me-45"></div>';
				$prd_data .= '				<div>';
				$prd_data .= '					<p id="prd-comment-label-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$prd_data .= '					<p style="display:none;" id="prd-comment-label-curr-preventive-format-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$prd_data .= '				</div>';
				$prd_data .= '			</div>';
				$prd_data .= '		</div>';
				$prd_data .= '	</div>';
				$prd_data .= '</div>';
			} else if ($issue->CHR_TYPE == 'eng') {

				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$eng_data .= '<div class="card-body class-eng" id="eng-comment-' . $issue->INT_ID . '">';
				$eng_data .= '	<div class="row">';
				$eng_data .= '		<div class="col-12">';
				$eng_data .= '			<div class="d-flex align-items-center mb-0">';
				$eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-triangle-exclamation"></i></div>';
				$eng_data .= '				<div><span class="fw-bold fs-6">Root Cause</span></div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex mb-4">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p id="label-eng-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$eng_data .= '					<p style="display:none;" id="label-eng-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '		</div>';
				$eng_data .= '		<div class="col-12">';
				$eng_data .= '			<div class="d-flex align-items-center mb-0">';
				$eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$eng_data .= '				<div><span class="fw-bold fs-6">Temporary Action</span></div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex mb-4">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p id="label-eng-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$eng_data .= '					<p style="display:none;" id="label-eng-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '		</div>';
				$eng_data .= '		<div class="col-12">';
				$eng_data .= '			<div class="d-flex align-items-center mb-0">';
				$eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-screwdriver-wrench"></i></div>';
				$eng_data .= '				<div><span class="fw-bold fs-6">Current Preventive Maintenance</span></div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex mb-4">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p id="label-eng-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$eng_data .= '					<p style="display:none;" id="label-eng-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '		</div>';
				$eng_data .= '		<div class="col-12">';
				$eng_data .= '			<div class="d-flex align-items-center mb-0">';
				$eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gears"></i></div>';
				$eng_data .= '				<div><span class="fw-bold fs-6">Yokoten</span></div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex mb-4">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p id="label-eng-yokoten-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_YOKOTEN . '</p>';
				$eng_data .= '					<p style="display:none;" id="label-eng-yokoten-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_YOKOTEN_FORMAT . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '		</div>';
				$eng_data .= '		<div class="col-12">';
				$eng_data .= '			<div class="d-flex align-items-center mb-0">';
				$eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gear"></i></div>';
				$eng_data .= '				<div><span class="fw-bold fs-6">Permanent Activity</span></div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '			<div class="d-flex mb-4">';
				$eng_data .= '				<div class="me-45"></div>';
				$eng_data .= '				<div>';
				$eng_data .= '					<p id="label-eng-perm-activity-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_PERMANENT_ACTIVITY . '</p>';
				$eng_data .= '					<p style="display:none;" id="label-eng-perm-activity-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_PERMANENT_ACTIVITY_FORMAT . '</p>';
				$eng_data .= '				</div>';
				$eng_data .= '			</div>';
				$eng_data .= '		</div>';
				// $eng_data .= '		<div class="col-12">';
				// $eng_data .= '			<div class="d-flex align-items-center mb-2">';
				// $eng_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $eng_data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $eng_data .= '			</div>';
				// $eng_data .= 			$img_data;
				// $eng_data .= '		</div>';
				$eng_data .= '	</div>';
				$eng_data .= '</div>';
			} else if ($issue->CHR_TYPE == 'qua') {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$qua_data .= '<div class="card-body class-qua" id="qua-comment-' . $issue->INT_ID . '">';
				$qua_data .= '	<div class="row">';
				$qua_data .= '		<div class="col-12">';
				$qua_data .= '			<div class="d-flex align-items-center mb-0">';
				$qua_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-magnifying-glass-chart"></i></div>';
				$qua_data .= '				<div><span class="fw-bold fs-6">Product Verification</span></div>';
				$qua_data .= '			</div>';
				$qua_data .= '			<div class="d-flex">';
				$qua_data .= '				<div class="me-45"></div>';
				$qua_data .= '				<div>';
				$qua_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$qua_data .= '				</div>';
				$qua_data .= '			</div>';
				$qua_data .= '			<div class="d-flex mb-4">';
				$qua_data .= '				<div class="me-45"></div>';
				$qua_data .= '				<div>';
				$qua_data .= '					<p id="label-qua-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$qua_data .= '					<p style="display:none;" id="label-qua-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$qua_data .= '				</div>';
				$qua_data .= '			</div>';
				$qua_data .= '		</div>';
				$qua_data .= '		<div class="col-12">';
				$qua_data .= '			<div class="d-flex align-items-center mb-0">';
				$qua_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-hand-point-up"></i></div>';
				$qua_data .= '				<div><span class="fw-bold fs-6">Suggestion</span></div>';
				$qua_data .= '			</div>';
				$qua_data .= '			<div class="d-flex">';
				$qua_data .= '				<div class="me-45"></div>';
				$qua_data .= '				<div>';
				$qua_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$qua_data .= '				</div>';
				$qua_data .= '			</div>';
				$qua_data .= '			<div class="d-flex mb-4">';
				$qua_data .= '				<div class="me-45"></div>';
				$qua_data .= '				<div>';
				$qua_data .= '					<p id="label-qua-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$qua_data .= '					<p style="display:none;" id="label-qua-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$qua_data .= '				</div>';
				$qua_data .= '			</div>';
				$qua_data .= '		</div>';
				// $qua_data .= '		<div class="col-12">';
				// $qua_data .= '			<div class="d-flex align-items-center mb-2">';
				// $qua_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $qua_data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $qua_data .= '			</div>';
				// $qua_data .= 			$img_data;
				// $qua_data .= '		</div>';
				$qua_data .= '	</div>';
				$qua_data .= '</div>';
			} else if ($issue->CHR_TYPE == 'ppic') {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$ppic_data .= '<div class="card-body class-ppic" id="ppic-comment-' . $issue->INT_ID . '">';
				$ppic_data .= '	<div class="row">';
				$ppic_data .= '		<div class="col-12">';
				$ppic_data .= '			<div class="d-flex align-items-center mb-0">';
				$ppic_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-truck"></i></div>';
				$ppic_data .= '				<div><span class="fw-bold fs-6">Delivery Compliance</span></div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex mb-4">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p id="label-ppic-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$ppic_data .= '					<p style="display:none;" id="label-ppic-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '		</div>';
				$ppic_data .= '		<div class="col-12">';
				$ppic_data .= '			<div class="d-flex align-items-center mb-0">';
				$ppic_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-truck-ramp-box"></i></div>';
				$ppic_data .= '				<div><span class="fw-bold fs-6">Quantity Special Truck</span></div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex mb-4">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p id="label-ppic-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$ppic_data .= '					<p style="display:none;" id="label-ppic-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '		</div>';
				$ppic_data .= '		<div class="col-12">';
				$ppic_data .= '			<div class="d-flex align-items-center mb-0">';
				$ppic_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-book-bookmark"></i></div>';
				$ppic_data .= '				<div><span class="fw-bold fs-6">Report Stock FG OEM</span></div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '			<div class="d-flex mb-4">';
				$ppic_data .= '				<div class="me-45"></div>';
				$ppic_data .= '				<div>';
				$ppic_data .= '					<p id="label-ppic-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$ppic_data .= '					<p style="display:none;" id="label-ppic-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$ppic_data .= '				</div>';
				$ppic_data .= '			</div>';
				$ppic_data .= '		</div>';
				// $ppic_data .= '		<div class="col-12">';
				// $ppic_data .= '			<div class="d-flex align-items-center mb-2">';
				// $ppic_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $ppic_data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $ppic_data .= '			</div>';
				// $ppic_data .= 			$img_data;
				// $ppic_data .= '		</div>';
				$ppic_data .= '	</div>';
				$ppic_data .= '</div>';
			} else {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$mte_data .= '<div class="card-body class-mte" id="mte-comment-' . $issue->INT_ID . '">';
				$mte_data .= '	<div class="row">';
				$mte_data .= '		<div class="col-12">';
				$mte_data .= '			<div class="d-flex align-items-center mb-0">';
				$mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-triangle-exclamation"></i></div>';
				$mte_data .= '				<div><span class="fw-bold fs-6">Root Cause</span></div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex mb-4">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p id="label-mte-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$mte_data .= '					<p style="display:none;" id="label-mte-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '		</div>';
				$mte_data .= '		<div class="col-12">';
				$mte_data .= '			<div class="d-flex align-items-center mb-0">';
				$mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$mte_data .= '				<div><span class="fw-bold fs-6">Temporary Action</span></div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex mb-4">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p id="label-mte-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$mte_data .= '					<p style="display:none;" id="label-mte-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '		</div>';
				$mte_data .= '		<div class="col-12">';
				$mte_data .= '			<div class="d-flex align-items-center mb-0">';
				$mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-screwdriver-wrench"></i></div>';
				$mte_data .= '				<div><span class="fw-bold fs-6">Current Preventive Maintenance</span></div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex mb-4">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p id="label-mte-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$mte_data .= '					<p style="display:none;" id="label-mte-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '		</div>';
				$mte_data .= '		<div class="col-12">';
				$mte_data .= '			<div class="d-flex align-items-center mb-0">';
				$mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gears"></i></div>';
				$mte_data .= '				<div><span class="fw-bold fs-6">Yokoten</span></div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex mb-4">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p id="label-mte-yokoten-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_YOKOTEN . '</p>';
				$mte_data .= '					<p style="display:none;" id="label-mte-yokoten-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_YOKOTEN_FORMAT . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '		</div>';
				$mte_data .= '		<div class="col-12">';
				$mte_data .= '			<div class="d-flex align-items-center mb-0">';
				$mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gear"></i></div>';
				$mte_data .= '				<div><span class="fw-bold fs-6">Permanent Activity</span></div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '			<div class="d-flex mb-4">';
				$mte_data .= '				<div class="me-45"></div>';
				$mte_data .= '				<div>';
				$mte_data .= '					<p id="label-mte-perm-activity-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_PERMANENT_ACTIVITY . '</p>';
				$mte_data .= '					<p style="display:none;" id="label-mte-perm-activity-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_PERMANENT_ACTIVITY_FORMAT . '</p>';
				$mte_data .= '				</div>';
				$mte_data .= '			</div>';
				$mte_data .= '		</div>';
				// $mte_data .= '		<div class="col-12">';
				// $mte_data .= '			<div class="d-flex align-items-center mb-2">';
				// $mte_data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $mte_data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $mte_data .= '			</div>';
				// $mte_data .= 			$img_data;
				// $mte_data .= '		</div>';
				$mte_data .= '	</div>';
				$mte_data .= '</div>';
			}
		}

		$data = array(
			'efficiencies' => $efficiencies,
			'prd_data' => $prd_data,
			'eng_data' => $eng_data,
			'qua_data' => $qua_data,
			'ppic_data' => $ppic_data,
			'mte_data' => $mte_data,
		);

		echo json_encode($data);
	}

	public function getByType()
	{
		$date_issue = $this->input->post('DAT_ISSUE_AT');
		$shop = $this->input->post('CHR_SHOP_NAME');
		$type_issue = $this->input->post('CHR_TYPE');

		$issues = $this->Issue_m->get(array('DAT_ISSUE_AT' => $date_issue, 'CHR_TYPE' => $type_issue, 'CHR_SHOP_NAME' => $shop))->result();

		$data = '';
		foreach ($issues as $issue) {

			if ($issue->CHR_TYPE == 'prd') {

				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$data .= '<div class="card-body class-prd" id="prd-comment-' . $issue->INT_ID . '" >';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-md-12 col-lg-12 col-xl-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-message"></i></div>';
				$data .= '				<div>';
				$data .= '					<span id="prd-comment-label-title-' . $issue->INT_ID . '" class="fw-bold fs-5">' . $issue->CHR_TITLE . '</span>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-2">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex align-items-center mb-2">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-outdent"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Descriptions</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="prd-comment-label-issue-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$data .= '					<p style="display:none;" id="prd-comment-label-issue-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '	</div>';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-md-8 col-lg-8 col-xl-8">';
				$data .= '			<div class="d-flex align-items-center mb-2">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Temporary Actions</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="prd-comment-label-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$data .= '					<p style="display:none;" id="prd-comment-label-temp-action-format-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-md-4 col-lg-4 col-xl-4">';
				$data .= '			<div class="d-flex align-items-center mb-2">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-calendar"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Planning Recovery</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="prd-comment-label-recovery-date-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->DAT_RECOVER_PLAN_AT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '	</div>';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-md-8 col-lg-8 col-xl-8">';
				$data .= '			<div class="d-flex align-items-center mb-2">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				$data .= '			</div>';
				$data .= 			$img_data;
				$data .= '		</div>';
				$data .= '		<div class="col-md-4 col-lg-4 col-xl-4">';
				$data .= '			<div class="d-flex align-items-center mb-2">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-users-gear"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Ownnership Mte.</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="prd-comment-label-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$data .= '					<p style="display:none;" id="prd-comment-label-curr-preventive-format-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '	</div>';
				$data .= '</div>';
			} else if ($issue->CHR_TYPE == 'eng') {

				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$data .= '<div class="card-body class-eng" id="eng-comment-' . $issue->INT_ID . '">';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-triangle-exclamation"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Root Cause</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-eng-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$data .= '					<p style="display:none;" id="label-eng-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Temporary Action</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-eng-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$data .= '					<p style="display:none;" id="label-eng-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-screwdriver-wrench"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Current Preventive Maintenance</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-eng-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$data .= '					<p style="display:none;" id="label-eng-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gears"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Yokoten</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-eng-yokoten-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_YOKOTEN . '</p>';
				$data .= '					<p style="display:none;" id="label-eng-yokoten-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_YOKOTEN_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gear"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Permanent Activity</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-eng-perm-activity-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_PERMANENT_ACTIVITY . '</p>';
				$data .= '					<p style="display:none;" id="label-eng-perm-activity-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_PERMANENT_ACTIVITY_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				// $data .= '		<div class="col-12">';
				// $data .= '			<div class="d-flex align-items-center mb-2">';
				// $data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $data .= '			</div>';
				// $data .= 			$img_data;
				// $data .= '		</div>';
				$data .= '	</div>';
				$data .= '</div>';
			} else if ($issue->CHR_TYPE == 'qua') {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$data .= '<div class="card-body class-qua" id="qua-comment-' . $issue->INT_ID . '">';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-magnifying-glass-chart"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Product Verification</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-qua-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$data .= '					<p style="display:none;" id="label-qua-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-hand-point-up"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Suggestion</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-qua-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$data .= '					<p style="display:none;" id="label-qua-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				// $data .= '		<div class="col-12">';
				// $data .= '			<div class="d-flex align-items-center mb-2">';
				// $data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $data .= '			</div>';
				// $data .= 			$img_data;
				// $data .= '		</div>';
				$data .= '	</div>';
				$data .= '</div>';
			} else if ($issue->CHR_TYPE == 'ppic') {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$data .= '<div class="card-body class-ppic" id="ppic-comment-' . $issue->INT_ID . '">';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-truck"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Delivery Compliance</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-ppic-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$data .= '					<p style="display:none;" id="label-ppic-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-truck-ramp-box"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Quantity Special Truck</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-ppic-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$data .= '					<p style="display:none;" id="label-ppic-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-book-bookmark"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Report Stock FG OEM</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-ppic-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$data .= '					<p style="display:none;" id="label-ppic-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				// $data .= '		<div class="col-12">';
				// $data .= '			<div class="d-flex align-items-center mb-2">';
				// $data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $data .= '			</div>';
				// $data .= 			$img_data;
				// $data .= '		</div>';
				$data .= '	</div>';
				$data .= '</div>';
			} else {
				$img_data = '';
				$issue_details = $this->Issue_detail_m->get(array('INT_ID_ISSUE' => $issue->INT_ID))->result();

				foreach ($issue_details as $issue_detail) {
					$img_data .= '			<div class="d-flex mb-1">';
					$img_data .= '				<div class="me-45"></div>';
					$img_data .= '				<div class="d-flex flex-start align-items-center">';
					$img_data .= '					<div class="border rounded me-3 image-hover" onclick="showImage(`' . $issue_detail->CHR_NAME . '`)">';
					$img_data .= '						<img class="rounded" src="' . ROOT . $issue_detail->CHR_IMAGE . '" width="100" ></img>';
					$img_data .= '					</div>';
					$img_data .= '					<div>';
					$img_data .= '						<h6 class="fw-bold fs-6 mb-0">' . $issue_detail->CHR_NAME . '</h6>';
					$img_data .= '						<p class="text-muted small mb-2">' . $issue_detail->CHR_CAPTION . '</p>';
					$img_data .= '						<p class="text-muted small mb-0"> Added ' . $issue_detail->DAT_CREATED_AT . ' - <a href="#" onclick="removeImage(' . $issue_detail->INT_ID . ')" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Remove</a></p>';
					$img_data .= '					</div>';
					$img_data .= '				</div>';
					$img_data .= '			</div>';
				}

				$data .= '<div class="card-body class-mte" id="mte-comment-' . $issue->INT_ID . '">';
				$data .= '	<div class="row">';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-triangle-exclamation"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Root Cause</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-mte-root-cause-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_ISSUE . '</p>';
				$data .= '					<p style="display:none;" id="label-mte-root-cause-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_ISSUE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-wrench"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Temporary Action</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-mte-temp-action-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_TEMP_ACTION . '</p>';
				$data .= '					<p style="display:none;" id="label-mte-temp-action-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_TEMP_ACTION_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-screwdriver-wrench"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Current Preventive Maintenance</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-mte-curr-preventive-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_CURR_PREVENTIVE . '</p>';
				$data .= '					<p style="display:none;" id="label-mte-curr-preventive-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_CURR_PREVENTIVE_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gears"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Yokoten</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-mte-yokoten-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_YOKOTEN . '</p>';
				$data .= '					<p style="display:none;" id="label-mte-yokoten-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_YOKOTEN_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				$data .= '		<div class="col-12">';
				$data .= '			<div class="d-flex align-items-center mb-0">';
				$data .= '				<div class="d-flex me-3"><i class="fa-solid fa-gear"></i></div>';
				$data .= '				<div><span class="fw-bold fs-6">Permanent Activity</span></div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p class="text-muted fs-7 fst-italic mb-1"> Posted by ' . $issue->CHR_LAST_CREATED_BY . ' at ' . $issue->DAT_ISSUE_AT . ' ' . substr($issue->TIM_ISSUE_AT, 0, 8) . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '			<div class="d-flex mb-4">';
				$data .= '				<div class="me-45"></div>';
				$data .= '				<div>';
				$data .= '					<p id="label-mte-perm-activity-' . $issue->INT_ID . '" class="card-text text-muted fs-6">' . $issue->CHR_PERMANENT_ACTIVITY . '</p>';
				$data .= '					<p style="display:none;" id="label-mte-perm-activity-format-' . $issue->INT_ID . '" class="card-text fs-6">' . $issue->CHR_PERMANENT_ACTIVITY_FORMAT . '</p>';
				$data .= '				</div>';
				$data .= '			</div>';
				$data .= '		</div>';
				// $data .= '		<div class="col-12">';
				// $data .= '			<div class="d-flex align-items-center mb-2">';
				// $data .= '				<div class="d-flex me-3"><i class="fa-solid fa-paperclip"></i></div>';
				// $data .= '				<div><span class="fw-bold fs-6">Illustration</span></div>';
				// $data .= '			</div>';
				// $data .= 			$img_data;
				// $data .= '		</div>';
				$data .= '	</div>';
				$data .= '</div>';
			}
		}

		echo json_encode($data);
	}

	public function getActivities($date, $work_center)
	{

		$data_all_time = $this->Production_result_m->get_activity_all_time($work_center, $date)->result();
		$data_availability = $this->Production_result_m->get_activity_availability($work_center, $date)->result();
		$data_performance = $this->Production_result_m->get_activity_performance($work_center, $date)->result();
		$data_quality = $this->Production_result_m->get_activity_quality($work_center, $date)->result();
		$line_stops = $this->Production_result_m->get_line_stop_by_wc_and_date($work_center, $date)->result();

		$list_ud = "";
		$list_pd = "";
		$list_bd = "";
		$total_bd = "";
		$data_pd = "";
		$data_bd = "";

		if ($line_stops) {
			$list_ud .= "<table style='font-size:13px;' class='table table-striped table-hover table-condensed display' cellspacing='0' width='50%'>";
			$list_ud .= "<thead>";
			$list_ud .= "<tr>";
			$list_ud .= "<th style='text-align:left;padding-left:12%;'>Others Loss</th>";
			$list_ud .= "<th style='text-align:center;'>Duration (m)</th>";
			$list_ud .= "</tr>";
			$list_ud .= "</thead>";
			$list_ud .= "<tbody>";

			$i = 1;
			$k = 1;
			$tot_ls = 0;
			$tot_bd = 0;
			foreach ($line_stops as $isi) {
				if ($isi->TOTAL_LINE_STOP > 0) {
					if (trim($isi->CHR_LINE_CODE) != 'LS14' && trim($isi->CHR_LINE_CODE) != 'LS4' && trim($isi->CHR_LINE_CODE) != 'LS5' && trim($isi->CHR_LINE_CODE) != 'LS24' && trim($isi->CHR_LINE_CODE) != 'LS23') {
						$list_ud .= "<tr class='gradeX'>";
						$list_ud .= "<td style='text-align:left;padding-left:12%;'>$isi->CHR_LINE_STOP</td>";
						$list_ud .= "<td style='text-align:center;'>$isi->TOTAL_LINE_STOP</td>";
						$list_ud .= "</tr>";
						$i++;
						$tot_ls = $tot_ls + $isi->TOTAL_LINE_STOP;
					} else if (trim($isi->CHR_LINE_CODE) == 'LS14') {
						$data_pd .= "<tr class='gradeX'>";
						$data_pd .= "<td style='text-align:left;padding-left:12%;background:#DDDDDD;'>$isi->CHR_LINE_STOP</td>";
						$data_pd .= "<td style='text-align:center;background:#DDDDDD;'>$isi->TOTAL_LINE_STOP</td>";
						$data_pd .= "</tr>";
					} else {
						$data_bd .= "<tr class='gradeX'>";
						$data_bd .= "<td style='text-align:left;padding-left:12%;'>$isi->CHR_LINE_STOP</td>";
						$data_bd .= "<td style='text-align:center;'>$isi->TOTAL_LINE_STOP</td>";
						$data_bd .= "</tr>";
						$k++;
						$tot_bd = $tot_bd + $isi->TOTAL_LINE_STOP;
					}
				}
			}

			if ($tot_ls > 0) {
				$list_ud .= "<tr>";
				$list_ud .= "<td style='text-align:left;padding-left:12%;background:#DDDDDD;'><strong>Total Others</strong></td>";
				$list_ud .= "<td style='text-align:center;background:#DDDDDD;'><strong>$tot_ls</strong></td>";
				$list_ud .= "</tr>";
			}

			if ($tot_bd > 0) {
				$total_bd .= "<tr>";
				$total_bd .= "<td style='text-align:left;padding-left:12%;background:#DDDDDD;'><strong>Total Failure</strong></td>";
				$total_bd .= "<td style='text-align:center;background:#DDDDDD;'><strong>$tot_bd</strong></td>";
				$total_bd .= "</tr>";
			}

			$list_ud .= "</tbody>";
			$list_ud .= "</table>";

			if ($data_pd != '') {
				$list_pd .= "<table style='font-size:13px;' class='table table-striped table-hover table-condensed display' cellspacing='0' width='50%'>";
				$list_pd .= "<thead>";
				$list_pd .= "<tr>";
				$list_pd .= "<th style='text-align:left;padding-left:12%;'>Bridging</th>";
				$list_pd .= "<th style='text-align:center;'>Duration (m)</th>";
				$list_pd .= "</tr>";
				$list_pd .= "</thead>";
				$list_pd .= "<tbody>";
				$list_pd .= $data_pd;
				$list_pd .= "</tbody>";
				$list_pd .= "</table>";
			}

			if ($data_bd != '') {
				$list_bd .= "<table style='font-size:13px;' class='table table-striped table-hover table-condensed display' cellspacing='0' width='50%'>";
				$list_bd .= "<thead>";
				$list_bd .= "<tr>";
				$list_bd .= "<th style='text-align:left;padding-left:12%;'>Failure Loss</th>";
				$list_bd .= "<th style='text-align:center;'>Duration (m)</th>";
				$list_bd .= "</tr>";
				$list_bd .= "</thead>";
				$list_bd .= "<tbody>";
				$list_bd .= $data_bd;
				$list_bd .= $total_bd;
				$list_bd .= "</tbody>";
				$list_bd .= "</table>";
			}
		}

		$data = array(
			'all_time' => $data_all_time,
			'availability' => $data_availability,
			'performance' => $data_performance,
			'quality' => $data_quality,
			'list_ud' => $list_ud,
			'list_pd' => $list_pd,
			'list_bd' => $list_bd,
		);

		echo json_encode($data);
	}

	public function uploadIssueImage()
	{
		$user = $this->getSession();

		if ($user) {
			$issue_id = $this->input->post('INT_ID_ISSUE');
			$url = $this->input->post('CHR_PATH');
			$filename = $this->input->post('CHR_FILE_NAME');
			$caption = $this->input->post('CHR_CAPTION');

			$path = IMGROOT . 'asakai/' . $filename;
			$image = file_get_contents($url);
			file_put_contents($path, $image);

			$exist = $this->Issue_detail_m->get(array('CHR_FILE_NAME' => $filename, 'INT_ID_ISSUE' => $issue_id))->num_rows();
			if ($exist > 0) {
				$data_upload = array(
					'CHR_CAPTION' => $caption,
				);
				$this->Issue_detail_m->update($data_upload, array('CHR_FILE_NAME' => $filename, 'INT_ID_ISSUE' => $issue_id));
			} else {
				$data_upload = array(
					'INT_ID_ISSUE' => $issue_id,
					'CHR_FILE_NAME' => $filename,
					'CHR_CAPTION' => $caption,
					'CHR_PATH' => IMGROOT . 'asakai/' . $filename,
					'CHR_CREATED_BY' => $user->CHR_USERNAME,
					'DAT_CREATED_AT' => $this->datetime
				);
				$this->Issue_detail_m->save($data_upload);
			}
		}
	}

	public function removeImage($id)
	{
		$result = $this->Issue_detail_m->delete(array('INT_ID' => $id));
		echo json_encode($result);
	}
}
