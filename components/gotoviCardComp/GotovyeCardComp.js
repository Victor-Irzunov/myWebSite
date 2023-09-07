"use client"
import { dataGotovye } from '@/constans/gotovye/dataGotovye';
import { Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Paragraph } = Typography;

const GotovyeCardComp = () => {
	return (
		<section className="py-16 bg-slate-100">
			<div className="container mx-auto">
				<h3 className="uppercase text-center text-2xl">
					Готовые сайты
				</h3>

				<div className="mt-16">
					{
						dataGotovye.map(el => {
							return (
								<div className="text-center mb-16 bg-white rounded-md overflow-hidden shadow-lg border" key={el.id}>
									<Image src={el.img} alt={el.alt}
										className="object-cover w-full h-full mx-auto"
										style={{ width: 'auto', height: 'auto' }}
										width={370} height={223}
									/>
									<div className='px-4 py-6 mt-6'>
										<h4 className="uppercase mb-5">
											{el.title}
										</h4>
										<Paragraph
											ellipsis={{
												rows: 2,
												expandable: true,
												symbol: 'читать',
											}}
											className='text-justify'
										>
											{el.content}
										</Paragraph>

										<div className='mt-14 flex justify-between items-center'>
											<p className=''>Цена:</p>
											<p className='font-semibold'>{el.price} BYN</p>
										</div>

										<div className='text-right mt-7'>
											<Link href={el.link}
												target="_blank"
												className='uppercase text-sm text-[#004C97] flex justify-end items-start'
											>
												перейти <Image src='link.svg' alt='Ссылка для перехода на сайт' width={15} height={15} className='ml-1' />
											</Link>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>

	)
}

export default GotovyeCardComp