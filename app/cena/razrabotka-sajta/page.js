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
		<main className="pt-10 pb-20">
			<div className="w-full relative mb-20">
				<Image
					src="/logo/logo-price.webp"
					alt="Стоимость разработки сайта, vi-tech"
					width={370} height={223}
					className="object-cover w-screen h-full"
				/>
			</div>
			<div className="">


				<div className="container mx-auto">
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


				<section className="pt-5 pb-10 bg-slate-100 mt-20 text-center">
					<div className="container mx-auto">
						<CardComp />
						<p className="text-sm font-semibold">Свяжитесь с нами, чтобы уточнить детали и начать работу над вашим проектом!</p>
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
						className="object-cover w-screen h-full"
						style={{ width: 'auto', height: 'auto' }}
						width={370} height={223} />
					<h4 className="mt-8 text-center uppercase">
						Ответы на популярные вопросы
					</h4>
					<article className="mt-4">
						<Collapse items={itemsPriceQuestions} bordered={false} />
					</article>
				</section>

				<div className="container mx-auto">
					<Image
						src='/price/logo-price2.webp'
						alt='Логотип компании VI:TECH стоимость создания сайта'
						className="object-cover w-screen h-full"
						width={370} height={223} />

					<p className="font-bold text-center mt-6">
						Не откладывайте на завтра то, что можно начать сегодня. Позвоните нам прямо сейчас, и мы с удовольствием проконсультируем вас по всем вопросам, связанным с вашим будущим сайтом. Расскажем о стоимости, сроках и всем, что вам нужно знать. Начнем работу над вашим проектом, чтобы он стал мощным инструментом для развития вашего бизнеса. Не упустите шанс – звоните уже сегодня!
					</p>
				</div>
			</div>
		</main>
	)
}
export default PricePage