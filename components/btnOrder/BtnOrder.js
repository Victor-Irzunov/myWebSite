"use client"
import { Button } from 'antd';
import { useState } from 'react'
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnOrder = ({ title }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isActive, setIsActive] = useState({
		order: false,
	});
	const handleCancel = () => {
		setIsModalOpen(false)
	};
	const showModal = (title, active) => {
		setIsModalOpen(true)
		if (active === "order") {
			setIsActive(prev => ({ ...prev, order: true }))
		}
	}


	return (
		<>
			<div>
				<Button onClick={() => showModal(title, "order")}>
					Хочу купить
				</Button>
			</div>
			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
				isActive={isActive}
				order={isActive.order}
			/>
		</>
	)
}

export default BtnOrder