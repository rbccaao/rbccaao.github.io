$('.carousel').on('slide.bs.carousel', function (e) {
    var carousel = "#" + $(e.target).attr('id');
    var indicators = carousel.replace("carousel", "indicators");
    var target = $(indicators + " li")[e.to];
    $(target).addClass('active').siblings().removeClass('active');
})
