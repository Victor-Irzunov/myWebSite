import BtnComp from '@/components/btnComp/BtnComp'
import Image from 'next/image'
import Link from 'next/link'
import NashiZadachi from '@/components/mainSection/NashiZadachi';
import ZadachiPriProdvizheniiSajta from '@/components/mainSection/ZadachiPriProdvizheniiSajta';
import PochemuVITECH from '@/components/mainSection/PochemuVITECH';
import KlyuchevyeNapravleniya from '@/components/mainSection/KlyuchevyeNapravleniya';
import NashiRaboty from '@/components/mainSection/NashiRaboty';
import NashiUslugi from '@/components/mainSection/NashiUslugi';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/video/VideoPlayer'));

const MainSection2 = () => {

	return (
		<div className=''>
					<div className=''>

						<div className='mt-16 container mx-auto'>
							<p className="font-semibold uppercase mb-3">
								Наши услуги по продвижению
							</p>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/prodvizhenie-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
								Продвижение сайта в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
								SEO (органическое) продвижение сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`} className="flex underline uppercase text-[#004C97]">
								Реклама в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
							</Link>
						</div>

						<NashiZadachi />

						<div className='flex justify-center sd:mt-20 container mx-auto w-full'>
							<VideoPlayer />
						</div>

						<ZadachiPriProdvizheniiSajta />


						<div className="my-20 bg-blue-600 sd:rounded-2xl xz:rounded-md pt-8 pb-8 container mx-auto">
							<div className="text-center px-2">
								<p className="mb-2 font-semibold sd:text-xl xz:text-lg text-white uppercase tracking-wider">
									Закажите свой сайт сегодня и получите скидку 10%!
								</p>
								<p className="mb-6 font-semibold sd:text-xl xz:text-lg text-white">
									Свяжитесь с нами прямо сейчас, и мы с удовольствием начнем работу над вашим будущим cайтом.
								</p>
								<div className=''>
									<a href="tel:80333511597" className='' >
										<span className="text-3xl text-white font-bold blok w-full text-center">
											8 (033) 351-15-97
										</span>
									</a>
								</div>
							</div>
						</div>

						<NashiUslugi />


						<PochemuVITECH />

						<div className='bg-purple-100 mt-16 px-3 py-5 rounded-sm'>
							<div className='container mx-auto'>
								<p className='font-semibold text-base sd:text-lg'>
									Не уверены, с чего начать при создании своего сайта? Нажмите кнопку «Получить консультацию» прямо сейчас, и наши эксперты по разработке сайтов будут рады предоставить вам первоклассную консультацию, которая поможет вам определить необходимые шаги для создания качественного сайта.
								</p>
								<div className='flex justify-end w-full mt-9 pr-2'>
									<BtnComp title2='Получить консультацию' tag isActive2={true} />
								</div>
							</div>
						</div>

						<KlyuchevyeNapravleniya />

						<NashiRaboty />

						<div className='container mx-auto mt-20'>
							<p className='font-semibold sd:text-xl xz:text-lg p-2 text-justify mb-10'>
								Мы — разработчики сайтов, готовые реализовать ваши потребности, учитывая ваши бюджетные рамки. От небольших, но важных сайтов-визиток, до полноценных одностраничных ресурсов и глубоких многостраничных веб-проектов. Мы также специализируемся на разработке интернет-магазинов, закрытых корпоративных приложений и образовательных платформ. Независимо от вашей цели, мы готовы создать цифровое пространство, которое эффективно будет работать для вас и вашей аудитории
							</p>
							<Image
								src='/logo/logo-street.webp'
								alt='Логотип компании по разработке сайтов'
								className="object-cover w-full h-full mx-auto"
								style={{ width: '512px', height: 'auto' }}
								width={512} height={370} loading="lazy"
							/>
						</div>

					</div>
		</div>
	)
}

export default MainSection2