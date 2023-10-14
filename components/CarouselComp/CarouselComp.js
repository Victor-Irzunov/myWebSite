"use client"
import { Carousel } from 'antd';
import Image from 'next/image';
import { useScreens } from '@/constans/constants';

const CarouselComp = () => {
	const screens = useScreens()

	return (
		<Carousel autoplay pauseOnHover={false} effect='fade'>
			<div>
				<Image
					src={!screens.xs ? '/testirovanie/1.webp' : '/testirovanie/3.webp'}
					alt='Банер на тему тестирования'
					width={!screens.xs ? 1920 : 598}
					height={!screens.xs ? 1080 : 970}
				/>
			</div>
			<div>
				<Image
					src={!screens.xs ? '/testirovanie/2.webp' : '/testirovanie/4.webp'}
					alt='Банер на тему тестирования'
					width={!screens.xs ? 1920 : 598}
					height={!screens.xs ? 1080 : 970}
				/>
			</div>

		</Carousel>
	);
};
export default CarouselComp;