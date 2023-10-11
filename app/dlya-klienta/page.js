import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Полезные статьи для клиентов на тему создания и продвижения сайта',
	description: 'Изучайте наши полезные статьи, чтобы получить ценные советы и рекомендации по созданию и продвижению вашего веб-сайта. Узнайте, как сделать ваш онлайн-проект более успешным и эффективным.'
}

const DlyaKlientaPage = () => {
	return (
		<main className="pt-16">
			<div className="bg-white xm:pt-20 xz:pt-14 h-full relative">
				<div className="container mx-auto xm:pb-16">
					<div className="text-center">
						<h1 className="text-[#004C97] uppercase font-semibold text-3xl sd:text-5xl mb-4">
							Полезные статьи для клиента
						</h1>
						<p className="mt-3">
							Добро пожаловать на нашу страницу полезных статей! Здесь вы найдете информацию, которая поможет вам узнать больше о разработке и продвижении сайта, а также советы и рекомендации по использованию наших продуктов. Наша цель - сделать ваш опыт с нами максимально полезным и удовлетворительным.
						</p>
					</div>

					<section className="mt-14">
						<ul className="">
							<li className="mb-8">
								<Image src='/articles/1.webp' className="rounded-sm" alt="картинка статьи как сэкономить на разработке сайта" width={998} height={718} />

								<div className="mt-2 px-2">
									<Link
										as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/kak-zakazat-horoshij-sajt-i-ne-pereplachivat`}
										href='/dlya-klienta/kak-zakazat-horoshij-sajt-i-ne-pereplachivat'
									>
										<p className="text-lg font-semibold underline">
											Как заказать хороший сайт без лишних переплат
										</p>
									</Link>
									{/* <div className="flex mt-3">
										<div className="flex items-center">
											<Image src='/eye.svg' alt="просмотров статьи" width={20} height={20} />
											<span className="ml-1">
												87
											</span>
										</div>
										<div className="flex items-center ml-4">
											<Image src='/like.svg' alt="понравилось" width={20} height={20} />
											<span className="ml-1">
												29
											</span>
										</div>
									</div> */}
								</div>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	)
}

export default DlyaKlientaPage