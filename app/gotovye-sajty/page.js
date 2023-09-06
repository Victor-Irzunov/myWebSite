import Image from "next/image"

export const metadata = {
	title: 'Готовые сайты в Минске | IT компания VI:TECH',
	description: 'Продажа готовых сайтов в Минске у профессиональной IT компании VI:TECH. Мы предлагаем решения для различных бизнесов и гарантируем качество и эффективность каждого проекта.'
}


const GotovyePage = () => {
	return (
		<main className="pt-10 pb-20">

			<div className="container mx-auto">

				<div className="mt-16 text-[#004C97] font-semibold">
					<h1 className="uppercase text-3xl">
						Готовые сайты в Минске
					</h1>
				</div>
				<div className="w-full relative mt-8">
					<Image
						src="/logo/logo-about.webp"
						alt="Компания по продажи готовых сайтов vi:tech"
						layout="responsive"
						objectFit="cover"
						width={370} height={223}
					/>
				</div>
			</div>

			<section className="mt-6">
				<article className="">
					<div className="container mx-auto">
						<h2 className="text-[#004C97] uppercase">
							Купить готовый сайт
						</h2>
						<p className="mt-4 text-justify">
							Иметь собственный веб-сайт стало ключевым для успешного бизнеса в современном мире. Однако разработка сайта с нуля может быть долгим и дорогостоящим процессом. Решение? Купить готовый сайт - это быстрый и удивительно выгодный способ запустить свой сайт.
						</p>
					</div>
					<div className="mt-10 bg-[#004C97] text-white py-12">
						<div className="container mx-auto">
							<h3 className="font-semibold uppercase text-center">
								Преимущества покупки готового сайта
							</h3>
							<ul className="mt-6">
								<li className="mb-2 bg-blue-600 px-3 py-4 font-light rounded-md">
									<span className="font-semibold">Сэкономьте время: </span>Когда вы покупаете готовый сайт, вы сразу же получаете готовую платформу, которую можно начать использовать. Нет необходимости ждать месяцами, пока разработчики создадут новый сайт.
								</li>
								<li className="mb-2 bg-blue-600 px-3 py-4 font-light rounded-md">
									<span className="font-semibold">Дизайн включен:  </span>Готовый сайт уже имеет установленный и настроенный дизайн. Это значит, что вам не нужно долго обсуждать дизайнерские концепции и ждать их реализации.
								</li>
								<li className="mb-2 bg-blue-600 px-3 py-4 font-light rounded-md">
									<span className="font-semibold">Бесплатное редактирование включено: </span> Мы предоставляем бесплатную услугу редактирования сайта с учетом ваших требований.
								</li>
								<li className="mb-2 bg-blue-600 px-3 py-4 font-light rounded-md">
									<span className="font-semibold">Запуск сайта: </span> Когда вы покупаете готовый сайт, он уже настроен и готов к запуску. Это означает, что вы быстро можете начать привлекать посетителей и клиентов.
								</li>
								<li className="mb-2 bg-blue-600 px-3 py-4 font-light rounded-md">
									<span className="font-semibold">Экономия средств: </span> Покупка готового сайта обычно обходится дешевле, чем полная разработка с нуля. Это позволяет сэкономить средства, которые можно вложить в другие аспекты бизнеса.
								</li>
							</ul>
							<p className="text-center font-semibold text-yellow-400 mt-8">
								Готовые сайты предоставляют удивительную возможность быстро войти в онлайн-мир и начать привлекать новых клиентов. Перейдите к действию и исследуйте разнообразие готовых сайтов, доступных для покупки, чтобы найти тот, который подходит именно вашему бизнесу. Это быстрый и эффективный способ воплотить в жизнь вашу онлайн-стратегию.
							</p>
						</div>
					</div>
				</article>
			</section>

		</main>
	)
}

export default GotovyePage