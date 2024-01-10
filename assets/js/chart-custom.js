$(document).ready(function () {
	const gaugeOptions = {
		chart: {
			type: "solidgauge",
			backgroundColor: null,
			plotBackgroundColor: "none",
		},
		title: null,
		pane: {
			center: ["50%", "50%"],
			size: "100%",
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || "#1f1f1f",
				innerRadius: "60%",
				outerRadius: "100%",
				shape: "arc",
			},
		},
		exporting: {
			enabled: false,
		},
		tooltip: {
			enabled: false,
		},
		yAxis: {
			stops: [
				[0.8, "#DF5353"], // red
				[0.85, "#EAD808"], // yellow
				[1.0, "#55BF3B"], // green
			],
			lineWidth: 0,
			tickWidth: 0,
			minorTickInterval: null,
			tickAmount: 2,
			labels: {
				enabled: false,
			},
		},

		plotOptions: {
			solidgauge: {
				dataLabels: {
					y: -10,
					borderWidth: 0,
					useHTML: true,
				},
			},
		},
	};

	const chartcc = Highcharts.chart(
		"chartcc",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-cc").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartcd = Highcharts.chart(
		"chartcd",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-cd").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartdl = Highcharts.chart(
		"chartdl",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-dl").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartdf = Highcharts.chart(
		"chartdf",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-df").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartim = Highcharts.chart(
		"chartim",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-im").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartchc = Highcharts.chart(
		"chartchc",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-chc").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartinj = Highcharts.chart(
		"chartinj",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-inj").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartstp = Highcharts.chart(
		"chartstp",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-stp").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const charthvd = Highcharts.chart(
		"charthvd",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-hvd").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartbp = Highcharts.chart(
		"chartbp",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [parseInt($("#value-chart-bp").val())],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartOee = Highcharts.chart(
		"chartOee",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [0],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartAva = Highcharts.chart(
		"chartAva",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [0],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartPerf = Highcharts.chart(
		"chartPerf",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [0],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	const chartQua = Highcharts.chart(
		"chartQua",
		Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					borderWidth: 2,
					borderColor: "#F1F3EB",
					name: "",
					data: [0],
					dataLabels: {
						format:
							'<div style="text-align:center"><span style="font-size:12px;color:#FFFFFF;">{y} %</span></div>',
					},
					tooltip: {
						valueSuffix: " %",
					},
				},
			],
		})
	);

	// setInterval(function () {
	// 	let point, newVal, random = 1;

	// 	if (chartcc) {
	// 		point = chartcc.series[0].points[0];
	// 		point.update(parseInt($("#value-chart-cc").val()));
	// 	}

	//     // if(chartcd){
	// 	// 	point = chartcd.series[0].points[0];
	//     //     console.log(point.y);
	// 	// 	newVal = point.y + random;
	// 	// 	point.update(100);
	// 	// }
	// }, 2000);
});
