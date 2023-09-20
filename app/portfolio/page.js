import PortfolioComp from "@/components/PortfolioComp/PortfolioComp"
import VideoPlayer from "@/components/video/VideoPlayer"
import Image from "next/image"

export const metadata = {
	title: 'Портфолио компании по разработке и продвижению сайтов в Беларуси',
	description: 'VI:TECH – ваш надежный партнер в создании и продвижении сайтов. Мы поможем вам достичь успеха в онлайн-бизнесе с помощью качественных веб-решений и опытных специалистов.'
}


const PortfolioPage = () => {
	return (
		<main className="pt-10">
			<div className="w-full mb-20 xz:block xm:hidden fixed top-10 left-0 right-0 -z-10">
				<Image
					src="/logo/logo-about2.webp"
					alt="Компания по созданию сайтов vi:tech"
					width={1492} height={900}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full mb-20 xz:hidden xm:block fixed top-0 left-0 right-0 -z-10">
				<div className="container mx-auto">
					<Image
						src="/portfolio/main2.webp"
						alt="Контакты компании по созданию сайтов vi:tech"
						width={1492} height={900}
						className="object-cover w-full h-auto"
					/>
				</div>
			</div>

			<div className="bg-white xm:mt-[60vh] xz:mt-[35vh] xm:pt-20 xz:pt-14 h-full relative">
				<div className="container mx-auto xm:pb-16">
					<div className="text-center">
						<h1 className="text-[#004C97] uppercase font-semibold xz:text-3xl sd:text-5xl mb-4">
							Портфолио
						</h1>
						<p className="mt-3">
							Добро пожаловать в наше портфолио! Здесь вы найдете образцы наших работ. Дизайны сайтов утверждены клиентами и отличаются оригинальностью и функциональностью. Мы гордимся нашими достижениями и готовы помочь вам создать уникальный онлайн-проект под ваши пожелания.
						</p>
					</div>

					<div className="sd:flex sd:justify-between sd:items-start xz:flex-row mt-14">
						<div className="w-1/2 sd:block xz:hidden">
							<Image
								src='/portfolio/portfolioPage1.webp'
								alt="Логотип компании на странице портфолио"
								width={1920} height={940}
							// className="w-auto h-auto"
							/>
						</div>
						<div className="sd:w-1/2 xz:w-full">
							<VideoPlayer portfolio={true} />
						</div>
					</div>

					<div className="mt-14 text-center pb-20">
						<PortfolioComp />
					</div>
				</div>
			</div>
		</main>
	)
}

export default PortfolioPage