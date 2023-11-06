import { Carousel } from 'antd';
import Image from 'next/image';
import BlockMainPage from '../blockMainPage/BlockMainPage';
import BlockMainPage2 from '../blockMainPage2/BlockMainPage2';
import LinkScrollCom from '../LinkScroll/LinkScrollCom';

const CarouselComp = ({ main }) => {

	return (
		<div className=''>
			{
				main ?
					<Carousel autoplay pauseOnHover={false} effect='fade' dots={false}>

						<section className="min-h-screen xz:pb-20 sd:pb-0 relative">
							<div className="container mx-auto">
								<div className='pt-28'>
									<h1 className='uppercase text-[#004C97] xz:text-3xl sd:text-5xl font-semibold'>
										Разработка сайтов в Минске
									</h1>
									<BlockMainPage />
								</div>
							</div>
							<div className='absolute bottom-0 left-0 right-0'>
								<LinkScrollCom link='site' />
							</div>
						</section>

						<section className="bg-[#004C97] min-h-screen pt-28 xz:pb-20 sd:pb-0 relative">
							<div className="container mx-auto ">
								<div className=''>
									<h2 className='uppercase text-white xz:text-3xl sd:text-5xl font-semibold'>
										Сайт под ключ
									</h2>
									<BlockMainPage2 />
								</div>
							</div>
							<div className='absolute bottom-0 left-0 right-0'>
								<LinkScrollCom link='site' color='text-white' />
							</div>
						</section>
					</Carousel>
					:
					<Carousel autoplay pauseOnHover={false} effect='fade'>
						<div>
							<Image
								src={screens.xs === undefined && '/testirovanie/5.webp' || screens.xs ?
									'/testirovanie/5.webp' : '/testirovanie/1.webp'}
								alt='Банер на тему тестирования'
								width={!screens.xs ? 1920 : 598}
								height={!screens.xs ? 1080 : 970}
								loading="eager"
							/>
						</div>
						<div>
							<Image
								src={screens.xs === undefined && '/testirovanie/4.webp' || screens.xs ?
									'/testirovanie/4.webp' : '/testirovanie/2.webp'}
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