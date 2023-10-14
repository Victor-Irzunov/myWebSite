import Image from "next/image";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const CardProdvizhenie = () => {
	return (
		<div>
			<h3 className="mb-10 uppercase font-semibold sd:text-2xl xz:text-xl text-center">Тарифы на продвижение сайта</h3>
			<p className="font-light text-center">
				Каждый из наших тарифов может быть индивидуально адаптирован под уникальные потребности вашего бизнеса. Дополнительные услуги доступны по запросу. Наши эксперты всегда готовы помочь вам выбрать наилучшее решение для вашего проекта.
			</p>
			<div className="sd:flex flex-row sd:justify-evenly sd:items-center mt-11">
				<div className="sd:w-1/4 xz:w-full sd:mx-3 xz:mx-0  sd:h-[55vh] xz:h-auto  my-7 px-2 pb-3 pt-2 border rounded-md text-center">
					<div className="bg-slate-100 py-3 rounded-md sd:h-[13vh] xz:h-[17vh]">
						<p className="text-2xl font-semibold text-blue-600">
							Лайт
						</p>
						<p className="font-light text-sm mt-3">
							Удобен для одностраничных сайтов
						</p>
					</div>
					<div className="px-1 mt-8">
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Google</strong>
							</span>
							<span className="font-semibold">
								от 99 BYN
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Яндекс</strong>
							</span>
							<span className="font-semibold">
								от 99 BYN
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								<strong>SEO</strong> оптимизация сайта
								{' '}
								<Tooltip title={<p className="text-center">Если сайт разработан нашей компанией</p>}>
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
							<span className="font-semibold text-green-600">
								Базовая
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>рекламе</strong>
							</span>
							<span className="font-semibold text-green-600">
								Ежемесячно
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>SEO</strong>
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячная <strong>SEO</strong> оптимизация
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячное ведение <strong>рекламы</strong>
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>
					</div>
				</div>


				<div className="sd:w-1/4 xz:w-full sd:mx-3 xz:mx-0 sd:h-[55vh] xz:h-auto my-7 px-2  pb-3 pt-2  border rounded-md text-center">
					<div className="bg-slate-100 py-3 rounded-md  sd:h-[13vh] xz:h-[17vh]">
						<p className="text-2xl font-semibold text-green-600">
							Стандарт
						</p>
						<p className="font-light text-sm mt-3">
							Удобен для многостраничных сайтов
						</p>
					</div>

					<div className="px-1 mt-8">
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Google</strong>
							</span>
							<span className="font-semibold">
								от 150 BYN
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Яндекс</strong>
							</span>
							<span className="font-semibold">
								от 150 BYN
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								<strong>SEO</strong> оптимизация сайта
								{' '}
								<Tooltip title={<p className="text-center">Если сайт разработан нашей компанией</p>}>
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
							<span className="font-semibold text-green-600">
								Полная
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>рекламе</strong>
							</span>
							<span className="font-semibold text-green-600">
								Ежемесячно
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>SEO</strong>
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячная <strong>SEO</strong> оптимизация
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячное ведение <strong>рекламы</strong>
							</span>
							<Image src='/cross.svg' alt='Опция недоступна' width={15} height={15} />
						</div>
					</div>
				</div>


				<div className="sd:w-1/4 xz:w-full sd:mx-3 xz:mx-0 sd:h-[55vh] xz:h-auto  my-7 px-2  pb-3 pt-2  border rounded-md text-center">
					<div className="bg-slate-100 py-3 rounded-md sd:h-[13vh] xz:h-[17vh]">
						<p className="text-2xl font-semibold text-orange-500">
							Профи
						</p>
						<p className="font-light text-sm mt-3">
							Удобен для интернет-магазинов и крупных сайтов
						</p>
					</div>

					<div className="px-1 mt-8">
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Google</strong>
							</span>
							<span className="font-semibold">
								от 299 BYN
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Запуск рекламы <strong>Яндекс</strong>
							</span>
							<span className="font-semibold">
								от 299 BYN
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								<strong>SEO</strong> оптимизация сайта
								{' '}
								<Tooltip title={<p className="text-center">Если сайт разработан нашей компанией</p>}>
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
							<span className="font-semibold text-green-600">
								Полная
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>рекламе</strong>
							</span>
							<span className="font-semibold text-green-600">
								Ежемесячно
							</span>
						</div>
						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Консультация по <strong>SEO</strong>
							</span>
							<span className="font-semibold text-green-600">
								Ежемесячно
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячная <strong>SEO</strong> оптимизация
								{' '}
								<Tooltip title={<p className="text-center">Если сайт разработан нашей компанией</p>}>
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
							<span className="font-semibold">
								от 299 BYN
							</span>
						</div>

						<div className="flex justify-between text-xs mb-3">
							<span className="font-light">
								Ежемесячное ведение <strong>рекламы</strong>
							</span>
							<span className="font-semibold">
								от 199 BYN
							</span>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}

export default CardProdvizhenie