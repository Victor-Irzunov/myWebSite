import { Carousel } from 'antd';
import Image from 'next/image';
import { useScreens } from '@/constans/constants';

const CarouselComp = ({ main, }) => {
	const screens = useScreens()

	return (
		<div className={`xz:h-screen xm:h-auto`}>
			{
				main ?
					<Carousel autoplay pauseOnHover={false} effect='fade' dots={false}>
						<div className='relative'>
							<Image
								src={screens.xs === undefined && '/main/8-small2.webp' || screens.xs ? '/main/8-small2.webp' : '/main/7-big.webp'}
								alt='Банер страницы по разработке сайтов'
								width={screens.xs ? 575 : 1920}
								height={screens.xs ? 1022 : 1080}
								loading="eager"
								className='relative'
							/>

							{/* <div className='absolute top-1/4 left-10 text-white z-10'>
								<p className='text-3xl font-semibold uppercase'>
									Разработка
								</p>
								<p className='text-sky-500 text-6xl mt-1 font-semibold uppercase tracking-wider'>
									сайтов
								</p>


								<p className='mt-8 text-sm'>
									Лучшее качество по самой выгодной цене
								</p>
							</div> */}
						</div>
						<div>
							<Image
								src={screens.xs === undefined && '/main/2-small2.webp' || screens.xs ? '/main/2-small2.webp' : '/main/1-big2.webp'}
								alt='Банер страницы по разработке сайтов'
								width={screens.xs ? 575 : 1920}
								height={screens.xs ? 1022 : 1080}
								loading="lazy"
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