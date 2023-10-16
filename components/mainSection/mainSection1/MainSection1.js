import Image from 'next/image'
import BlockMainPage from '@/components/blockMainPage/BlockMainPage';
import LinkScrollCom from '@/components/LinkScroll/LinkScrollCom';
import PriceSection from '@/components/priceSection/PriceSection';
import ChtoMyDelaem from '@/components/mainSection/ChtoMyDelaem';
import CeliKlientov from '@/components/mainSection/CeliKlientov';

const MainSection1 = () => {

	return (
		<div className=''>
					<div className=''>
						<section className="">
							<div className="container mx-auto">
								<div className=''>
									<h1 className='uppercase text-[#004C97] xz:text-3xl sd:text-5xl font-semibold'>
										Разработка сайтов в Минске
									</h1>
									<BlockMainPage />
								</div>
							</div>
						</section>

						<LinkScrollCom link='site' />

						<article id='main' className="mt-16 font-light bg-[#004C97] pb-8 pt-8 px-5 text-white">
							<div className='container mx-auto'>
								<p className=" bg-blue-700 xz:p-2 sd:p-5 xz:text-base sd:text-lg text-center">
									<span className='font-semibold'>Создание сайта</span> - это важный этап в развитии любого бизнеса в интернете.
									Но одного только сайта недостаточно, чтобы привлечь клиентов и начать зарабатывать.
									Ключевым фактором является продвижение ресурса в поисковых системах.
								</p>
								<p className="mt-3 text-center bg-blue-600 xz:p-2 sd:p-5 xz:text-base sd:text-lg">
									<span className='font-semibold'> Мы предлагаем </span> комплексное решение, включающее разработку сайта и его раскрутку в Google и Яндекс.
									Благодаря грамотной SEO-оптимизации и настройке контекстной рекламы ваш сайт быстро займет лидирующие позиции в выдаче,
									и вы начнете получать целевой трафик из поиска каждый день.
								</p>
								<p className="mt-3 text-center bg-blue-700 xz:p-2 sd:p-5 xz:text-base sd:text-lg">
									<span className='font-semibold'>SEO и контекстная реклама </span> работают 24 часа в сутки, привлекая потенциальных клиентов именно тогда,
									когда они ищут такие товары и услуги как ваши. Вы получите стабильный прирост посетителей и заказов с минимальными затратами.
								</p>
								<p className="mt-3 text-right px-2  xz:p-2 sd:p-5 xz:text-base sd:text-xl text-yellow-400 font-semibold">
									Мы гарантируем высокие результаты в продвижении за счет использования передовых технологий,
									опыта специалистов и индивидуального подхода к каждому проекту. Зарабатывайте больше с помощью интернет-маркетинга вместе с нами!
								</p>
								<Image
									src='/stakan.webp'
									alt='Логотип компании vi-tech на визитке'
									width={130} height={130}
									className=''
									loading="lazy"
								/>
							</div>
						</article>

						<ChtoMyDelaem />

						<CeliKlientov />

						<PriceSection />
					</div>
		</div>
	)
}

export default MainSection1