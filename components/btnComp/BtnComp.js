"use client"
import { Button, Tag } from 'antd';
import { useState } from 'react'
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnComp = ({ el, tag, title2 = '', konsultaciya }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isActive, setIsActive] = useState({
		order: false,
	});
	const handleCancel = () => {
		setIsModalOpen(false)
	};
	const showModal = (title, active) => {
		setIsModalOpen(true)
		setTitle(title)
		if (active === "order") {
			setIsActive(prev => ({ ...prev, order: true }))
		}
	}
	return (
		<>
			{
				tag ?
					<Tag color='cyan' className='cursor-pointer'
						onClick={() => showModal(`${el}`, "order")}
					>
						{title2}
					</Tag>
					:
					<Button
						type="primary"
						onClick={() => showModal(`${el}`, "order")}
						className='shadow-md w-full'
					>
						{!tag ? 'Заказать' : title2}
					</Button>
			}
			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title2 || title}
				el={el}
				tag={tag}
				handleCancel={handleCancel}
				isActive={isActive}
				konsultaciya={konsultaciya}
			/>
		</>
	)
}
export default BtnComp