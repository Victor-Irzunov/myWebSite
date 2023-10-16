import Image from "next/image"


const KlyuchevyeNapravleniya = () => {
	return (
		<section className='mt-16'>
			<article className='container mx-auto'>
				<div className='mb-6'>
					<Image src='/line.svg' alt='Линия' width={50} height={10}
						className='rotate-45' loading="lazy"
					/>
					<h3 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
						Наши ключевые направления работы
					</h3>
					<p className='p-2 text-justify'>
						С многолетним опытом в сфере веб-разработки и маркетинга, мы гордимся возможностью предложить вам наши услуги в области продвижения, которые делают ваш бизнес видимым, привлекательным и успешным.
					</p>
				</div>


				<div className='text-center border p-2 bg-slate-50 xz:mb-2 sd:mb-6'>
					<Image src='/partnery/ads.svg' alt='Google ads' className='mx-auto' width={100} height={100} />
					<p className='mb-2'>
						Google Ads
					</p>
					<p className='font-light text-sm px-10'>
						Мы создаем и оптимизируем рекламные кампании на Google, обеспечивая максимальную видимость вашего бренда и привлекая целевую аудиторию.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/analytics.svg' alt='Google Analytics' className='mx-auto' width={100} height={100} />
					<p className='mb-2'>
						Google Analytics
					</p>
					<p className='font-light text-sm px-10'>
						Анализ данных - ключевой аспект успешного маркетинга. Мы используем Google Analytics для максимально точного мониторинга и анализа поведения пользователей на вашем сайте.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/direct.svg' alt='Яндекс Директ' className='mx-auto' width={100} height={100} />
					<p className='mb-2'>
						Яндекс Директ
					</p>
					<p className='font-light text-sm px-10'>
						Эффективные рекламные кампании в Яндекс Директ, которые приводят к росту конверсии и продаж.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/metrika.svg' alt='Яндекс Метрика' className='mx-auto' width={100} height={100} />
					<p className='mb-2 mt-2'>
						Яндекс Метрика
					</p>
					<p className='font-light text-sm px-10'>
						Мы используем Яндекс Метрику для детального анализа посещаемости вашего сайта, понимания потребностей аудитории и оптимизации пользовательского опыта.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/ScreamingFrog.svg' alt='Screaming Frog' className='mx-auto' width={100} height={100} />
					<p className='mb-2 mt-2'>
						Screaming Frog
					</p>
					<p className='font-light text-sm px-10'>
						Тщательный аудит вашего сайта с использованием Screaming Frog позволяет выявить технические проблемы и оптимизировать структуру сайта.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/replain.svg' alt=' Re:plain' loading="lazy" className='mx-auto' width={100} height={100} />
					<p className='mb-2 mt-2'>
						Re:plain
					</p>
					<p className='font-light text-sm px-10'>
						Эффективная коммуникация с клиентами - залог успешного бизнеса. Мы интегрируем Re:plain для оперативной связи с вашей аудиторией.
					</p>
				</div>


				<div className='text-center border p-2 bg-slate-50 xz:mb-2 sd:mb-6'>
					<Image src='/partnery/arsenkin.svg' alt='Arsenkin' loading="lazy" className='mx-auto' width={90} height={90} />
					<p className='mb-2 mt-2'>
						Arsenkin
					</p>
					<p className='font-light text-sm px-10'>
						Уникальные инструменты для автоматизации процессов продвижения сайтов.
					</p>
				</div>


				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/serpstat.svg' alt='serpstat' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
					<p className='mb-2 mt-2'>
						Serpstat
					</p>
					<p className='font-light text-sm px-10'>
						Используя Serpstat, мы анализируем ключевые слова и конкурентное окружение, чтобы определить наилучшую стратегию продвижения.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/rush.svg' alt=' Rush-Analytic' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
					<p className='mb-2 mt-2'>
						Rush-Analytic
					</p>
					<p className='font-light text-sm px-10'>
						Для успешной оптимизации и анализа SEO-параметров мы полагаемся на инструменты, такие как Rush-Analytic.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/SEOpult.png' alt='SEOpult' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
					<p className='mb-2 mt-2'>
						SEOpult
					</p>
					<p className='font-light text-sm px-10'>
						С помощью SEOpult мы эффективно управляем SEO-стратегией, обеспечивая наилучшие результаты в органической выдаче.
					</p>
				</div>

				<div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
					<Image src='/partnery/search.svg' alt='Google Search Console' loading="lazy" className='mx-auto pt-2' width={220} height={120} />
					{/* <p className='mb-2 mt-2'>
			Google Search Console
		 </p> */}
					<p className='font-light text-sm px-10 mt-3'>
						Мониторинг здоровья вашего сайта и оптимизация для поисковых систем через Google Search Console.
					</p>
				</div>

				<p className='mt-5 p-2'>
					Мы стремимся к тому, чтобы ваш сайт стал не только функциональным, но и востребованным. Наша цель - предоставить вам комплексный и качественный сервис, который поможет вашему бизнесу процветать в онлайн-мире.
				</p>
				<p className='font-bold mt-1 p-2'>
					Присоединяйтесь к нам, и давайте вместе создадим историю успеха вашей идеи в интернете!
				</p>
			</article>
		</section>
	)
}

export default KlyuchevyeNapravleniya