import CenySection from "@/components/cenySection/CenySection";
import Image from "next/image";

export const metadata = {
	title: 'Стоимость разработки сайта в Минске | IT-Компания VI:TECH',
	description: 'Узнайте о прозрачной и честной стоимости разработки сайта от VI:TECH. Мы предоставляем ориентировочные базовые цены, но каждый проект уникален и расчитывается индивидуально. С нами нет скрытых платежей и высокая качественная разработка доступна по небольшой рыночной стоимости.',
	alternates: {
		canonical: 'https://vi-tech.by/cena/razrabotka-sajta'
	}
}
const PricePage = () => {
	return (

		<main className="pt-10">
			<section className="">
				<div className="w-full mb-20 xz:block xm:hidden fixed top-10 left-0 right-0 -z-10">
					<Image
						src="/logo/logo-price.webp"
						alt="Стоимость разработки сайта, vi-tech"
						width={1280} height={722}
						className="object-cover w-full h-full"
						loading="eager"
					/>
				</div>
				<div className="w-full mb-20 xz:hidden xm:block fixed top-1 left-0 right-0 -z-10">
					<div className="container mx-auto">
						<Image
							src="/price/main2.webp"
							alt="Контакты компании по созданию сайтов vi:tech"
							width={1492} height={900}
							className="object-cover w-full h-full"
							loading="eager"
						/>
					</div>
				</div>

				<div className="bg-white xm:mt-[20vh] xz:mt-[35vh] xm:pt-20 xz:pt-10 h-full relative">
					<div className="container mx-auto">
						<h1 className="text-[#004C97] uppercase font-semibold xz:text-3xl sd:text-5xl mb-8">
							Стоимость разработки сайта в Минске
						</h1>
						<p className="text-justify mb-1">
							Добро пожаловать на страницу "Стоимость разработки сайта" от VI:TECH! Мы осознаем, что цена играет важную роль в вашем выборе партнера по веб-разработке.
						</p>
						<p className="text-justify mb-1">
							На нашем сайте представлена ориентировочная стоимость разработки сайта, однако более точная стоимость разработки всегда рассчитывается индивидуально с учетом ваших уникальных потребностей.
						</p>
						<p className="mb-3 text-justify">
							Мы придерживаемся принципов честности и прозрачности. У нас нет скрытых или дополнительных платежей. Нашей целью является предоставление вам наиболее выгодного предложения на рынке веб-разработки.
						</p>
						<p className="text-justify font-semibold">
							Давайте воплотим ваши идеи в жизнь и создадим успешный онлайн-проект вместе!
						</p>
					</div>
				</div>
			</section>

			<CenySection />

		
		</main>
	)
}
export default PricePage
