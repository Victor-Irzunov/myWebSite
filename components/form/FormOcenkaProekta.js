"use client"
import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import { useState } from 'react'

import InputMask from 'react-input-mask'
import { useScreens } from '@/constans/constants'
import { sendOrderTelegram } from '@/http/telegramAPI'

const { Option } = Select
const { TextArea } = Input

const plainOptions = ['Ответить в Telegram', 'Pear', 'Orange'];

const select = [
	{
		value: 'Многостраничный сайт',
		id: 1
	},
	{
		value: 'Интернет-магазин',
		id: 2
	},
	{
		value: 'Одностраничный сайт',
		id: 3
	},
	{
		value: 'Лендинг',
		id: 4
	},
	{
		value: 'Сайт-визитка',
		id: 5
	},
	{
		value: 'Корпоративный сайт',
		id: 6
	},
	{
		value: 'Внутренее приложение',
		id: 7
	},
	{
		value: 'Не знаю',
		id: 8
	},
	{
		value: 'Другое',
		id: 9
	},
]



const FormOcenkaProekta = ({ title, handleCancel, konsultaciya }) => {
	const [tel, setTel] = useState('')
	const screens = useScreens()


	const onFinish = (values) => {
		console.log('Success:', values);

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
				if (data.ok) {
					message.success('Ваш запрос принят!')
					if (handleCancel) {
						handleCancel()
					}
				}
			})
	}

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
			name="basic"
			labelCol={{
				span: 24,
			}}
			// wrapperCol={{
			// 	span: 24,
			// }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>

			<p className='mt-10 mb-10'>
				Пожалуйста, предоставьте нам данные этой формы, чтобы мы могли подготовить точную оценку стоимости и сроков разработки, учитывая ваши индивидуальные требования к сайту. Мы обязательно свяжемся с вами, как только получим необходимую информацию.
			</p>
			<Form.Item
				label='Ваше имя'
				name="name"
			>
				<Input />
			</Form.Item>

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
					className='border py-1 px-5 rounded-md w-full'
					beforeMaskedValueChange={beforeMaskedValueChange}
					value={tel}
					onChange={(e) => setTel(e.target.value)}
				/>
			</Form.Item>

			<Form.Item
				label={konsultaciya ? 'Выберите, что будем разрабатывать' : 'Выберите, что будем продвигать'}
				name="select"
			>
				<Select
					placeholder="Выберите.."
					allowClear
				>
					{select.map(el => {
						return (
							<Option
								value={el.value}
								key={el.id}
							>
								{el.value}
							</Option>
						)
					})}
				</Select>
			</Form.Item>

			<Form.Item
				label='Описание'
				name="message"
				tooltip=""
			>
				<TextArea
					placeholder="Описание ваших пожеланий"
					autoSize={{
						minRows: 5,
					}}
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
			>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						{konsultaciya ? 'Заказать сайт' : 'Получить оценку сайта'}
					</Button>
				</Form.Item>
			</Form.Item>
			<div className='h-8' />
		</Form>
	)
}
export default FormOcenkaProekta