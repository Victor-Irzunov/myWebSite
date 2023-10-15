import Image from "next/image"
import Link from "next/link"


const MenuMobil2Comp = ({ isCloseMenu, offSetToRight, keyMenu2, isActiveMenu2, isActiveMenu }) => {
	const menuAnimationClass = isActiveMenu2 ? "slide-in-right" : "slide-out-right";

	return (
		<div className={`w-full max-h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/95 z-40 ${menuAnimationClass}`}>
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
									<ul className="mt-6 font-light text-lg">

										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link
												as={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
												href='/'
											>
												<p onClick={isCloseMenu}>Разработка сайтов</p>

											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link
												as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`}
												href='/uslugi/sozdanie-mnogostranichnogo-sajta'
											>
												<p onClick={isCloseMenu}>Разработка многостраничных сайтов</p>

											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`}>
												<p onClick={isCloseMenu}>Разработка сайтов-визиток</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`}>
												<p onClick={isCloseMenu}>Разработка одностраничных сайтов</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`}>
												<p onClick={isCloseMenu}>Разработка лендингов</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`}>
												<p onClick={isCloseMenu}>Разработка интернет-магазинов</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`}>
												<p onClick={isCloseMenu}>Разработка корпоративных сайтов</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`}>
												<p onClick={isCloseMenu}>Разработка внутренних веб-приложений</p>
											</Link>
										</li>
										<li className="text-gray-100  border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/gotovye-sajty`}>
												<p onClick={isCloseMenu}>Продажа готовых сайтов</p>
											</Link>
										</li>
										<li className="text-gray-100 mb-2 hover:bg-slate-600 pl-1 pt-2 pb-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/testirovanie-it-produktov`}>
												<p onClick={isCloseMenu}>Тестирование IT продуктов</p>
											</Link>
										</li>
									</ul>
								</li>
								:
								<li className="">
									<span className='uppercase text-cyan-400 text-xl mb-5 font-semibold'>Продвижение</span>
									<ul className="text-xl mt-6 font-light">
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/prodvizhenie-sajta`}>
												<p onClick={isCloseMenu}>Продвижение сайта</p>
											</Link>
										</li>
										<li className="text-gray-100 border-b border-gray-600 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`}>
												<p onClick={isCloseMenu}>SEO продвижение</p>
											</Link>
										</li>
										<li className="text-gray-100 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`}>
												<p onClick={isCloseMenu}>Реклама Google и Яндекс</p>
											</Link>
										</li>
										<li className="text-gray-100 pb-2 hover:bg-slate-600 pl-1 pt-2">
											<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-audit-sajta`}>
												<p onClick={isCloseMenu}>SEO аудит сайта</p>
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