import BtnComp from "@/components/btnComp/BtnComp";
import { useDataService } from "@/hook/dataServiceHook";
import { Empty, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata({ params: { link } }) {
	let title;
	let description;
	switch (link) {
		case 'sozdanie-mnogostranichnogo-sajta':
			title = 'Создание многостраничного сайта в Минске | IT компания VI:TECH';
			description = 'Ищете профессиональную компанию для разработки многостраничного сайта в Минске? VI:TECH предлагает качественные услуги по созданию и продвижению многостраничных веб-ресурсов. Наши опытные специалисты помогут воплотить ваши идеи в реальность и создать функциональный и привлекательный сайт для вашего бизнеса.';
			break;
		case 'sozdanie-sajta-vizitki':
			title = 'Создание сайта-визитки в Минске | IT компания VI:TECH';
			description = 'Закажите у нас профессиональное создание сайта-визитки в Минске. Мы предоставляем качественные услуги по разработке сайтов.';
			break;
		case 'sozdanie-odnostranichnogo-sajta':
			title = 'Создание одностраничного сайта в Минске | IT компания VI:TECH';
			description = 'Вам нужен компактный и информативный одностраничный сайт в Минске? VI:TECH поможет создать привлекательную и функциональную визитку вашего бизнеса. Закажите одностраничный сайт у нас уже сегодня!';
			break;
		case 'sozdanie-lendinga':
			title = 'Создание лендинга сайта в Минске | IT компания VI:TECH';
			description = 'Закажите у нас создание лендинга сайта в Минске. Лендинг - это одностраничный веб-сайт, который создается с целью привлечения внимания посетителей и сбора информации от них. Узнайте о преимуществах лендинга и как он может помочь вашему бизнесу.';
			break;
		case 'sozdanie-internet-magazina':
			title = 'Создание интернет-магазина в Минске | IT компания VI:TECH';
			description = 'Хотите запустить свой интернет-магазин? Мы создаем мощные и удобные интернет-магазины, которые помогут вам успешно продвигать товары в сети. Контактируйте с нами прямо сейчас и начните развивать свой бизнес в интернете!'
			break;
		case 'sozdanie-korporativnogo-sajta':
			title = 'Создание корпоративных сайтов в Минске | IT компания VI:TECH';
			description = 'Закажите разработку корпоративного сайта для вашего бизнеса в Минске у профессиональной IT компании VI:TECH. Разработка корпоративных сайтов под ключ.';
			break;
		case 'vnutrennee-korporativnoe-veb-prilozhenie':
			title = 'Разработка внутреннего корпоративного сайта в Минске | IT компания VI:TECH';
			description = 'Закажите разработку внутреннего корпоративного веб-приложения для оптимизации внутренних бизнес-процессов у профессиональной IT компании VI:TECH.';
			break;

		default:
			title = 'Создание сайтов в Минске | Заказать разработку сайта под ключ, стоимость';
			description = 'Мы разрабатываем и продвигаем сайты в Минске и Беларуси. Закажите сайт у нас и получите клиентов из Google и Яндекс. Высокий результат по приятной цене!';
			break;
	}
	return {
		title: title,
		description: description
	};
}

const UniversalServicePage = async ({ params: { link } }) => {
	const { data } = await useDataService(link);

	if (!data) return <Empty className="h-[60vh] pt-32" />;
	return (
		<main className="pt-28 pb-20">
			<section>
				<div className="">
					<div className="container mx-auto sd:flex xz:flex-row">
						<h1
							className="text-[#004C97] 
							leading-10 uppercase font-semibold
							xz:text-3xl sd:text-5xl xz:mb-12
							sd:mb-0 sd:leading-[60px] xz:leading-10 sd:pt-10 xz:pt-0 sd:mr-7 xz:mr-0"
						>
							{data.title.h1}
						</h1>
						<Image
							src={data.title.img}
							alt={data.title.alt}
							className="object-cover w-full h-full mx-auto"
							style={{ width: '512px', height: 'auto' }}
							width={512} height={370}
						/>
					</div>
				</div>
				{data.data.map((el, idx) => (
					<article className={`sd:mt-6 xz:mt-16 mb-24`} key={el.id}>
						<div className="container mx-auto">
							{el.h2 &&
								<div className='mb-3'>
									<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
									<h2 className='text-[#004C97] uppercase xz:text-xl sd:text-2xl mb-6'>{el.h2}</h2>
								</div>}
							{el.h3 &&
								<div className='mb-3'>
									<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
									<h3 className='text-[#004C97] uppercase xz:text-xl sd:text-2xl mb-6'>{el.h3}</h3>
								</div>}
							{el.h4 &&
								<div className='mb-3'>
									<Image src='/line.svg'
										alt='Линия'
										width={50}
										height={10}
										className='rotate-45' />
									<h4 className='text-[#004C97] uppercase xz:text-xl sd:text-2xl mb-6'>{el.h4}</h4>
								</div>}
							{el.h5 &&
								<div className='mb-3'>
									<Image src='/line.svg' alt='Линия' width={50} height={10} className='rotate-45' />
									<h5 className='text-[#004C97] uppercase xz:text-xl sd:text-2xl mb-6'>{el.h5}</h5>
								</div>}

							{el.img ? (
								<figure>
									<Image
										src={el.img}
										alt={el.alt}
										className="object-cover w-full h-full mx-auto mt-16"
										style={{ width: '512px', height: 'auto' }}
										width={512} height={370}
									/>
									<figcaption>{el.figcaption || ''}</figcaption>
								</figure>
							) : null}

							<div className="mt-10">
								<p className="text-justify">
									{el.content.description.split(' ').map((word, index) => (
										index < el.content.counSymb ? <b key={index}>{word} </b> : word + ' '
									))}
								</p>
							</div>


							<div className="mt-6">
								{el.content.steps1 && el.content.steps1.map(elem => {
									return (
										<div
											className={`bg-slate-100  ${idx === 0 ? 'text-center' : 'text-left'} mb-2.5 rounded-lg p-3`}
											key={elem.id}
										>
											<h3 className="mb-2 pt-1 text-[#004C97] uppercase">
												{elem.title}
											</h3>
											<ul className="">
												{elem.points.map((item, idx) => {
													return (
														<li className="mb-2 pl-1" key={idx}>
															{item}
														</li>
													)
												})}
											</ul>
										</div>
									)
								})}
							</div>

							<div className="">
								{el.content.steps2 ?
									el.content.steps2.map(elem => {
										return (
											<div className="bg-slate-100 rounded-lg p-3 mt-4" key={elem.id}>
												<h3 className="mb-3 mt-5 text-[#004C97]  uppercase">
													{elem.title}
												</h3>
												<ul className="">
													{elem.points.map((item, idx) => {
														return (
															<li className="pl-2 mb-2 font-light" key={idx}>
																{item}
															</li>
														)
													})}
												</ul>
											</div>
										)
									})
									:
									null
								}
							</div>

							{el.content.conclusion &&
								<div className="xz:mt-6 sd:mt-12 text-center text-[#004C97] xz:text-lg sd:text-xl">
									<p className="">
										{el.content.conclusion}
									</p>
								</div>
							}
							{
								el.content.action &&
								<div className="text-center text-[#004C97] mt-16 text-lg">
									<p className="font-semibold">
										{el.content.action}
									</p>
								</div>
							}
							{
								el.content.example &&
								<div className="mt-4">
									{el.content.example.map((elem, idx) => {
										return (
											<div className={`mb-2 ${idx === el.content.example.length - 1 ? 'bg-white' : 'bg-slate-50'} rounded-lg px-2 py-4 text-justify`} key={idx}>
												<p className={`${idx === el.content.example.length - 1 ? 'font-semibold' : ''}`}>
													{elem}
												</p>
											</div>
										)
									})}
								</div>
							}
							{
								idx === 0 && <div className="my-20 px-2">
									<div className="mb-20">
										<p className="font-semibold uppercase mb-2 sd:text-xl xz:text-lg">
											Оцените свой проект
										</p>
										<p className="mb-4">
											Хотите узнать, сколько будет стоить и сколько времени потребуется для разработки вашего проекта? Оцените свой проект прямо сейчас! Поделитесь с нами ваши пожелания и требования, и наши эксперты предоставят вам детальную информацию о стоимости и сроках реализации. Начнем работу над вашей идеей вместе!
										</p>
										<BtnComp tag={true} title2={`Оценить свой проект`} konsultaciya={true} />
									</div>
									<p className="font-semibold uppercase mb-3 text-lg">
										Наши услуги по продвижению
									</p>
									<Link href='/prodvizhenie-sajta' className="flex underline uppercase text-[#004C97] mb-3">
										Продвижение сайта в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
									</Link>
									<Link href='/seo-prodvizhenie-sajta' className="flex underline uppercase text-[#004C97] mb-3">
										SEO (органическое) продвижение сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
									</Link>
									<Link href='/kontekstnaya-reklama' className="flex underline uppercase text-[#004C97]">
										Реклама в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
									</Link>
								</div>
							}
							{
								idx === 1 && <div className="my-20 bg-blue-300 rounded-2xl pt-8 pb-8">
									<div className="text-center px-2">
										<p className="mb-6 font-semibold sd:text-lg xz:text-base">
											Закажите свой сайт сегодня и превратите свои идеи в реальность! Свяжитесь с нами прямо сейчас, и мы с удовольствием начнем работу над вашим будущим cайтом
										</p>
										<a href="tel:80333511597" >
											<Tag bordered={false} color="#108ee9" className="text-xl">
												+375 33 351-15-97
											</Tag>
										</a>
									</div>
								</div>
							}

						</div>
						{idx === data.data.length - 2 && (
							<div className="mt-16 mb-16 pt-24 pb-36 bg-[#004C97] text-white">
								<div className="container mx-auto">
									<div className="flex items-center justify-between">
										<div className="w-1/2 xz:text-xs sd:text-lg">
											Стоимость разработки многостраничного сайта
										</div>
										<p className="font-bold text-xl sd:text-2xl">
											{data.priceAndDate.price}
										</p>
									</div>
									<div className="mt-10 flex items-center justify-between">
										<div className="w-1/2 xz:text-xs sd:text-lg">
											Срок разработки
										</div>
										<p className="font-bold text-xl">
											{data.priceAndDate.date}
										</p>
									</div>
									<div className="float-right mt-12">
										<BtnComp el={data.title.h1} />
									</div>
								</div>
							</div>
						)}
					</article>
				))}
			</section>
		</main>
	);
};

export default UniversalServicePage;
