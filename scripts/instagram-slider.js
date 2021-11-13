im

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
                slidesPerRow: 1,
                slidesToShow: 3,
                prevArrow: null,
                nextArrow: $('#change-inst-photo-btn'),
            },
        }
    ]
});