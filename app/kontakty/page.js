import Image from "next/image"
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


				<div className="text-center">
					<h1 className="text-[#004C97] uppercase font-semibold text-2xl mb-4">
						Контакты
					</h1>
					<p className="mt-3 text-sm">
						Добро пожаловать в раздел контактов VI:TECH! Мы всегда готовы услышать вас. Независимо от того, нужна ли вам консультация по веб-разработке или вы хотите обсудить ваши идеи для будущего проекта, наши специалисты готовы помочь. Свяжитесь с нами сегодня, и мы с удовольствием ответим на ваши вопросы и поддержим вас на пути к успеху в онлайн-мире.
					</p>
				</div>
			</div>
		</main>
	)
}
export default ContactPage