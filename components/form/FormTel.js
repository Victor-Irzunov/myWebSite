"use client"
import { useState } from 'react'
import { Form, Button, message } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '../../http/telegramAPI'

export const FormTel = ({ btn = 'Жду звонка', handleCancel }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Клиент с сайта просит перезвонить</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Мы получили сообщение и скоро Вам перезвоним')
				handleCancel()
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
				name="basic"
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
					label='Телефон'
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
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						{btn}
					</Button>
				</Form.Item>

			</Form>
			<p className='text-[10px] mt-10 uppercase'>
				Оправьте нам свой номер телефона и мы Вам перезвоним в ближайшее время.
			</p>
		</>
	)
}
