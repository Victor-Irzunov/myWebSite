import BtnComp from "@/components/btnComp/BtnComp";
import { useDataService } from "@/hook/dataServiceHook";
import { Empty } from "antd";
import Image from "next/image";

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
		<main className="pt-36 pb-20">
			<section>
				<div className="">
					<div className="container mx-auto">
						<h1 className="text-[#004C97] uppercase font-semibold text-2xl mb-6">
							{data.title.h1}
						</h1>
					</div>
					<Image
						src={data.title.img}
						alt={data.title.alt}
						className="object-cover w-full h-full mx-auto mt-12"
						style={{ width: '512px', height: 'auto' }}
						width={512} height={370}
					/>
				</div>
				{data.data.map((el, idx) => (
					<article className="mt-20 mb-24" key={el.id}>
						<div className="container mx-auto">
							{el.h2 && <h2 className="font-semibold uppercase mb-3 text-center text-lg">{el.h2}</h2>}
							{el.h3 && <h3 className="font-semibold uppercase mb-3 text-center text-lg">{el.h3}</h3>}
							{el.h4 && <h4 className="font-semibold uppercase mb-3 text-center text-lg">{el.h4}</h4>}
							{el.h5 && <h5 className="font-semibold uppercase mb-3 text-center text-lg">{el.h5}</h5>}
							{el.img ? (
								<figure>
									<Image
										src={el.img}
										alt={el.alt}
										className="object-cover w-full h-full mx-auto mt-6"
										style={{ width: 'auto', height: 'auto' }}
										width={370} height={370}
									/>
									<figcaption>{el.figcaption || ''}</figcaption>
								</figure>
							) : null}
							{el.content}
						</div>
						{idx === data.data.length - 2 && (
							<div className="mt-16 mb-16 py-20">
								<div className="container mx-auto">
									<div className="flex items-center justify-between">
										<div className="w-7/12 text-sm font-semibold">
											Стоимость разработки многостраничного сайта
										</div>
										<p className="font-bold text-xl">
											{data.priceAndDate.price}
										</p>
									</div>
									<div className="mt-10 flex items-center justify-between">
										<div className="w-7/12 text-sm font-semibold">
											Срок разработки
										</div>
										<p className="font-bold text-lg">
											{data.priceAndDate.date}
										</p>
									</div>
									<div className="float-right mt-9">
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
