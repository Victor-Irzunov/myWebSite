
import { dataContentPrice, itemsPriceQuestions } from "@/constans/price/PriceData"
import { Collapse } from "antd";
import Image from "next/image";
import dynamic from 'next/dynamic';

const CardComp = dynamic(() => import('@/components/cardComp/CardComp'));

const CenySection = () => {
	return (
	
			<div>
				
				<section className="pt-32 pb-10 bg-white text-center">
					<div className="container mx-auto">
						<h2 className="uppercase text-xl font-semibold mb-6">
							Стоимость наших услуг по разработки сайта
						</h2>
						<CardComp />
						<p className="font-semibold xz:text-xl sd:text-2xl">Свяжитесь с нами, чтобы уточнить детали и начать работу над вашим проектом!</p>
					</div>
				</section>

				<section className="pt-24 bg-white">
					<div className="container mx-auto">
						{
							dataContentPrice.map(el => {
								return (
									<div className="" key={el.id}>
										{el.content.text}
									</div>
								)
							})
						}
					</div>
				</section>
				<section className="pt-24 bg-white">
					<div className="container mx-auto">
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
					</div>
				</section>
				<div className="bg-white pt-24 pb-20">
					<div className="container mx-auto sd:flex xz:flex-row">
						<Image
							src='/price/logo-price2.webp'
							alt='Логотип компании VI:TECH стоимость создания сайта'
							className="object-cover w-screen h-full"
							width={370} height={223} />

						<p className="font-bold xz:text-[#004C97] sd:text-black sd:ml-7 xz:ml-0 xz:text-center sd:text-justify xz:text-lg sd:text-2xl xz:mt-10 sd:mt-0">
							Не откладывайте на завтра то, что можно начать сегодня. Позвоните нам прямо сейчас, и мы с удовольствием проконсультируем вас по всем вопросам, связанным с вашим будущим сайтом. Расскажем о стоимости, сроках и всем, что вам нужно знать. Начнем работу над вашим проектом, чтобы он стал мощным инструментом для развития вашего бизнеса. Не упустите шанс – звоните уже сегодня!
						</p>
					</div>
				</div>
			</div>
	
	)
}

export default CenySection