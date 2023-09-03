import { Button } from "antd"
import Image from "next/image"


const Footer = () => {
	return (
		<footer className="bg-[#15579e] py-20">
			<div className="container mx-auto px-3">
				<div className="flex justify-between">
					<div className="">
						<p className="text-3xl text-white uppercase font-extrabold">
							Давайте <br /> поговорим!
						</p>
						<div className="mt-14 mb-14">
							<a href="tel:80333511597" className="flex text-xl text-white">
								<Image src='/iconfont-phone.svg'
									alt='Телефон компании по разработке сайтов'
									width={25} height={25}
									style={{ width: '25px', height: '25px' }}
									className="mr-4"
								/>
								8 033 351-15-97
							</a>
						</div>

						<Button type="link"
							style={{ background: '#fff', color: '#000', borderRadius: '0px', fontSize: '13px', paddingLeft: '20px', paddingRight: '20px', paddingTop:'10px' }}
							className="uppercase border-black font-semibold tracking-wider"
							size="large"
							href="/kontakty"
						>
							Контакты
						</Button>
					</div>
					<div className="">
						<Image
							src='/logo/logo-icon.webp'
							alt="Логотип компании по созданию сайтов"
							width={70} height={70}
						/>
					</div>
				</div>


			</div>
		</footer>
	)
}

export default Footer