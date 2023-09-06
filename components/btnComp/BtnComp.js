"use client"
import { Button } from 'antd';
import { useState } from 'react'
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnComp = ({el}) => {
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
			<Button
				type="primary"
				style={{ paddingLeft: '30px', paddingRight: '30px' }}
				onClick={() => showModal(`${el}`, "order")}
				className='shadow-md'
			>
				Заказать
			</Button>
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