import { useDataService } from "@/hook/dataServiceHook"
import { Empty } from "antd"

export function generateMetadata({ params: { link } }) {
	let title
	let description

	switch (link) {

		case 'sozdanie-mnogostranichnogo-sajta':
			title = 'Создание многостраничного сайта в Минске | IT компания VI:TECH'
			description = 'Ищете профессиональную компанию для разработки многостраничного сайта в Минске? VI:TECH предлагает качественные услуги по созданию и продвижению многостраничных веб-ресурсов. Наши опытные специалисты помогут воплотить ваши идеи в реальность и создать функциональный и привлекательный сайт для вашего бизнеса.'
			break

	}

	return {
		title: title,
		description: description
	}
}

const UniversalServicePage = async ({ params: { link } }) => {
	// const { data } = await useDataService(link);


	// if (!data) return <Empty className="h-[60vh] pt-32" />
	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">

				<div className="">
					<h1 className="">
						Разработка многостраничного сайта в Минске
					</h1>

				</div>
			</div>
		</section>
	)
}

export default UniversalServicePage