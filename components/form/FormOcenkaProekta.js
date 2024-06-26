"use client"
import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
	const router = useRouter()

	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Заказ с сайта VI:TECH.BY - ${title}</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<i>Клиент по имени:  </i>${values.name || '-'} \n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<i>Примечание:  </i>${values.message || '-'}\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<i>Выбор:  </i>${values.select || '-'}\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<i>Сайт: </i>${values.link || '-'} \n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<i>Тариф: </i>  ${values.tarif || '-'}\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<i>Обратная связь: </i> ${values.contact || '-'} \n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон: </b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					message.success('Ваш запрос принят!')
					router.push('/uspeshnaya-otpravka')
					if (handleCancel) {
						handleCancel()
					}
				}
			})
	}

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
			{
				konsultaciya ?
					<p className='mt-10 mb-10'>
						Пожалуйста, предоставьте нам данные этой формы, чтобы мы могли подготовить точную оценку стоимости и сроков разработки, учитывая ваши индивидуальные требования к сайту. Мы обязательно свяжемся с вами, как только получим необходимую информацию.
					</p>
					:
					<p className='mt-10 mb-10'>
						Пожалуйста, предоставьте нам данные этой формы, чтобы мы могли подготовить оценку стоимости и сроков продвижения, учитывая ваш сайт. Мы обязательно свяжемся с вами, как только подготовим необходимую информацию.
					</p>
			}

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
					className='border py-1 px-3 rounded-md w-full'
					beforeMaskedValueChange={beforeMaskedValueChange}
					value={tel}
					onChange={handlePhoneChange}
				/>
			</Form.Item>

			{
				konsultaciya ?
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
					:
					<Form.Item
						label='Название сайта'
						name="link"
						tooltip="Напишите пожалуйста ссылку 'https://domain.by/' или домен domain.by, который необходимо продвигать"
					>
						<Input />
					</Form.Item>
			}

			{
				!konsultaciya ?
					<Form.Item
						label='Тариф'
						name="tarif"
						tooltip=""
					>
						<Select>
							<Option value='Лайт' key='Лайт'>
								Тариф "Лайт"
							</Option>
							<Option value='Стандарт' key='Стандарт'>
								Тариф "Стандарт"
							</Option>
							<Option value='Профи' key='Профи'>
								Тариф "Профи"
							</Option>
							<Option value='Не знаю' key='Не знаю'>
								Не знаю
							</Option>
						</Select>
					</Form.Item>
					:
					null
			}


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