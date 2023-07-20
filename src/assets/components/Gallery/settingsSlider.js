const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "4%",
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                centerPadding: "10%",
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 959,
            settings: {
                centerPadding: "0%",
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            },
        },
    ]
};

export default settings;