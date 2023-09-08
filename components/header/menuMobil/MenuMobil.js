import Image from "next/image"
import Link from "next/link";


const MenuMobil = ({ isCloseMenu, isMenuMobil }) => {
	const menuClass = isMenuMobil
		? "opacity-100 translate-x-0"
		: "opacity-0 -translate-x-full";

	return (
		<div
			className={`w-full  fixed top-0 left-0 right-0 bottom-0 bg-black/90 z-40 ${menuClass} transition-opacity duration-300 ease-in-out`}
		>
			<div className="bg-gradient-to-t from-black/0 to-black/90
			 h-20 relative">
				<div className="absolute top-2.5 right-4"
					onClick={isCloseMenu}
				>
					<Image src='/close.svg' alt="Кнопка закрытия меню" width={40} height={40} />
				</div>

				<div className="flex flex-col justify-center items-center h-screen pt-10">
					<nav className="">
						<ul className="text-center">
							<li className="text-white text-xl uppercase mb-2"
								onClick={isCloseMenu}
							>
								<Link href='/'>
									Главная
								</Link>
							</li>
							<li className="text-white text-xl uppercase mb-5"
								onClick={isCloseMenu}
							>
								<Link href='/cena/razrabotka-sajta'>
									Цены
								</Link>
							</li>
							<li className="text-center text-sm uppercase mb-5 font-semibold">
								<span className="text-blue-400">Разработка</span>
								<ul className="text-sm mt-2 font-light">

									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-mnogostranichnogo-sajta'>
											Многостраничный сайт
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-0"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-sajta-vizitki'>
											Сайт-визитка
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-10"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-odnostranichnogo-sajta'>
											Одностраничный сайт
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-0"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-lendinga'>
											Лендинг
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка лендинга"
												width={10}
												height={10}
												className="absolute top-0 right-16"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-internet-magazina'>
											Интернет-магазин
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-6"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/gotovye-sajty'>
											Готовые сайты
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-8"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/sozdanie-korporativnogo-sajta'>
											Корпоративные сайты
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-2"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/uslugi/vnutrennee-korporativnoe-veb-prilozhenie'>
											Внутреннее веб-приложение
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 -right-4"
											/>
										</Link>
									</li>
								</ul>
							</li>
							<li className="text-cyan-400 text-sm uppercase font-semibold mb-5">
								Продвижение
								<ul className="text-sm mt-2 font-light">
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/prodvizhenie-sajta'>
											Продвижение сайта
											<Image
												src='/arrow.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-4"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/seo-prodvizhenie-sajta'>
											SEO продвижение
											<Image
												src='/arrow.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-6"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative"
										onClick={isCloseMenu}
									>
										<Link href='/kontekstnaya-reklama'>
											Реклама Google и Яндекс
											<Image
												src='/arrow.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 -right-2"
											/>
										</Link>
									</li>
								</ul>
							</li>
							<li className="text-white text-xl uppercase mb-2"
								onClick={isCloseMenu}
							>
								<Link href='/o-nas'>
									О нас</Link>
							</li>
							<li className="text-white text-xl uppercase mb-2"
								onClick={isCloseMenu}
							>
								<Link href='/portfolio'>
									Портфолио</Link>
							</li>
							<li className="text-white text-xl uppercase"
								onClick={isCloseMenu}
							>
								<Link href='/kontakty'>
									Контакты</Link>
							</li>

						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default MenuMobil