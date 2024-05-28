"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import BtnComp from '../btnComp/BtnComp'

const BlockMainPage = () => {
	return (
		<div className='xz:mt-12 sd:mt-20'>
			<div className='sd:flex xz:flex-row sd:justify-between'>
				<figure>
					<Image
						src='/main/main.webp'
						alt='Компания по разрбатке сайтов'
						className="object-cover w-full h-full xz:mx-auto sd:mx-0"
						style={{ width: '512px', height: 'auto' }}
						width={512} height={370} loading="eager"
					/>
					<figcaption>команда компании VI:TECH</figcaption>
				</figure>
				<div className='mt-16 uppercase sd:text-xl xz:text-base'>
					<div className='relative mb-6'>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href='#/'
						>
							<Image src='/line-black.svg' alt='Линия' width={50} height={10}
								className='rotate-45 absolute top-0 left-0'
							/>
							<p className=''>
								Создание сайтов и веб приложений
							</p>
						</LinkScroll>
					</div>
					<div className='relative mb-6'>
						<Image src='/line-black.svg' alt='Линия' width={50} height={10}
							className='rotate-45 absolute top-0 left-0'
						/>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`}>
							<p className=''>
								SEO продвижение в Google и Яндекс
							</p>
						</Link>
					</div>
					<div className='relative'>
						<Image src='/line-black.svg' alt='Линия' width={50} height={10}
							className='rotate-45 absolute top-0 left-0'
						/>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`}>
							<p className=''>
								Продвижение при помощи рекламы Google и Яндекс
							</p>
						</Link>
					</div>

					<div className='mt-8'>
						<BtnComp title2='Получить консультацию' tag animate color='#004C97' isActive2 />
					</div>
				</div>


			</div>

		</div>
	)
}

export default BlockMainPage