import CardComp from "@/components/cardComp/CardComp"
import { dataContentPrice, itemsPriceQuestions } from "@/constans/price/PriceData"
import { Collapse } from "antd"
import Image from "next/image"


export const metadata = {
	title: 'Стоимость разработки сайта в Минске | IT-Компания VI:TECH',
	description: 'Узнайте о прозрачной и честной стоимости разработки сайта от VI:TECH. Мы предоставляем ориентировочные базовые цены, но каждый проект уникален и расчитывается индивидуально. С нами нет скрытых платежей и высокая качественная разработка доступна по небольшой рыночной стоимости.'
}

const PricePage = () => {
	return (
		<main className="sd:pt-16 xz:pt-12 pb-20">

			<section className="">
				<div className="w-full relative mb-20 xz:block xm:hidden">
					<Image
						src="/logo/logo-price.webp"
						alt="Стоимость разработки сайта, vi-tech"
						width={1280} height={722}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full relative mb-20 xz:hidden xm:block">
					<Image
						src="/price/main2.webp"
						alt="Контакты компании по созданию сайтов vi:tech"
						width={1492} height={900}
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="xz:container xz:mx-auto sd:mr-7 sd:pt-6 xz:pt-0">
					<h1 className="text-[#004C97] uppercase font-semibold xz:text-3xl sd:text-4xl mb-8">
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
			</section>

			<section className="pt-10 pb-10 bg-white mt-20 text-center">
				<div className="container mx-auto">
					<h2 className="uppercase text-xl font-semibold mb-6">
						Стоимость наших услуг по разработки сайта
					</h2>
					<CardComp />
					<p className="font-semibold xz:text-xl sd:text-2xl">Свяжитесь с нами, чтобы уточнить детали и начать работу над вашим проектом!</p>
				</div>
			</section>

			<section className="mt-32 container mx-auto">
				{
					dataContentPrice.map(el => {
						return (
							<div className="" key={el.id}>
								{el.content.text}
							</div>
						)
					})
				}
			</section>
			<section className="mt-16 mb-8 container mx-auto">
				<Image src='/price/questions.webp'
					alt='Вопрос-ответ стоимости создания сайта'
					className="object-cover w-screen h-full mx-auto"
					style={{ width: 'auto', height: 'auto' }}
					width={370} height={223} />
				<h4 className="mt-8 text-center uppercase">
					Ответы на популярные вопросы
				</h4>
				<article className="mt-4">
					<Collapse items={itemsPriceQuestions} bordered={false} />
				</article>
			</section>

			<div className="container mx-auto sd:flex xz:flex-row sd:mt-10 xz:mt-4">
				<Image
					src='/price/logo-price2.webp'
					alt='Логотип компании VI:TECH стоимость создания сайта'
					className="object-cover w-screen h-full"
					width={370} height={223} />

				<p className="font-bold xz:text-[#004C97] sd:text-black sd:ml-7 xz:ml-0 xz:text-center sd:text-justify xz:text-lg sd:text-2xl xz:mt-10 sd:mt-0">
					Не откладывайте на завтра то, что можно начать сегодня. Позвоните нам прямо сейчас, и мы с удовольствием проконсультируем вас по всем вопросам, связанным с вашим будущим сайтом. Расскажем о стоимости, сроках и всем, что вам нужно знать. Начнем работу над вашим проектом, чтобы он стал мощным инструментом для развития вашего бизнеса. Не упустите шанс – звоните уже сегодня!
				</p>
			</div>
		</main >
	)
}
export default PricePage