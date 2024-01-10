<div class="m-4">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="row">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <a href="#" class="navbar-brand">
                            <img src="<?php echo base_url('assets/images/aisin-logo.svg'); ?>" height="28" alt="CoolBrand">
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="input-group" >
                            <span class="input-group-text bg-dark text-light border-1">Dashboard of Production Performance</span>
                            <input id="dateDashboard" onchange="changeDate(this)" class="form-control" type="date" value="<?php echo $date_issue; ?>"/>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <div class="float-end">
                            <h5 class="text-light" id="clock">00:00:00</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</div>