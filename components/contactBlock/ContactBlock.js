"use client"
import BtnTelContactPage from "../btnTelContactPage/BtnTelContactPage";
import { Badge, Space } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ContactBlock = () => {
	const [isOpen, setIsOpen] = useState(true);
	const contactBlockRef = useRef(null);

	useEffect(() => {
		if (contactBlockRef.current) {
			const { current: contactBlock } = contactBlockRef;

			if (isOpen) {
				contactBlock.style.transform = "translateX(0)";
			} else {
				contactBlock.style.transform = "translateX(-100%)";
			}
		}
	}, [isOpen]);

	return (
		<div ref={contactBlockRef}
			className={`
			bg-white xz:w-full xy:w-4/5
			sd:w-1/2 overflow-x-hidden
			rounded-r-md shadow-xl pt-10 pb-3
			px-3 absolute top-16 left-0
			transition-transform duration-500
			 ${isOpen ? "slide-in-left" : "slide-out-left sd:left-12 xz:left-9"}
			 `}
		>
			<div className="absolute top-1.5 right-1.5" onClick={() => setIsOpen(!isOpen)}>
				{
					isOpen ?
						<Image src="/close-blue.svg" className="cursor-pointer" alt="Кнопка закрытия блока контактов" width={25} height={25} />
						:
						<Image src="/arrow-right-blue.svg" className="cursor-pointer" alt="Кнопка закрытия блока контактов" width={25} height={25} />
				}
			</div>

			<div className="flex items-start mb-5">
				<Image src='/contact/location.svg'
					alt='Адрес компании VI:TECH'
					width={30} height={30}
					className=""
				/>
				<span className="ml-3">Республика Беларусь г.Минск ул. К.Туровского 8</span>
			</div>
			<BtnTelContactPage />

			<div className="flex items-start mb-5">
				<Image src='/contact/mail.svg' alt='Почта  компании VI:TECH' width={30} height={30} />
				<span className="ml-3">info.contact.vitech@gmail.com</span>
			</div>
			<div className="flex items-start mb-5">
				<Image src='/contact/1003.svg' alt='Почта  компании VI:TECH' width={35} height={35} />
				<div className="ml-3">
					<p className="font-semibold">
						Режим работы:
					</p>
					<p className="">
						8:00-19:00
					</p>
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

			<div className="flex items-center mt-2 pl-10">
				<a href='https://t.me/@Victor_developer' target="_blank" className="mr-5">
					<Image src='/contact/telegram.svg' alt='Телеграмм для заказа создания сайта' width={30} height={30}
					/>
				</a>
				<a href='viber://chat?number=%2B375333511597' target="_blank" className="mr-5">
					<Image src='/contact/viber.svg' alt='Вайбер для заказа создания сайта' width={30} height={30}
					/>
				</a>
				<a href="https://www.instagram.com/webproduct_developer" target="_blank">
					<Image src='/contact/instagram.svg' alt='Инстаграм для заказа создания сайта' width={35} height={35} />
				</a>
			</div>
		</div>
	)
}

export default ContactBlock;

