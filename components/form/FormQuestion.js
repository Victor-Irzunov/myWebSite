"use client"
import { useState } from 'react';
import { Form, Button, Input, message } from 'antd';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/navigation'

import { sendOrderTelegram } from '../../http/telegramAPI';

const { TextArea } = Input

export const FormQuestion = ({ handleCancel, link, title = '', el, tag }) => {
	const router = useRouter()
	const [tel, setTel] = useState('')
	const [isActive, setIsActive] = useState(false)
	const onFinish = (values) => {
		let messageForm = `<b> Заказ с VI:TECH: ${title}</b>\n`
		messageForm += `<b>Интерисует: ${el} </b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Клиент по имени ${values.name || ''} задал вопрос </b>\n`
		messageForm += `<b>Вопрос: ${values.message || ''} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {

					message.success('Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время, чтобы обсудить детали вашего проекта')
					router.push('/uspeshnaya-otpravka')
					setIsActive(true)
					router.push('/uspeshnaya-otpravka')
					if (handleCancel) {
						handleCancel()
					}
				}
			})

	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}



	const validateOperatorCode = (value) => {
		const operatorCode = value.replace(/\D/g, '').slice(3, 5);
		return ["29", "33", "44", "25"].includes(operatorCode);
	};


	const handlePhoneChange = (e) => {
		const newValue = e.target.value;

		if (validateOperatorCode(newValue)) {
			setTel(newValue);
		} else {
			setTel('');
		}
	};

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		let { value } = newState;
		const a = value.replace(/\D/g, '').slice(3, 5);
		let selection = newState.selection;
		if (a.length === 2) {
			const b = ["29", "33", "44", "25"].includes(a);
			if (!b) {
				value = '+375';
				selection = { start: 5, end: 5 }
				message.warning('Введите код оператора')
			}
		}
		const cursorPosition = selection ? selection.start : null;
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				selection = { start: cursorPosition - 1, end: cursorPosition - 1 };
			}
			value = value.slice(0, -1);
		}
		return {
			value,
			selection
		};
	};
	return (
		<>
			<Form
				name={el}
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Имя"
					name="name"
					tooltip=""
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Телефон"
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="+375 29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={handlePhoneChange}
					/>
				</Form.Item>
				<Form.Item
					label="Сообщение"
					name="message"
					tooltip=""
				>
					<TextArea
						placeholder="Сообщение"
						autoSize={{
							minRows: 3,
						}}
					/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						{tag ? title : 'Заказать'}
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
