import { Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";
import { dataPrice } from "../../constans/price/PriceData";
import BtnComp from "../btnComp/BtnComp";

const CardComp = () => {
	return (
		<div className="mt-10 mb-10 sd:flex sd:flex-wrap xz:flex-row sd:justify-evenly">
			{dataPrice.map(el => {
				const items = [
					{
						key: el.id,
						label: (
							<span className="uppercase font-semibold text-[12px]">
								{el.info_title}
							</span>
						),
						children: (
							<ul className="font-light text-sm">
								{el.info.map(item => (
									<li
										key={item.id}
										className={`border-t border-gray-400/50 py-1 px-2 flex justify-between items-center ${item.id === 1 ? 'border-t-0 border-gray-400/50' : ''
											}`}
									>
										<span className="text-left">{item.title}</span>
										<Image
											src={item.isCheck ? '/check.svg' : '/cross.svg'}
											alt={item.isCheck ? 'входит в сайт' : 'не входит в сайт'}
											width={item.isCheck ? 20 : 16}
											height={item.isCheck ? 20 : 16}
										/>
									</li>
								))}
							</ul>
						),
					},
				];
				return (
					<div className="border border-gray-600 bg-white shadow-xl overflow-hidden sd:w-2/5 xz:w-full sd:mx-3 xz:mx-0 rounded-md mb-16" key={el.id}>
						<div className="relative xz:px-3 sd:px-4">
							<div className="xy:h-auto pb-16 xz:h-auto sd:h-[80vh] lg:h-[65vh] flex flex-col justify-between items-center ">
								<div className="pb-4 pt-5 sd:h-[270px] xz:h-auto">
									<h2 className="xz:text-xl sd:text-2xl sd:mb-7 xz:mb-4 uppercase font-semibold">{el.title}</h2>

									<p className="xz:text-xs sd:text-sm text-justify">
										<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}${el.link}`} className="underline font-bold">
											{el.title}
										</Link>
										{' '}{el.p}
									</p>
								</div>
								<div className="flex justify-between items-center w-full xz:mt-6 sd:mb-5 xz:mb-8">
									<p className="xz:text-xl xy:text-2xl sd:text-2xl mb-2 font-semibold">{el.price}</p>
									<div className="text-right">
										<p className="uppercase xz:text-[10px] sd:text-[12px] text-slate-500">
											Срок разработки:
										</p>
										<p className="xz:text-[12px] sd:text-base font-semibold">
											{el.time}
										</p>
									</div>
								</div>
								<BtnComp el={el.title} />
							</div>
							<div className="text-center absolute bottom-0 right-0 left-0 bg-white  w-full max-h-full overflow-y-scroll">
								<Collapse items={items} ghost bordered={false} expandIconPosition='end' />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default CardComp