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

				<div className="flex flex-col justify-center items-center h-screen pt-6">
					<nav className="">
						<ul className="text-center">
							<li className="text-white text-2xl uppercase mb-6"
								onClick={isCloseMenu}
							>
								<Link href='/'>
									Главная
								</Link>
							</li>
							<li className="text-white text-2xl uppercase mb-6"
								onClick={isCloseMenu}
							>
								<Link href='/o-nas'>О нас</Link>
							</li>
							<li className="text-blue-400 text-center text-sm uppercase mb-6 font-semibold">
								Разаботка
								<ul className="text-sm mt-2 font-light">
									<li className="text-white uppercase mb-2">
										Сайт
									</li>
									<li className="text-white uppercase mb-2">
										Сайт-визитка
									</li>
									<li className="text-white uppercase mb-2">
										Одностраничный сайт
									</li>
									<li className="text-white uppercase mb-2">
										Лендинг
									</li>
									<li className="text-white uppercase mb-2">
										Интернет-магазин
									</li>
									<li className="text-white uppercase mb-2">
										Готовые сайты
									</li>
									<li className="text-white uppercase mb-2">
										Корпоративные сайты
									</li>
								</ul>
							</li>
							<li className="text-blue-400 text-sm uppercase font-semibold mb-6">
								Продвижение
								<ul className="text-sm mt-2 font-light">
									<li className="text-white uppercase mb-2">
										SEO продвижение
									</li>
									<li className="text-white uppercase mb-2">
										Реклама
									</li>
								</ul>
							</li>
							<li className="text-white text-2xl uppercase mb-6"
								onClick={isCloseMenu}
							>
								<Link href='/portfolio'>
									Портфолио</Link>
							</li>
							<li className="text-white text-2xl uppercase mb-3"
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