"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

const BlockMainPage2 = () => {
	return (
		<div className='sd:flex xz:flex-row sd:justify-between xz:mt-12 sd:mt-20'>
			<div className="sd:w-2/5 xz:w-full xz:h-[40vh] sd:h-auto">
				<div className='relative'>
	
					<Image
							src="/portfolio/portfolioCard/ecosan/1.webp"
							alt='Разработка адаптивного сайта под ключ'
							width={1000}
							height={566}
							className='mx-auto absolute top-0 left-0 bottom-0 right-0' loading="lazy"
						/>
					<Image
						src="/portfolio/portfolioCard/ecosan/2.webp"
						alt='Разработка и продвижение сайта'
						width={100}
						height={132}
						className='mx-auto absolute top-24 right-4' loading="lazy"
					/>
				</div>
			</div>
			<div className='mt-16 uppercase sd:text-xl xz:text-base text-white'>
				<div className='relative mb-6'>
					<LinkScroll to='main'
						smooth={true}
						offset={-100}
						duration={800}
						className="cursor-pointer"
						rel="nofollow"
						href='#/'
					>
						<Image src='/line-white.svg' alt='Линия' width={50} height={10}
							className='rotate-45 absolute top-0 left-0'
						/>
						<p className=''>
							Создание сайтов и веб приложений
						</p>
					</LinkScroll>
				</div>
				<div className='relative mb-6'>
					<Image src='/line-white.svg' alt='Линия' width={50} height={10}
						className='rotate-45 absolute top-0 left-0'
					/>
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`}>
						<p className=''>
							SEO продвижение в Google и Яндекс
						</p>
					</Link>
				</div>
				<div className='relative'>
					<Image src='/line-white.svg' alt='Линия' width={50} height={10}
						className='rotate-45 absolute top-0 left-0'
					/>
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`}>
						<p className=''>
							Продвижение при помощи рекламы Google и Яндекс
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlockMainPage2