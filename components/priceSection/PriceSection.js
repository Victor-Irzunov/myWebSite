import { LineOutlined } from '@ant-design/icons'
import Link from 'next/link';
import BtnComp from '../btnComp/BtnComp';

const PriceSection = () => {
	return (
		<section className='pt-12 pb-10 w-full' id='site'>
			<div className='container mx-auto'>
				<div className='text-center xz:text-xl sd:text-4xl'>
					<h2 className='uppercase font-semibold'>Стоимость и
						сроки
					</h2>
				</div>

				<div className='mt-16'>
					<div className='flex justify-between items-center'>
						<div className='w-1/3 invisible m-0.5'></div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='uppercase text-white text-[12px] mb-0'>стоимость</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
							<p className='uppercase text-white text-[12px] mb-0'>сроки</p>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<Link
								as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`}
								href='/uslugi/sozdanie-sajta-vizitki'
							>
								<p className='uppercase text-black underline xz:text-[12px] sd:text-[13px] text-center mb-0 font-semibold'>
									сайт- <br />визитка
								</p>
							</Link>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold'>499 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>3-5 дней</p>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`}
									href='/uslugi/sozdanie-lendinga'
								>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  underline mb-0 font-semibold'>Лендинг</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold uppercase'>от 499 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>4-7 дней</p>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`}
									href='/uslugi/sozdanie-odnostranichnogo-sajta'
								>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  xz:hidden sd:block mb-0 font-semibold underline'>Одностраничный</p>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 sd:hidden xz:block font-semibold underline'>Одно-<br />страничный</p>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold underline'>сайт</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 550 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>3-7 дней</p>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`}
									href='/uslugi/sozdanie-lendinga'
								>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  xz:hidden sd:block mb-0 font-semibold underline'>Многостраничный</p>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 sd:hidden xz:block font-semibold underline'>Много-<br />страничный</p>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold underline'>сайт</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 699 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>от 5 дней</p>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`}
									href='/uslugi/sozdanie-internet-magazina'
								>
									<p className='uppercase text-black underline  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold'>интернет-</p>
									<p className='uppercase text-black underline  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold'>магазин</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 1550 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>14-30 дней</p>
						</div>
					</div>


					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`}
									href='/uslugi/sozdanie-korporativnogo-sajta'
								>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  xz:hidden sd:block mb-0 font-semibold underline'>Корпоративный</p>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 sd:hidden xz:block font-semibold underline'>Корпо-<br />ративный</p>
									<p className='uppercase text-black underline  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold'>сайт</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 950 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>от 8 дней</p>
						</div>
					</div>
					<div className='flex justify-between items-center'>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<Link
									as={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`}
									href='/uslugi/vnutrennee-korporativnoe-veb-prilozhenie'
								>
									<p className='uppercase text-black  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold underline'>Внутрений</p>
									<p className='uppercase text-black underline  xz:text-[12px] sd:text-[13px]  mb-0 font-semibold'>сайт</p>
								</Link>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#004C97] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 2999 BYN</p>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>от 20 дней</p>
						</div>
					</div>
				</div>

				<div className='sd:flex sd:justify-between sd:items-center xz:flex xz:flex-col-reverse xz:items-end w-full mt-16'>
					<div className="mt-6">
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/cena/razrabotka-sajta`} className="text-blue-700 underline sd:text-lg">
							подробнее по стоимости
						</Link>
					</div>
					<div className=''>
						<BtnComp tag={true} title2='Заказать сайт' color='blue' konsultaciya={true} />
					</div>
				</div>
			</div>

		</section>
	)
}

export default PriceSection;