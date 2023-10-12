"use client"
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

const LinkScrollCom = ({link}) => {
	return (
		<div className='container mx-auto'>
			<LinkScroll to={link}
				smooth={true}
				offset={-100}
				duration={800}
				className="cursor-pointer"
			>
				<div className='flex flex-col justify-start items-center mt-20'>
				
					<p className='uppercase text-xs'>
						Стоимость и сроки
					</p>
					<Image src='/arrow-down.svg' alt='Линия' width={30} height={30}
						className=''
					/>
				</div>
			</LinkScroll>
		</div>
	)
}

export default LinkScrollCom