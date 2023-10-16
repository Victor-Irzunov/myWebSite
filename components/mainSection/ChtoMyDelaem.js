import Image from "next/image"


const ChtoMyDelaem = () => {
  return (

    <section className='mt-16'>
      <article className='container mx-auto'>
        <div className='mb-3'>
          <Image src='/line.svg' alt='Линия' width={50} height={10}
            className='rotate-45'
          />
          <h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl mb-6'>
            Что мы делаем?
          </h2>

          <div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20 sd:mb-16 xz:mb-3'>
            <Image
              src='/baner.webp'
              alt='Логотип компании vi-tech на баннере'
              className="object-cover w-full h-full xz:mx-auto sd:mx-0"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370}
              loading="lazy"
            />

            <div className='xz:mt-2 sd:mt-0 sd:ml-7 p-2 text-gray-600'>
              <p className='text-justify'>
                Компания VI:TECH предоставляет полный спектр услуг для продвижения и развития вашего бизнеса онлайн:
              </p>
              <ul className='mb-2 mt-1'>
                <li>
                  • Разработка сайтов и интернет-магазинов
                </li>
                <li>
                  • Продвижение в поисковых системах (SEO).
                </li>
                <li>
                  • Настройка и ведение рекламых кампаний
                </li>
                <li>
                  • Контент-маркетинг
                </li>
                <li>
                  • Брендинг и дизайн
                </li>
                <li>
                  • Digital стратегии для бизнеса
                </li>
              </ul>
              <p className='text-justify'>
                Мы выбираем оптимальные решения, чтобы реализовать цифровой потенциал вашего бизнеса. Работаем на результат - увеличение продаж и популярности бренда.
              </p>
              <p className='font-bold mt-4'>
                Доверьте интернет-продвижение профессионалам!
              </p>
            </div>
          </div>
        </div>

        <div
          className='bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold rounded-md xz:p-4 sd:p-6
          text-center xz:mb-2 sd:mb-4 text-lg'
        >
          <p className=''>
            Разрабатываем сайты любой сложности - от простых лендингов до крупных интернет-магазинов. Фокусируемся на пользовательском опыте и конверсии посетителей в клиентов.
          </p>
        </div>
        <div className='text-lg bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold rounded-md xz:p-4 sd:p-6  text-center xz:mb-2 sd:mb-4'>
          <p className=''>
            Ведем продвижение сайтов в ТОП Google и Яндекса. Комплексная SEO-оптимизация и настройка контекстной рекламы быстро привлекают целевой трафик из поиска.
          </p>
        </div>
        <div className='text-lg bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold rounded-md xz:p-4 sd:p-6  text-center xz:mb-2 sd:mb-4'>
          <p className=''>
            Создаем уникальный дизайн сайтов. Современный стиль и корпоративный имидж повышают доверие аудитории.
          </p>
        </div>
        <div className='text-lg bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold  rounded-md xz:p-4 sd:p-6 text-center  xz:mb-2 sd:mb-4'>
          <p className=''>
            Обеспечиваем наполнение сайта полезным контентом, который читают и делятся в соцсетях.
          </p>
        </div>
        <div className='text-lg bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold rounded-md xz:p-4 sd:p-6 text-center'>
          <p className=''>
            Осуществляем техническую поддержку и обновление сайтов. Ваш сайт всегда будет работать быстро и без сбоев.
          </p>
        </div>
      </article>
    </section>
  )
}

export default ChtoMyDelaem