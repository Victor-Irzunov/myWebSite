import { Carousel } from 'antd';
import BlockMainPage from '../blockMainPage/BlockMainPage';
import BlockMainPage2 from '../blockMainPage2/BlockMainPage2';
import LinkScrollCom from '../LinkScroll/LinkScrollCom';
import BtnComp from '../btnComp/BtnComp';

const CarouselComp = () => {
	return (
		<div className=''>
			{/* <Carousel autoplay pauseOnHover={false} effect='fade' dots={false} autoplaySpeed={3000}> */}
			<section className="min-h-screen xz:pb-6 sd:pb-0 relative">
				<div className="container mx-auto">
					<div className='pt-28'>
						<h1 className='uppercase text-[#004C97] xz:text-3xl sd:text-5xl font-semibold'>
							Создание сайтов в Минске
						</h1>
						<BlockMainPage />
					
					</div>
				</div>
				<div className='mt-0'>
					<LinkScrollCom link='site' />
				</div>
			</section>
			{/* 
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
						</section> */}
			{/* </Carousel> */}

		</div>
	);
};
export default CarouselComp;