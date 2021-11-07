$('.catalog__carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    mobileFirst:true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: false,
          },
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                dots: false,
                arrows: true,
                prevArrow: $('#catalog__left-arrow'),
                nextArrow: $('#catalog__right-arrow')
            }
        }
      ]
});

$('.discount__list').slick({
    infinite: false,
    arrows: false,
    variableWidth: true
});

$('.news__list').slick({
    infinite: true,
    arrows: true,
    prevArrow: $('#left-arrow'),
    nextArrow: $('#right-arrow')
});

$('.instagram__photo-list').slick({
    infinite: true,
    arrows: true,
    nextArrow: null,
    slidesToShow: 2,
    prevArrow: $('#change-inst-photo-btn'),
    mobileFirst:true,
    responsive: [
        {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        },
    ]
});



