"use client"
import { Modal } from 'antd'
import { FormQuestion } from '../form/FormQuestion'
import { FormTel } from '../form/FormTel'
import FormOcenkaProekta from '../form/FormOcenkaProekta'
import { FormOrder } from '../form/FormOrder'

export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive, el, tag, order, konsultaciya }) => {

	return (
		<Modal
			title={`${title}`}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.order && !tag && !order ? <FormQuestion handleCancel={handleCancel} el={el} tag={tag} title={title}  /> : null
			}
			{/* {
				konsultaciya && !tag && !order && !isActive.order ? <FormQuestion handleCancel={handleCancel} el={el} tag={tag} title={title} /> : null
			} */}

			{
				tag && <FormOcenkaProekta title={title} handleCancel={handleCancel} konsultaciya={konsultaciya} />
			}
			{
				order && <FormOrder title={title} handleCancel={handleCancel}  />
			}
		</Modal>
	)
}
