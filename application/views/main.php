<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>Dashboard Asakai</title>
	<link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url('assets/images/logo-round.png') ?>">

	<link href="<?php echo base_url('assets/bootstrap/css/bootstrap.min.css') ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/css/fontawesome.css') ?>" rel="stylesheet">
  	<link href="<?php echo base_url('assets/css/solid.css') ?>" rel="stylesheet">

	<link href="<?php echo base_url('assets/js/jquery.filer/css/jquery.filer.css') ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/js/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css') ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/css/style.css') ?>" rel="stylesheet">

	<script src="<?php echo base_url('assets/js/jquery/jquery.min.js') ?>"></script>
	<script src="<?php echo base_url('assets/bootstrap/js/bootstrap.bundle.min.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/jquery.filer/js/jquery.filer.min.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/jquery.filer/js/jquery.filer.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/filer-upload-custom.js') ?>"></script>

	<script src="<?php echo base_url('assets/js/markerjs2/markerjs2.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/highchart/highcharts.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/highchart/highcharts-more.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/highchart/solid-gauge.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/custom-showmarker2.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/times.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/chart-custom.js') ?>"></script>
	<script src="<?php echo base_url('assets/js/chart-efficiencies-custom.js') ?>"></script>
</head>

<body>
	<div class="container-fluid py-3 my-3" style="background:#1f1f1f">

		<?php $this->load->view('navbar'); ?>

		<input type="hidden" id="value-chart-cc" value="<?php echo (int)$value_charts->CluthCover; ?>">
		<input type="hidden" id="value-chart-cd" value="<?php echo (int)$value_charts->CluthDisk; ?>">
		<input type="hidden" id="value-chart-im" value="<?php echo (int)$value_charts->IntakeManifold; ?>">
		<input type="hidden" id="value-chart-chc" value="<?php echo (int)$value_charts->CHC; ?>">
		<input type="hidden" id="value-chart-dl" value="<?php echo (int)$value_charts->DoorLock; ?>">
		<input type="hidden" id="value-chart-df" value="<?php echo (int)$value_charts->DoorFrame; ?>">
		<input type="hidden" id="value-chart-stp" value="<?php echo (int)$value_charts->Stamping; ?>">
		<input type="hidden" id="value-chart-inj" value="<?php echo (int)$value_charts->Injection; ?>">
		<input type="hidden" id="value-chart-hvd" value="<?php echo (int)$value_charts->HybridPart; ?>">
		<input type="hidden" id="value-chart-bp" value="<?php echo (int)$value_charts->BodyPart; ?>">

		<div class="m-4">

			<div class="row">
				<div class="col">
					<div class="card bg-dark text-white py-2 my-3">
						<div class="card-header text-center">
							<h5 class="card-title">DRIVE TRAIN</h5>
						</div>

						<div class="card-body row" style="height:150px;">
							<div class="col-sm-6 col-md-6 col-lg-12 col-xl-12">
								<h6 class="text-center text-muted">Efficiency (%)</h6>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Cluth Cover">
								<div class="text-center text-muted fs-7">Cluth Cover</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="chartcc" class="chart-container-3">
									</div>
								</figure>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Cluth Disk">
								<div class="text-center text-muted fs-7">Cluth Disk</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="chartcd" class="chart-container-3">
									</div>
								</figure>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Hybrid Part">
								<div class="text-center text-muted fs-7">Hybrid Part</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="charthvd" class="chart-container-3">
									</div>
								</figure>
							</div>
						</div>

						<div class="card-body text-center">
							<h6 class="text-muted">Production Result (pcs)</h6>
							<div class="row row-cols-1 row-cols-md-3 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->CluthCover)); ?></span>
									<div class="text-muted fs-7">Cluth Cover</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->CluthDisk)); ?></span>
									<div class="text-muted fs-7">Cluth Disk</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->HybridPart)); ?></span>
									<div class="text-muted fs-7">Hybrid Part</div>
								</div>
							</div>
							<hr>
							<h6 class="text-muted">Line Stop (HH:mm)</h6>
							<div class="row row-cols-1 row-cols-md-3 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->CluthCover; ?></span>
									<div class="text-muted fs-7">Cluth Cover</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->CluthDisk; ?></span>
									<div class="text-muted fs-7">Cluth Disk</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->HybridPart; ?></span>
									<div class="text-muted fs-7">Hybrid Part</div>
								</div>
							</div>
						</div>

						<div class="card-footer" data-bs-toggle="modal" data-bs-target="#status-modal" data-title="DRIVE TRAIN">
							<div class="row g-2">

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-danger fs-5" style="width:100%">Safety</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->SAFETY_CP; ?> fs-5" style="width:100%"><?php echo $status->SAFETY_CP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-warning fs-5 text-dark" style="width:100%">Cust Claim</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->CLAIM_CP; ?> fs-5" style="width:100%"><?php echo $status->CLAIM_CP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-primary fs-5" style="width:100%">RiL</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->RIL_CP; ?> fs-5" style="width:100%"><?php echo $status->RIL_CP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-success fs-5" style="width:100%">Delivery</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->DELIVERY_CP; ?> fs-5" style="width:100%"><?php echo $status->DELIVERY_CP; ?></span>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card bg-dark text-white py-2 my-3">
						<div class="card-header text-center">
							<h5 class="card-title">BODY PART</h5>
						</div>

						<div class="card-body row" style="height:150px;">
							<div class="col-sm-6 col-md-6  col-lg-12 col-xl-12">
								<h6 class="text-center text-muted">Efficiency (%)</h6>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Door Lock">
								<div class="text-center text-muted fs-7">Door Lock</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="chartdl" class="chart-container-3">
									</div>
								</figure>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Door Frame">
								<div class="text-center text-muted fs-7">Door Frame</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="chartdf" class="chart-container-3">
									</div>
								</figure>
							</div>
							<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Body Part">
								<div class="text-center text-muted fs-7">Body Part</div>
								<figure class="highcharts-figure-3" style="margin-left:-15px;">
									<div id="chartbp" class="chart-container-3">
									</div>
								</figure>
							</div>
						</div>

						<div class="card-body text-center">
							<h6 class="text-muted">Production Result (pcs)</h6>
							<div class="row row-cols-1 row-cols-md-3 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->DoorLock)); ?></span>
									<div class="text-muted fs-7">Door Lock</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->DoorFrame)); ?></span>
									<div class="text-muted fs-7">Door Frame</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->BodyPart)); ?></span>
									<div class="text-muted fs-7">Body Part</div>
								</div>
							</div>
							<hr>
							<h6 class="text-muted">Line Stop (HH:mm)</h6>
							<div class="row row-cols-1 row-cols-md-3 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->DoorLock; ?></span>
									<div class="text-muted fs-7">Door Lock</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->DoorFrame; ?></span>
									<div class="text-muted fs-7">Door Frame</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->BodyPart; ?></span>
									<div class="text-muted fs-7">Body Part</div>
								</div>
							</div>
						</div>

						<div class="card-footer" data-bs-toggle="modal" data-bs-target="#status-modal" data-title="BODY PART">
							<div class="row g-2">

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-danger fs-5" style="width:100%">Safety</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->SAFETY_BP; ?> fs-5" style="width:100%"><?php echo $status->SAFETY_BP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-warning fs-5 text-dark" style="width:100%">Cust Claim</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->CLAIM_BP; ?> fs-5" style="width:100%"><?php echo $status->CLAIM_BP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-primary fs-5" style="width:100%">RiL</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->RIL_BP; ?> fs-5" style="width:100%"><?php echo $status->RIL_BP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-success fs-5" style="width:100%">Delivery</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->DELIVERY_BP; ?> fs-5" style="width:100%"><?php echo $status->DELIVERY_BP; ?></span>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card bg-dark text-white py-2 my-3">
						<div class="card-header text-center">
							<h5 class="card-title">ENGINE PART</h5>
						</div>

						<div class="card-body row" style="height:150px;" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="ENGINE PART">
							<div class="col-sm-6 col-md-6 col-lg-12 col-xl-12">
								<h6 class="text-center text-muted">Efficiency (%)</h6>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Intake Manifold">
								<div class="text-center text-muted fs-7">Intake Manifold</div>
								<figure class="highcharts-figure-3">
									<div id="chartim" class="chart-container-3"  style="margin-left:20px">
									</div>
								</figure>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="CHC">
								<div class="text-center text-muted fs-7">CHC</div>
								<figure class="highcharts-figure-3">
									<div id="chartchc" class="chart-container-3">
									</div>
								</figure>
							</div>
						</div>

						<div class="card-body text-center">
							<h6 class="text-muted">Production Result (pcs)</h6>
							<div class="row row-cols-1 row-cols-md-2 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->IntakeManifold)); ?></span>
									<div class="text-muted fs-7">Intake Manifold</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->CHC)); ?></span>
									<div class="text-muted fs-7">CHC</div>
								</div>
							</div>
							<hr>
							<h6 class="text-muted">Line Stop (HH:mm)</h6>
							<div class="row row-cols-1 row-cols-md-2 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->IntakeManifold; ?></span>
									<div class="text-muted fs-7">Intake Manifold</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->CHC; ?></span>
									<div class="text-muted fs-7">CHC</div>
								</div>
							</div>
						</div>

						<div class="card-footer" data-bs-toggle="modal" data-bs-target="#status-modal" data-title="ENGINE PART">
							<div class="row g-2">

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-danger fs-5" style="width:100%">Safety</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->SAFETY_EP; ?> fs-5" style="width:100%"><?php echo $status->SAFETY_EP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-warning fs-5 text-dark" style="width:100%">Cust Claim</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->CLAIM_EP; ?> fs-5" style="width:100%"><?php echo $status->CLAIM_EP ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-primary fs-5" style="width:100%">RiL</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->RIL_EP; ?> fs-5" style="width:100%"><?php echo $status->RIL_EP; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-success fs-5" style="width:100%">Delivery</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->DELIVERY_EP; ?> fs-5" style="width:100%"><?php echo $status->DELIVERY_EP; ?></span>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card bg-dark text-white py-2 my-3">
						<div class="card-header text-center">
							<h5 class="card-title">MANUFACTURE</h5>
						</div>

						<div class="card-body row" style="height:150px;">
							<div class="col-sm-6 col-md-6 col-lg-12 col-xl-12">
								<h6 class="text-center text-muted">Efficiency (%)</h6>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Stamping">
								<div class="text-center text-muted fs-7">Stamping</div>
								<figure class="highcharts-figure-3">
									<div id="chartstp" class="chart-container-3" style="margin-left:20px">
									</div>
								</figure>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#comment-modal" data-title="Injection">
								<div class="text-center text-muted fs-7">Injection</div>
								<figure class="highcharts-figure-3">
									<div id="chartinj" class="chart-container-3">
									</div>
								</figure>
							</div>
						</div>

						<div class="card-body text-center">
							<h6 class="text-muted">Production Result (pcs)</h6>
							<div class="row row-cols-1 row-cols-md-2 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->Stamping)); ?></span>
									<div class="text-muted fs-7">Stamping</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo str_replace(',', '.', number_format($prod_results->Injection)); ?></span>
									<div class="text-muted fs-7">Injection</div>
								</div>
							</div>
							<hr>
							<h6 class="text-muted">Line Stop (HH:mm)</h6>
							<div class="row row-cols-1 row-cols-md-2 pt-2 pb-3">
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->Stamping; ?></span>
									<div class="text-muted fs-7">Stamping</div>
								</div>
								<div class="pb-0">
									<span class="card-title fw-bold fs-56"><?php echo $line_stops->Injection; ?></span>
									<div class="text-muted fs-7">Injection</div>
								</div>
							</div>
						</div>

						<div class="card-footer" data-bs-toggle="modal" data-bs-target="#status-modal" data-title="MANUFACTURE">
							<div class="row g-2">

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-danger fs-5" style="width:100%">Safety</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->SAFETY_SI; ?> fs-5" style="width:100%"><?php echo $status->SAFETY_SI ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-warning fs-5 text-dark" style="width:100%">Cust Claim</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->CLAIM_SI; ?> fs-5" style="width:100%"><?php echo $status->CLAIM_SI; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-primary fs-5" style="width:100%">RiL</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->RIL_SI; ?> fs-5" style="width:100%"><?php echo $status->RIL_SI; ?></span>
								</div>

								<div class="col-md-9 col-lg-9 col-xl-9">
									<span class="badge bg-success fs-5" style="width:100%">Delivery</span>
								</div>
								<div class="col-md-3 col-lg-3 col-xl-3">
									<span class="badge bg-<?php echo $status_color->DELIVERY_SI; ?> fs-5" style="width:100%"><?php echo $status->DELIVERY_SI; ?></span>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="m-4">
			<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<div class="card">
					<div class="card-header py-2 border-0">
						<h5>Main Issues</h5>
					</div>

					<div class="card-body" id="main-issue-null" style="<?php echo count($issues) == 0 ? 'display:block' : 'display:none' ?>;">
						<p class="mt-3 mb-0 pb-0 text-muted">No Issue Founded</p>
					</div>
					<div class="overflow-auto" id="main-issue" style="<?php echo count($issues) == 0 ? 'display:none' : 'display:block' ?>;max-height:500px;">

						<?php foreach ($issues as $issue) { ?>
							<div class="card-body class-main" id="main-issue-<?php echo $issue->INT_ID ?>">
								<div class="d-flex flex-start align-items-center">
									<img class="rounded-circle shadow-1-strong me-3" src="<?php echo base_url('assets/images/user.jpg') ?>" alt="avatar" width="60" height="60" />
									<div>
										<h6 class="fw-bold text-primary mb-1"><?php echo $issue->CHR_CREATED_BY; ?></h6>
										<p class="text-muted small fst-italic mb-0">
											Post at - <?php echo $issue->DAT_ISSUE_AT; ?>
										</p>
									</div>
								</div>
								<p id="main-label-issue-<?php echo $issue->INT_ID ?>" class="mt-3 mb-0 pb-0"><?php echo $issue->CHR_ISSUE; ?></p>
								<p style="display:none;" id="main-label-issue-format-<?php echo $issue->INT_ID ?>" class="mt-3 mb-0 pb-0"><?php echo $issue->CHR_ISSUE_FORMAT; ?></p>
							</div>
						<?php } ?>

					</div>

					<div class="card-footer py-3 border-0">
						<div class="d-flex flex-start w-100">
							<img class="rounded-circle shadow-1-strong me-3" src="<?php echo base_url('assets/images/user.jpg') ?>" alt="avatar" width="40" height="40" />
							<div class="form-outline w-100" id='comment-issue'>
								<input type="hidden" id="input-main-id" class="form-control fs-6">
								<textarea class="form-control" id='input-main-desc' rows="3" style="background: #fff;" placeholder="Write issue here..."></textarea>
							</div>
						</div>
						<div class="p-0 pb-0 mb-0" id='spinner-issue' style="display:none">
							<div class="text-center">
								<div class="text-center spinner-border" role="status"></div>
							</div>
						</div>
						<div class="float-end mt-2 pt-1">
							<button type="button" onclick="submitIssue('main issue')" class="btn btn-primary btn-sm">Post Issue</button>
							<button type="button" onclick="resetIssue()" class="btn btn-outline-primary btn-sm">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="comment-modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id='label-shop-name'></h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body" style="background-color: #E9ECEF;">

						<div class="row pb-2 mb-3">
							<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">

								<div class="card border-0">
									<div class="card-header border-0">
										<figure class="highcharts-figure">
											<div id="chartEffLine"></div>
										</figure>
									</div>

									<div class="card-body" id="prd-comment-null">
										<p class="card-text fs-6 text-muted">No Concern Issue Founded</p>
									</div>
									<div class="overflow-auto" id="prd-comment" style="max-height:500px;">
									</div>

									<div class="card-footer py-3 border-0" style="<?php echo $user->INT_ID_DEPT == '21'  || $user->INT_ID_DEPT == '23' || $user->INT_ID_DEPT == '16' ? 'display:block;' : 'display:none;' ?>">

										<div id="form-prd" style="background-color: #f8f9fa;">

											<form action="">
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="hidden" id="input-prd-id" class="form-control fs-6">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="text" id="input-prd-title" class="form-control fs-6" placeholder="Title...">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-prd-desc" class="form-control fs-6" rows="3" placeholder="Desription..." style="background: #fff;"></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-prd-temporary-action" class="form-control fs-6" rows="3" placeholder="Temporary Action..." style="background: #fff;"></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight me-2">
														<textarea id="input-prd-curr-preventive" class="form-control fs-6" rows="2" placeholder="Ownership Maintenance..." style="background: #fff;"></textarea>
													</div>
													<div class="mb-2 bd-highlight">
														<span class="fs-6 me-2">Planning recovery at : </span>
													</div>
													<div class="mb-2 bd-highlight">
														<input type="date" id="input-prd-date" class="form-control fs-6" value="<?php echo date('Y-m-d'); ?>">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="file" capture="user" name="files_prd[]" accept="image/*" id="input-file-prd" multiple="multiple">
													</div>
												</div>
											</form>

											<div class="p-4 pb-0 mb-3" id='spinner-prd-comment' style="display:none">
												<div class="text-center">
													<div class="text-center spinner-border" role="status"></div>
												</div>
											</div>

											<div class="float-end mt-2 pt-1">
												<button type="button" onclick="submitConcern('prd')" class="btn btn-primary btn-sm fs-6">Submit</button>
												<button type="button" onclick="resetConcern()" class="btn btn-outline-primary btn-sm">Cancel</button>
											</div>

										</div>
									</div>

								</div>

							</div>
						</div>

						<div class="row row-cols-2 row-cols-md-2 g-4">

							<div class="col">
								<div class="card border-0">
									<div class="card-header text-light" style="background:#FE643D">
										<h6 class="card-title ">Engineering</h6>
									</div>

									<div class="card-body" id="eng-comment-null">
										<p class="card-text fs-6 text-muted">No Comment Founded</p>
									</div>

									<div class="overflow-auto" id="eng-comment" style="max-height:500px;">
									</div>

									<div class="card-footer py-3 border-0" style="<?php echo $user->INT_ID_DEPT == '6' || $user->INT_ID_DEPT == '16' ?  'display:block;' : 'display:none;' ?>">
										<div id="form-eng" style="background-color: #f8f9fa;">

											<form action="">
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="hidden" id="input-eng-id" class="form-control fs-6">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-eng-root-cause" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Root Cause..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-eng-temporary-action" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Temporary Action..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-eng-curr-preventive" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Current Preventive Maintenance..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-eng-yokoten" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Yokoten..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-eng-permanent-activity" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Permanent Activity..."></textarea>
													</div>
												</div>
												<!-- <div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="file" capture="user" name="files_eng[]" accept="image/*" id="input-file-eng" multiple="multiple">
													</div>
												</div> -->
											</form>

											<div class="p-4 pb-0 mb-3" id='spinner-eng-comment' style="display:none">
												<div class="text-center">
													<div class="text-center spinner-border" role="status"></div>
												</div>
											</div>
											<div class="float-end mt-2 pt-1">
												<button type="button" onclick="submitComment('eng')" class="btn btn-primary btn-sm fs-6">Submit</button>
											</div>

										</div>
									</div>

								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-light text-dark">
										<h6 class="card-title">Maintenance</h6>
									</div>

									<div class="card-body" id="mte-comment-null">
										<p class="card-text fs-6 text-muted">No Comment Founded</p>
									</div>
									<div class="overflow-auto" id="mte-comment" style="max-height:500px;">
									</div>

									<div class="card-footer py-3 border-0" style="<?php echo $user->INT_ID_DEPT == '19' || $user->INT_ID_DEPT == '16' ? 'display:block;' : 'display:none;' ?>">
										<div id="form-mte" style="background-color: #f8f9fa;">

											<form action="">
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="hidden" id="input-mte-id" class="form-control fs-6">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-mte-root-cause" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Root Cause..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-mte-temporary-action" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Temporary Action..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-mte-curr-preventive" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Current Preventive Maintenance..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-mte-yokoten" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Yokoten..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-mte-permanent-activity" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Permanent Activity..."></textarea>
													</div>
												</div>
												<!-- <div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="file" capture="user" name="files_mte[]" accept="image/*" id="input-file-mte" multiple="multiple">
													</div>
												</div> -->
											</form>

											<div class="p-4 pb-0 mb-3" id='spinner-mte-comment' style="display:none">
												<div class="text-center">
													<div class="text-center spinner-border" role="status"></div>
												</div>
											</div>
											<div class="float-end mt-2 pt-1">
												<button type="button" onclick="submitComment('mte')" class="btn btn-primary btn-sm fs-6">Submit</button>
											</div>

										</div>
									</div>
								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-warning">
										<h6 class="card-title">Quality</h6>
									</div>

									<div class="card-body" id="qua-comment-null">
										<p class="card-text fs-6 text-muted">No Comment Founded</p>
									</div>
									<div class="overflow-auto" id="qua-comment" style="max-height:500px;">

									</div>

									<div class="card-footer py-3 border-0" style="<?php echo $user->INT_ID_DEPT == '26' || $user->INT_ID_DEPT == '16' ? 'display:block;' : 'display:none;' ?>">
										<div id="form-qua" style="background-color: #f8f9fa;">

											<form action="">
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="hidden" id="input-qua-id" class="form-control fs-6">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-qua-root-cause" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Product Verification..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-qua-curr-preventive" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Suggestion..."></textarea>
													</div>
												</div>
												<!-- <div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="file" capture="user" name="files_qua[]" accept="image/*" id="input-file-qua" multiple="multiple">
													</div>
												</div> -->
											</form>

											<div class="p-4 pb-0 mb-3" id='spinner-qua-comment' style="display:none">
												<div class="text-center">
													<div class="text-center spinner-border" role="status"></div>
												</div>
											</div>
											<div class="float-end mt-2 pt-1">
												<button type="button" onclick="submitComment('qua')" class="btn btn-primary btn-sm fs-6">Submit</button>
											</div>

										</div>
									</div>

								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-success text-light">
										<h6 class="card-title ">PPIC</h6>
									</div>

									<div class="card-body" id="ppic-comment-null">
										<p class="card-text fs-6 text-muted">No Comment Founded</p>
									</div>
									<div class="overflow-auto" id="ppic-comment" style="max-height:500px;">

									</div>

									<div class="card-footer py-3 border-0" style="<?php echo $user->INT_ID_DEPT == '20' || $user->INT_ID_DEPT == '16' ? 'display:block;' : 'display:none;' ?>">
										<div id="form-ppic" style="background-color: #f8f9fa;">

											<form action="">
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="hidden" id="input-ppic-id" class="form-control fs-6">
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-ppic-root-cause" class="form-control fs-6" rows="2" style="background: #fff;" placeholder="Delivery Complience..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-ppic-temporary-action" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Quantity Special Truck..."></textarea>
													</div>
												</div>
												<div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<textarea id="input-ppic-curr-preventive" class="form-control fs-6" rows="3" style="background: #fff;" placeholder="Report Stock FG OEM..."></textarea>
													</div>
												</div>
												<!-- <div class="d-flex bd-highlight">
													<div class="mb-2 flex-grow-1 bd-highlight">
														<input type="file" capture="user" name="files_ppic[]" accept="image/*" id="input-file-ppic" multiple="multiple">
													</div>
												</div> -->
											</form>

											<div class="p-4 pb-0 mb-3" id='spinner-ppic-comment' style="display:none">
												<div class="text-center">
													<div class="text-center spinner-border" role="status"></div>
												</div>
											</div>
											<div class="float-end mt-2 pt-1">
												<button type="button" onclick="submitComment('ppic')" class="btn btn-primary btn-sm fs-6">Submit</button>
											</div>

										</div>
									</div>

								</div>
							</div>

						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<div id="status-modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body" style="background-color: #E9ECEF;">

						<div class="row row-cols-1 row-cols-md-4 g-4">
							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-primary text-light">
										<h6 class="card-title ">Safety</h6>
									</div>
									<div class="overflow-auto" style="max-height:250px">
										<div class="card-body">
											<div class="d-flex flex-start align-items-center">
												<div>
													<h6 class="fw-bold mb-1">User 1</h6>
													<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
												</div>
											</div>
											<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
											</p>
										</div>
										<div class="card-body">
											<div class="d-flex flex-start align-items-center">
												<div>
													<h6 class="fw-bold mb-1">User 2</h6>
													<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
												</div>
											</div>
											<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
											</p>
										</div>
									</div>
									<div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
										<div class="d-flex flex-start w-100">
											<div class="form-outline w-100">
												<textarea class="form-control" rows="3" style="background: #fff;"></textarea>
											</div>
										</div>
										<div class="float-end mt-2 pt-1">
											<button type="button" class="btn btn-primary btn-sm">Submit</button>
										</div>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card border-0">
									<div class="card-header text-light" style="background:#FE643D">
										<h6 class="card-title ">Cust Claim</h6>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 1</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 2</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
										<div class="d-flex flex-start w-100">
											<div class="form-outline w-100">
												<textarea class="form-control" rows="3" style="background: #fff;"></textarea>
											</div>
										</div>
										<div class="float-end mt-2 pt-1">
											<button type="button" class="btn btn-primary btn-sm">Submit</button>
										</div>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-warning">
										<h6 class="card-title ">Reject in Line</h6>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 1</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 2</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
										<div class="d-flex flex-start w-100">
											<div class="form-outline w-100">
												<textarea class="form-control" rows="3" style="background: #fff;"></textarea>
											</div>
										</div>
										<div class="float-end mt-2 pt-1">
											<button type="button" class="btn btn-primary btn-sm">Submit</button>
										</div>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card border-0">
									<div class="card-header bg-success text-light">
										<h6 class="card-title ">Delivery</h6>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 1</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-body">
										<div class="d-flex flex-start align-items-center">
											<div>
												<h6 class="fw-bold mb-1">User 2</h6>
												<p class="text-muted fs-7 fst-italic mb-2"> Comment - Jan 2020 </p>
											</div>
										</div>
										<p class="card-text small">Some dummy text to make up the card's content. You can replace it anytime.
										</p>
									</div>
									<div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
										<div class="d-flex flex-start w-100">
											<div class="form-outline w-100">
												<textarea class="form-control" rows="3" style="background: #fff;"></textarea>
											</div>
										</div>
										<div class="float-end mt-2 pt-1">
											<button type="button" class="btn btn-primary btn-sm">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<div id="modal-image" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body" style='text-align:center;'>
						<img id="large-image">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<div id="modal-chart" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">
							<h6 id='title-detail-chart'></h6>
						</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body" style="background-color: #E9ECEF;">

						<div class="row pb-2 mb-3">
							<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">

								<div class="card border-0">

									<div class="card-body row" style="height:120px;">
										<div class="col-3">
											<div class="text-center text-muted fs-7">OEE (%)</div>
											<figure class="highcharts-figure-3">
												<div id="chartOee" class="chart-container-3">
												</div>
											</figure>
										</div>
										<div class="col-3">
											<div class="text-center text-muted fs-7">Availability (%)</div>
											<figure class="highcharts-figure-3">
												<div id="chartAva" class="chart-container-3">
												</div>
											</figure>
										</div>
										<div class="col-3">
											<div class="text-center text-muted fs-7">Performance (%)</div>
											<figure class="highcharts-figure-3">
												<div id="chartPerf" class="chart-container-3">
												</div>
											</figure>
										</div>
										<div class="col-3">
											<div class="text-center text-muted fs-7">Quality (%)</div>
											<figure class="highcharts-figure-3">
												<div id="chartQua" class="chart-container-3">
												</div>
											</figure>
										</div>
									</div>

								</div>

							</div>
						</div>

						<div class="row row-cols-4 row-cols-md-1 g-4">

							<div class="col">
								<div class="card border-0">
									<!-- <div class="card-header bg-success text-light">
										<h6 class="card-title">Production Time</h6>
									</div> -->

									<div class="card-body">
										<figure class="highcharts-figure">
											<div id="chartActivity"></div>
										</figure>

										<!-- <div class='card-body' id='list_pd'></div> -->

									</div>
								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<!-- <div class="card-header">
									</div> -->
									<div class="card-body">
										<figure class="highcharts-figure">
											<div id="chartAvailability"></div>
										</figure>
									</div>
									<!-- <div class='card-body' id='list_bd'></div>
									<div class='card-body' id='list_ud'></div> -->
								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<!-- <div class="card-header">
										
									</div> -->

									<div class="card-body">
										<figure class="highcharts-figure">
											<div id="chartPerformance"></div>
										</figure>

										<div class='form-group'>
											<div class='alert alert-info fs-7 fst-italic'>*Produksi aktual hanya inputan dari In Line Scan</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col">
								<div class="card border-0">
									<!-- <div class="card-header bg-warning text-light">
										<h6 class="card-title ">Quality</h6>
									</div> -->

									<div class="card-body">
										<figure class="highcharts-figure">
											<div id="chartQuality"></div>
										</figure>

										<div class='form-group'>
											<div class='alert alert-warning fs-7 fst-italic'>*Reject hanya inputan dari In Line Scan</div>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

	</div>

	<script>
		$(document).click(function(event) {

			$('div.class-main').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');
				var desc = $("#" + "main-label-issue-format-" + div_key_id[2]).text().replace('<br>', "\n");

				$("#input-main-id").val(div_key_id[2]);
				$("#input-main-desc").val(desc);
			});

			$('div.class-prd').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');

				$("#input-prd-id").val(div_key_id[2]);
				$("#input-prd-title").val($("#prd-comment-label-title-" + div_key_id[2]).text());
				$("#input-prd-desc").val($("#prd-comment-label-issue-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-prd-temporary-action").val($("#prd-comment-label-temp-action-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-prd-curr-preventive").val($("#prd-comment-label-curr-preventive-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-prd-date").val($("#prd-comment-label-recovery-date-" + div_key_id[2]).text());
				$("#form-prd").show();

			});

			$('div.class-eng').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');

				$("#input-eng-id").val(div_key_id[2]);
				$("#input-eng-root-cause").val($("#label-eng-root-cause-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-eng-curr-preventive").val($("#label-eng-curr-preventive-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-eng-temporary-action").val($("#label-eng-temp-action-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-eng-yokoten").val($("#label-eng-yokoten-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-eng-permanent-activity").val($("#label-eng-perm-activity-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#form-eng").show();
			});

			$('div.class-qua').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');

				$("#input-qua-id").val(div_key_id[2]);
				$("#input-qua-root-cause").val($("#label-qua-root-cause-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-qua-curr-preventive").val($("#label-qua-curr-preventive-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#form-qua").show();
			});

			$('div.class-ppic').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');

				$("#input-ppic-id").val(div_key_id[2]);
				$("#input-ppic-root-cause").val($("#label-ppic-root-cause-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-ppic-curr-preventive").val($("#label-ppic-curr-preventive-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-ppic-temporary-action").val($("#label-ppic-temp-action-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#form-ppic").show();
			});

			$('div.class-mte').on('dblclick', function() {
				var div_key = $(this).attr('id');
				var div_key_id = div_key.split('-');

				$("#input-mte-id").val(div_key_id[2]);
				$("#input-mte-root-cause").val($("#label-mte-root-cause-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-mte-curr-preventive").val($("#label-mte-curr-preventive-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-mte-temporary-action").val($("#label-mte-temp-action-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-mte-yokoten").val($("#label-mte-yokoten-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#input-mte-permanent-activity").val($("#label-mte-perm-activity-format-" + div_key_id[2]).text().replace('<br>', "\n"));
				$("#form-mte").show();
			});

		});

		$("#comment-modal").on("show.bs.modal", function(event) {

			var divTriggered = $(event.relatedTarget);
			var titleData = divTriggered.data("title");

			$(this).find(".modal-title").text(titleData);

			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/get') ?>",
				data: {
					CHR_SHOP_NAME: titleData,
					DAT_ISSUE_AT: $("#dateDashboard").val(),
				},
				beforeSend: function() {
					$("#input-prd-id").val('');
					$("#input-prd-title").val('');
					$("#input-prd-desc").val('');
					$("#input-prd-temporary-action").val('');
					$("#input-prd-curr-preventive").val('');
					$("#input-prd-date").val("<?php echo date('Y-m-d') ?>");

					$("#prd-comment-null").show();
					$("#prd-comment").hide();
					$("#form-prd").show();

					$("#input-eng-id").val('');
					$("#input-eng-root-cause").val('');
					$("#input-eng-temporary-action").val('');
					$("#input-eng-curr-preventive").val('');
					$("#input-eng-yokoten").val('');
					$("#input-eng-permanent-activity").val('')

					$("#eng-comment-null").show();
					$("#eng-comment").hide();
					$("#form-eng").show();

					$("#input-qua-id").val('');
					$("#input-qua-root-cause").val('');
					$("#input-qua-curr-preventive").val('');

					$("#qua-comment-null").show();
					$("#qua-comment").hide();
					$("#form-qua").show();

					$("#input-ppic-id").val('');
					$("#input-ppic-root-cause").val('');
					$("#input-ppic-temporary-action").val('');
					$("#input-ppic-curr-preventive").val('');

					$("#ppic-comment-null").show();
					$("#ppic-comment").hide();
					$("#form-ppic").show();

					$("#input-mte-id").val('');
					$("#input-mte-root-cause").val('');
					$("#input-mte-temporary-action").val('');
					$("#input-mte-curr-preventive").val('');
					$("#input-mte-yokoten").val('');
					$("#input-mte-permanent-activity").val('')

					$("#mte-comment-null").show();
					$("#mte-comment").hide();
					$("#form-mte").show();
				},
				success: function(result) {

					if (!result) {
						window.location = "<?php echo ROOT . '/AIS_PP' ?>";
					}

					if (result) {
						if (result.prd_data) {
							$("#prd-comment-null").hide();
							$("#form-prd").hide();
							$("#prd-comment").show().html(result.prd_data);
						}

						if (result.eng_data) {
							$("#eng-comment-null").hide();
							$("#form-eng").hide();
							$("#eng-comment").show().html(result.eng_data);
						}

						if (result.qua_data) {
							$("#qua-comment-null").hide();
							$("#form-qua").hide();
							$("#qua-comment").show().html(result.qua_data);
						}

						if (result.ppic_data) {
							$("#ppic-comment-null").hide();
							$("#form-ppic").hide();
							$("#ppic-comment").show().html(result.ppic_data);
						}

						if (result.mte_data) {
							$("#mte-comment-null").hide();
							$("#form-mte").hide();
							$("#mte-comment").show().html(result.mte_data);
						}
					}

					var dataSeries = []
					result.efficiencies.forEach(element => {
						var fte = {
							name: element.CHR_WORK_CENTER,
							y: element.TOTAL
						};
						dataSeries.push(fte);
					});

					var chartEff = $('#chartEffLine').highcharts();
					chartEff.series[0].update({
						colorByPoint: true,
						data: dataSeries
					}, true);

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});

		});

		$("#status-modal").on("show.bs.modal", function(event) {

			var divTriggered = $(event.relatedTarget);
			var titleData = divTriggered.data("title");

			$(this).find(".modal-title").text(titleData);
		});

		function showImage(name) {
			$("#modal-image").modal('show');
			$("#large-image").attr('src', '<?php echo ROOT . '/image/asakai/'; ?>' + name);
		}

		function removeImage(id) {
			$.ajax({
				type: 'DELETE',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/removeImage') ?>" + '/' + id,
				success: function(result) {
					getConcern('prd');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});
		}

		function changeDate(e) {
			$("#dateDashboard").val(e.value);
			location.href = '<?php echo base_url(); ?>' + 'index.php/Main_c/index/' + e.value
		}

		function resetIssue() {
			$("#input-main-id").val('');
			$('#input-main-desc').val('');
		}

		function submitIssue(comment_type) {
			saveIssue($('#input-main-desc').val(), $("#input-main-id").val(), comment_type);
		}

		function saveIssue(issue, id, comment_type) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/save') ?>",
				data: {
					INT_ID: id,
					DAT_ISSUE_AT: $("#dateDashboard").val(),
					CHR_ISSUE: issue.replace(/\n/g, '<br>'),
					CHR_TYPE: comment_type,
				},
				beforeSend: function() {
					$("#spinner-issue").show();
					$("#comment-issue").hide();
					$("#btnIssue").prop('disabled', true);
				},
				success: function(result) {

					if (!result) {
						window.location = "<?php echo ROOT . '/AIS_PP' ?>";
					}

					$.ajax({
						type: 'POST',
						dataType: 'json',
						url: "<?php echo base_url('index.php/Main_c/getMain') ?>",
						data: {
							DAT_ISSUE_AT: $("#dateDashboard").val(),
							CHR_TYPE: comment_type,
						},
						success: function(result) {

							$("#input-main-desc").val("");
							$("#spinner-issue").hide();
							$("#comment-issue").show();
							$("#btnIssue").prop('disabled', false);

							$('#main-issue-null').hide();
							$('#main-issue').show().html(result);
						},
						error: function(jqXHR, textStatus, errorThrown) {
							console.log(jqXHR.responseText);
						}
					});
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});
		}

		function resetConcern() {
			$("#input-prd-id").val('');
			$("#input-prd-title").val('');
			$("#input-prd-desc").val('');
			$("#input-prd-temporary-action").val('');
			$("#input-prd-curr-preventive").val('');
			$("#input-prd-date").val("<?php echo date('Y-m-d') ?>");
			$("#form-prd").hide();
		}

		function submitConcern(comment_type) {

			$.ajax({
				type: "POST",
				dataType: "json",
				url: "<?php echo base_url('index.php/Main_c/save') ?>",
				data: {
					DAT_ISSUE_AT: $("#dateDashboard").val(),
					CHR_SHOP_NAME: $("#label-shop-name").text(),
					CHR_TYPE: comment_type,
					INT_ID: $("#input-prd-id").val(),
					CHR_TITLE: $("#input-prd-title").val(),
					CHR_TEMP_ACTION: $("#input-prd-temporary-action").val().replace(/\n/g, '<br>'),
					CHR_CURR_PREVENTIVE: $("#input-prd-curr-preventive").val().replace(/\n/g, '<br>'),
					CHR_ISSUE: $("#input-prd-desc").val().replace(/\n/g, '<br>'),
					CHR_PLANNED_AT: $("#input-prd-date").val(),
				},
				beforeSend: function() {
					$("#spinner-prd-comment").show();
					$("#comment-prd").hide();
				},
				success: function(result) {

					if (!result) {
						window.location = "<?php echo ROOT . '/AIS_PP' ?>";
					}

					const url_image = [];
					const file_name = [];
					const caption_image = [];

					$('#show-image .url_image').each(function(i, obj) {
						url_image.push(obj.src);
					});

					$('#show-image .file_name').each(function(i, obj) {
						file_name.push(obj.value);
					});

					$('#show-image .caption').each(function(i, obj) {
						caption_image.push(obj.value);
					});

					if (url_image.length > 0) {
						for (let i = 1; i <= url_image.length; i++) {
							$.ajax({
								type: "POST",
								url: "<?php echo base_url('index.php/Main_c/uploadIssueImage') ?>",
								data: {
									INT_ID_ISSUE: result.issue_id,
									CHR_PATH: url_image[i - 1],
									CHR_FILE_NAME: file_name[i - 1],
									CHR_CAPTION: caption_image[i - 1]
								},
								success: function(result) {
									getConcern(comment_type);
								},
								error: function(jqXHR, textStatus, errorThrown) {
									alert(jqXHR.responseText);
								}
							});
						}
					} else {
						getConcern(comment_type);
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				},
			});
		}

		function getConcern(comment_type) {

			$.ajax({
				type: "POST",
				dataType: "json",
				url: "<?php echo base_url('index.php/Main_c/getByType') ?>",
				data: {
					DAT_ISSUE_AT: $("#dateDashboard").val(),
					CHR_SHOP_NAME: $("#label-shop-name").text(),
					CHR_TYPE: comment_type,
				},
				beforeSend: function() {
					$("#input-prd-title").val("");
					$("#input-prd-desc").val("");
					$("#input-prd-temporary-action").val("");
					$("#input-prd-curr-preventive").val("");
					$("#input-prd-date").val("<?php echo date('Y-m-d') ?>");

					$("#spinner-prd-comment").show();
					$("#form-prd").hide();
				},
				success: function(result) {
					$("#spinner-prd-comment").hide();
					$("#form-prd").hide();
					$("#prd-comment-null").hide();

					$("#prd-comment").show().html(result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				},
			});
		}

		function submitComment(comment_type) {
			switch (comment_type) {
				case 'eng':
					saveComment(
						comment_type,
						$("#input-eng-id").val(),
						$("#input-eng-root-cause").val().replace(/\n/g, '<br>'),
						$("#input-eng-temporary-action").val().replace(/\n/g, '<br>'),
						$("#input-eng-curr-preventive").val().replace(/\n/g, '<br>'),
						$("#input-eng-yokoten").val().replace(/\n/g, '<br>'),
						$("#input-eng-permanent-activity").val().replace(/\n/g, '<br>'),
					);
					break;
				case 'qua':
					saveComment(
						comment_type,
						$("#input-qua-id").val(),
						$("#input-qua-root-cause").val().replace(/\n/g, '<br>'),
						$("#input-qua-curr-preventive").val().replace(/\n/g, '<br>'),
						null,
						null,
						null
					);
					break;
				case 'ppic':
					saveComment(
						comment_type,
						$("#input-ppic-id").val(),
						$("#input-ppic-root-cause").val().replace(/\n/g, '<br>'),
						$("#input-ppic-temporary-action").val().replace(/\n/g, '<br>'),
						$("#input-ppic-curr-preventive").val().replace(/\n/g, '<br>'),
						null,
						null
					);
					break;
				case 'mte':
					saveComment(
						comment_type,
						$("#input-mte-id").val(),
						$("#input-mte-root-cause").val().replace(/\n/g, '<br>'),
						$("#input-mte-temporary-action").val().replace(/\n/g, '<br>'),
						$("#input-mte-curr-preventive").val().replace(/\n/g, '<br>'),
						$("#input-mte-yokoten").val().replace(/\n/g, '<br>'),
						$("#input-mte-permanent-activity").val().replace(/\n/g, '<br>'),
					);
					break;
				default:
					break;
			}
		}

		function saveComment(comment_type, id, issue, temp_action, curr_preventive, yokoten, activity) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/save') ?>",
				data: {
					INT_ID: id,
					CHR_TYPE: comment_type,
					CHR_ISSUE: issue.replace(/\n/g, '<br>'),
					DAT_ISSUE_AT: $("#dateDashboard").val(),
					CHR_SHOP_NAME: $("#label-shop-name").text(),
					CHR_TEMP_ACTION: temp_action,
					CHR_CURR_PREVENTIVE: curr_preventive,
					CHR_YOKOTEN: yokoten,
					CHR_PERMANENT_ACTIVITY: activity,
				},
				beforeSend: function() {
					switch (comment_type) {
						case 'eng':
							$("#spinner-eng-comment").show();
							$("#form-eng").hide();
							break;
						case 'qua':
							$("#spinner-update-comment-qua").show();
							$("#comment-qua").hide();
							break;
						case 'ppic':
							$("#spinner-update-comment-ppic").show();
							$("#comment-ppic").hide();
							break;
						case 'mte':
							$("#spinner-mte-comment").show();
							$("#form-mte").hide();
							break;
						default:
							break;
					}
				},
				success: function(result) {

					if (!result) {
						window.location = "<?php echo ROOT . '/AIS_PP' ?>";
					} else {
						// const url_image = [];
						// const file_name = [];
						// const caption_image = [];

						// $("#show-image-"+comment_type+" .url_image").each(function(i, obj) {
						// 	url_image.push(obj.src);
						// });

						// $("#show-image-"+comment_type+" .file_name").each(function(i, obj) {
						// 	file_name.push(obj.src);
						// });

						// $("#show-image-"+comment_type+" .caption").each(function(i, obj) {
						// 	caption_image.push(obj.src);
						// });

						// if (url_image.length > 0) {
						// 	for (let i = 1; i <= url_image.length; i++) {
						// 		$.ajax({
						// 			type: "POST",
						// 			url: "<?php echo base_url('index.php/Main_c/uploadIssueImage') ?>",
						// 			data: {
						// 				INT_ID_ISSUE: result.issue_id,
						// 				CHR_PATH: url_image[i - 1],
						// 				CHR_FILE_NAME: file_name[i - 1],
						// 				CHR_CAPTION: caption_image[i - 1]
						// 			},
						// 			success: function(result) {
						// 				getComment(comment_type);
						// 			},
						// 			error: function(jqXHR, textStatus, errorThrown) {
						// 				alert(jqXHR.responseText);
						// 			}
						// 		});
						// 	}
						// } else {
							getComment(comment_type);
						// }
					}

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});
		}

		function getComment(comment_type) {

			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/getByType') ?>",
				data: {
					DAT_ISSUE_AT: $("#dateDashboard").val(),
					CHR_SHOP_NAME: $("#label-shop-name").text(),
					CHR_TYPE: comment_type,
				},
				beforeSend: function() {},
				success: function(result) {

					switch (comment_type) {
						case 'eng':
							$('#eng-comment-null').hide();
							$('#eng-comment').show().html(result);

							$("#input-eng-id").val('');
							$("#input-eng-root-cause").val('');
							$("#input-eng-temporary-action").val('');
							$("#input-eng-curr-preventive").val('');
							$("#input-eng-yokoten").val('');
							$("#input-eng-permanent-activity").val('')

							$("#spinner-eng-comment").hide();
							$("#form-eng").hide();
							break;
						case 'qua':
							$('#qua-comment-null').hide();
							$('#qua-comment').show().html(result);

							$("#input-qua-id").val('');
							$("#input-qua-root-cause").val('');
							$("#input-qua-curr-preventive").val('');

							$("#spinner-qua-comment").hide();
							$("#form-qua").hide();

							break;
						case 'ppic':
							$('#ppic-comment-null').hide();
							$('#ppic-comment').show().html(result);

							$("#input-ppic-id").val('');
							$("#input-ppic-root-cause").val('');
							$("#input-ppic-temporary-action").val('');
							$("#input-ppic-curr-preventive").val('');

							$("#spinner-ppic-comment").hide();
							$("#form-ppic").hide();
							break;
						case 'mte':
							$('#mte-comment-null').hide();
							$('#mte-comment').show().html(result);

							$("#input-mte-id").val('');
							$("#input-mte-root-cause").val('');
							$("#input-mte-temporary-action").val('');
							$("#input-mte-curr-preventive").val('');
							$("#input-mte-yokoten").val('');
							$("#input-mte-permanent-activity").val('')

							$("#spinner-mte-comment").hide();
							$("#form-mte").hide();
							break;
						default:
							break;
					}

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});
		}

		function showActivity(e) {

			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: "<?php echo base_url('index.php/Main_c/getActivities') ?>" + '/' + $("#dateDashboard").val() + '/' + e.name,
				before: function() {
					// $("#list_pd").hide();
					// $("#list_ud").hide();
					// $("#list_bd").hide();
				},
				success: function(result) {
					$("#modal-chart").modal('show');
					$("#title-detail-chart").text("Detail Information " + e.name + " - " + $("#dateDashboard").val());

					// if (result.list_pd) {
					// 	$("#list_pd").show().html(result.list_pd);
					// }

					// if (result.list_ud) {
					// 	$("#list_ud").show().html(result.list_ud);
					// }

					// if (result.list_bd) {
					// 	$("#list_bd").show().html(result.list_bd);
					// }

					var dataSeriesActivity = []
					result.all_time.forEach(element => {
						var series = {
							name: element.DESCRIPTION,
							color: element.COLOR,
							data: [element.DURATION],
							stack: element.STACK,
						};
						dataSeriesActivity.push(series);
					});

					var dataSeriesAvailability = []
					result.availability.forEach(element => {
						var series = {
							name: element.DESCRIPTION,
							color: element.COLOR,
							data: [element.DURATION],
							stack: element.STACK,
						};
						dataSeriesAvailability.push(series);
					});

					var dataSeriesPerformance = []
					result.performance.forEach(element => {
						var series = {
							name: element.DESCRIPTION,
							color: element.COLOR,
							data: [element.DURATION],
							stack: element.STACK,
						};
						dataSeriesPerformance.push(series);
					});

					var dataSeriesQuality = []
					result.quality.forEach(element => {
						var series = {
							name: element.DESCRIPTION,
							color: element.COLOR,
							data: [element.DURATION],
							stack: element.STACK,
						};
						dataSeriesQuality.push(series);
					});

					var chartActivity = $('#chartActivity').highcharts();
					chartActivity.update({
						series: dataSeriesActivity
					}, true);

					var chartAvailability = $('#chartAvailability').highcharts();
					chartAvailability.update({
						series: dataSeriesAvailability
					}, true);

					var chartPerformance = $('#chartPerformance').highcharts();
					chartPerformance.update({
						series: dataSeriesPerformance
					}, true);

					var chartQuality = $('#chartQuality').highcharts();
					chartQuality.update({
						series: dataSeriesQuality
					}, true);

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
				}
			});

			// 	$.ajax({
			// 		type: "POST",
			// 		dataType: 'json',
			// 		url: "<?php //echo site_url('pes_new/production_activity_c/get_data_by_work_center_and_date'); 
								?>",
			// 		data: "CHR_WORK_CENTER=" + e.name + "&CHR_DATE=" + '<?php //echo $date 
																			?>',
			// 		success: function(data) {

			// 			$("#list_comment").html(data.list_comment);
			// 			$("#list_ng").html(data.list_ng);

			// 			gauge_ava.refresh(data.INT_AVAILABILITY);
			// 			gauge_pro.refresh(data.INT_PRODUCTIVITY);
			// 			gauge_qua.refresh(data.INT_QUALITY);
			// 			gauge_oee.refresh(data.INT_OEE);

			// 			document.getElementById('work-center').innerHTML = e.name;
			// 			document.getElementById('work-center-value').value = e.name;
			// 		},
			// 		error: function(request) {
			// 			alert(request.responseText);
			// 		}
			// 	});
		}

		startTime();
	</script>

</body>

</html>