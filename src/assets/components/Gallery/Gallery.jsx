import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryData from "./galleryData";
import settings from "./settingsSlider";

import "./gallery.scss";

export default function Gallery() {

    return (
        <section className="gallery">
            <div className="titleTop">
                <h3>Galeria de Momentos Compartilhados</h3>
            </div>

            <Slider {...settings} className="custom-slider">
                {galleryData.map((gallery, index) => (
                    <div className="item" key={index}>
                        <div className="img">
                            <img src={gallery.image} alt="" />
                        </div>

                        <div className="content">
                            <div className="icons">
                                <div className="heartIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Icons / Heart" clip-path="url(#clip0_893_411)">
                                            <path id="Vector" d="M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898ZM18.827 6.16998C17.327 4.66798 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09101 4.60598 6.67601 4.66798 5.17201 6.17198C3.68201 7.66198 3.60701 10.047 4.98001 11.623L12 18.654L19.02 11.624C20.394 10.047 20.319 7.66498 18.827 6.16998Z" fill="#F9F9F9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_893_411">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{gallery.like}</span>
                                </div>

                                <div className="chatIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Icons / Chat" clip-path="url(#clip0_893_438)">
                                            <path id="Vector" d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#F9F9F9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_893_438">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{gallery.comment}</span>
                                </div>
                            </div>

                            <div className="title">
                                <h3>{gallery.title}</h3>
                            </div>

                            <div className="description">
                                <p>{gallery.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}