var imgg, imgWidth, imgHeight, maxWidth, maxHeight;

function load(imge) {
	imgg = imge;
	imgWidth = imgg.width;
	imgHeight = imgg.height;
	maxWidth = imgg.width;
	maxHeight = imgg.height;
}

$(document).on("click", ".zoomin", function () {
	imgWidth = imgWidth + 100;
	imgHeight = imgHeight + 100;
	imgg.width = imgWidth;
	imgg.height = imgHeight;
});

$(document).on("click", ".zoomout", function () {
	if (imgWidth != maxWidth && imgHeight != maxHeight) {
		imgWidth = imgWidth - 100;
		imgHeight = imgHeight - 100;
		imgg.width = imgWidth;
		imgg.height = imgHeight;
	}
});

$(document).on("click", ".zoominit", function () {
	imgWidth = maxWidth;
	imgHeight = maxHeight;
	imgg.width = imgWidth;
	imgg.height = imgHeight;
});

function showMarkerArea(target) {
	const markerArea = new markerjs2.MarkerArea(target);

	markerArea.availableMarkerTypes = markerArea.ALL_MARKER_TYPES;

	markerArea.uiStyleSettings.redoButtonVisible = true;
	markerArea.uiStyleSettings.zoomButtonVisible = true;
	markerArea.uiStyleSettings.zoomOutButtonVisible = true;
	markerArea.uiStyleSettings.clearButtonVisible = true;
	markerArea.renderAtNaturalSize = true;
	markerArea.renderImageType = "image/jpeg";
	markerArea.renderImageQuality = 0.5;
	markerArea.settings.displayMode = "popup";
	markerArea.addEventListener(
		"render",
		(event) => (target.src = event.dataUrl)
	);
	markerArea.show();
}
