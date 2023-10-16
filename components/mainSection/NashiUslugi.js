import Image from "next/image"
import Link from "next/link"


const NashiUslugi = () => {
	return (
		<section className="container mx-auto mt-20">
			<p className="font-semibold uppercase mb-4 text-lg">
				Наши услуги по разрабоки сайтов и веб-приложений
			</p>
			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка многостраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка сайта-визитки <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка одностраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка лендинга <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка интернет-магазина <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/gotovye-sajty`} className="flex underline uppercase text-[#004C97] mb-3">
				Готовые сайты <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
				Разработка корпоративного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>

			<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`} className="flex underline uppercase text-[#004C97] ">
				Разработка внутреннего сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
			</Link>
		</section>
	)
}

export default NashiUslugi