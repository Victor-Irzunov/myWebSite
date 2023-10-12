import Image from "next/image"

export const metadata = {
	title: 'Компания по разработке и продвижению сайтов VI:TECH',
	description: 'VI:TECH – ваш надежный партнер в создании и продвижении сайтов. Мы поможем вам достичь успеха в онлайн-бизнесе с помощью качественных веб-решений и опытных специалистов.'
}


const TehPodderzhka = () => {
	return (
		<main className="pt-10">
			<div className="w-full mb-20 xz:block xm:hidden fixed top-13 left-0 right-0 -z-10">
				<Image
					src="/teh-podderzhka/main5.webp"
					alt="Техподдержка компании по созданию сайтов vi:tech"
					width={994} height={785}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full mb-20 xz:hidden xm:block fixed top-14 left-0 right-0 -z-10">
				<div className="container mx-auto">
					<Image
						src="/teh-podderzhka/main4.webp"
						alt="Техподдержка компании по созданию сайтов vi:tech"
						width={1842} height={343}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<div className="bg-white xm:mt-[40vh] xz:mt-[50vh] xm:pt-12 xz:pt-10 pb-20 h-full relative">
				<div className="container mx-auto">
					<div className="text-[#004C97] font-semibold text-center">
						<h1 className="uppercase xz:text-2xl sd:text-6xl">
							Техническая поддрежка клиентов
						</h1>
					</div>

					<article className="mt-10">
						<p className="">
							Наша компания специализируется на разработке и продвижении веб-сайтов, и мы знаем, что даже самые надежные ресурсы могут иногда требовать помощи и поддержки.
						</p>
						<p className="mt-2">
							С нашей техподдержкой 24/7, вы можете быть уверены, что ваши веб-проекты всегда будут в надежных руках. Наша высококвалифицированная команда экспертов готова решать любые технические вопросы и проблемы, которые могут возникнуть в процессе работы с вашим веб-сайтом.
						</p>

						<h2 className="font-semibold mt-4 pl-3">
							Что вас ждет с нашей техподдержкой:
						</h2>

						<ul className="list-disc mt-2">
							<li className="mb-1">
								Быстрое реагирование: Мы готовы откликнуться на ваши запросы мгновенно, день и ночь.
							</li>
							<li className="mb-1">
								Решение всех вопросов: Будь то технические неполадки, вопросы по содержанию или обновлениям, мы всегда на связи, чтобы помочь вам.
							</li>
							<li className="mb-1">
								Профессиональные консультации: Наши специалисты предоставляют профессиональные советы и рекомендации для оптимизации вашего веб-проекта.
							</li>
						</ul>

						<p className="mt-4">
							Мы также понимаем, что некоторые запросы могут быть менее срочными. Если у вас нет срочной необходимости, и ваш запрос может подождать до утра, не стесняйтесь дать нам знать, и мы обязательно ответим в ближайшее рабочее время. Но если у вас срочная проблема, несомненно, наша команда готова помочь вам круглосуточно.
						</p>
						<p className="mt-4">
							Мы стремимся к тому, чтобы ваш опыт работы с нашей компанией был беззаботным и продуктивным. Не важно, где вы находитесь или в какое время суток вам нужна помощь — мы всегда здесь, чтобы поддержать вас.
						</p>

						<p className="mt-7 text-center font-semibold text-xl">
							Выберите надежную техподдержку 24/7 от нашей компании, и дайте вашему веб-проекту преимущество, которое он заслуживает. Обратитесь к нам прямо сейчас и убедитесь сами!
						</p>

						<div className="text-center mt-7">
							<a href="tel:80333511597" className="text-2xl font-semibold">
								8 (033) 351-15-97
							</a>
						</div>

						<p className="text-center font-semibold mt-7">
							Дайте нам возможность сделать ваш веб-мир еще более успешным и удивительным!
						</p>
					</article>
				</div>
			</div>
		</main>
	)
}

export default TehPodderzhka
