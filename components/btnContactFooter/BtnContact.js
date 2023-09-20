"use client"
import { usePathname } from 'next/navigation';
import { Button } from "antd";

const BtnContact = () => {
	const pathname = usePathname()
	const isContactPage = pathname === '/kontakty';
	return (
		<div>
			{!isContactPage && (
				<Button type="link"
					style={{ background: '#fff', color: '#000', borderRadius: '0px', fontSize: '13px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}
					className="uppercase border-black font-semibold tracking-wider"
					size="large"
					href="/kontakty"
				>
					Контакты
				</Button>
			)
			}
		</div>
	)
}
export default BtnContact