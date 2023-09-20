"use client"
import { useState } from 'react';
import { Form, Button, Input, message, Checkbox } from 'antd';
import InputMask from 'react-input-mask';
import { sendOrderTelegram } from '@/http/telegramAPI';

const { TextArea } = Input;


export const FormOrder = ({ handleCancel, link, title, }) => {
	const [tel, setTel] = useState('')
	const [isActive, setIsActive] = useState(false)

	const onFinish = (values) => {
		let messageForm = `<b>Заказ с сайта VI:TECH - ${title}</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Клиент по имени ${values.name || '-'}  </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Примечание: ${values.primechanie || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Обратная связь: ${values.contact || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				console.log("🚀 🚀 🚀  _ file: FormOrder.js:27 _ onFinish _ data:", data)
				if (data.ok) {
					message.success('Ваш запрос принят!')
					setIsActive(true)
					if (handleCancel) {
						handleCancel()
					}
				}
			})

	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<Form
			name="order"
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
			<p className='text-justify text-sm mb-8'>
				Пожалуйста, предоставьте нам ваши контактные данные и любое дополнительное сообщение, которое вы хотели бы передать. Наш менеджер незамедлительно обработает ваш запрос на приобретение готового сайта. Мы гарантируем, что свяжемся с вами, используя выбранную вами форму обратной связи. Благодарим вас за ваш запрос на покупку готового сайта. Мы приложим максимум усилий, чтобы удовлетворить ваши потребности и обеспечить ваше полное удовлетворение.
			</p>

			<Form.Item
				label="Ваше имя"
				name="name"
				tooltip=""
			>
				<Input style={{
					width: 200,
				}} />
			</Form.Item>

			<Form.Item
				label="Ваш телефон"
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
					placeholder="29 123-45-67"
					mask="+3\7\5 99 999 99 99"
					maskChar={'-'}
					className='border py-1 px-3 rounded-md w-full'
					beforeMaskedValueChange={beforeMaskedValueChange}
					value={tel}
					onChange={(e) => setTel(e.target.value)}
					style={{
						width: 200,
					}}
				/>
			</Form.Item>

			<Form.Item
				label="Примечание"
				name="primechanie"
				tooltip=""
			>
				<TextArea

					placeholder=""
					autoSize={true}
				/>
			</Form.Item>

			<Form.Item
				label='Выберите способ обратной связи'
				name="contact"
				valuePropName="checked"
			>
				<Checkbox.Group className='flex flex-col'>
					<Checkbox value='Перезвонить' className='mb-1'>Перезвонить</Checkbox>
					<Checkbox value='Ответить в Telegram' className='mb-1'>Ответить в Telegram</Checkbox>
					<Checkbox value='Ответить в WhatsApp' className='mb-1'>Ответить в WhatsApp</Checkbox>
					<Checkbox value='Ответить в Viber' className='mb-6'>Ответить в Viber</Checkbox>
				</Checkbox.Group>
			</Form.Item>


			<Form.Item
				wrapperCol={{
					offset: 16,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Купить
				</Button>
			</Form.Item>


		</Form>
	)
}
