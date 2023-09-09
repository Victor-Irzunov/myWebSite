import BtnComp from "@/components/btnComp/BtnComp"
import Image from "next/image"

export const metadata = {
	title: 'Контекстная реклама - быстрое продвижение сайта',
	description: 'Контекстная реклама - это мощный инструмент для быстрого продвижения вашего сайта. Узнайте, как она работает и почему она может значительно увеличить ваш бизнес.'
}

const KontekstnayaReklamaPage = () => {
	return (
		<main className="pt-16 pb-20">

			<div className="container mx-auto">

				<div className="mt-16 text-[#004C97] font-semibold">
					<h1 className="uppercase text-2xl">
						Контекстная реклама в Минске и Беларуси
					</h1>
					<Image
						src='/prodzhenie/main.webp'
						alt='Контекстная реклама'
						className="object-cover w-full h-full mx-auto mt-8"
						style={{ width: 'auto', height: 'auto' }}
						width={370} height={208}
					/>
				</div>

				<section className="mt-10">
					<article className="">
						<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
						<h2 className="uppercase text-[#004C97] mb-5 text-lg">
							Контекстная реклама Google и Яндекс
						</h2>
						<p className="text-justify px-3">
							Контекстная реклама - это эффективный способ быстро достичь высокой видимости вашего бизнеса в поисковых результатах Google и Яндекс. Она предоставляет возможность ваших объявлений появиться на первой странице поисковой выдачи практически мгновенно, без необходимости долгого ожидания. Это особенно удобно для новых сайтов, которые только начинают свой путь в интернете, а также для рекламных акций, когда нужно быстро привлечь внимание к вашему продукту или услуге.
						</p>

						<h3 className="font-semibold text-[#004C97] mt-5 relative text-lg">
							Как работает реклама:
						</h3>
						<ul className="mt-3">
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Выбор ключевых слов
								</h4>
								<p className="">
									Сначала мы выбираем ключевые слова, которые наилучшим образом соответствуют вашему продукту или услуге. Например, если вы продаете книги, вы можете выбрать ключевые слова, такие как "купить книги онлайн" или "литературный магазин".
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Создание объявлений
								</h4>
								<p className="">
									Затем мы создаём текст объявлений, которые будут отображаться, когда кто-то вводит одно из собраных ключевых слов в поисковую строку Google. Объявления обычно состоят из заголовка, описания и ссылки на ваш сайт.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Задание бюджета
								</h4>
								<p className="">
									Мы устанавливаем бюджет, который вы готовы потратить на рекламу каждый день. Это позволяет вам контролировать свои затраты.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Аукцион ключевых слов
								</h4>
								<p className="">
									Когда кто-то ищет что-то в Google, происходит аукцион ключевых слов. Google определяет, какие объявления отображать и в каком порядке, основываясь на качестве объявлений и ставках рекламодателей.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Отображение объявлений
								</h4>
								<p className="">
									Если ваше объявление считается наилучшим в данном запросе, оно отображается в верхней части страницы поисковой выдачи или на сайтах-партнерах Google.
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Оплата за клик
								</h4>
								<p className="">
									Вы платите только тогда, когда кто-то кликает на ваше объявление и переходит на ваш сайт. Это называется оплатой за клик (PPC - Pay-Per-Click).
								</p>
							</li>
							<li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-5 rounded-md mb-4 shadow-xl">
								<h4 className="uppercase mb-2 font-semibold ">
									Быстрый результат
								</h4>
								<p className="">
									Ваши объявления могут быть показаны потенциальным клиентам практически мгновенно, что делает контекстную рекламу идеальным выбором для тех, кто хочет быстро привлечь внимание к своему бизнесу.
								</p>
							</li>
						</ul>
						<p className="mt-7 text-lg text-center font-bold">
							Контекстная реклама в Google и Яндекс позволяет вашему бизнесу моментально появиться в результатах поиска, без необходимости ждать долгих результатов SEO продвижения. Это особенно полезно для новых сайтов, которые могут начать с 2-8 страницы результатов поиска, или для проведения рекламных акций, когда нужно быстро привлечь внимание к вашим продуктам или услугам.
							Таким образом, контекстная реклама дает вам возможность моментально попасть на первую страницу и привлечь потенциальных клиентов.
						</p>
					</article>
				</section>
			</div>

			<section className="mt-20 bg-[#004C97] pt-6 pb-20 text-white">
				<article className="container mx-auto">
					<Image src='/line-white.svg' alt='Линия' width={50} height={10} className='rotate-45' />
					<h2 className="uppercase mb-5 text-lg">
						Нужна ли вам контекстная реклама?
					</h2>
					<p className="text-justify font-light px-3">
						Контекстная реклама - это мощный способ доставить ваше сообщение потенциальным клиентам в интернете быстро. Но давайте разберемся, действительно ли вам она нужна.
					</p>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Расписание показа рекламы
						</h3>
						<p className="font-light">
							Вы сами выбираете, когда ваша реклама будет отображаться. Можно настроить точное время и дни недели. Это означает, что вы можете привлекать клиентов, когда ваш бизнес открыт и готов к обслуживанию.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Настройка устройств
						</h3>
						<p className="font-light">
							Выбирайте, на каких устройствах будет отображаться ваша реклама. Это может быть компьютер, смартфон или планшет. Так вы можете достичь вашей аудитории там, где она находится.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Настройка аудитории
						</h3>
						<p className="font-light">
							Можно точно определить, кому будет показана ваша реклама. Например, выбрать географический регион или интересы пользователей. Так вы обращаетесь именно к тем, кто вас интересует.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Аналитика
						</h3>
						<p className="font-light">
							Контролируйте результаты с помощью подробной аналитики. Узнайте, сколько раз ваша реклама была показана, сколько кликов она получила и какие ключевые слова наиболее эффективны.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Просмотр показов
						</h3>
						<p className="font-light">
							В реальном времени видите, как работает ваша реклама. Это позволяет быстро реагировать и вносить изменения, если что-то не так.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							CTR (Click-Through Rate)
						</h3>
						<p className="font-light">
							Этот показатель показывает, сколько пользователей кликнуло на вашу рекламу. Высокий CTR говорит о том, что ваша реклама привлекательна.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Клики и конверсии
						</h3>
						<p className="font-light">
							Клики - это важно, но конверсии еще важнее. Это означает, что пользователи не только кликнули, но и совершили нужное действие, например, сделали покупку, отправили заявку или кликнули на сайте по номеру телефона и т.д.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
						<h3 className="mb-2 uppercase">
							Предоплата или автоматические платежи
						</h3>
						<p className="font-light">
							Контекстная реклама позволяет вам гибко управлять бюджетом. Вы можете настроить платежи по предоплате или настроить автоматические платежи в конце месяца. Как только доступные средства заканчиваются, реклама автоматически приостанавливается. Это обеспечивает контроль над расходами и позволяет избежать неожиданных затрат.
						</p>
					</div>

					<div className="mt-4 bg-blue-700 px-3 py-4 rounded-md text-center">
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


			<section className="pb-20 mt-20">
				<article className="container mx-auto">
					<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
					<h3 className="uppercase mb-5 text-lg text-[#004C97]">
						Контекстная реклама для малого и среднего бизнеса: как стартовать и получить результаты
					</h3>

					<Image
						src='/kontekstnaya/price.webp'
						alt='Контекстная реклама для продвижения'
						className="object-cover w-full h-full mx-auto mt-8"
						style={{ width: 'auto', height: 'auto' }}
						width={150} height={397}
					/>
					<p className="text-justify mt-8 font-semibold">
						Здравствуйте, уважаемые предприниматели! Мы - ваш надежный партнер в мире цифровой рекламы и готовы поделиться с вами секретами успешного старта в контекстной рекламе для малого и среднего бизнеса.
					</p>

					<ul className="mt-7">
						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 border border-black">
							<h4 className="font-semibold">
								Выбор между Google и Яндекс
							</h4>
							<p className="mt-2 pl-2">
								Какими бы ни были ваши бизнес-приоритеты, оба гиганта - Google и Яндекс - имеют свои преимущества. В Беларуси Google занимает около 90% рынка поиска, но не стоит забывать о популярности Яндекса, особенно среди белорусских пользователей. Оптимальное решение - запустить рекламу на обеих платформах и максимально охватить аудиторию.
							</p>
						</li>
						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 border border-black">
							<h4 className="font-semibold">
								Не зависимо от бюджета, трафик будет
							</h4>
							<p className="mt-2 pl-2">
								Контекстная реклама - это инструмент, который доступен даже с небольшим бюджетом. Не важно, сколько вы готовы инвестировать в рекламу, трафик на вашем сайте будет. Однако помните, что чем больше бюджет, тем больше возможностей для привлечения клиентов.
							</p>
						</li>
						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 border border-black">
							<h4 className="font-semibold">
								Тонкая настройка рекламы
							</h4>
							<p className="mt-2 pl-2">
								Чтобы добиться максимальной эффективности, необходима тонкая настройка рекламной кампании. Эксперты нашей компании готовы провести глубокий анализ вашего бизнеса, определить целевую аудиторию, подобрать ключевые слова и создать привлекательные объявления. Мы заботимся о каждой детали, чтобы ваша реклама работала на 100%.
							</p>
						</li>

						<li className="bg-gradient-to-r from-sky-200 to-indigo-200 mb-4 shadow-xl rounded-md px-3 py-4 border border-black">
							<h4 className="font-semibold">
								Наши советы для вас
							</h4>
							<p className="mt-2">
								В завершение, хотим поделиться с вами несколькими советами
							</p>
							<ul className="mt-4 pl-3">
								<li className="mb-2">
									Регулярно отслеживайте и анализируйте результаты вашей кампании. Это позволит вам быстро реагировать и оптимизировать рекламу.
								</li>
								<li className="mb-2">
									Экспериментируйте с разными ключевыми словами и объявлениями. Тестирование поможет выявить наилучшие варианты.
								</li>
								<li className="mb-2">
									Следите за бюджетом и контролируйте расходы. Постепенно увеличивайте бюджет, когда убедитесь в эффективности кампании.
								</li>
								<li className="mb-2">
									Обратите внимание на мобильный трафик. Многие пользователи совершают покупки с мобильных устройств.
								</li>
							</ul>
						</li>
					</ul>

					<p className="text-center font-semibold px-2 mt-10">
						Мы уверены, что контекстная реклама - это мощный инструмент для вашего бизнеса. Мы готовы помочь вам в каждом этапе создания и оптимизации вашей кампании. Доверьтесь нам, и ваши результаты не заставят себя ждать!
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