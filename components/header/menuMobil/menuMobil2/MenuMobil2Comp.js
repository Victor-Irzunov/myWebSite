import Image from "next/image"
import Link from "next/link"


const MenuMobil2Comp = ({ isCloseMenu, offSetToRight, keyMenu2, isActiveMenu2 ,isActiveMenu }) => {
	const menuAnimationClass = isActiveMenu2 ? "slide-in-right" : "slide-out-right";

	return (
		<div className={`w-full max-h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-40 ${menuAnimationClass}`}>
			<nav className="">
				<div className="container mx-auto pt-20">
					<div className="flex justify-start items-center pr-1 cursor-pointer"
						onClick={offSetToRight}
					>
						<Image src='/arrow-left.svg' alt="Кнопка возврата меню"
							className="" width={30} height={30}
						/>
						<span className="text-white ml-2 uppercase">Назад</span>
					</div>
					<ul className="mt-10">
						{
							keyMenu2 === 'development' ?
								<li className="mb-5 font-semibold">
									<span className="text-blue-400 text-xl uppercase">Разработка</span>
									<ul className="mt-8 font-light">

										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link
												as={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
												href='/uslugi/sozdanie-mnogostranichnogo-sajta'
											>
												Разработка сайта

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link
												as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`}
												href='/uslugi/sozdanie-mnogostranichnogo-sajta'
											>
												Разработка многостраничного сайта

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`}>
												Разработка сайта-визитки

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`}>
												Разработка одностраничного сайта

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`}>
												Разработка лендинга

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`}>
												Разработка интернет-магазина

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/gotovye-sajty`}>
												Продажа готовых сайтов

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`}>
												Разработка корпоративных сайтов

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`}>
												Разработка внутреннего веб-приложения

											</Link>
										</li>
									</ul>
								</li>
								:
								<li className="">
									<span className='uppercase text-cyan-400 text-xl mb-5 font-semibold'>Продвижение</span>
									<ul className="text-xl mt-6 font-light">
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/prodvizhenie-sajta`}>
												Продвижение сайта

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative border-b border-gray-600 pb-2"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`}>
												SEO продвижение

											</Link>
										</li>
										<li className="text-gray-100 mb-2 relative"
											onClick={isCloseMenu}
										>
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`}>
												Реклама Google и Яндекс

											</Link>
										</li>
									</ul>
								</li>
						}
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default MenuMobil2Comp