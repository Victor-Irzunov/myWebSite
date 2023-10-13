import BtnComp from "@/components/btnComp/BtnComp"
import Image from "next/image"

export const metadata = {
	title: 'SEO аудит сайта | IT компания VI:TECH',
	description: 'Узнайте, как проходит SEO аудит сайта, зачем он необходим и какие шаги включает в себя этот процесс. Улучшите видимость и позиции вашего веб-ресурса в поисковых системах с нашей помощью.'
}

const page = () => {
	return (
		<main className="pt-32 pb-16 min-h-screen">
			<div className="container mx-auto">
				<section className="">
					<div className="">
						<h1 className="uppercase xz:text-2xl sd:text-4xl text-[#004C97]">
							SEO аудит сайта
						</h1>
					</div>

					<article className="mt-20">
						<h2 className="text-xl font-semibold">
							Проведем SEO-аудит вашего сайта с детальным описанием проблем
						</h2>

						<div className="mt-5">
							<div className="sd:float-right xz:float-none sd:w-1/3 xz:w-full sd:pl-5 xz:pl-0 pb-5">
								<figure>
									<Image src='/seo-audit-sajta/main.webp' alt="seo аудит" width={768} height={564} />
									<figcaption>изображение на тему SEO аудит от компании VI:TECH</figcaption>
								</figure>
							</div>
							<div className="">
								<p className="mt-5 text-justify">
									<span className="font-semibold">SEO аудит сайта</span> – это комплексный анализ сайта с целью определения его текущего состояния в контексте оптимизации для поисковых систем. Этот процесс включает в себя проверку всех важных параметров, аспектов и факторов, которые могут влиять на видимость и позиции сайта в результатах поиска Google и других поисковых систем. Процесс аудита позволяет выявить проблемы, упущенные возможности и области для улучшения SEO-показателей сайта.
								</p>
								<p className="text-lg mt-4 font-semibold">
									Вот основные этапы и шаги, которые входят в процесс SEO-аудита сайта:
								</p>

								<ul className="mt-3 text-justify">
									<li className="">
										<span className="font-semibold">
											Анализ ключевых слов:{' '}
										</span>
										Идентификация ключевых слов, связанных с вашей нишей и бизнесом. Это помогает определить, какие запросы пользователей могут привести к вашему сайту.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Анализ контента: {' '}
										</span>
										Оценка качества и релевантности контента на сайте. Поиск потенциальных проблем, таких как дублирующийся контент, низкое качество статей и неуникальные тексты.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Анализ структуры сайта:{' '}
										</span>
										Проверка структуры сайта, внутренней перелинковки и навигации. Обеспечение удобства для пользователей и поисковых роботов.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Технический аудит:{' '}
										</span>
										Обнаружение технических проблем, таких как медленная загрузка страниц, ошибка сервера, битые ссылки и другие факторы, влияющие на производительность и доступность сайта.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Оценка метатегов: {' '}
										</span>
										Проверка наличия и качества метатегов, таких как заголовки H1, H2, мета-описания и мета-теги ключевых слов. Оптимизация этих элементов для улучшения SEO.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Анализ обратных ссылок: {' '}
										</span>
										Проверка внешних ссылок на сайт и их качества. Определение токсичных ссылок, которые могут негативно повлиять на рейтинг сайта.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Социальные сигналы: {' '}
										</span>
										Анализ активности сайта в социальных сетях и влияния на SEO.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Мобильная оптимизация:  {' '}
										</span>
										Проверка наличия мобильной версии сайта и ее качества. Учитывая, что мобильный трафик играет ключевую роль, это критически важный аспект.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Оценка конкурентов:   {' '}
										</span>
										Анализ конкурентов в вашей нише, их стратегий SEO и ключевых слов. Это помогает понять, где ваш сайт находится по сравнению с конкурентами.
									</li>

									<li className="mt-2">
										<span className="font-semibold">
											Составление рекомендаций:   {' '}
										</span>
										На основе анализа создается список рекомендаций и план действий для улучшения SEO-показателей сайта. Этот план может включать в себя оптимизацию контента, устранение технических проблем, улучшение пользовательского опыта и другие действия.
									</li>
								</ul>

								<p className="mt-8 font-semibold text-justify">
									SEO-аудит сайта является неотъемлемой частью оптимизации и продвижения сайтов. Он позволяет выявить проблемы и улучшить SEO-стратегию, чтобы сайт был более видимым для поисковых систем и привлекал больше целевой аудитории.
								</p>
							</div>
						</div>
					</article>

					<div className="text-[#004C97]">
						<div className="flex justify-between mt-20 items-center">
							<div className="w-1/2 xz:text-sm sd:text-base">
								Стоимость SEO аудита одностраничного сайта
							</div>
							<div className="font-bold pr-3 text-base sd:text-xl">
								50-100 BYN
							</div>
						</div>


						<div className="flex justify-between mt-10 items-center">
							<div className="w-1/2 xz:text-sm sd:text-base">
								Стоимость SEO аудита многостраничного сайта
							</div>
							<div className="font-bold pr-3 text-base sd:text-xl">
								от 250 BYN
							</div>
						</div>
					</div>
					<div className="mt-8 text-right">
						<BtnComp tag={true} title2='Узнать точную стоимость'  />
					</div>


					<p className="mt-16 text-center font-bold text-lg">
						Получите гарантированное преимущество над конкурентами! Оставьте заявку на SEO-аудит, и наши эксперты помогут вам разобраться во всех проблемах вашего сайта. Узнайте, почему он не попадает в топ-10 поисковых результатов, и что можно сделать, чтобы изменить эту ситуацию. Закажите SEO-аудит прямо сейчас и вперед к успеху!
					</p>
				</section>
			</div>
		</main>
	)
}

export default page