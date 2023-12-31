import React from "react";
import Slider from "react-slick";
import testimonialsData from "./testimonialsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss"
import settings from "../Testimonials/settingsTestimonials";

export default function Testimonials() {


    return (
        <section className="testimonials">
            <h3>Relatos</h3>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div className="item" key={index}>
                        <div className="content">
                            <span>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icons / Quotes" clip-path="url(#clip0_893_379)">
                                    <path id="Vector" d="M5.72875 21.6513C4.44125 20.2838 3.75 18.7501 3.75 16.2638C3.75 11.8888 6.82125 7.96756 11.2875 6.02881L12.4038 7.75131C8.235 10.0063 7.42 12.9326 7.095 14.7776C7.76625 14.4301 8.645 14.3088 9.50625 14.3888C11.7613 14.5976 13.5388 16.4488 13.5388 18.7501C13.5388 19.9104 13.0778 21.0232 12.2573 21.8437C11.4369 22.6641 10.3241 23.1251 9.16375 23.1251C7.8225 23.1251 6.54 22.5126 5.72875 21.6513ZM18.2288 21.6513C16.9412 20.2838 16.25 18.7501 16.25 16.2638C16.25 11.8888 19.3213 7.96756 23.7875 6.02881L24.9038 7.75131C20.735 10.0063 19.92 12.9326 19.595 14.7776C20.2662 14.4301 21.145 14.3088 22.0062 14.3888C24.2612 14.5976 26.0387 16.4488 26.0387 18.7501C26.0387 19.9104 25.5778 21.0232 24.7573 21.8437C23.9369 22.6641 22.8241 23.1251 21.6637 23.1251C20.3225 23.1251 19.04 22.5126 18.2288 21.6513Z" fill="#F9F9F9"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_893_379">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        
                            <p>{testimonial.content}</p>

                            <h4>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icons / Quotes" clip-path="url(#clip0_893_382)">
                                    <path id="Vector" d="M24.0598 7.5025C25.3473 8.87 26.0386 10.4038 26.0386 12.89C26.0386 17.265 22.9673 21.1863 18.5011 23.125L17.3848 21.4025C21.5536 19.1475 22.3686 16.2213 22.6936 14.3763C22.0223 14.7238 21.1436 14.845 20.2823 14.765C18.0273 14.5563 16.2498 12.705 16.2498 10.4038C16.2498 9.24343 16.7108 8.13063 17.5312 7.31016C18.3517 6.48969 19.4645 6.02875 20.6248 6.02875C21.9661 6.02875 23.2486 6.64125 24.0598 7.5025ZM11.5598 7.5025C12.8473 8.87 13.5386 10.4038 13.5386 12.89C13.5386 17.265 10.4673 21.1863 6.00107 23.125L4.88482 21.4025C9.05357 19.1475 9.86857 16.2213 10.1936 14.3763C9.52232 14.7238 8.64357 14.845 7.78233 14.765C5.52732 14.5563 3.74982 12.705 3.74982 10.4038C3.74982 9.24343 4.21076 8.13063 5.03123 7.31016C5.8517 6.48969 6.9645 6.02875 8.12482 6.02875C9.46607 6.02875 10.7486 6.64125 11.5598 7.5025Z" fill="#F9F9F9" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_893_382">
                                    <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                            </h4>
                        </div>

                        <div className="profile">
                            <img src={testimonial.profile.image} alt="" />
                            <h3>{testimonial.profile.name}</h3>
                            <span>{testimonial.profile.location}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}