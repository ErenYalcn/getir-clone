import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';
import {Collapse} from 'react-collapse';
import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size'



export default function Footer() {
    const windowWidth = useWindowWidth()

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        if (windowWidth < 768){
            setIsOpen(!isOpen);
        }
    }

    useEffect(() => {
       if (isOpen && windowWidth < 768) {
           setIsOpen(false)
       }
       if (!isOpen && windowWidth > 768) {
        setIsOpen(true)
    }
    })

    return (
        <div className=" bg-white py-4">
            
            <div className="container grid gap-y-5 p-8 mx-auto">
                <div className="flex md:mx-auto">
                <div className="grid md:grid-cols-4 gap-x-6 2xl:grid-cols-5">
                    <nav>    
                        <h3 className="text-brand-color mb-4 text-xl mt-2">Getir'i İndirin!</h3>
                        <ul className="grid grid-cols-1 gap-y-3">
                            <li>
                                <a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" /></a>
                            </li>
                        </ul>
                    </nav>
                
                    <nav>
                    <h3 onClick={toggleCollapse} className="text-brand-color mb-4 text-xl mt-2">Getir'i Keşfedin!</h3>
                <Collapse isOpened={isOpen}>
                    <ul className="grid sm:grid-cols-1 gap-y-3 leading-3">
                        <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">Hakkımızda</a>
                        </li>
                         <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">Kariyer</a>
                        </li>
                        <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">Teknoloji Kariyerleri</a>
                        </li>
                        <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">İletişim</a>
                        </li>
                                                                                                                                                                                                                                                                                                                                                                                                <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">COVID-19 Duyuru</a>
                        </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li>
                            <a className="text-sm tracking-wide	text-gray-600" href="">Sosyal Sorumluluk Projeleri</a>
                        </li>
                    </ul>
                </Collapse>
                    </nav>
              
                    <nav>
                        <h3 onClick={toggleCollapse} className="text-brand-color mb-4 text-xl mt-2">Yardıma mı ihtiyacınız var?</h3>
                        <Collapse isOpened={isOpen}>
                            <ul className="grid sm:grid-cols-1 gap-y-3 leading-3">
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Sıkça Sorulan Sorular</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Kişisel Verilerin Korunması</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Gizlilik Politikası</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Kullanım Koşulları</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Çerez Politikası</a>
                                </li>   
                            </ul>
                        </Collapse>
                    </nav>
                    <nav>
                        <h3 onClick={toggleCollapse} className="text-brand-color mb-4 text-xl mt-2">İş Ortağımız Olun</h3>
                        <Collapse isOpened={isOpen}>
                            <ul className="grid sm:grid-cols-1 gap-y-3 leading-3">
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Bayimiz Olun</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">Deponuzu Kiralayın</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">GetirYemek Restoranı Olun</a>
                                </li>
                                <li>
                                    <a className="text-sm tracking-wide	text-gray-600" href="">GetirÇarşı İşletmesi Olun</a>
                                </li>   
                            </ul>
                        </Collapse>
                    </nav>
                    <nav>
                        <div className="w-[112px] h-[124px] border-[1px] border-gray-100 flex items-center rounded-lg bg-white shadow-md hidden 2xl:block">
                        <figure className="w-[112px] h-[124px] flex items-center text-center p-1">
                        <img className="p-3" src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" />
                        </figure>
                        </div>
                    </nav>
                    </div>
                </div>
                <div className="h-[1px] bg-gray-100"></div>
				<div className="flex justify-between flex-col items-center px-12 gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
					<div className="flex gap-x-4 text-gray-700 flex-col md:flex-row items-center">
						&copy; 2023 Getir
						<div>
							<a href="#" className="text-purple-800 hover:underline">Bilgi Toplumu Hizmetleri</a>
						</div>
					</div>
					<nav className="flex gap-x-2 items-center flex-col md:flex-row">
                        <div className='flex'>
                        <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
							<FaFacebook size={20} />
						</a>
						<a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
							<FaTwitter size={20} />
						</a>
						<a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
							<FaInstagram size={20} />
						</a>
                        </div>
						<a href="#" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
							<FiGlobe size={18} />
							Türkçe (TR)
						</a>
					</nav>
				</div>

            </div>
           
        </div>
    )
  }
  