$(document).ready(function () {
	var links = $(".nav-link");
	var linkPositions = [0];
	var linkWidths = [];
	var activePosition = 0;
	var linkPosition = 0;

	var active = $(".indicator-active");
	var hover = $(".indicator-hover");

	// initialize link positions and widths
	for (var i = 0; i < links.length; i++) {
		var linkWidth = $(links[i]).outerWidth()
		linkWidths.push(linkWidth);

		linkPosition += linkWidth;
		linkPositions.push(linkPosition);

		setTimeout(function () {
			activePosition = returnIndex(links.filter(".active"));
			moveIndicatorsToActive();
			setIndicatorDisplay();
		}, 500);
	}

	// move indicator to new positions on scroll
	// delay to allow for other transitions to complete first
	$(window).on('scroll', function () {
		setTimeout(function () {
			activePosition = returnIndex(links.filter(".active"));
			moveIndicatorsToActive();
			setIndicatorDisplay();
		}, 500);
	});

	// move indicators to new positions on click
	links.click(function () {
		activePosition = returnIndex(this);
		moveIndicatorsToActive();
	});

	// move hover indicator on hover and focus
	links.on("mouseenter focusin", function () {
		hover.css("display", "block");
		moveIndicator(hover, returnIndex(this));
	});
	links.on("mouseleave focusout", function () {
		setIndicatorDisplay();
		moveIndicator(hover, activePosition);
	});

	// move indicator to specific position
	function moveIndicator(indicator, position) {
		indicator.css("width", linkWidths[position]);
		indicator.css("left", linkPositions[position]);
	}

	// move indicators to active position
	function moveIndicatorsToActive() {
		moveIndicator(active, activePosition);
		moveIndicator(hover, activePosition);
	}

	// show indicators
	function showIndicators() {
		active.css("display", "block");
		hover.css("display", "block");
	}

	// hide indicator based on nav link active state
	function setIndicatorDisplay() {
		if (returnIndex(links.filter(".active")) < 0) {
			active.css("display", "none");
			hover.css("display", "none");
		} else {
			showIndicators()
		}
	}

	// return index of parent element
	function returnIndex(element) {
		return $(element).parent().index();
	}

});
