"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const BtnTehPodderzhka = () => {
	const pathname = usePathname()
	const isTehPodderzhkaPage = pathname === '/teh-podderzhka';
	return (
		<div>
			{!isTehPodderzhkaPage && (
				<div className="mt-16 text-white uppercase  text-sm">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/teh-podderzhka`} className='flex'>
						техподдержка 24/7
						<Image src='/link-white.svg' alt='Ссылка на страницу техподдержка' className='ml-2' width={15} height={15} />
					</Link>
				</div>
			)
			}
		</div>
	)
}
export default BtnTehPodderzhka