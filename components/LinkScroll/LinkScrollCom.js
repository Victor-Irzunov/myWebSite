"use client"
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

const LinkScrollCom = ({link ,color}) => {
	return (
		<div className='container mx-auto'>
			<LinkScroll to={link}
				smooth={true}
				offset={-100}
				duration={800}
				className="cursor-pointer"
				rel="nofollow"
				href='#/'
			>
				<div className='flex flex-col justify-start items-center mt-20 animate-bounce'>
				
					<p className={`uppercase text-xs ${color ? color : 'text-black'}`}>
						Стоимость и сроки
					</p>
					
					<Image src={color ? `/arrow-white.svg` : `/arrow-down.svg`} alt='Линия' width={30} height={30}
						className=''
					/>
				</div>
			</LinkScroll>
		</div>
	)
}

export default LinkScrollCom