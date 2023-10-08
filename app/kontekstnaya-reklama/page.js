import BtnComp from "@/components/btnComp/BtnComp"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Контекстная реклама - быстрое продвижение сайта | IT компания VI:TECH',
	description: 'Контекстная реклама - это мощный инструмент для быстрого продвижения вашего сайта. Узнайте, как она работает и почему она может значительно увеличить ваш бизнес.'
}

const KontekstnayaReklamaPage = () => {
	console.log('process.env.NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL)
	return (
		<main className="pt-16 pb-20">
			<div className="container mx-auto">
				<div className="mt-16 text-[#004C97] font-semibold">
					<h1 className="uppercase xz:text-3xl sd:text-4xl">
						Контекстная реклама в Минске и Беларуси
					</h1>
					<Image
						src='/prodvizhenie/main.webp'
						alt='Контекстная реклама'
						className="object-cover w-full h-full mx-auto mt-8"
						style={{ width: 'auto', height: 'auto' }}
						width={370} height={208}
					/>
				</div>

				<section className="mt-10">
					<article className="">
						<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
						<h2 className="uppercase text-[#004C97] mb-5 xz:text-lg sd:text-xl">
							Контекстная реклама Google и Яндекс
						</h2>
						<p className="text-justify px-3">
							Контекстная реклама - это эффективный способ быстро достичь высокой видимости вашего бизнеса в поисковых результатах Google и Яндекс. Она предоставляет возможность ваших объявлений появиться на первой странице поисковой выдачи практически мгновенно, без необходимости долгого ожидания. Это особенно удобно для новых сайтов, которые только начинают свой путь в интернете, а также для рекламных акций, когда нужно быстро привлечь внимание к вашему продукту или услуге. Давайте рассмотрим, как этот процесс функционирует и почему он так важен для вашего онлайн-присутствия.
						</p>

						<div className="flex justify-end mt-4">
							<Image
								src='/partnery/ads.svg'
								alt='Продвижение сайтов'
								className=""
								style={{ width: '45px', height: 'auto' }}
								width={45} height={45}
							/>
							<Image
								src='/partnery/direct.svg'
								alt='Продвижение сайтов'
								className="ml-5"
								style={{ width: '40px', height: 'auto' }}
								width={40} height={40}
							/>
						</div>
						<h3 className="font-semibold text-[#004C97] mt-5 relative text-lg">
							Как работает контекстная реклама:
						</h3>
						<ul className="mt-3">
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Создание аккаунта и выбор ключевых слов
								</h4>
								<p className="">
									В первую очередь, для запуска контекстной рекламы необходимо создать аккаунт в рекламной платформе,например такой как Google Ads. Затем вы выбираете ключевые слова, которые наилучшим образом описывают вашу продукцию или услуги. Эти ключевые слова определяют, когда ваша реклама будет отображаться.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Написание качественных заголовков и объявлений
								</h4>
								<p className="">
									Создание привлекательных и информативных заголовков и объявлений - ключевой этап. Ваши объявления должны быть краткими, но содержательными, их цель - привлечь внимание и заинтересовать пользователей.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Установка бюджета на день
								</h4>
								<p className="">
									Вы определяете дневной бюджет, который готовы потратить на рекламу. Это позволяет вам контролировать свои расходы и обеспечивает гибкость в управлении рекламной кампанией.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Отображение в результатах поиска
								</h4>
								<p className="">
									Когда пользователь выполняет поисковый запрос, похожий на ваши ключевые слова, ваша реклама может появиться в результатах поиска. Реклама обычно помечается как "Реклама", чтобы пользователи могли отличить ее от органических результатов.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Первая страница по запросу
								</h4>
								<p className="">
									Целью контекстной рекламы является размещение вашего сайта на первой странице результатов поиска по ключевым словам. Это место более видимо и часто привлекает больше кликов.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Важность качественного сайта и релевантной страницы
								</h4>
								<p className="">
									Ключевым фактором успеха контекстной рекламы является качество вашего сайта и страницы, на которую ведет объявление. Сайт должен быть легким для навигации, информативным и отзывчивым. Реклама должна быть релевантной запросу пользователя, чтобы повысить вероятность конверсии.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-300 to-blue-300 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Преимущество над органическими результатами
								</h4>
								<p className="">
									Интересный момент в контекстной рекламе заключается в том, что даже если ваш сайт уже показывается в органических результатах, реклама может помочь вам занять более высокую позицию и привлечь дополнительный трафик. Вы платите только за клики или конверсии, что делает этот метод рекламы эффективным и экономически выгодным.
								</p>
							</li>
						</ul>
						<p className="mt-7 px-2 text-justify font-semibold">
							Контекстная реклама в Google и Яндекс позволяет вашему бизнесу моментально появиться в результатах поиска, без необходимости ждать долгих результатов SEO продвижения. Это особенно полезно для новых сайтов, которые могут начать с 2-8 страницы результатов поиска (в зависимости от конкуренции), или для проведения рекламных акций, когда нужно быстро привлечь внимание к вашим продуктам или услугам.
							Таким образом, контекстная реклама дает вам возможность моментально попасть на первую страницу и привлечь потенциальных клиентов.
						</p>
					</article>
				</section>
			</div>

			<section className="my-20">
				<div className="container mx-auto text-center font-semibold">
					<h3 className="mb-3 xz:text-base sd:text-xl">
						Получите бесплатную консультацию по рекламе в Google и Яндекс для вашего сайта
					</h3>
					<div className="">
						<a href='tel:80333511597' className="font-bold xz:text-xl sd:text-2xl">
							+375 33 351-15-97
						</a>
					</div>

					<p className="xz:mt-3 sd:mt-14">
						Мы с удовольствием ответим на все ваши вопросы и поможем разобраться в мире рекламы, чтобы ваш сайт привлекал больше клиентов и достигал новых высот.
					</p>
				</div>
			</section>

			<section className="mt-20 bg-[#004C97] pt-6 pb-20 text-white">
				<article className="container mx-auto">
					<Image src='/line-white.svg' alt='Линия' width={50} height={10} className='rotate-45' />
					<h2 className="uppercase mb-5  xz:text-lg sd:text-xl">
						Нужна ли вам контекстная реклама?
					</h2>
					<p className="text-justify font-light px-3">
						Контекстная реклама - это мощный способ доставить ваше сообщение потенциальным клиентам в интернете быстро. Но давайте разберемся, действительно ли вам она нужна.
					</p>

					<div className="xz:mt-4 sd:mt-8 bg-blue-700 px-3 xz:py-4 sd:py-6 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Расписание показа рекламы
						</h3>
						<p className="font-light">
							Вы сами выбираете, когда ваша реклама будет отображаться. Можно настроить точное время и дни недели. Это означает, что вы можете привлекать клиентов, когда ваш бизнес открыт и готов к обслуживанию.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 xz:py-4 sd:py-6 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Настройка устройств
						</h3>
						<p className="font-light">
							Выбирайте, на каких устройствах будет отображаться ваша реклама. Это может быть компьютер, смартфон или планшет. Так вы можете достичь вашей аудитории там, где она находится.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 xz:py-4 sd:py-6 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Настройка аудитории
						</h3>
						<p className="font-light">
							Можно точно определить, кому будет показана ваша реклама. Например, выбрать географический регион или интересы пользователей. Так вы обращаетесь именно к тем, кто вас интересует.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 xz:py-4 sd:py-6 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Аналитика
						</h3>
						<p className="font-light">
							Контролируйте результаты с помощью подробной аналитики. Узнайте, сколько раз ваша реклама была показана, сколько кликов она получила и какие ключевые слова наиболее эффективны.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3  xz:py-4 sd:py-6  rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Просмотр показов
						</h3>
						<p className="font-light">
							В реальном времени видите, как работает ваша реклама. Это позволяет быстро реагировать и вносить изменения, если что-то не так.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3  xz:py-4 sd:py-6  rounded-md text-center">
						<h3 className="mb-2 uppercase">
							CTR (Click-Through Rate)
						</h3>
						<p className="font-light">
							Этот показатель показывает, сколько пользователей кликнуло на вашу рекламу. Высокий CTR говорит о том, что ваша реклама привлекательна.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3  xz:py-4 sd:py-6  rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Клики и конверсии
						</h3>
						<p className="font-light">
							Клики - это важно, но конверсии еще важнее. Это означает, что пользователи не только кликнули, но и совершили нужное действие, например, сделали покупку, отправили заявку или кликнули на сайте по номеру телефона и т.д.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3  xz:py-4 sd:py-6  rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Предоплата или автоматические платежи
						</h3>
						<p className="font-light">
							Контекстная реклама позволяет вам гибко управлять бюджетом. Вы можете настроить платежи по предоплате или настроить автоматические платежи в конце месяца. Как только доступные средства заканчиваются, реклама автоматически приостанавливается. Это обеспечивает контроль над расходами и позволяет избежать неожиданных затрат.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3  xz:py-4 sd:py-6  rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Возможность поставить на паузу
						</h3>
						<p className="font-light">
							В любой момент вы можете приостановить рекламу, если это нужно, и возобновить ее позже.
						</p>
					</div>

					<p className="text-center mt-8 text-lg">
						Контекстная реклама - это эффективный способ достичь вашей аудитории в нужное время и месте, контролировать бюджет и результаты, и быстро реагировать на изменения. Если вам нужна быстрая и эффективная реклама, то контекстная реклама - отличный выбор для вашего бизнеса.
					</p>
				</article>
			</section>

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


			<section className="pb-20 mt-20">
				<article className="container mx-auto">
					<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
					<h3 className="uppercase mb-5 text-lg text-[#004C97]">
						Виды рекламы в Google, которые мы можем предложить
					</h3>

					<p className="text-justify mt-8 font-semibold">
						В Беларуси Google занимает около 90% рынка поиска, но не стоит забывать о популярности Яндекса. Оптимальное решение - запустить рекламу на обеих платформах и максимально охватить аудиторию. В данном разделе мы рассмотрим виды контекстной рекламы, доступные в Google.
						Google предоставляет несколько видов контекстной рекламы, предназначенных для разных целей и форматов. Вот некоторые из наиболее популярных видов контекстной рекламы, предоставляемых Google Ads:
					</p>


					<ul className="mt-7 text-center">
						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 ">
							<h4 className="font-semibold">
								Поисковая реклама (Search Ads)
							</h4>

							<Image
								src='/kontekstnaya/2.webp'
								alt='Поисковая реклама в Google'
								className="object-cover w-full h-full mx-auto mt-6"
								style={{ width: 'auto', height: 'auto' }}
								width={150} height={208}
							/>
							<p className="mt-6 pl-2">
								Этот вид рекламы отображается в результатах поиска Google, когда пользователи вводят ключевые слова, связанные с вашими продуктами или услугами. Рекламодатели оплачивают за клики на свои объявления.
							</p>
						</li>

						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 ">
							<h4 className="font-semibold">
								Дисплейная реклама (КМС)
							</h4>
							<Image
								src='/kontekstnaya/display.webp'
								alt='Дисплейная реклама в Google Ads'
								className="object-cover w-full h-full mx-auto mt-6"
								style={{ width: 'auto', height: 'auto' }}
								width={150} height={208}
							/>
							<p className="mt-6 pl-2">
								Реклама в сети Google Display Network (GDN) предоставляет возможность размещать баннерные, текстовые и мультимедийные объявления на тысячах веб-сайтов и в мобильных приложениях, которые сотрудничают с Google.
							</p>
						</li>


						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 ">
							<h4 className="font-semibold">
								Реклама в YouTube (YouTube Ads)
							</h4>
							<Image
								src='/kontekstnaya/youTube.webp'
								alt='Реклама на YouTube в Google Ads'
								className="object-cover w-full h-full mx-auto mt-6"
								style={{ width: 'auto', height: 'auto' }}
								width={150} height={208}
							/>
							<p className="mt-6 pl-2">
								Этот формат позволяет размещать видеорекламу на YouTube. Рекламодатели могут выбирать различные типы объявлений, включая прероллы, бамперы, дисплейные объявления и другие.
							</p>
						</li>

						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 ">
							<h4 className="font-semibold">
								Реклама в Google Shopping
							</h4>
							<Image
								src='/kontekstnaya/shop.webp'
								alt='Реклама в Google Shopping'
								className="object-cover w-full h-full mx-auto mt-6"
								style={{ width: 'auto', height: 'auto' }}
								width={150} height={208}
							/>
							<p className="mt-6 pl-2">
								Этот формат предназначен для интернет-магазинов и позволяет отображать информацию о продуктах (включая цены и изображения) прямо в результатах поиска Google.
							</p>
						</li>
					</ul>

					<p className="font-semibold text-justify px-2 mt-10">
						Эти разнообразные виды контекстной рекламы в Google Ads позволяют рекламодателям выбирать наиболее подходящие форматы и стратегии в зависимости от их бизнес-целей и целевой аудитории. Мы уверены, что контекстная реклама - это мощный инструмент для вашего бизнеса. Мы готовы помочь вам на каждом этапе создания и оптимизации вашей кампании. Полагайтесь на нас, и результаты не заставят себя ждать!

					</p>
				</article>
			</section>

			<section className="py-20 bg-[#004C97]">
				<div className="container mx-auto">
					<div className="flex justify-between items-center text-white">
						<h5 className="text-sm w-1/2">
							Стоимость запуска контекстной рекламы
						</h5>
						<div className="font-bold text-lg">
							100-500 BYN
						</div>
					</div>
					<div className="flex justify-between items-center text-white mt-5">
						<h5 className="text-sm w-1/2">
							Сроки запуска контекстной рекламы
						</h5>
						<div className="font-bold text-lg">
							2-5 дней
						</div>
					</div>
					<div className="flex justify-end mt-8">
						<BtnComp tag={true} title2='Заказать рекламу' />
					</div>
				</div>
			</section>

			<div className="text-center mt-20 container mx-auto">
				<p className="font-bold text-[#004C97] text-lg mb-6">
					Не упустите шанс увеличить свой бизнес с помощью контекстной рекламы! Нажмите на кнопку "Заказать рекламу" или позвоните прямо сейчас, и наши эксперты подготовят для вас эффективную рекламную кампанию. Начните привлекать новых клиентов и увеличивать прибыль уже сегодня! Получайте трафик с поисковых систем, привлекайте новых клиентов, и будьте в центре внимания тех, кто ищет или интересуется вашими продуктами и услугами.
				</p>
			</div>
		</main>
	)
}

export default KontekstnayaReklamaPage