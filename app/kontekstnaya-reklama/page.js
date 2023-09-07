import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: 'Контекстная реклама - быстрое продвижение сайта',
	description: ''
}



const KontekstnayaReklamaPage = () => {
	return (
		<main className="pt-16 pb-20">

			<div className="container mx-auto">

				<div className="mt-16 text-[#004C97] font-semibold">
					<h1 className="uppercase text-2xl">
						Контекстная реклама
					</h1>
					<Image
						src='/prodzhenie/main.webp'
						alt='Контекстная реклама'
						className="object-cover w-full h-full mx-auto mt-8"
						style={{ width: 'auto', height: 'auto' }}
						width={370} height={208}
					/>
				</div>

				<article className="mt-10">

				</article>
			</div>
		</main>
	)
}

export default KontekstnayaReklamaPage