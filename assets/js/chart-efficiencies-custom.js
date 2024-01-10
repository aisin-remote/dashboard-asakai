$(document).ready(function () {
	const columnOptions = {
		chart: {
			height: 200,
			width: 750,
			marginTop: 60,
			spacingLeft: 20,
			spacingRight: 40,
			type: "column",
			backgroundColor: null,
			plotBackgroundColor: "none",
		},
		title: null,
		exporting: {
			enabled: false,
		},
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		tooltip: {
			enabled: false,
		},
		xAxis: {
			type: "category",
			crosshair: true,
		},
		yAxis: {
			max: 120,
			title: {
				text: "Eff (%)",
			},
			gridLineWidth: 1,
		},
		plotOptions: {
			series: {
				cursor: "pointer",
				point: {
					events: {
						click: function () {
							showActivity(this);
						},
					},
				},
				dataLabels: {
					enabled: true,
					format: "{point.y:.1f}",
				},
			},
		},
	};

	Highcharts.chart(
		"chartEffLine",
		Highcharts.merge(columnOptions, {
			series: [
				{
					colorByPoint: true,
					data: [],
				},
			],
		})
	);

	const stackedOptions = {
		chart: {
			height: 200,
			width: 400,
			type: "bar",
			backgroundColor: null,
			plotBackgroundColor: "none",
		},
		title: null,
		exporting: {
			enabled: false,
		},
		legend: {
			enabled: true,
			itemStyle: {
				fontSize: "10px",
			},
		},
		credits: {
			enabled: false,
		},

		yAxis: {
			allowDecimals: true,
			min: 0,
			minorGridLineWidth: 1,
			gridLineWidth: 1,
			title: {
				text: "",
			},
		},
	};

	Highcharts.chart(
		"chartActivity",
		Highcharts.merge(stackedOptions, {
			plotOptions: {
				series: {
					stacking: "normal",
					dataLabels: {
						enabled: true,
						formatter: function () {
							return this.y + " Minutes";
						},
					},
				},
			},
			tooltip: {
				enabled: true,
				formatter: function () {
					return this.series.name + ": " + this.y + " Minutes<br/>";
				},
			},
			xAxis: {
				categories: ["Production Time"],
				labels: {
					rotation: 270,
				},
			},
			series: [
				{
					color: "#b4fab7",
					data: [0],
					name: "Bridging & Break + 3S",
					stack: "slave",
				},
				{
					color: "#6af770",
					data: [0],
					name: "Production Time",
					stack: "slave",
				},
			],
		})
	);

	Highcharts.chart(
		"chartAvailability",
		Highcharts.merge(stackedOptions, {
			plotOptions: {
				series: {
					stacking: "normal",
					dataLabels: {
						enabled: true,
						formatter: function () {
							return this.y + " Minutes";
						},
					},
				},
			},
			tooltip: {
				enabled: true,
				formatter: function () {
					return this.series.name + ": " + this.y + " Minutes<br/>";
				},
			},
			xAxis: {
				categories: ["Availability"],
				labels: {
					rotation: 270,
				},
			},
			series: [
				{
					color: "#ff9e9e",
					data: [0],
					name: "Line Stop",
					stack: "slave",
				},
				{
					color: "#f73434",
					data: [0],
					name: "Production RunTime",
					stack: "slave",
				},
				{
					color: "#d60909",
					data: [0],
					name: "Production Time",
					stack: "master",
				},
			],
		})
	);

	Highcharts.chart(
		"chartPerformance",
		Highcharts.merge(stackedOptions, {
			plotOptions: {
				series: {
					stacking: "normal",
					dataLabels: {
						enabled: true,
						formatter: function () {
							return this.y + " Pcs";
						},
					},
				},
			},
			tooltip: {
				enabled: true,
				formatter: function () {
					return this.series.name + ": " + this.y + " Pcs<br/>";
				},
			},
			xAxis: {
				categories: ["Performance"],
				labels: {
					rotation: 270,
				},
			},
			series: [
				{
					color: "#b8e0ff",
					data: [0],
					name: "Speed Loss",
					stack: "slave",
				},
				{
					color: "#3ca1f0",
					data: [0],
					name: "Actual Prod",
					stack: "slave",
				},
				{
					color: "#025a9e",
					data: [0],
					name: "Target based CT",
					stack: "master",
				},
			],
		})
	);

	Highcharts.chart(
		"chartQuality",
		Highcharts.merge(stackedOptions, {
			plotOptions: {
				series: {
					stacking: "normal",
					dataLabels: {
						enabled: true,
						formatter: function () {
							return this.y + " Pcs";
						},
					},
				},
			},
			tooltip: {
				enabled: true,
				formatter: function () {
					return this.series.name + ": " + this.y + " Pcs<br/>";
				},
			},
			xAxis: {
				categories: ["Quality"],
				labels: {
					rotation: 270,
				},
			},
			series: [
				{
					color: "#fce397",
					data: [0],
					name: "Reject",
					stack: "slave",
				},
				{
					color: "#fcfc21",
					data: [0],
					name: "Net Actual Prod",
					stack: "slave",
				},
				{
					color: "#ffc414",
					data: [0],
					name: "Actual Prod",
					stack: "master",
				},
			],
		})
	);
});
