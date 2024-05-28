import ContactBlock from "@/components/contactBlock/ContactBlock";
import ImageDogovorComp from "@/components/imgDogovorComp/ImageDogovorComp";
import Image from "next/image";
import { DownloadOutlined } from '@ant-design/icons';
import BtnComp from "@/components/btnComp/BtnComp";

export const metadata = {
	title: 'Контакты компании по разработке и продвижению сайтов VI:TECH',
	description: 'Свяжитесь с нами, чтобы обсудить ваш проект веб-разработки и продвижения. Мы готовы помочь воплотить ваши идеи в жизнь. Не стесняйтесь обращаться к нам для консультации и обсуждения ваших потребностей. Мы всегда готовы помочь вам достичь успеха в сфере веб-разработки и продвижения.'
}

const ContactPage = () => {
	return (
		<main className="pt-10 overflow-x-hidden">
			<div className="w-full mb-20 xz:block xm:hidden fixed top-10 left-0 right-0 -z-10">
				<Image
					src="/logo/logo-contact.webp"
					alt="Контакты компании по созданию сайтов vi:tech"
					width={1492} height={900}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full mb-20 xz:hidden xm:block fixed top-14 left-0 right-0 -z-10">
				<div className="container mx-auto">
					<Image
						src="/contact/main2.webp"
						alt="Контакты компании по созданию сайтов vi:tech"
						width={1492} height={900}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			<div className="bg-white xm:mt-[25vh] xz:mt-[35vh] xm:pt-20 xz:pt-14 pb-20 h-full relative">
				<div className="container mx-auto xm:pb-16">
					<section className="text-center">
						<h1 className="text-[#004C97] uppercase font-semibold xz:text-3xl sd:text-5xl mb-4">
							Контакты
						</h1>
						<p className="xz:mt-3 sd:mt-14">
							Добро пожаловать в раздел контактов VI:TECH! Мы всегда готовы услышать вас. Независимо от того, нужна ли вам консультация по веб-разработке или вы хотите обсудить ваши идеи для будущего проекта, наши специалисты готовы помочь. Свяжитесь с нами сегодня, и мы с удовольствием ответим на ваши вопросы и поддержим вас на пути к успеху в онлайн-мире.
						</p>
					</section>


					<section className="mt-10 relative overflow-x-hidden">

						{/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A56c7334263062ae35985c4b97aa2575621b310937d4ddef9f5789e7d9fd5de26&amp;source=constructor" width="100%" height="600" frameBorder="0" title="Локация компании по разработке сайтов на карте"></iframe> */}
						<iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=201710090314" width="100%" height="600" frameBorder="0" title="Локация компании по разработке сайтов на карте"></iframe>

						<ContactBlock />
					</section>

					<section className="mt-12">
						<h2 className="font-semibold text-lg">
							Наши реквизиты
						</h2>
						<address className="mt-3 xz:text-sm sd:text-base">
							<p className="">
								&copy; 2015-2023 компания «VI:TECH» Все права защищены. Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
							</p>
							<p className="">
								Республика Беларусь г.Минск ул. К.Туровского 8
							</p>
							<p className="">
								Ирзунов В.К. УНП KA5795000 Государственная регистрация от 06.03.2023, Инспекция МНС по Первомайскому району г.Минска
							</p>
							<p className="">
								Номер счета
								BY48MTBK30140008999900633251
							</p>
							<p className="">
								Номер договора
								32546661
							</p>
						</address>
					</section>

					<section className="mt-8">
						<h3 className="font-semibold">
							Договор на разработку сайта
						</h3>
						<div className="mt-4 pl-6">
							<ImageDogovorComp />
						</div>
						<div className="mt-5 font-semibold pl-6">
							<a href="/dogovor/Dogovor.docx"
								download
								className="underline uppercase text-xs mr-3"
							>
								Скачать договор
							</a>
							<DownloadOutlined />
						</div>
					</section>

					<div className="mt-32 text-center font-bold text-[#004C97]">
						<p className="">
							Уважаемый клиент, если вы все еще сомневаетесь в необходимости разработки и продвижения вашего сайта, давайте сделаем следующий шаг вместе. Не упустите возможность получить новых клиентов из поисковых систем Google и Яндекс. Свяжитесь с нами сейчас, и мы создадим для вас сайт, который не только соответствует вашим потребностям, но и принесет вам результаты.
						</p>
						<p className="mt-2">
							Для достижения ваших целей необходимо всего лишь действовать – мы готовы помочь!
						</p>
					</div>

					<div className='mt-12 flex justify-center'>
						<BtnComp title2='Получить консультацию' tag animate color='#004C97' isActive2 />
					</div>
				</div>
			</div>
		</main>
	)
}
export default ContactPage