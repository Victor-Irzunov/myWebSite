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
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
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
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
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
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
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
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Уникальный сайт созданый опытным разработчиком, преимущества и недостатки
										</p>
									</div>
								</Link>
							</li>

							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/10-voprosov-pered-zakazom-sajta`}
									href='/dlya-klienta/10-voprosov-pered-zakazom-sajta'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/5.webp' className="object-cover w-full h-full" alt="10 Вопросов Перед Заказом Сайта" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											10 ключевых вопросов для вашего разработчика перед заказом сайта
										</p>
									</div>
								</Link>
							</li>


							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/kak-sdelat-sajt-besplatno-samomu`}
									href='/dlya-klienta/kak-sdelat-sajt-besplatno-samomu'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/6.webp' className="object-cover w-full h-full" alt="Как сделать сайт бесплатно самому" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Как сделать сайт бесплатно самому
										</p>
									</div>
								</Link>
							</li>

							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/10-idej-dlya-sozdaniya-pribylnyh-sajtov`}
									href='/dlya-klienta/10-idej-dlya-sozdaniya-pribylnyh-sajtov'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/7.webp' className="object-cover w-full h-full" alt="10 Идей для создания прибыльных сайтов" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											10 Идей для создания прибыльных сайтов и заработка в интернете
										</p>
									</div>
								</Link>
							</li>
							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/etapy-razrabotki-i-zapuska-sajta`}
									href='/dlya-klienta/etapy-razrabotki-i-zapuska-sajta'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/8.webp' className="object-cover w-full h-full" alt="Этапы Разработки и Запуска Сайта" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Этапы Разработки и Запуска Сайта
										</p>
									</div>
								</Link>
							</li>
							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/vybor-domena-dlya-sajta`}
									href='/dlya-klienta/vybor-domena-dlya-sajta'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/9.webp' className="object-cover w-full h-full" alt="Выбор домена для сайта" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Выбор домена для сайта: советы и рекомендации
										</p>
									</div>
								</Link>
							</li>
							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/sekrety-uspeshnogo-kontent-marketinga`}
									href='/dlya-klienta/sekrety-uspeshnogo-kontent-marketinga'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/10.webp' className="object-cover w-full h-full" alt="Секреты успешного контент-маркетинга" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Секреты успешного контент-маркетинга: как привлекать аудиторию
										</p>
									</div>
								</Link>
							</li>
							<li className="bg-white pb-3 rounded-xl overflow-hidden shadow-xl mb-14 sd:w-1/3 xz:w-full sd:mx-4 xz:mx-0">
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta/znachenie-mobilnoj-adaptivnosti`}
									href='/dlya-klienta/znachenie-mobilnoj-adaptivnosti'
								>
									<div className="sd:h-[30vh] xz:h-full">
										<Image src='/articles/11.webp' className="object-cover w-full h-full" alt="Значение мобильной адаптивности" width={998} height={718} />
									</div>
									<div className="mt-4 px-3 sd:h-[11vh] xz:h-full">
										<p className="text-lg font-semibold underline">
											Значение мобильной адаптивности: почему ваш сайт должен быть мобильным
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