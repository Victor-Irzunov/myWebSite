import { Collapse, Divider } from "antd"
import Image from "next/image";
import Link from "next/link";
import { dataPrice } from "../../constans/price/PriceData";
import BtnComp from "../btnComp/BtnComp";



const CardComp = () => {

	return (
		<div className="mt-10 mb-10">
			{dataPrice.map(el => {
				const items = [
					{
						key: '1',
						label: (
							<span className="uppercase font-semibold text-[10px]">
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
										{item.title}
										<Image
											src={item.isCheck ? '/check.svg' : '/cross.svg'}
											alt={item.isCheck ? 'входит в сайт-визитку' : 'не входит в сайт-визитку'}
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
					<div className="border bg-white shadow-xl rounded-md mb-16" key={el.id}>
						<div className="">
							<div className="xy:h-[59vh] xz:h-[65vh] flex flex-col justify-between items-center text-center">
								<div className="pb-4 px-2  pt-5">
									<h2 className="text-xl mb-3 uppercase">{el.title}</h2>
									<p className="text-xs text-center">
										<Link href={el.link} className="underline font-semibold">
											{el.title}
										</Link>
										{' '}{el.p}
									</p>
								</div>
								{/* <Divider style={{ marginBottom: '0px' }} /> */}
								<div className="text-center">
									<p className="mt-4 mb-1 uppercase font-light text-xs">цена</p>
									<p className="text-2xl mb-4">{el.price}</p>
								</div>
								<p className="uppercase text-[10px] text-slate-600 mb-7">
									Срок разработки: {el.time}
								</p>
								<BtnComp el={el.title} />
							</div>
							<Divider style={{ marginBottom: '0px' }} />
							<div className="text-center">
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