import BtnComp from "@/components/btnComp/BtnComp"
import CardProdvizhenie from "@/components/cardProdvizhenie/CardProdvizhenie"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Продвижение сайта в Беларуси | IT компания VI:TECH',
	description: 'Предоставляем профессиональные услуги по продвижению ваших веб-ресурсов на белорусском рынке. Наша команда экспертов занимается поисковой оптимизацией, контекстной рекламой для достижения максимальной видимости и эффективности вашего сайта в Беларуси. Узнайте, как мы можем помочь вам добиться успеха!',
	alternates: {
		canonical: 'https://vi-tech.by/prodvizhenie-sajta'
	}
}

const ProdvizheniePage = () => {
	return (
		<main className="pt-16 pb-20">

			<div className="container mx-auto">

				<div className="sd:flex xz:flex-row">
					<div className="xz:mt-16 sd:mt-0 sd:pt-24 xz:pt-0 text-[#004C97] font-semibold">
						<h1 className="uppercase xz:text-3xl sd:text-5xl sd:leading-[60px]">
							Продвижение сайта в Минске и Беларуси
						</h1>
					</div>
					<div className="xz:w-full sd:w-1/2">
						<Image
							src='/prodvizhenie/main.webp'
							alt='Продвижение сайтов'
							className="object-cover w-full h-full xz:mx-auto xz:mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={1280} height={720}
						/>
					</div>
				</div>
				<section className="mt-10">
					<article className="">
						<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
						<h2 className="uppercase text-[#004C97] mb-5 xz:text-base sd:text-xl">
							виды продвижения сайта
						</h2>
						<p className="text-justify px-3">
							Продвижение сайта в поисковых системах, таких как Google и Яндекс, является ключевой стратегией для увеличения онлайн-видимости и привлечения целевой аудитории. Существует несколько основных видов продвижения сайта, исходя из их целей и методов. Давайте рассмотрим некоторые из них:
						</p>

						<ul className="mt-6">
							<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4">
								<h3 className="font-semibold text-[#004C97] underline  sd:text-lg">
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`}>
										<div className="flex justify-start">
											<span className="">
												Органическое (SEO) продвижение сайта
											</span>
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="ml-2 inline"
											/>
										</div>
									</Link>
								</h3>
								<p className="text-justify mt-2">
									Органическое продвижение сайта, или SEO (Search Engine Optimization), ориентировано на улучшение позиций вашего сайта в органических (неоплачиваемых) результатах поиска. Это включает в себя:
								</p>
								<ul className="mt-4">
									<li className="mb-2">
										<h4 className="font-semibold">
											Оптимизацию контента
										</h4>
										<p className="text-sm pl-3">
											Создание качественного и информативного контента, оптимизированного под ключевые слова и запросы пользователей.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Техническую оптимизацию
										</h4>
										<p className="text-sm pl-3">
											Улучшение структуры сайта, скорости загрузки и других технических параметров.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Создание качественной ссылочной массы
										</h4>
										<p className="text-sm pl-3">
											Построение беклинков с авторитетных сайтов.
										</p>
									</li>
								</ul>
							</li>
							<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4">
								<h3 className="font-semibold text-[#004C97] underline relative sd:text-lg">
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`}>
										<div className="flex justify-start">
											<span className="">
												Контекстная реклама
											</span>
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="ml-2"
											/>
										</div>
									</Link>
								</h3>
								<p className="text-justify mt-2">
									Контекстная реклама позволяет размещать объявления в результатах поиска и на партнерских сайтах. Это эффективный способ привлечь аудиторию, которая уже интересуется вашими продуктами или услугами. Ключевые аспекты контекстной рекламы включают:
								</p>
								<ul className="mt-4">
									<li className="mb-2">
										<h4 className="font-semibold">
											Выбор ключевых слов
										</h4>
										<p className="text-sm pl-3">
											Определение ключевых слов, по которым ваше объявление будет показываться.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Бюджет и ставки
										</h4>
										<p className="text-sm pl-3">
											Установка бюджета для кампании и ставок на ключевые слова.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Таргетинг
										</h4>
										<p className="text-sm pl-3">
											Настройка таргетинга, включая географическую локацию и характеристики аудитории.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Аналитика и оптимизация
										</h4>
										<p className="text-sm pl-3">
											Анализ результатов кампании и ее оптимизация для достижения лучших показателей.
										</p>
									</li>
								</ul>
							</li>


							<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4">
								<h3 className="font-semibold text-[#004C97] relative sd:text-lg">
									Социальное продвижение
								</h3>
								<p className="text-justify mt-2">
									Социальное продвижение включает в себя привлечение аудитории через социальные сети, где вы можете создавать контент, взаимодействовать с клиентами и рекламировать свои продукты или услуги.
								</p>
								<ul className="mt-4">
									<li className="mb-2">
										<h4 className="font-semibold">
											Создание и ведение брендовых страниц
										</h4>
										<p className="text-sm pl-3">
											Продвижение через страницы в социальных сетях.
										</p>
									</li>
									<li className="mb-2">
										<h4 className="font-semibold">
											Социальная реклама
										</h4>
										<p className="text-sm pl-3">
											Реклама на платформах, таких как Facebook, Instagram, и LinkedIn.
										</p>
									</li>
								</ul>
							</li>

							<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4">
								<h3 className="font-semibold text-[#004C97] relative sd:text-lg">
									Email-маркетинг
								</h3>
								<p className="text-justify mt-2">
									Эффективное использование email-маркетинга для продвижения сайта и удержания аудитории.
								</p>
								<ul className="mt-4">
									<li className="mb-2">
										<h4 className="font-semibold">
											Создание рассылок
										</h4>
										<p className="text-sm pl-3">
											Регулярная отправка информационных и рекламных сообщений подписчикам.
										</p>
									</li>
									<li className="">
										<h4 className="font-semibold">
											Персонализация
										</h4>
										<p className="text-sm pl-3">
											Адаптация контента под интересы и потребности получателей.
										</p>
									</li>
								</ul>
							</li>
						</ul>
						<p className="font-bold text-center xz:mt-6 sd:mt-14">
							Каждый из этих видов продвижения имеет свои особенности и может быть эффективен в зависимости от бизнес-целей и аудитории вашего сайта. Важно разработать комплексную стратегию продвижения, которая сочетает в себе несколько методов для максимального успеха в поисковых системах Google и Яндекс.
						</p>
					</article>
				</section>
			</div>


			<section className="container mx-auto mt-20">
				<p className="font-semibold uppercase mb-7 text-lg">
					Наши услуги по разрабоки сайтов и веб-приложений
				</p>
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка многостраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка сайта-визитки <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка одностраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка лендинга <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка интернет-магазина <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
					Разработка корпоративного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`} className="flex underline uppercase text-[#004C97] ">
					Разработка внутреннего сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>
			</section>


			<section className="mt-20 bg-[#004C97] pt-6 pb-10 text-white">
				<article className="container mx-auto">
					<Image src='/line-white.svg' alt='Линия' width={50} height={10} className='rotate-45' />
					<h2 className="uppercase mb-5 text-lg">
						Продвижение сайта: как это работает и что важно
					</h2>
					<p className="text-justify font-light">
						Мы предлагаем услуги продвижения вашего сайта с помощью контекстной рекламы и SEO. Но как это происходит и почему это важно?
					</p>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">

						<p className="font-light">
							Продвижение сайта - это способ сделать ваш сайт более заметным в интернете. Когда люди ищут что-то в поисковых системах Google и Яндекс, хорошо продвигаемые сайты появляются выше в результатах поиска. Это помогает привлечь больше посетителей на ваш сайт.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">

						<p className="font-light">
							Контекстная реклама - это реклама, которая показывается людям, когда они ищут что-то в интернете. Это помогает привлечь посетителей, которые интересуются тем, что вы предлагаете.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">

						<p className="font-light">
							SEO - это оптимизация вашего сайта, чтобы он стал более привлекательным для поисковых систем. Когда ваш сайт оптимизирован, поисковики легче находят его и показывают пользователям.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<p className="font-light">
							Важные вещи для продвижения включают в себя качество сайта, его скорость загрузки, и то, насколько он соответствует запросам пользователей. Это важные детали, которые помогают сайту привлекать больше посетителей.
						</p>
					</div>

					<p className="text-center mt-8 text-yellow-400 font-semibold">
						Мы заботимся о том, чтобы ваш сайт не только появился в результатах поиска и рекламе, но и привлекал людей и предоставлял им нужную информацию или услуги. Для этого мы используем разные методы и постоянно следим за результатами. Когда все хорошо настроено, ваш сайт будет более заметным и привлечет больше посетителей
					</p>
				</article>
			</section>


			<section className="mt-20 mb-28 container mx-auto">
				<CardProdvizhenie />

				<div className="flex justify-end pt-5 sd:pr-16 xz:pr-0">
					<BtnComp tag={true} title2={`Заказать продвижение сайта`} color='blue' />
				</div>
			</section>


			<div className="container mx-auto text-justify mt-12 font-bold">
				<div className="sd:flex flex-row sd:justify-between sd:items-start">
					<div className="sd:w-1/2 w-full">
						<Image
							src='/prodvizhenie/plane2.webp'
							alt='Продвижение сайтов'
							className="object-cover w-full h-full xz:mx-auto xz:mt-8"
							style={{ width: 'auto', height: 'auto' }}
							width={1920} height={1080}
						/>
					</div>
					<div className="sd:w-1/2 w-full xz:mt-10 sd:mt-0 sd:ml-7 xz:ml-0 sd:pt-10">
						<p className="sd:text-lg xz:text-base">
							Дайте вашему сайту крылья с нашими услугами! Мы предлагаем продвижение вашего сайта с использованием <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`} className="text-blue-800 underline">SEO </Link> и быструю раскрутку через <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`} className="text-blue-800 underline">контекстную рекламу</Link>. Гарантируем высокие результаты, увеличение посещаемости и привлечение целевой аудитории. Доверьтесь нам и дайте вашему бизнесу возможность процветать онлайн!
						</p>
					</div>

				</div>
				<p className="xz:mt-8 sd:mt-12 mb-8 sd:text-lg text-base">
					Давайте вместе достигнем успеха в интернете! Начните продвижение вашего сайта с нами уже сегодня. Нажмите на кнопку 'Заказать' и убедитесь сами, как мы можем повысить вашу онлайн видимость и прибыльность. Ваш успех - наша гордость!
				</p>
			</div>
		</main >
	)
}

export default ProdvizheniePage