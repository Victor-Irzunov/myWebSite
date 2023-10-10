
import Image from "next/image";
import Link from "next/link";
import MenuMobil2Comp from "./menuMobil2/MenuMobil2Comp";
import { useState } from "react";
const MenuMobil = ({ isCloseMenu, isMenuMobil }) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [isActiveMenu2, setIsActiveMenu2] = useState(false);
	const [keyMenu2, setKeyMenu2] = useState('');
	const menuClass = isMenuMobil ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full";
	const menuAnimationClass = !isActiveMenu2 ? "slide-in-left" : "slide-out-left";
	const offSetToLeft = key => {
		setIsActiveMenu(true)
		setIsActiveMenu2(true)
		if (key === 'development') setKeyMenu2('development')
		else setKeyMenu2('promotion')
	}
	const offSetToRight = () => setIsActiveMenu2(false)
	return (
		<div className="">
			<div
				className={`${isActiveMenu ? menuAnimationClass : ''} w-full max-h-screen top-0 left-0 fixed right-0 bottom-0 bg-black/95 z-40 transition-opacity duration-300 ease-in-out`}
			>
				<div className="bg-gradient-to-t from-black/0 to-black/90
			 	h-20 relative">
					<div className="container mx-auto pt-3">
						<div className={`flex justify-end pr-1 ${isActiveMenu2 ? 'opacity-0' : 'opacity-100 duration-[2000ms] ease-in-out'}`}
							onClick={isCloseMenu}
						>
							<Image src='/close.svg' alt="Кнопка закрытия меню" className={`cursor-pointer ${isActiveMenu2 ? 'pointer-events-none' : ''}`} width={40} height={40} />
						</div>
					</div>
					<div className="flex flex-col justify-center items-center pb-10 h-[90vh] overflow-y-scroll ">
						<nav className="">
							<ul className="text-center">
								<li className="text-white text-xl uppercase py-2 hover:bg-slate-700 px-2"
									onClick={isCloseMenu}
								>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
										Главная
									</Link>
								</li>
								<li className="text-white text-xl uppercase py-2 hover:bg-slate-700 px-2"
									onClick={isCloseMenu}
								>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/cena/razrabotka-sajta`}>
										Цены
									</Link>
								</li>
								<li
									className="text-center text-xl text-blue-400 uppercase py-2 px-2 cursor-pointer hover:bg-slate-700"
									onClick={() => offSetToLeft('development')}
								>
									Разработка  сайтов
								</li>
								<li
									className="text-center text-xl text-cyan-400 uppercase py-2 px-2 cursor-pointer hover:bg-slate-700"
									onClick={offSetToLeft}
								>
									Продвижение  сайтов
								</li>
								<li className="text-white text-xl uppercase py-2 hover:bg-slate-700 px-2"
									onClick={isCloseMenu}
								>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-nas`}>
										О нас</Link>
								</li>
								<li className="text-white text-xl uppercase py-2 hover:bg-slate-700 px-2"
									onClick={isCloseMenu}
								>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`}>
										Портфолио</Link>
								</li>
								<li className="text-white text-xl uppercase py-2 hover:bg-slate-700 px-2"
									onClick={isCloseMenu}
								>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}>
										Контакты</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			{
				isActiveMenu ?
					<MenuMobil2Comp isActiveMenu={isActiveMenu} offSetToRight={offSetToRight} keyMenu2={keyMenu2} isActiveMenu2={isActiveMenu2} isCloseMenu={isCloseMenu} />
					:
					null
			}
		</div>
	)
}
export default MenuMobil

