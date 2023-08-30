// "use client"
import Image from "next/image";
import { Popover } from 'antd';

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
	return (
		<header className="py-1 bg-white fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto">

				<div className="flex justify-between items-center">
					<Image src='/logo/logoAnime.svg'
						alt="Логотип компании vi-tech"
						width={170} height={37}
						className="pt-2"
					/>

					<div className="">
						<Popover content={content} title="Позвоните нам" trigger="click">
							<Image src='/telephone.svg' alt="Иконка телефона" width={25} height={25} />
						</Popover>
					</div>

					<div className="">
						<Image src='/menu.svg' alt="Кнопка меню" width={40} height={40} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header