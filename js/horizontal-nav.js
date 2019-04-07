$(document).ready(function () {
    var navbar = $("#navbar");
    var links = $(".nav-link");
    var linkPositions = [0];
    var linkWidths = [];
    var linkPosition = 0;
    var activePosition = 0;

    initializePositions();

    // reset sizings and positions based on window resizing
    $(window).resize(function () {
        initializePositions();
    });

    // initialize link sizings and positions
    function initializePositions() {
        setTimeout(function () {
            linkPosition = 0;
            linkPositions = [0];
            linkWidths = [];

            for (var i = 0; i < links.length; i++) {
                var linkWidth = $(links[i]).outerWidth()
                linkWidths.push(linkWidth);

                linkPosition += linkWidth;
                linkPositions.push(linkPosition);

                setTimeout(function () {
                    activePosition = returnIndex(links.filter(".active"));
                    moveNavbar();
                }, 500);
            }
        }, 500);
    }

    // scroll navbar to new position on scroll
    $(window).on('scroll', function () {
        setTimeout(function () {
            activePosition = returnIndex(links.filter(".active"));
            moveNavbar();
        }, 500);
    });

    // move navbar to active position
    function moveNavbar() {
        var currentPosition = linkPositions[activePosition];
        var currentWidth = linkWidths[activePosition];
        var windowWidth = $(window).width();
        linkCenteredPosition = currentPosition - (windowWidth * 0.5) + (currentWidth * 0.5);
        navbar.animate({ scrollLeft: linkCenteredPosition }, 200);
    }

    // return index of parent element
    function returnIndex(element) {
        return $(element).parent().index();
    }

    // scroll horizontally on navbar
    navbar.mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
});
