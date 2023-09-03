import { Button, Collapse, Divider, Tag, Popover } from "antd"
import { RocketOutlined, LaptopOutlined, EditOutlined } from '@ant-design/icons'
import Image from "next/image";
import Link from "next/link";
import { dataPrice } from "../constans/price/PriceData";



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
					<div className="border bg-slate-50 rounded-md pt-5 mb-16" key={el.id}>
						<div className="px-2 text-center">
							<h3 className="text-xl mb-3 uppercase">{el.title}</h3>
							<p className="text-xs text-gray-500">
								<Link href={el.link} className="underline">
									{el.title}
								</Link>
								{el.p}
							</p>
							<p className="mt-6 mb-1 uppercase font-light text-xs">цена</p>
							<p className="text-2xl mb-4">{el.price}</p>
							<p className="uppercase text-[10px] text-slate-600 mb-7">
								Срок разработки: {el.time}
							</p>
							<Button
								type="primary"
								style={{ paddingLeft: '30px', paddingRight: '30px' }}
							>
								Заказать
							</Button>
							<Divider style={{ marginBottom: '0px' }} />
							<div className="text-left">
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