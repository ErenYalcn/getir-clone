import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'




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
    const windowWidth = useWindowWidth()

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
        prevArrow: <BackArw />,
        responsive:[

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
        
      }; 


    return (
        <div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0" >
            <h3 className="mt-6 mb-6 font-semibold text-sm text-opacity-70 hidden md:block">Kampanyalar</h3>

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
  