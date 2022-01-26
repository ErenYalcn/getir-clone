export default function MobileApp() {
    return (



        
     <div className="container flex items-center mx-auto justify-between bg-primary-brand-color bg-mobile-bg md:rounded-lg min-h-[312px] relative text-white">
        <div className="p-16 self-start mt-8">
            <h4 className="font-semibold text-4xl absolute tracking-tighter leading-5"> Getir'i İndirin!</h4>
            <p className="text-sm font font-semibold mt-12 leading-6 tracking-wide">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
           
           
           <div className="grid justify-center gap-2 mt-4 mt-9 lg:flex">
                        <a href="#">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
						</a>

            </div>
        </div>


            <div className="self-end mt-4 hidden lg:block">
					<img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
				</div>
                        
        </div>
            
            
            
            

    )
  }
