"use client"
import { Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Paragraph } = Typography;

const GotoviCardComp = () => {
	return (
		<section className="mt-20">
			<div className="container mx-auto">
				<h3 className="uppercase text-center text-2xl">
					Готовые сайты
				</h3>

				<div className="mt-16">

					<div className="text-center shadow-xl border border-black">
						<Image src="/service/gotovie/1.webp" alt="Готовый сайт химчисткв"
							layout="responsive"
							objectFit="cover"
							width={370} height={223}
							className=""
						/>
						<div className='px-4 py-6 mt-10'>
							<h4 className="uppercase mb-5">
								Одностраничный сайт
							</h4>
							<Paragraph
								ellipsis={{
									rows: 2,
									expandable: true,
									symbol: 'читать',
								}}
								className='text-justify'
							>
								Предлагаем вашему вниманию готовый сайт, который сочетает в себе элегантный дизайн и удобство использования. Изначально созданный под хим. чистку, этот сайт может быть легко адаптирован под любую другую сферу деятельности.
								Все заказы, поступающие через сайт, будут мгновенно доставляться в ваш мессенджер, обеспечивая быструю и эффективную коммуникацию с клиентами.
								Приобретая этот сайт, вы получаете возможность полностью изменить картинки, логотип и тексты по вашему усмотрению – и мы предоставим эту услугу абсолютно бесплатно. Таким образом, вы сможете индивидуализировать сайт и привести его в соответствие с вашими потребностями и визуальной идентичностью.
								Кроме того, этот сайт полностью адаптирован для мобильных устройств, обеспечивая удобство использования на смартфонах и планшетах. Ваша аудитория сможет получить доступ к вашему сайту и оставить заявки в любое время и в любом месте.
								Не упустите эту уникальную возможность! Позвольте нам предоставить вам стильный и функциональный готовый сайт, который станет надежной основой для вашего онлайн-присутствия. Свяжитесь с нами сейчас, чтобы начать привлекать новых клиентов и развивать свой бизнес!
							</Paragraph>

							<div className='mt-14 flex justify-between items-center'>
								<p className=''>Цена:</p>
								<p className='font-semibold'>250 BYN</p>
							</div>

							<div className='text-right mt-7'>
								<Link href='https://him-chistka.vercel.app/'
									target="_blank"
									className='uppercase text-sm text-[#004C97] flex justify-end items-start'
								>
									перейти <Image src='link.svg' alt='Ссылка для перехода на сайт' width={15} height={15} className='ml-1' />
								</Link>
							</div>
						</div>
					</div>



				</div>
			</div>
		</section>

	)
}

export default GotoviCardComp