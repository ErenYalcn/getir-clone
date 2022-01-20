import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';


export default function MainSlider() {
    
    const [selected, setSelected] = useState('TR');

    <ReactFlagsSelect
      selected={selected}
      onSelect={code => setSelected(code)}
    />
    const phonenumber ={
        TR: '+90',
        DE: '+45',
        US: '+1',
        RU: '+20',
        FR: '+6'
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
        
      };


    return (
        <div className="relative  h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:absolute before:z-10 before:inset-0 before:w-full before:h-full">
        <Slider {...settings}>
            <div>
                <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
            </div>
            <div>
                <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
            </div>
            <div>
                <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
            </div>
     
     
        </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20"> 
               <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar içinde <br />kapınızda
                    </h3>
               </div>
               <div className="w-[400px] rounded-lg p-6 bg-gray-50">
                   <h4 className="text-primary-brand-color font-semibold text-center mb-2"> Giriş yap veya kayıt ol</h4>
                   <div className="flex gap-x-2">
                   <ReactFlagsSelect 
                    countries={Object.keys(phonenumber)}
                    customLabels={phonenumber}
                    selected={selected} 
                    onSelect={code => setSelected(code)}
                    className="flag-s"
                    />
                    <label className="flex-1 relative block">
                        <input required className="h-14 px-4 border-2 transition-colors text-sm pt-2 outline-none border-gray-200 rounded w-full hover:border-primary-brand-color focus:!border-primary-brand-color peer"></input>
                        <span className="absolute top-0 left-0 px-4 h-full flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:h-7">Telefon Numarası</span>
                        
                    </label>
                   </div>
                   <button className="bg-brand-yellow text-primary-brand-color transition-colors w-full h-12 mt-4 rounded-lg text-sm font-semibold hover:bg-primary-brand-color hover:text-brand-yellow">
                   Telefon numarası ile devam et
                   </button>
               </div>
            </div>
        </div>
    )
  }
  