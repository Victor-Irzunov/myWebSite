import Image from "next/image"


const CeliKlientov = () => {
	return (
		<section className='mt-16'>
			<article className='container mx-auto'>
				<div className='mb-3'>
					<Image src='/line.svg' alt='Линия' width={50} height={10}
						className='rotate-45' loading="lazy"
					/>
					<h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
						Цели клиентов при разработке сайта
					</h2>
				</div>

				<div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20 sd:mb-16 xz:mb-3'>
					<Image src='/goals.webp'
						alt='Цели клиентов при разработке сайта'
						className="object-cover w-full h-full xz:mx-auto sd:mx-0"
						style={{ width: '512px', height: 'auto' }}
						width={512} height={370} loading="lazy"
					/>

					<div className="xz:mt-6 sd:mt-0 xz:ml-0 sd:ml-10 text-justify" >
						<p className="">
							Одна из основных целей - это привлечение новых клиентов, рост продаж и заказов. Сайт должен эффективно конвертировать посетителей в платежеспособных пользователей.
						</p>
						<p className="mt-2">
							Еще одна распространенная цель - раскрутка бренда и повышение его узнаваемости с помощью сайта. Качественный сайт формирует имидж компании в глазах аудитории.
						</p>
						<p className="mt-2">
							Создание закрытых корпоративных сервисов, образовательных платформ - это тоже востребованное направление разработки сайтов.
						</p>
						<p className="mt-2">
							Наконец, часто возникает необходимость вновь создать или модернизировать имеющийся сайт с улучшенным дизайном и удобством использования.
						</p>
					</div>
				</div>
			</article>
		</section>
	)
}

export default CeliKlientov