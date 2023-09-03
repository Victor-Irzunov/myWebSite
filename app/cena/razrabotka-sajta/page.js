import CardComp from "@/components/cardComp/CardComp"
import Image from "next/image"

export const metadata = {
	title: 'Стоимость разработки сайта в Минске | IT-Компания VI:TECH',
	description: 'Узнайте о прозрачной и честной стоимости разработки сайта от VI:TECH. Мы предоставляем ориентировочные базовые цены, но каждый проект уникален и расчитывается индивидуально. С нами нет скрытых платежей и высокая качественная разработка доступна по небольшой рыночной стоимости.'
}


const PricePage = () => {
	return (
		<main className="pt-10 pb-20">
			<div className="w-full relative mb-20">
				<Image
					src="/logo/logo-price.webp"
					alt="Стоимость разработки сайта, vi-tech"
					layout="responsive"
					objectFit="cover"
					width={370} height={223}
				/>
			</div>
			<div className="container mx-auto">


				<div className="">
					<h1 className="text-[#004C97] uppercase font-semibold text-2xl mb-6">
						Стоимость разработки сайта в Минске
					</h1>
					<p className="text-sm text-justify mb-1">
						Добро пожаловать на страницу "Стоимость разработки сайта" от VI:TECH! Мы осознаем, что цена играет важную роль в вашем выборе партнера по веб-разработке.
					</p>
					<p className="text-sm text-justify mb-1">
						На нашем сайте представлена ориентировочная стоимость разработки сайта, однако более точная стоимость разработки всегда рассчитывается индивидуально с учетом ваших уникальных потребностей.
					</p>
					<p className="mb-3 text-sm text-justify">
						Мы придерживаемся принципов честности и прозрачности. У нас нет скрытых или дополнительных платежей. Нашей целью является предоставление вам наиболее выгодного предложения на рынке веб-разработки.
					</p>
					<p className="text-sm text-justify font-semibold">
						Давайте воплотим ваши идеи в жизнь и создадим успешный онлайн-проект вместе!
					</p>
				</div>


				<section className="pt-10">

					<CardComp />

					<p className="text-sm">Свяжитесь с нами, чтобы уточнить детали и начать работу над вашим проектом!</p>

				</section>
			</div>
		</main>
	)
}
export default PricePage