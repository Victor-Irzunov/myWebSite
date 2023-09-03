import { useDataService } from "@/hook/dataServiceHook"
import { Empty } from "antd"

export function generateMetadata({ params: { link } }) {
	let title
	let description

	switch (link) {

		case 'arenda-samosvala':
			title = 'Аренда самосвала в Минске | Доставка по Беларуси'
			description = 'Арендуйте самосвалы в Минске и других городах Беларуси - доставим технику на ваш объект. В наличии самосвалы грузоподъемностью от 10 до 40 тонн. Выгодные цены, удобные условия аренды. Звоните!'
			break
	}

	return {
		title: title,
		description: description
	}
}

const UniversalServicePage = async ({ params: { link } }) => {
	// const { data } = await useDataService(link);



	if (!data) return <Empty className="h-[60vh] pt-32" />
	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				
			</div>
		</section>
	)
}

export default UniversalServicePage