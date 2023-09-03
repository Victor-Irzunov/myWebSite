import Image from "next/image"
import Link from "next/link";


const MenuMobil = ({ isCloseMenu, isMenuMobil }) => {
	const menuClass = isMenuMobil
		? "opacity-100 translate-x-0"
		: "opacity-0 -translate-x-full";

	return (
		<div
			className={`w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/90 z-40 ${menuClass} transition-opacity duration-300 ease-in-out`}
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
							<li className="text-white text-2xl uppercase mb-4"
								onClick={isCloseMenu}
							>
								<Link href='/'>
									Главная
								</Link>
							</li>
							<li className="text-white text-2xl uppercase mb-6"
								onClick={isCloseMenu}
							>
								<Link href='/cena/razrabotka-sajta'>
									Цены
								</Link>
							</li>
							<li className="text-center text-sm uppercase mb-6 font-semibold">
								<span className="text-blue-400">Разработка</span>
								<ul className="text-sm mt-2 font-light">

									<li className="text-gray-100 uppercase mb-2 relative">
										<Link href='/uslugi/sozdanie-mnogostranichnogo-sajta'>
											Многостраничный сайт
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 -right-4"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										<Link href='/uslugi/sozdanie-sajta-vizitki'>
											Сайт-визитка
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 right-4"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										<Link href='/uslugi/sozdanie-odnostranichnogo-sajta'>
											Одностраничный сайт
											<Image
												src='/arrow-blue.svg'
												alt="ссылка на страницу разработка сайтов"
												width={10}
												height={10}
												className="absolute top-0 -right-5"
											/>
										</Link>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										Лендинг
										<Image
											src='/arrow-blue.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 right-10"
										/>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										Интернет-магазин
										<Image
											src='/arrow-blue.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 -right-2"
										/>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										Готовые сайты
										<Image
											src='/arrow-blue.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 right-2"
										/>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										Корпоративные сайты
										<Image
											src='/arrow-blue.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 -right-4"
										/>
									</li>
								</ul>
							</li>
							<li className="text-blue-400 text-sm uppercase font-semibold mb-6">
								Продвижение
								<ul className="text-sm mt-2 font-light">
									<li className="text-gray-100 uppercase mb-2 relative">
										SEO продвижение
										<Image
											src='/arrow.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 right-0"
										/>
									</li>
									<li className="text-gray-100 uppercase mb-2 relative">
										Реклама Google и Яндекс
										<Image
											src='/arrow.svg'
											alt="ссылка на страницу разработка сайтов"
											width={10}
											height={10}
											className="absolute top-0 -right-6"
										/>
									</li>
								</ul>
							</li>
							<li className="text-white text-2xl uppercase mb-4"
								onClick={isCloseMenu}
							>
								<Link href='/portfolio'>
									Портфолио</Link>
							</li>
							<li className="text-white text-2xl uppercase"
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