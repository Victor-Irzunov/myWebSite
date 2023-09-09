import Image from "next/image";


export const metadata = {
	title: 'Контакты компании по разработке и продвижению сайтов VI:TECH',
	description: 'Свяжитесь с нами, чтобы обсудить ваш проект веб-разработки и продвижения. Мы готовы помочь воплотить ваши идеи в жизнь. Не стесняйтесь обращаться к нам для консультации и обсуждения ваших потребностей. Мы всегда готовы помочь вам достичь успеха в сфере веб-разработки и продвижения.'
}


const ContactPage = () => {
	return (
		<main className="pt-10 pb-20">
			<div className="w-full relative mb-20">
				<Image
					src="/logo/logo-contact.webp"
					alt="Контакты компании по созданию сайтов vi:tech"
					layout="responsive"
					objectFit="cover"
					width={370} height={223}
				/>
			</div>
			<div className="container mx-auto">


				<section className="text-center">
					<h1 className="text-[#004C97] uppercase font-semibold text-2xl mb-4">
						Контакты
					</h1>
					<p className="mt-3 text-sm">
						Добро пожаловать в раздел контактов VI:TECH! Мы всегда готовы услышать вас. Независимо от того, нужна ли вам консультация по веб-разработке или вы хотите обсудить ваши идеи для будущего проекта, наши специалисты готовы помочь. Свяжитесь с нами сегодня, и мы с удовольствием ответим на ваши вопросы и поддержим вас на пути к успеху в онлайн-мире.
					</p>
				</section>

				<section className="mt-10 relative">
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A869a082f63086fdabcc25980eae7b21a22bc725b137bdb2db6cd6183fb160617&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>

					<div className="bg-white xz:w-full xy:w-4/5 rounded-r-md shadow-xl py-5 px-3 absolute top-20 left-0">
						<div className="flex items-start mb-5">
							<Image src='/contact/location.svg'
								alt='Адрес компании VI:TECH'
								width={30} height={30}
								className=""
							/>
							<span className="ml-3">Республика Беларусь г.Минск ул. К.Туровского 8</span>
						</div>
						<div className="flex items-start mb-5">
							<Image src='/contact/phone-blue.svg' alt='Телефон компании VI:TECH' width={30} height={30} />
							<span className="ml-3">
								<a href="tel:80333511597">
									+375 33 351-15-97
								</a>
							</span>
						</div>

						<div className="flex items-start mb-5">
							<Image src='/contact/mail.svg' alt='Почта  компании VI:TECH' width={30} height={30} />
							<span className="ml-3">info.contact.vitech@gmail.com</span>
						</div>
						<div className="pl-10">
							УНП KA5795000
						</div>

						<div className="flex items-center mt-7 pl-10">
							<a href='viber://chat?number=%2B375339174921' target="_blank" className="mr-5">
								<Image src='/contact/viber.svg' alt='Вайбер' width={30} height={30}
									 />
							</a>
							<a href="https://www.instagram.com/webproduct_developer" target="_blank">
								<Image src='/contact/instagram.svg' alt='Инстаграм' width={35} height={35} />
							</a>
						</div>


					</div>
				</section>

				<div className="mt-28 text-center font-bold text-[#004C97]">
					<p className="">
						Уважаемый клиент, если вы все еще сомневаетесь в необходимости разработки и продвижения вашего сайта, давайте сделаем следующий шаг вместе. Не упустите возможность получить новых клиентов из поисковых систем Google и Яндекс. Свяжитесь с нами сейчас, и мы создадим для вас сайт, который не только соответствует вашим потребностям, но и принесет вам результаты.
					</p>
					<p className="mt-2">
						Для достижения ваших целей необходимо всего лишь действовать – мы готовы помочь!
					</p>
				</div>
			</div>
		</main>
	)
}
export default ContactPage