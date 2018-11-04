function resizeHeaderOnScroll() {
	const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	documentHeaders = document.getElementsByTagName('header');
	header = documentHeaders[0];
	breakpoint = header.offsetHeight * 0.5;

	if (scrollPosition > breakpoint) {
		header.classList.add("sm", "sticky-top");
	} else {
		header.classList.remove("sm", "sticky-top");
	}
}

window.addEventListener('scroll', resizeHeaderOnScroll);
document.addEventListener('DOMContentLoaded', resizeHeaderOnScroll);

// V1
/* $(document).ready(function() {
	var breakpoint = $("header").height() * 0.5;
	setStickyState();

	$(window).on("scroll", function() {
		setStickyState();
	});

	function setStickyState() {
		if (!$("header").hasClass("sm sticky-top")) {
			if ($(document).scrollTop() > breakpoint) {
				$("header").addClass("sm sticky-top");
			}
		}
		else {
			if ($(document).scrollTop() < breakpoint) {
				$("header").removeClass("sm sticky-top");
			}
		}
	}
}) */
