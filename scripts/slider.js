$(document).ready(function () {
    $('.catalog__carousel').slick({
        dots: true,
        Infinity: true,
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
    });
});

$(document).ready(function () {
    $('.discount__list').slick({
        infinite: false,
        arrows: false,
    });
});

$(document).ready(function () {
    $('.news__list').slick({
        infinite: true,
        arrows: true,
        prevArrow: $('#left-arrow'),
        nextArrow: $('#right-arrow')
    });
});

