const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20%",
    responsive: [
        {
            breakpoint: 1312,
            settings: {
                centerPadding: "15%"
            },
        },
        {
            breakpoint: 1132,
            settings: {
                centerPadding: "10%"
            },
        },
        {
            breakpoint: 988,
            settings: {
                centerPadding: "0%"
            },
        },
    ]
};

export default settings;