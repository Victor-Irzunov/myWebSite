"use client"
import { Carousel } from 'antd';
import Image from 'next/image';
import { useScreens } from '@/constans/constants';

const CarouselComp = () => {
	const screens = useScreens()
	console.log("🚀 🚀 🚀  _ file: CarouselComp.js:8 _ CarouselComp _ screens:", screens)

	return (
		<Carousel autoplay={true}>
			<div>
				<Image src={!screens.xs ? '/testirovanie/1.webp' : '/testirovanie/3.webp'} alt='Банер на тему тестирования' width={1920} height={1080} />
			</div>
			<div>
			<Image src={!screens.xs ? '/testirovanie/2.webp' : '/testirovanie/4.webp'}  alt='Банер на тему тестирования' width={1920} height={1080} />
			</div>

		</Carousel>
	);
};
export default CarouselComp;