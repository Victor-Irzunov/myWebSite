import Image from "next/image"


const ZadachiPriProdvizheniiSajta = () => {
	return (
		<section className='mt-16'>
			<article className='container mx-auto'>
				<div className='mb-3'>
					<Image src='/line.svg' alt='Линия' width={50} height={10}
						className='rotate-45'
					/>
					<h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
						Наши задачи при продвижении сайта
					</h2>
				</div>

				<div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20 sd:mb-16 xz:mb-3'>
					<Image src='/marketing.webp'
						alt='задачи при продвижении сайта'
						className="object-cover w-full h-full xz:mx-auto sd:mx-0"
						style={{ width: '512px', height: 'auto' }}
						width={512} height={370} loading="lazy"
					/>

					<div className="xz:mt-4 sd:mt-0 xz:ml-0 sd:ml-7 text-justify" >
						<p className='mb-3 p-3'>
							Мы – команда разработчиков и маркетологов, чья цель состоит в том, чтобы ваш сайт не только выделялся на фоне конкурентов, но и привлекал к себе целевую аудиторию с помощью самых современных и эффективных методов продвижения.
						</p>
					</div>
				</div>
				<div className=''>
					<div className='bg-slate-100 p-3 rounded-md mb-1'>
						<p className=''>
							<span className='text-[#004C97] font-semibold block mb-2'>
								SEO: Привлечение органического трафика:
							</span>
							Мы знаем, как сделать ваш сайт "любимчиком" поисковых систем. Структурированный контент, оптимизированный под ключевые запросы, улучшение скорости загрузки и другие SEO-приемы помогут вашему сайту подниматься в поисковой выдаче. Мы создаем контент, который не только информативен, но и релевантен вашей аудитории.
						</p>
					</div>
					<div className='bg-slate-100 p-3 rounded-md mb-1'>
						<p className=''>
							<span className='text-[#004C97] font-semibold block mb-2'>
								Поисковая реклама (контекстная) Google и Яндекс: оплата за клик, оплата за конверсию:
							</span>
							Мы гордимся своим опытом в создании успешных кампаний по контекстной рекламе. Наши специалисты подберут ключевые слова, настроят объявления и оптимизируют ставки, чтобы ваш бюджет работал максимально эффективно. Мы фокусируемся не на количестве кликов, а на качестве – привлекаем только тех пользователей, которые действительно заинтересованы.
						</p>
					</div>

					<div className='bg-slate-100 p-3 rounded-md mb-1'>
						<p className=''>
							<span className='text-[#004C97] font-semibold block mb-2'>
								КМС реклама Google и Яндекс:
							</span>
							Контекстно-медийная сеть – это мощный инструмент для привлечения аудитории, чьи интересы соответствуют вашему продукту или услуге. Мы разрабатываем креативные объявления, которые впечатляют и запоминаются. Это возможность достичь большей видимости и подключить потенциальных клиентов на разных платформах.
						</p>
					</div>

					<div className='bg-slate-100 p-3 rounded-md mb-1'>
						<p className='font-semibold text-[#004C97]'>
							Когда вы доверяете нам продвижение вашего сайта, вы получаете гарантию того, что ваш бизнес будет представлен в цифровом пространстве с максимальной эффективностью. Мы адаптируемся к изменениям в алгоритмах поисковых систем, следим за трендами и применяем передовые методы. Результат – это рост трафика, повышение конверсий и укрепление вашей онлайн-репутации. Вместе мы создаем успешное веб-присутствие, которое гарантирует вашему бизнесу процветание в онлайн-мире.
						</p>
					</div>
				</div>
			</article>
		</section>
	)
}

export default ZadachiPriProdvizheniiSajta