"use client"
import { Button, Tag } from 'antd';
import { useState } from 'react'
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnComp = ({ el, tag }) => {
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
					<Tag color='blue'
						onClick={() => showModal(`${el}`, "order")}
					>
						Узнать точную стоимость
					</Tag>
					:
					<Button
						type="primary"
						style={{ paddingLeft: '30px', paddingRight: '30px' }}
						onClick={() => showModal(`${el}`, "order")}
						className='shadow-md'
					>
						Заказать
					</Button>
			}

			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				el={el}
				handleCancel={handleCancel}
				isActive={isActive}
			/>
		</>
	)
}

export default BtnComp