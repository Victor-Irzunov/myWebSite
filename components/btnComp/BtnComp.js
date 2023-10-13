"use client"
import { Button, Tag } from 'antd';
import { useState } from 'react'
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnComp = ({ el, tag, title2 = '', konsultaciya, color='purple' }) => {
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
					<Tag color={color} className='cursor-pointer animate-bounce'
						onClick={() => showModal(`${el}`, "order")}
					>
					<span className='uppercase'>{title2}</span>
					</Tag>
					:
					<Button
						type="primary" size='large'
						onClick={() => showModal(`${el}`, "order")}
						className={`shadow-lg w-full`}
						style={{background: color}}

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