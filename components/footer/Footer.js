"use client"
import Image from "next/image";
import BtnContact from "../btnContactFooter/BtnContact";
import BtnTehPodderzhka from "../BtnTehPodderzhka/BtnTehPodderzhka";

const Footer = () => {

	function gtag_report_conversion(url) {
		var callback = function () {
			// if (typeof (url) != 'undefined') {
			// 	window.location = url;
			// }
		};
		window.gtag('event', 'conversion', {
			'send_to': 'AW-11359232505/FETvCOT4vukYEPnDwKgq',
			'event_callback': callback
		});
		return false;
	}

	return (
		<footer className="bg-[#15579e] pt-20 pb-10">
			<div className="container mx-auto px-3">
				<div className="flex justify-between">
					<div className="">
						<p className="text-3xl text-white uppercase font-extrabold">
							Давайте <br /> поговорим!
						</p>
						<div className="mt-14 mb-14">
							<a href="tel:80333511597"
								className="flex text-xl text-white"
								onClick={() => gtag_report_conversion('/')}
							>
								<Image src='/iconfont-phone.svg'
									alt='Телефон компании по разработке сайтов'
									width={25} height={25}
									style={{ width: '25px', height: '25px' }}
									className="mr-4"
								/>
								8 033 351-15-97
							</a>
						</div>

						<BtnContact />
					</div>
					<div className="">
						<Image
							src='/logo/logo-icon.webp'
							alt="Логотип компании по созданию сайтов"
							width={70} height={70}
						/>
					</div>
				</div>

				<BtnTehPodderzhka />
			</div>
		</footer>
	)
}

export default Footer