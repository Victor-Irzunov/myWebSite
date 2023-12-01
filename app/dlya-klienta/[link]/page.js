import { useDataArticles } from "@/hook/dataArticlesHook";
import { Empty } from "antd";
import Image from "next/image";
import Link from "next/link";

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
		case 'kak-sdelat-sajt-besplatno-samomu':
			title = 'Как сделать сайт бесплатно самому | IT компания VI:TECH';
			description = 'Хотите узнать, как создать собственный сайт бесплатно? Наша статья расскажет вам о преимуществах и ограничениях бесплатных конструкторов, а также предоставит список рекомендованных инструментов для самостоятельного создания вашего веб-пространства.';
			break;
		case '10-idej-dlya-sozdaniya-pribylnyh-sajtov':
			title = '10 Идей для создания прибыльных сайтов и заработка в интернете | IT компания VI:TECH';
			description = 'Интернет предоставляет огромные возможности для заработка. Узнайте о 10 прибыльных идей для создания сайтов и онлайн-проектов, которые могут принести вам доход. Погрузитесь в мир виртуального бизнеса.'
			break;
		case 'etapy-razrabotki-i-zapuska-sajta':
			title = 'Этапы Разработки и Запуска Сайта | IT компания VI:TECH';
			description = 'Исчерпывающий обзор этапов разработки, запуска и продвижения вашего сайта. Узнайте, как воплотить свои идеи в жизнь, создавать привлекательный дизайн, обеспечивать стабильную работу и привлекать посетителей. Наши эксперты помогут вам осуществить проект и успешно продвигать ваш бизнес в сети.'
			break;
		case 'vybor-domena-dlya-sajta':
			title = 'Выбор домена для сайта: советы и рекомендации | IT компания VI:TECH';
			description = 'Разработка и продвижение сайтов в Минске. Советы и рекомендации по выбору домена для вашего сайта от IT компании VI:TECH. Подбор домена, оптимизация, регистрация и многое другое.';
			break;
		case 'sekrety-uspeshnogo-kontent-marketinga':
			title = 'Секреты успешного контент-маркетинга | IT компания VI:TECH';
			description = 'Узнайте секреты успешного контент-маркетинга и как привлекать аудиторию к вашему бренду. В нашей статье мы расскажем вам о ключевых стратегиях, которые помогут вам создать качественный контент и добиться максимального воздействия на вашу целевую аудиторию.';
			break;
		case 'znachenie-mobilnoj-adaptivnosti':
			title = 'Значение мобильной адаптивности на сайте | IT компания VI:TECH';
			description = 'Узнайте, почему мобильная адаптивность на вашем сайте имеет критическое значение. Рассмотрим преимущества оптимизации сайта для мобильных устройств и ее влияние на пользовательский опыт, поисковую оптимизацию и конверсии.';
			break;
		case 'kak-rabotaet-seo-prodvizhenie-sajta':
			title = 'Как работает SEO-продвижение сайта | IT компания VI:TECH';
			description = 'Эффективное SEO-продвижение – ключевой инструмент для привлечения целевой аудитории, увеличения видимости и улучшения позиций в поисковых системах. Узнайте подробности о стратегиях, преимуществах и сроках SEO-продвижения в конкурентной и менее конкурентной нишах.';
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
		<main className="pt-28 pb-24">
			<article className="container mx-auto" itemScope itemType="http://schema.org/Article">
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta`}>
					<div className="flex justify-start items-center pr-1 cursor-pointer">
						<Image src='/arrow-left.svg' alt="Кнопка возврата меню" className="invert" width={30} height={30} />
						<span className="text-black ml-2 uppercase">Назад</span>
					</div>
				</Link>
					<section className="mt-12">
						<div className="mb-12">
							<h1 className="text-3xl text-[#004C97] uppercase" itemProp="name">
								{data[0].title}
							</h1>
							<p className="mt-3">Автор: <span className="italic" itemProp="author">Ирзунов Виктор</span></p>
						</div>

						<div className="">
							<div className="xz:w-full sd:w-1/3 sd:float-right xz:float-none">
								<figure>
									<Image src={data[0].img} alt={data[0].alt} className="sd:pl-4 pb-2 xz:pl-0 w-full" width={350} height={252} />
									<figcaption>{'уникальное изображение компании VI:TECH'}</figcaption>
								</figure>
							</div>
							<div className="" itemProp="articleBody">
								{data[0].content}
							</div>
						</div>
					</section>
			</article>

		</main>
	)
}
export default page