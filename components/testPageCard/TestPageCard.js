

const TestPageCard = () => {
	return (
		<div className="sd:flex xz:flex-row sd:justify-center sd:flex-wrap">



			<div className="sd:w-1/4 xz:w-full border rounded-md bg-blue-50  sd:mx-3 xz:mx-0  my-3 px-3 py-6">
				<h3 className="text-blue-600 text-lg font-semibold text-center">
					Функциональное тестирование
				</h3>
				<p className="mt-4">Проверка функциональности, гарантия безперебойной работы:</p>

				<ul className="list-disc pl-5 mt-2">
					<li className="">
						тестирование установки
					</li>
					<li className="">
						регрессионное тестирование
					</li>
					<li className="">
						интеграционное тестирование
					</li>
					<li className="">
						smoke тестирование
					</li>
					<li className="">
						приёмочное тестирование
					</li>
				</ul>
			</div>

			<div className="sd:w-1/4 xz:w-full border rounded-md bg-blue-50  sd:mx-3 xz:mx-0  my-3 px-3 py-6">
				<h3 className="text-pink-600 text-lg font-semibold text-center">
					Тестирование производительности
				</h3>
				<p className="mt-4">Проверка систымы на большие нагрузки</p>

				<ul className="list-disc pl-5 mt-2">
					<li className="">
						тестирование производительности
					</li>
					<li className="">
						нагрузочное тестирование
					</li>
					<li className="">
						стресс-тестирование
					</li>
					<li className="">
						smoke тестирование
					</li>
					<li className="">
						тестирование стабильности
					</li>
				</ul>
			</div>

			<div className="sd:w-1/4 xz:w-full border rounded-md bg-blue-50  sd:mx-3 xz:mx-0  my-3 px-3 py-6">
				<h3 className="text-lime-600 text-lg font-semibold text-center">
					Тестирование веб-приложений
				</h3>
				<p className="mt-4">Виды тестирования:</p>

				<ul className="list-disc pl-5 mt-2">
					<li className="">
						функциональное тестирование
					</li>
					<li className="">
						тестирование совместимости
					</li>
					<li className="">
						тестирование производительности
					</li>
					<li className="">
						тестирование на удобство использования
					</li>
					<li className="">
						тестирование безопастности
					</li>
				</ul>
			</div>

			<div className="sd:w-1/4 xz:w-full border rounded-md bg-blue-50  sd:mx-3 xz:mx-0  my-3 px-3 py-6">
				<h3 className="text-purple-600 text-lg font-semibold text-center">
					Автоматизация тестирования
				</h3>
				<p className="mt-4">Виды тестирования:</p>

				<ul className="list-disc pl-5 mt-2">
					<li className="">
						замена ручной работы
					</li>
					<li className="">
						повышение качества продукта
					</li>
					<li className="">
						ускоряет выход на рынок
					</li>
					<li className="">
						тестирование на удобство использования
					</li>
					<li className="">
						снижение затрат
					</li>
				</ul>
			</div>

			<div className="sd:w-1/4 xz:w-full border rounded-md bg-blue-50 sd:mx-3 xz:mx-0 my-3 px-3 py-6">
				<h3 className="text-yellow-500 text-lg font-semibold text-center">
					Мобильное тестирование
				</h3>
				<p className="mt-4">Виды тестирования:</p>

				<ul className="list-disc pl-5 mt-2">
					<li className="">
						эмуляторы
					</li>
					<li className="">
						сервисы для бета-тестирования
					</li>
					<li className="">
						сбор статистики
					</li>
					<li className="">
						проверка на сбои при отображении на разных устройствах
					</li>

				</ul>
			</div>
		</div>
	)
}

export default TestPageCard