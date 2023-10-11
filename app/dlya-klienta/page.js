import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Полезные статьи для клиентов на тему создания и продвижения сайта',
	description: 'Изучайте наши полезные статьи, чтобы получить ценные советы и рекомендации по созданию и продвижению вашего веб-сайта. Узнайте, как сделать ваш онлайн-проект более успешным и эффективным.'
}

const DlyaKlientaPage = () => {
	return (
		<main className="pt-16 bg-slate-100 pb-20">
			<div className="xm:pt-20 xz:pt-14 h-full relative">
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
						<ul className="sd:flex xz:flex-row xz:justify-center sd:items-center sd:justify-around sd:flex-wrap">

							<li className="bg-white pb-7 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/kak-zakazat-horoshij-sajt-i-ne-pereplachivat`}
									href='/dlya-klienta/kak-zakazat-horoshij-sajt-i-ne-pereplachivat'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/1.webp' className="object-cover w-full h-full" alt="картинка статьи как сэкономить на разработке сайта" width={998} height={718} />
									</div>
									<div className="mt-4 px-3">
										<p className="text-lg font-semibold underline">
											Как заказать хороший сайт без лишних переплат
										</p>
									</div>
								</Link>
							</li>


							<li className="bg-white pb-7 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/pochemu-kachestvo-sajta-igraet-reshayushuyu-rol`}
									href='/dlya-klienta/pochemu-kachestvo-sajta-igraet-reshayushuyu-rol'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/2.webp' className="object-cover w-full h-full" alt="Почему качество сайта играет решающую роль" width={998} height={718} />
									</div>
									<div className="mt-4 px-3">
										<p className="text-lg font-semibold underline">
											Почему качество сайта играет решающую роль
										</p>
									</div>
								</Link>
							</li>

							<li className="bg-white pb-7 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/preimushestva-i-nedostatki-sajta-na-konstruktore`}
									href='/dlya-klienta/preimushestva-i-nedostatki-sajta-na-konstruktore'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/3.webp' className="object-cover w-full h-full" alt="Сайт на конструкторе, преимущества и недостатки" width={998} height={718} />
									</div>
									<div className="mt-4 px-3">
										<p className="text-lg font-semibold underline">
											Сайт на конструкторе, преимущества и недостатки
										</p>
									</div>
								</Link>
							</li>

							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/unikalnyj-sajt-sozdannyj-opytnym-razrabotchikom`}
									href='/dlya-klienta/unikalnyj-sajt-sozdannyj-opytnym-razrabotchikom'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/4.webp' className="object-cover w-full h-full" alt="Уникальный сайт, преимущества и недостатки" width={998} height={718} />
									</div>
									<div className="mt-4 px-3">
										<p className="text-lg font-semibold underline">
											Уникальный сайт созданый опытным разработчиком, преимущества и недостатки
										</p>
									</div>
								</Link>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	)
}

export default DlyaKlientaPage