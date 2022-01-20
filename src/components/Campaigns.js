import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json'

export default function Campaigns() {

    const {banners, setBanners} = useState([]);

    useEffect(() => {
        setBanners(banners);
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
        
      };


    return (
        <div className="container mx-auto">
            <Slider {...settings}>
            {banners.length && banners.map((banner, index) => (
                <div key={banner.id}>
                    <img src={banner.image} />
                </div>
            ))}
            </Slider>
        </div>
    )
  }
  