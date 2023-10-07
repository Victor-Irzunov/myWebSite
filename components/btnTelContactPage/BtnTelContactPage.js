"use client"
import Image from 'next/image';

const BtnTelContactPage = () => {

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
		<div className="flex items-start mb-5">
			<Image src='/contact/phone-blue.svg' alt='Телефон компании VI:TECH' width={30} height={30} />
			<span className="ml-3">
				<a href="tel:80333511597"
					onClick={() => gtag_report_conversion('/')}
				>
					+375 33 351-15-97
				</a>
			</span>
		</div>
	)
}
export default BtnTelContactPage