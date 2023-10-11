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