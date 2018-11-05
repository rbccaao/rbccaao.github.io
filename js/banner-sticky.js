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
