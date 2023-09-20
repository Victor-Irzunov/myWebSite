"use client"
import { dataGotovye } from '@/constans/gotovye/dataGotovye';
import { Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import BtnOrder from '../btnOrder/BtnOrder';
const { Paragraph } = Typography;

const GotovyeCardComp = () => {
	return (
		<section className="py-16 bg-slate-100">
			<div className="container mx-auto">
				<h3 className="uppercase text-center text-2xl">
					Готовые сайты
				</h3>

				<div className="mt-16 xz:flex-row sd:flex sd:flex-wrap sd:justify-between sd:items-center">
					{
						dataGotovye.map(el => {
							return (
								<div
									className="text-center mb-16
									 bg-white rounded-md 
									 overflow-hidden sd:w-[30%] sd:mx-3 xz:w-full xz:mx-0
									 shadow-lg border"
									key={el.id}
								>
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

										<div className='flex justify-between items-center mt-7'>
											<BtnOrder title={el.alt} />
											<Link href={el.link}
												target="_blank"
												className='uppercase text-sm text-[#004C97] flex justify-end items-start'
											>
												перейти на сайт <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={15} height={15} className='ml-1' />
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