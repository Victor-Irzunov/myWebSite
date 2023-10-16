"use client"
import { Carousel } from 'antd';
import Image from 'next/image';
import { useScreens } from '@/constans/constants';

const CarouselComp = ({ main, }) => {
	const screens = useScreens()

	return (
		<div className={`xz:h-screen xm:h-auto`}>
			{
				main ?
					<Carousel autoplay pauseOnHover={false} effect='fade'>
						<div>
							<Image
								src={screens.xs === undefined && '/main/8-small.webp' || screens.xs ? '/main/8-small.webp' : '/main/7-big.webp'}
								alt='Банер страницы по разработки сайтов'
								width={screens.xs ? 1080 : 1920}
								height={screens.xs ? 1920 : 1080}
								loading="eager"
							/>
						</div>
						{/* <div>
							<Image
								src={screens.xs === undefined && '/main/3-small.webp' || screens.xs ? '/main/3-small.webp' : '/main/4-big.webp'}
								alt='Банер страницы по разработки сайтов'
								width={screens.xs ? 1080 : 1920}
								height={screens.xs ? 1920 : 1080}
								loading="eager"
							/>
						</div> */}
						<div>
							<Image
								src={screens.xs === undefined && '/main/2-small2.webp' || screens.xs ? '/main/2-small2.webp' : '/main/1-big.webp'}
								alt='Банер страницы по разработки сайтов'
								width={screens.xs ? 1080 : 1920}
								height={screens.xs ? 1920 : 1080}
								loading="eager"
							/>
						</div>
						
					</Carousel>
					:
					<Carousel autoplay pauseOnHover={false} effect='fade'>
						<div>
							<Image
								src={screens.xs === undefined && '/testirovanie/5.webp' || screens.xs ? '/testirovanie/5.webp' : '/testirovanie/1.webp'}
								alt='Банер на тему тестирования'
								width={!screens.xs ? 1920 : 598}
								height={!screens.xs ? 1080 : 970}
								loading="eager"
							/>
						</div>
						<div>
							<Image
								src={screens.xs === undefined && '/testirovanie/4.webp' || screens.xs ? '/testirovanie/4.webp' : '/testirovanie/2.webp'}
								alt='Банер на тему тестирования'
								width={!screens.xs ? 1920 : 598}
								height={!screens.xs ? 1080 : 970}
								loading="eager"
							/>
						</div>

					</Carousel>
			}
		</div>
	);
};
export default CarouselComp;