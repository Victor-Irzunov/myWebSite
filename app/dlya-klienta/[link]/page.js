import { useDataArticles } from "@/hook/dataArticlesHook";
import { Empty } from "antd";
import Image from "next/image";

export function generateMetadata({ params: { link } }) {
	let title;
	let description;
	switch (link) {
		case 'kak-zakazat-horoshij-sajt-i-ne-pereplachivat':
			title = 'Как заказать сайт без переплат | IT компания VI:TECH';
			description = 'Узнайте полезные советы и рекомендации по заказу сайта без дополнительных расходов. Создание веб-сайта с высоким качеством и минимальными затратами.';
			break;
		case 'pochemu-kachestvo-sajta-igraet-reshayushuyu-rol':
			title = 'Почему качество сайта играет решающую роль | IT компания VI:TECH';
			description = 'Узнайте, почему качество вашего сайта имеет критическое значение для успеха вашего онлайн-бизнеса. Мы рассматриваем важность оптимизации, SEO, пользовательского опыта и других факторов.';
			break;
		case 'preimushestva-i-nedostatki-sajta-na-konstruktore':
			title = 'Сайт на конструкторе - преимущества и недостатки | IT компания VI:TECH';
			description = 'Исследуйте плюсы и минусы создания веб-сайта с использованием конструктора. Узнайте, какие преимущества и недостатки свойственны этой популярной методике разработки сайта.';
			break;
		case 'unikalnyj-sajt-sozdannyj-opytnym-razrabotchikom':
			title = 'Уникальный сайт - преимущества и недостатки | IT компания VI:TECH';
			description = 'Уникальные сайты, созданные опытными разработчиками, обладают непререкаемыми преимуществами и несут в себе некоторые недостатки. Узнайте, почему инвестиции в уникальный дизайн могут оправдать себя. Подробно рассмотрим, какие плюсы и минусы сопутствуют разработке уникальных сайтов.';
			break;
	}
	return {
		title: title,
		description: description
	};
}

const page = async ({ params: { link } }) => {
	const { data } = await useDataArticles(link);

	if (!data) return <Empty className="h-[60vh] pt-32" />;
	return (
		<main className="pt-28 pb-16">
			<article className="container mx-auto">
				<section>
					<div className="mb-12">
						<h1 className="text-3xl text-[#004C97] uppercase">
							{data[0].title}
						</h1>
					</div>

					<div className="">
						<div className="xz:w-full sd:w-1/3 sd:float-right xz:float-none">
							<Image src={data[0].img} alt={data[0].alt} className="sd:pl-4 pb-2 xz:pl-0 w-full" width={350} height={252} />
						</div>
						<div className="">
							{data[0].content}
						</div>
					</div>
				</section>
			</article>
		</main>
	)
}
export default page