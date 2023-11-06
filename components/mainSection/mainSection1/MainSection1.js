import Image from 'next/image'
import BlockMainPage from '@/components/blockMainPage/BlockMainPage';
import LinkScrollCom from '@/components/LinkScroll/LinkScrollCom';
import PriceSection from '@/components/priceSection/PriceSection';
import ChtoMyDelaem from '@/components/mainSection/ChtoMyDelaem';
import CeliKlientov from '@/components/mainSection/CeliKlientov';

const MainSection1 = () => {

	return (
		<div className=''>
			<article id='main' className="font-light bg-[#004C97] pb-8 pt-12 px-5 text-white">
				<div className='container mx-auto'>
					<p className=" xz:p-2 sd:p-5 xz:text-base sd:text-xl">
						<span className='font-semibold'>Создание сайта</span> - это важный этап в развитии любого бизнеса в интернете.
						Но одного только сайта недостаточно, чтобы привлечь клиентов и начать зарабатывать.
						Ключевым фактором является продвижение ресурса в поисковых системах.
					</p>
					<p className="mt-3  xz:p-2 sd:p-5 xz:text-base sd:text-xl">
						<span className='font-semibold'> Мы предлагаем </span> комплексное решение, включающее разработку сайта и его раскрутку в Google и Яндекс.
						Благодаря грамотной SEO-оптимизации и настройке контекстной рекламы ваш сайт быстро займет лидирующие позиции в выдаче,
						и вы начнете получать целевой трафик из поиска каждый день.
					</p>
					<p className="mt-3 xz:p-2 sd:p-5 xz:text-base sd:text-xl">
						<span className='font-semibold'>SEO и контекстная реклама </span> работают 24 часа в сутки, привлекая потенциальных клиентов именно тогда,
						когда они ищут такие товары и услуги как ваши. Вы получите стабильный прирост посетителей и заказов с минимальными затратами.
					</p>
					<p className="mt-3 text-right px-2 tracking-wider xz:p-2 sd:p-5 xz:text-base sd:text-xl font-bold">
						Мы гарантируем высокие результаты в продвижении за счет использования передовых технологий,
						опыта специалистов и индивидуального подхода к каждому проекту. Зарабатывайте больше с помощью интернет-маркетинга вместе с нами!
					</p>
					<Image
						src='/stakan.webp'
						alt='Логотип компании vi-tech на визитке'
						width={140} height={140}
						className='mt-6'
						loading="lazy"
					/>
				</div>
			</article>

			<ChtoMyDelaem />

			<CeliKlientov />

			<PriceSection />
		</div>
	)
}

export default MainSection1