$('.catalog__carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    adaptiveHeigth: true,
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
        },
        {
            breakpoint: 1279,
            settings: "unslick",
        },
      ]
});

$('.discount__list').slick({
    infinite: false,
    arrows: false,
    variableWidth: true,
    mobileFirst:true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                arrows: true,
                infinite: true,
                prevArrow: $('#discount__left-arrow'),
                nextArrow: $('#discount__right-arrow')
            }
        }
      ]
});

$('.news__list').slick({
    infinite: true,
    arrows: true,
    prevArrow: $('#left-arrow'),
    nextArrow: $('#right-arrow'),
    mobileFirst: true,
    responsive:[
        {
            breakpoint: 1023,
            settings:"unslick"
        }
    ]
});

$('.instagram__photo-list').slick({
    infinite: true,
    arrows: true,
    nextArrow: null,
    slidesToShow: 2,
    rows: 1,
    adaptiveHeigth: true,
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
        {
            breakpoint: 1023,
            // settings: "unslick",
            settings: {
                rows: 2,
                slidesToShow: 3,
                prevArrow: null,
                nextArrow: $('#change-inst-photo-btn'),
            },
        }
    ]
});



