import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'



function NextArw ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -right-10 -translate-x-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function BackArw ({ onClick, className }) {
	return (
		<button className={`$text-brand-color absolute top-1/2 -left-6 -translate-x-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

export default function Campaigns() {


	const [banners, setBanners] = useState([])

	useEffect(() => {
		setBanners(Banners)
	}, []) 

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <NextArw />,
        prevArrow: <BackArw />
        
      }; 


    return (
        <div className="container mx-auto px-0">
            <h3 className="mt-6 mb-6 font-semibold text-sm text-opacity-70">Kampanyalar</h3>

            <Slider className="-mx-2 relative"{...settings}>
            {banners.length && banners.map((banner, index) => (
                <div className="px-2" key={banner.id}>
                    <img className="rounded-lg w-full" src={banner.image} />
                </div>
            ))}
            </Slider>
        </div>
    )
  }
  