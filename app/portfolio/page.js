import { Empty } from "antd"
import Image from "next/image"

export const metadata = {
	title: 'Компания по разработке и продвижению сайтов VI:TECH',
	description: 'VI:TECH – ваш надежный партнер в создании и продвижении сайтов. Мы поможем вам достичь успеха в онлайн-бизнесе с помощью качественных веб-решений и опытных специалистов.'
}


const PortfolioPage = () => {
	return (
		<main className="pt-10 pb-20">
			<div className="w-full relative mb-20">
				<Image
					src="/logo/logo-about2.webp"
					alt="Компания по созданию сайтов vi:tech"
					layout="responsive"
					objectFit="cover"
					width={370} height={223}
				/>
			</div>
			<div className="container mx-auto">


				<div className="text-center">
					<h1 className="text-[#004C97] uppercase font-semibold text-2xl mb-4">
						Портфолио
					</h1>
					<p className="mt-3 text-sm">
						Добро пожаловать в наше портфолио! Здесь вы найдете образцы наших работ. Дизайны сайтов утверждены клиентами и отличаются оригинальностью и функциональностью. Мы гордимся нашими достижениями и готовы помочь вам создать уникальный онлайн-проект под ваши пожелания.
					</p>
				</div>

				<div className="mt-7 text-center">
					<Empty />
					<p className="font-light uppercase text-sm mt-7">
						Раздел находится на доработке
					</p>
				</div>
			</div>
		</main>
	)
}

export default PortfolioPage