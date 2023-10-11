import ContactBlock from "@/components/contactBlock/ContactBlock";
import Image from "next/image";

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
						<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A869a082f63086fdabcc25980eae7b21a22bc725b137bdb2db6cd6183fb160617&amp;source=constructor" width="100%" height="600" frameBorder="0" title="Локация компании по разработке сайтов на карте"
						></iframe>

						<ContactBlock />
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
			</div>
		</main>
	)
}
export default ContactPage