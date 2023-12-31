"use client"
import Image from "next/image";
import { Badge, Popover, Space } from 'antd';
import MenuMobil from "./menuMobil/MenuMobil";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

function gtag_report_conversion(url) {
	var callback = function () { };
	window.gtag('event', 'conversion', {
		'send_to': 'AW-11359232505/FETvCOT4vukYEPnDwKgq',
		'event_callback': callback
	});
	return false;
}

const content = (
	<div className="px-3">
		<a href="tel:80333511597"
			className="text-xl"
			onClick={() => gtag_report_conversion('/')}
		>
			+375 33 351-15-97
		</a>
		<div className="mt-4">
			<p className="font-semibold">
				Режим работы:
			</p>
			<div className="pl-1">
				<p className="">8:00-19:00</p>
				<Space direction="">
					<Badge status="success" />
					<Badge status="success" />
					<Badge status="success" />
					<Badge status="success" />
					<Badge status="success" />
					<Badge status="success" />
					<Badge status="error" style={{ color: 'red' }} text='Вс' />
				</Space>
			</div>
		</div>
	</div>
);

const Header = () => {
	const [isMenuMobil, setMenuMobil] = useState(false);
	const [isScrolled, setScrolled] = useState(false);
	const [isBlue, setIsBlue] = useState(true);
	// const pathname = usePathname();
	// const isTestPage = pathname === '/testirovanie-it-produktov';
	// const isMainPage = pathname === '/';

	// useEffect(() => {
	//   const interval = setInterval(() => {
	// 	 setIsBlue((prevIsBlue) => !prevIsBlue);
	//   }, 3000);
 
	//   return () => {
	// 	 clearInterval(interval);
	//   };
	// }, []);

	const isOpenMenu = () => {
		setMenuMobil(true)
	}
	const isCloseMenu = () => {
		setMenuMobil(false)
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

 

  const headerClass = !isBlue ? "bg-[#004C97]" : "bg-white";

	return (
		<header className={`py-1 fixed top-0 left-0 right-0 z-50 bg-white`}>

			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} as='/' className="pt-2 z-50">
						<Image
							src='/logo/logoAnime.svg'
							alt="Логотип компании vi-tech"
							width={170} height={37}
							className="z-50"
							onClick={isCloseMenu}
						/>
					</Link>
					<div className="">
						<Popover content={content} title="Позвоните нам" trigger="click">
							<Image
								src='/telephone.svg'
								alt="Иконка телефона"
								width={25} height={25}
								className={`cursor-pointer`}
							/>
						</Popover>
					</div>
					<div className="" onClick={isOpenMenu}>
						<Image src='/menu.svg'
							className={`cursor-pointer `}
							alt="Кнопка меню"
							width={40} height={40}
						/>
					</div>
				</div>
			</div>
			{
				isMenuMobil ?
					<MenuMobil isCloseMenu={isCloseMenu} isMenuMobil={isMenuMobil} />
					:
					null
			}
		</header>
	)
}

export default Header