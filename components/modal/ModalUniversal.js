"use client"
import { Modal } from 'antd'
import { FormQuestion } from '../form/FormQuestion'
import { FormTel } from '../form/FormTel'

export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive, el }) => {

	return (
		<Modal
			title={`Ваш заказ: ${title}`}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.order && <FormQuestion handleCancel={handleCancel} el={el} />
			}
		</Modal>
	)
}
