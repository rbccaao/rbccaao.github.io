function resizeHeaderOnScroll() {
	const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	documentHeaders = document.getElementsByTagName('header');
	header = document.getElementById("header-main");
	breakpoint = header.offsetHeight * 0.45;

	if (scrollPosition > breakpoint) {
		header.classList.add("sm", "sticky-top");
	} else {
		header.classList.remove("sm", "sticky-top");
		// window.scrollTo(0,0);
	}
}

window.addEventListener('scroll', resizeHeaderOnScroll);
document.addEventListener('DOMContentLoaded', resizeHeaderOnScroll);
