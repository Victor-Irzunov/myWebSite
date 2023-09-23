"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BtnContact = () => {
	const pathname = usePathname()
	const isContactPage = pathname === '/kontakty';
	return (
		<div>
			{!isContactPage && (
				<Link
					className="uppercase border border-black font-semibold tracking-wider bg-white py-2 px-5"
					size="large"
					href={`${process.env.BASE_URL}/kontakty`}
				>
					Контакты
				</Link>
			)
			}
		</div>
	)
}
export default BtnContact