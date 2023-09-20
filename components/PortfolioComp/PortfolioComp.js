import { dataPortfolio } from "@/constans/portfolio/PortfolioData";
import Image from "next/image";
import Link from "next/link";

const PortfolioComp = () => {
	return (
		<section className="min-h-screen py-16">
			<div className="flex justify-start flex-wrap items-center">
				{
					dataPortfolio.map(el => {
						return (
							<div className="h-auto sd:w-1/4 xz:w-full py-5 px-2 mb-6" key={el.id}>
								<Link href={el.link} target="_blank">
									<div className="relative h-40">
										<Image
											src={el.image}
											alt={el.alt}
											width={el.w}
											height={el.h}
											className='mx-auto absolute top-0 left-0 right-0 bottom-0' loading="lazy"
										/>
										<Image
											src={el.image2}
											alt={el.alt2}
											width={el.w2}
											height={el.h2}
											className='mx-auto absolute top-14 right-0 bottom-0' loading="lazy"
										/>
									</div>
								</Link>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}
export default PortfolioComp
