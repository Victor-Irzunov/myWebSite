"use client"
import Link from "next/link"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const page = () => {
	const router = useRouter();

	useEffect(() => {
		// Проверяем, что мы находимся на странице благодарности
		if (router.pathname === '/uspeshnaya-otpravka') {
			// Отправка события в GTM при загрузке страницы благодарности
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'formSubmissionSuccess',
				formType: 'questionForm', // Здесь можно указать тип отправленной формы
			});
		}
	}, [router.pathname]);


	return (
		<main className="pt-20 min-h-screen">
			<section className=''>
				<div className='container mx-auto text-center flex flex-col justify-center items-center min-h-[80vh]'>

					<h1 className="sd:text-5xl xz:text-3xl text-[#004C97]">
						Ваш запрос успешно отправлен!
					</h1>
					<p className='mt-8'>
						Мы вам перезвоним в ближайшее время.
					</p>

					<div className='flex mt-10'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} className="mx-4 underline">
							На главную
						</Link>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`} className="mx-4 underline">
							Контакты
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}

export default page