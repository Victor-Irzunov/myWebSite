import Image from "next/image"


const TestPageCard = () => {
	return (
		<div className="sd:flex xz:flex-row sd:justify-center sd:flex-wrap">

			<div className="sd:w-1/4 xz:w-full border shadow-xl bg-blue-50  sd:mx-3 xz:mx-0 rounded-3xl overflow-hidden my-3">
				<div className="bg-blue-500 h-[15vh] py-2 flex items-center px-2">
					<Image src='/testirovanie/test.svg' alt='Функциональное тестирование' width={65} height={65} />
					<h3 className="text-lg font-bold text-left pl-2">
						Функциональное тестирование
					</h3>
				</div>
				<div className="bg-[#1F2125] px-2 flex flex-col justify-between items-center py-8 sd:h-[60vh] xz:h-auto">
					<p className="text-white">Проверка функциональности:</p>
					<ul className="list-disc pl-7 mt-4 font-light text-gray-100">
						<li className="mb-2">
							тестирование установки
						</li>
						<li className="mb-2">
							регрессионное тестирование
						</li>
						<li className="mb-2">
							интеграционное тестирование
						</li>
						<li className="mb-2">
							smoke тестирование
						</li>
						<li className="">
							приёмочное тестирование
						</li>
					</ul>
					<div className="w-full mx-auto">
						<div className="mt-16 bg-white xz:w-4/6 sd:w-5/6 rounded-full px-4 py-3 mx-auto text-center font-semibold">
							<p className="">
								Цена Договорная
							</p>
						</div>
					</div>
				</div>
			</div>


			<div className="sd:w-1/4 xz:w-full border bg-blue-50  shadow-xl sd:mx-3 xz:mx-0 rounded-3xl overflow-hidden my-3">
				<div className="bg-lime-500 h-[15vh] py-2 flex items-center px-2">
					<Image src='/testirovanie/speed test.svg' alt='Тестирование производительности' width={65} height={65} />
					<h3 className="text-lg font-bold text-left pl-2">
						Тестирование производительности
					</h3>
				</div>
				<div className="bg-[#1F2125] px-2 flex flex-col justify-between items-center py-8 sd:h-[60vh] xz:h-auto">
					<p className="text-white">Проверка функциональности:</p>
					<ul className="list-disc pl-7 mt-4 font-light text-gray-100">
						<li className="mb-2">
							тестирование производительности
						</li>
						<li className="mb-2">
							нагрузочное тестирование
						</li>
						<li className="mb-2">
							интеграционное тестирование
						</li>
						<li className="mb-2">
							стресс-тестирование
						</li>
						<li className="mb-2">
							smoke тестирование
						</li>
						<li className="">
							тестирование стабильности
						</li>
					</ul>
					<div className="w-full mx-auto">
						<div className="mt-16 bg-white xz:w-4/6 sd:w-5/6 rounded-full px-4 py-3 mx-auto text-center font-semibold">
							<p className="">
								Цена Договорная
							</p>
						</div>
					</div>
				</div>
			</div>


			<div className="sd:w-1/4 xz:w-full border bg-blue-50 shadow-xl sd:mx-3 xz:mx-0 rounded-3xl overflow-hidden my-3">
				<div className="bg-purple-500 h-[15vh] py-2 flex items-center px-2">
					<Image src='/testirovanie/application.svg' alt='Тестирование веб-приложений' width={65} height={65} />
					<h3 className="text-lg font-bold text-left pl-2">
						Тестирование веб-приложений
					</h3>
				</div>
				<div className="bg-[#1F2125] px-2 flex flex-col justify-between items-center py-8 sd:h-[60vh] xz:h-auto">
					<p className="text-white">Виды тестирования:</p>
					<ul className="list-disc pl-7 mt-4 font-light text-gray-100">
						<li className="mb-2">
							функциональное тестирование
						</li>
						<li className="mb-2">
							тестирование совместимости
						</li>
						<li className="mb-2">
							тестирование производительности
						</li>
						<li className="mb-2">
							стресс-тестирование
						</li>
						<li className="mb-2">
							тестирование на удобство использования
						</li>
						<li className="">
							тестирование безопастности
						</li>
					</ul>
					<div className="w-full mx-auto">
						<div className="mt-16 bg-white xz:w-4/6 sd:w-5/6 rounded-full px-4 py-3 mx-auto text-center font-semibold">
							<p className="">
								Цена Договорная
							</p>
						</div>
					</div>
				</div>
			</div>


			<div className="sd:w-1/4 xz:w-full border bg-blue-50 shadow-xl sd:mx-3 xz:mx-0 rounded-3xl overflow-hidden my-3">
				<div className="bg-rose-500 h-[15vh] py-2 flex items-center px-2">
					<Image src='/testirovanie/Automation.svg' alt='Автоматизация тестирования' width={65} height={65} />
					<h3 className="text-lg font-bold text-left pl-2">
						Автоматизация тестирования
					</h3>
				</div>
				<div className="bg-[#1F2125] px-2 flex flex-col justify-between items-center py-8 sd:h-[60vh] xz:h-auto">
					<p className="text-white">Виды тестирования:</p>
					<ul className="list-disc pl-7 mt-4 font-light text-gray-100">
						<li className="mb-2">
							замена ручной работы
						</li>
						<li className="mb-2">
							повышение качества продукта
						</li>
						<li className="mb-2">
							скорость тестирования
						</li>
						<li className="mb-2">
							ускоряет выход на рынок
						</li>
						<li className="mb-2">
							тестирование на удобство использования
						</li>
						<li className="">
							снижение затрат
						</li>
					</ul>
					<div className="w-full mx-auto">
						<div className="mt-16 bg-white xz:w-4/6 sd:w-5/6 rounded-full px-4 py-3 mx-auto text-center font-semibold">
							<p className="">
								Цена Договорная
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="sd:w-1/4 xz:w-full border bg-blue-50 shadow-xl sd:mx-3 xz:mx-0 rounded-3xl overflow-hidden my-3">
				<div className="bg-sky-500 h-[15vh] py-2 flex items-center px-2">
					<Image src='/testirovanie/mobil.svg' alt='Мобильное тестирование' width={65} height={65} />
					<h3 className="text-lg font-bold text-left pl-2">
						Мобильное тестирование
					</h3>
				</div>
				<div className="bg-[#1F2125] px-2 flex flex-col justify-between items-center py-8 sd:h-[60vh] xz:h-auto">
					<p className="text-white">Виды тестирования:</p>
					<ul className="list-disc pl-7 mt-4 font-light text-gray-100">
						<li className="mb-2">
							эмуляторы
						</li>
						<li className="mb-2">
							сервисы для бета-тестирования
						</li>
						<li className="mb-2">
							сбор статистики
						</li>
						<li className="mb-2">
							проверка на сбои при отображении на разных устройствах
						</li>

					</ul>
					<div className="w-full mx-auto">
						<div className="mt-16 bg-white xz:w-4/6 sd:w-5/6 rounded-full px-4 py-3 mx-auto text-center font-semibold">
							<p className="">
								Цена Договорная
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TestPageCard