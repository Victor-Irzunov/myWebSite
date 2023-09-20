import GotovyeCardComp from "@/components/gotoviCardComp/GotovyeCardComp"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Готовые сайты в Минске | IT компания VI:TECH',
	description: 'Продажа готовых сайтов в Минске у профессиональной IT компании VI:TECH. Мы предлагаем решения для различных бизнесов и гарантируем качество и эффективность каждого проекта.'
}


const GotovyePage = () => {
	return (
		<main className="pt-10 pb-20">
			<div className="container mx-auto sd:flex xz:flex-row">
				<div className="xz:mt-16 sd:mt-0 sd:pt-32 xz:pt-0 text-[#004C97] font-semibold sd:w-1/2 xz:w-full">
					<h1 className="uppercase xz:text-3xl sd:text-5xl">
						Готовые сайты в Минске
					</h1>
				</div>
				<div className="xz:w-full sd:w-1/2 relative mt-8">
					<Image
						src="/service/gotovie/main.webp"
						alt="Компания по продажи готовых сайтов vi:tech"
						className="object-cover w-full h-full mx-auto mt-12"
						style={{ width: 'auto', height: 'auto' }}
						width={1492} height={490}
					/>
				</div>
			</div>

			<section className="mt-6">
				<article className="">
					<div className="container mx-auto">
						<h2 className="text-[#004C97] uppercase xz:text-base sd:text-xl">
							Купить готовый сайт
						</h2>
						<p className="mt-4 text-justify">
							Иметь собственный веб-сайт стало ключевым для успешного бизнеса в современном мире. Однако разработка сайта с нуля может быть долгим и дорогостоящим процессом. Решение? Купить готовый сайт - это быстрый и удивительно выгодный способ запустить свой сайт.
						</p>
					</div>
					<div className="mt-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-12">
						<div className="container mx-auto">
							<h3 className="font-semibold text-xl uppercase text-center">
								Преимущества покупки готового сайта
							</h3>
							<ul className="mt-6">
								<li className="mb-3 bg-blue-700 px-3 shadow-xl py-4 font-light rounded-md">
									<span className="font-semibold">Сэкономьте время: </span>Когда вы покупаете готовый сайт, вы сразу же получаете готовую платформу, которую можно начать использовать. Нет необходимости ждать месяцами, пока разработчики создадут новый сайт.
								</li>
								<li className="mb-3 bg-blue-700 px-3 shadow-xl py-4 font-light rounded-md">
									<span className="font-semibold">Дизайн включен:  </span>Готовый сайт уже имеет установленный и настроенный дизайн. Это значит, что вам не нужно долго обсуждать дизайнерские концепции и ждать их реализации.
								</li>
								<li className="mb-3 bg-blue-700 px-3 shadow-xl py-4 font-light rounded-md">
									<span className="font-semibold">Бесплатное редактирование включено: </span> Мы предоставляем бесплатную услугу редактирования сайта с учетом ваших требований.
								</li>
								<li className="mb-3 bg-blue-700 px-3 shadow-xl py-4 font-light rounded-md">
									<span className="font-semibold">Запуск сайта: </span> Когда вы покупаете готовый сайт, он уже настроен и готов к запуску. Это означает, что вы быстро можете начать привлекать посетителей и клиентов.
								</li>
								<li className="mb-3 bg-blue-700 px-3 shadow-xl py-4 font-light rounded-md">
									<span className="font-semibold">Экономия средств: </span> Покупка готового сайта обычно обходится дешевле, чем полная разработка с нуля. Это позволяет сэкономить средства, которые можно вложить в другие аспекты бизнеса.
								</li>
							</ul>
							<p className="text-center font-semibold mt-8">
								Готовые сайты предоставляют удивительную возможность быстро войти в онлайн-мир и начать привлекать новых клиентов. Перейдите к действию и исследуйте разнообразие готовых сайтов, доступных для покупки, чтобы найти тот, который подходит именно вашему бизнесу. Это быстрый и эффективный способ воплотить в жизнь вашу онлайн-стратегию.
							</p>
						</div>
					</div>
				</article>
			</section>

			<GotovyeCardComp />

			<section className="container mx-auto mt-20 mb-16">
				<p className="font-semibold uppercase mb-7 text-lg">
					Наши услуги по разрабоки сайтов и веб-приложений
				</p>
				<Link href='/uslugi/sozdanie-mnogostranichnogo-sajta' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка многостраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/sozdanie-sajta-vizitki' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка сайта-визитки <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/sozdanie-odnostranichnogo-sajta' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка одностраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/sozdanie-lendinga' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка лендинга <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/sozdanie-internet-magazina' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка интернет-магазина <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/sozdanie-korporativnogo-sajta' className="flex underline uppercase text-[#004C97] mb-3">
					Разработка корпоративного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>

				<Link href='/uslugi/vnutrennee-korporativnoe-veb-prilozhenie' className="flex underline uppercase text-[#004C97] ">
					Разработка внутреннего сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
				</Link>
			</section>

			<section className="py-10">
				<article className="container mx-auto">
					<h4 className="mb-5 text-xl font-semibold uppercase">
						Купить у нас готовый сайт
					</h4>
					<p className="">
						Наша компания предоставляет уникальные решения для тех, кто ищет надежное и эффективное присутствие в интернете. Наша компания создает веб-сайты, которые не только выделяются на фоне конкурентов, но и помогают клиентам достичь своих целей в онлайн-мире.
					</p>
					<h5 className="mt-5 mb-3 font-semibold">
						Качество и Профессионализм
					</h5>
					<p className="">
						Мы гордимся своими профессиональными навыками и способностью создавать сайты высокого качества. Наша команда веб-разработчиков и дизайнеров обладает богатым опытом и глубокими знаниями в создании уникальных веб-решений.
					</p>

					<h5 className="mt-5 mb-3 font-semibold">
						Готовые Решения для Эффективного Старта
					</h5>
					<p className="">
						Наши готовые сайты представляют собой идеальное решение для тех, кто ценит время и хочет начать свой онлайн-проект максимально быстро. Мы предлагаем готовые шаблоны, которые можно настроить под ваши потребности, сэкономив при этом время и ресурсы.
					</p>

					<h5 className="mt-5 mb-3 font-semibold">
						Индивидуальный Подход
					</h5>
					<p className="">
						Несмотря на то, что мы предлагаем готовые решения, мы всегда готовы адаптировать их под уникальные потребности каждого клиента. Мы прислушиваемся к вашим пожеланиям и предоставляем индивидуальные решения, которые отражают вашу уникальную идентичность.
					</p>
					<h5 className="mt-5 mb-3 font-semibold">
						Современный Дизайн и Технологии
					</h5>
					<p className="">
						Мы следим за последними трендами в дизайне и технологиях, чтобы предоставлять клиентам современные и функциональные сайты. Наши решения отличаются привлекательным дизайном и высокой производительностью.
					</p>
					<h5 className="mt-5 mb-3 font-semibold">
						Поддержка и Сопровождение
					</h5>
					<p className="">
						Наши услуги не заканчиваются созданием сайта. Мы предоставляем надежную поддержку и сопровождение вашего веб-проекта. Наша команда всегда готова помочь вам в решении любых вопросов или проблем, связанных с вашим сайтом.
					</p>

					<h5 className="mt-5 mb-3 font-semibold">
						Сфера Применения
					</h5>
					<p className="">
						Мы разрабатываем готовые сайты для различных сфер бизнеса, начиная от малого бизнеса и заканчивая крупными корпорациями. Наши решения подходят для интернет-магазинов, корпоративных сайтов, портфолио, блогов и многих других видов веб-проектов.
					</p>
					<h5 className="mt-5 mb-3 font-semibold">
						Ваш Успех - Наша Миссия
					</h5>
					<p className="">
						Мы считаем, что ваш успех - это наша миссия. Мы готовы работать рядом с вами, чтобы создать сайт, который поможет вам достичь ваших целей и привлечь вашу целевую аудиторию. Доверьтесь нам, и ваш онлайн-проект станет источником гордости и успешных результатов.
					</p>

					<p className="mt-10 font-semibold text-center">
						Сейчас самое время взять в свои руки будущее вашего бизнеса и вложиться в готовый сайт, который будет работать на вас 24/7. Наши готовые веб-решения - это быстрый и надежный способ стать видимым в интернете и начать привлекать клиентов.
					</p>
					<p className="mt-6 font-semibold text-center">
						Нажмите на кнопку "Купить" и начните свой онлайн-путь к успеху прямо сейчас! Наша команда готова поддержать вас на каждом этапе, чтобы сделать ваш выбор максимально удобным и выгодным.

						Не упустите шанс стать видимыми для миллионов пользователей в сети. Кликните и начните вашу онлайн историю успеха!
					</p>
				</article>
			</section>
		</main>
	)
}

export default GotovyePage