"use client"
import Image from "next/image";
import { Popover } from 'antd';
import MenuMobil from "./menuMobil/MenuMobil";
import { useState } from "react";
import Link from "next/link";

const content = (
	<div>
		<a href="tel:80333511597" className="text-lg">
			+375 33 351-15-97
		</a>
		<div className="mt-2">
			<p className="font-semibold">
				Режим работы:
			</p>
			<p className="font-light">8:00-19:00</p>
			<p className="font-light">Без выходных</p>
		</div>
	</div>
);


const Header = () => {
	const [isMenuMobil, setMenuMobil] = useState(false)


	const isOpenMenu = () => {
		setMenuMobil(true)
	}
	const isCloseMenu = () => {
		setMenuMobil(false)
	}

	return (
		<header className="py-1 bg-white fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto">

				<div className="flex justify-between items-center">
					<Link href='/' className="pt-2 z-50">
						<Image src='/logo/logoAnime.svg'
							alt="Логотип компании vi-tech"
							width={170} height={37}
							className="z-50"
						/>
					</Link>

					<div className="">
						<Popover content={content} title="Позвоните нам" trigger="click">
							<Image src='/telephone.svg' alt="Иконка телефона" width={25} height={25} className="cursor-pointer" />
						</Popover>
					</div>

					<div className="" onClick={isOpenMenu}>
						<Image src='/menu.svg' className="cursor-pointer" alt="Кнопка меню" width={40} height={40} />
					</div>
				</div>
			</div>
			<MenuMobil isCloseMenu={isCloseMenu} isMenuMobil={isMenuMobil} />

		</header>
	)
}

export default Header