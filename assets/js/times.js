function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	$("#clock").text(h + ":" + m + ":" + s);
	var t = setTimeout(startTime, 500);
}

function checkTime(v) {
	if (v < 10) {
		v = "0" + v;
	}
	return v;
}
