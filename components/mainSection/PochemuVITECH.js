import Image from "next/image"


const PochemuVITECH = () => {
	return (
		<section className='mt-16'>
			<article className='container mx-auto'>
				<div className='mb-3'>
					<Image src='/line.svg' alt='Линия' width={50} height={10}
						className='rotate-45'
					/>
					<h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
						Почему VI:TECH?
					</h2>
				</div>

				<div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-10 sd:mb-16 xz:mb-3'>
					<Image src='/pochemu.webp'
						alt=' Почему VI:TECH'
						className="object-cover w-full h-full xz:mx-auto sd:mx-0"
						style={{ width: '512px', height: 'auto' }}
						width={512} height={370} loading="lazy"
					/>
					<div className="xz:mt-4 sd:mt-0 xz:ml-0 sd:ml-8" >
						<h3 className='p-3 font-semibold uppercase'>
							Наш подход к разработке и продвижению сайтов
						</h3>
						<p className='mb-3 p-3 text-justify'>
							Добро пожаловать в мир VI:TECH, где ваш веб-опыт превращается в эффективное средство достижения целей. Наша философия заключается в том, чтобы не только создавать красивые сайты, но и обеспечивать их максимальную функциональность, видимость и привлекательность для вашей аудитории. Позвольте рассказать о том, почему именно VI:TECH – это правильный выбор.
						</p>
					</div>
				</div>

				<div className='bg-teal-50 p-3 rounded-md mb-1'>
					<h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
						Целенаправленный подход:
					</h4>
					<p className='text-justify'>
						Мы не просто разрабатываем сайты. Мы создаем инструменты, которые помогают вам достигать ваших бизнес-целей. Наша команда вникает в ваши потребности, анализирует ваш рынок и аудиторию, чтобы создать веб-решение, которое идеально подходит для вашего бренда. Мы преображаем ваши идеи в стратегический онлайн-план.
					</p>
				</div>


				<div className='bg-slate-50 p-3 rounded-md mb-1'>
					<h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
						Современный дизайн и пользовательский опыт:
					</h4>
					<p className='text-justify'>
						Мы понимаем, что первое впечатление имеет огромное значение. Наши дизайнеры и разработчики тщательно продумывают каждую деталь, чтобы ваш сайт не только выглядел современно, но и был удобен в использовании. Мы стремимся создать платформу, которая навигируется интуитивно и оставляет положительное впечатление на посетителей.
					</p>
				</div>

				<div className='bg-teal-50 p-3 rounded-md mb-1'>
					<h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
						Интеграция технологий и инноваций:
					</h4>
					<p className='text-justify'>
						Мир онлайн-технологий постоянно меняется, и мы всегда на шаг впереди. Мы используем передовые инструменты и методы, чтобы обеспечить ваш сайт современными возможностями. Будь то адаптивный дизайн, мобильная оптимизация или интеграция с социальными сетями – мы готовы реализовать самые смелые идеи.
					</p>
				</div>

				<div className='bg-slate-50  p-3 rounded-md mb-1'>
					<h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
						Продвижение с результатом:
					</h4>
					<p className='text-justify'>
						Наши специалисты по продвижению знают, как сделать ваш сайт видимым для вашей целевой аудитории. Мы разрабатываем персонализированные стратегии SEO, контекстной рекламы и других методов, которые привлекают и конвертируют посетителей. Наша цель – не просто увеличить трафик, а обеспечить вас реальными результатами.
					</p>
				</div>

				<div className='p-3 rounded-md mb-1 text-justify'>
					<p className='font-semibold text-[#004C97]'>
						Когда вы выбираете VI:TECH, вы выбираете команду профессионалов, которая не только делает свою работу, но и разделяет ваши цели. Мы создаем не просто сайты, а партнерские отношения, направленные на ваш успех. С нами ваш онлайн-мир становится ярким и результативным.
					</p>
				</div>
			</article>
		</section>
	)
}

export default PochemuVITECH