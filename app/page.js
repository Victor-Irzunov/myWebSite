import BtnComp from '@/components/btnComp/BtnComp'
// import VideoPlayer from '@/components/video/VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/video/VideoPlayer'));

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between py-24">
      <div className="container mx-auto">
        <section className='pt-10'>

          <h1 className='uppercase text-[#004C97] xz:text-3xl sd:text-5xl font-semibold'>
            Разработка сайтов в Минске
          </h1>

          <div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20'>
            <Image
              src='/main/main.webp'
              alt='Компания по разрбатке сайтов'
              className="object-cover w-full h-full xz:mx-auto sd:mx-0"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370} loading="eager"
            />


            <div className='mt-16  uppercase '>
              <div className='relative mb-6'>
                <Image src='/line-black.svg' alt='Линия' width={50} height={10}
                  className='rotate-45 absolute top-0 left-0'
                />
                <p className=''>
                  Создание сайтов и веб приложений
                </p>
              </div>
              <div className='relative mb-6'>
                <Image src='/line-black.svg' alt='Линия' width={50} height={10}
                  className='rotate-45 absolute top-0 left-0'
                />
                <p className=''>
                  SEO продвижение в Google и Яндекс
                </p>
              </div>
              <div className='relative'>
                <Image src='/line-black.svg' alt='Линия' width={50} height={10}
                  className='rotate-45 absolute top-0 left-0'
                />
                <p className=''>
                  Продвижение при помощи рекламы Google и Яндекс
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <article className="mt-28 font-light bg-[#004C97] pb-8 pt-8 px-5 text-white">
        <div className='container mx-auto'>
          <p className=" bg-blue-700 xz:p-2 sd:p-5 xz:text-base sd:text-lg">
            <span className='font-semibold'>Создание сайта</span> - это важный этап в развитии любого бизнеса в интернете.
            Но одного только сайта недостаточно, чтобы привлечь клиентов и начать зарабатывать.
            Ключевым фактором является продвижение ресурса в поисковых системах.
          </p>

          <p className="mt-2 text-right bg-blue-600 xz:p-2 sd:p-5 xz:text-base sd:text-lg">
            <span className='font-semibold'> Мы предлагаем </span> комплексное решение, включающее разработку сайта и его раскрутку в Google и Яндекс.
            Благодаря грамотной SEO-оптимизации и настройке контекстной рекламы ваш сайт быстро займет лидирующие позиции в выдаче,
            и вы начнете получать целевой трафик из поиска каждый день.
          </p>

          <p className="mt-2  bg-blue-700 xz:p-2 sd:p-5 xz:text-base sd:text-lg">
            <span className='font-semibold'>SEO и контекстная реклама </span> работают 24 часа в сутки, привлекая потенциальных клиентов именно тогда,
            когда они ищут такие товары и услуги как ваши. Вы получите стабильный прирост посетителей и заказов с минимальными затратами.
          </p>

          <p className="mt-2 text-right px-2  xz:p-2 sd:p-5 xz:text-base sd:text-xl text-white/90 font-semibold">
            Мы гарантируем высокие результаты в продвижении за счет использования передовых технологий,
            опыта специалистов и индивидуального подхода к каждому проекту. Зарабатывайте больше с помощью интернет-маркетинга вместе с нами!
          </p>

          <Image
            src='/stakan.webp'
            alt='Логотип компании vi-tech на визитке'
            width={130} height={130}
            className=''
            loading="lazy"
          />
        </div>
      </article>

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

          <div className='bg-[#004C97] rounded-md xz:p-4 sd:p-6 text-white/90 text-center  xz:mb-1 sd:mb-4'>
            <p className=''>
              Разрабатываем сайты любой сложности - от простых лендингов до крупных интернет-магазинов. Фокусируемся на пользовательском опыте и конверсии посетителей в клиентов.
            </p>
          </div>
          <div className='bg-blue-700 rounded-md xz:p-4 sd:p-6 text-white text-center font-light xz:mb-1 sd:mb-4'>
            <p className=''>
              Ведем продвижение сайтов в ТОП Google и Яндекса. Комплексная SEO-оптимизация и настройка контекстной рекламы быстро привлекают целевой трафик из поиска.
            </p>
          </div>
          <div className='bg-[#004C97] rounded-md xz:p-4 sd:p-6 text-white/90 text-center font-light xz:mb-1 sd:mb-4'>
            <p className=''>
              Создаем уникальный дизайн сайтов. Современный стиль и корпоративный имидж повышают доверие аудитории.
            </p>
          </div>
          <div className='bg-blue-700 rounded-md xz:p-4 sd:p-6 text-white text-center font-light  xz:mb-1 sd:mb-4'>
            <p className=''>
              Обеспечиваем наполнение сайта полезным контентом, который читают и делятся в соцсетях.
            </p>
          </div>
          <div className='bg-[#004C97] rounded-md xz:p-4 sd:p-6 text-white/90 text-center font-light'>
            <p className=''>
              Осуществляем техническую поддержку и обновление сайтов. Ваш ресурс всегда работает быстро и без сбоев.
            </p>
          </div>
        </article>
      </section>

      <section className='mt-16'>
        <article className='container mx-auto'>
          <div className='mb-3'>
            <Image src='/line.svg' alt='Линия' width={50} height={10}
              className='rotate-45' loading="lazy"
            />
            <h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
              Цели клиентов при разработке сайта
            </h2>
          </div>

          <div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20 sd:mb-16 xz:mb-3'>
            <Image src='/goals.webp'
              alt='Цели клиентов при разработке сайта'
              className="object-cover w-full h-full xz:mx-auto sd:mx-0"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370} loading="lazy"
            />



            <div className="xz:mt-6 sd:mt-0 xz:ml-0 sd:ml-10 text-justify" >
              <p className="">
                Одна из основных целей - это привлечение новых клиентов, рост продаж и заказов. Сайт должен эффективно конвертировать посетителей в платежеспособных пользователей.
              </p>
              <p className="mt-2">
                Еще одна распространенная цель - раскрутка бренда и повышение его узнаваемости с помощью сайта. Качественный сайт формирует имидж компании в глазах аудитории.
              </p>
              <p className="mt-2">
                Создание закрытых корпоративных сервисов, образовательных платформ - это тоже востребованное направление разработки сайтов.
              </p>
              <p className="mt-2">
                Наконец, часто возникает необходимость вновь создать или модернизировать имеющийся сайт с улучшенным дизайном и удобством использования.
              </p>
            </div>
          </div>

        </article>
      </section>

      <div className='mt-12 container mx-auto'>
        <p className="font-semibold uppercase mb-3">
          Наши услуги по продвижению
        </p>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/prodvizhenie-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
          Продвижение сайта в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/seo-prodvizhenie-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
          SEO (органическое) продвижение сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontekstnaya-reklama`} className="flex underline uppercase text-[#004C97]">
          Реклама в Google и Яндекс <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 xz:hidden sd:block' />
        </Link>
      </div>

      <section className='mt-16'>
        <article className='container mx-auto'>
          <div className='mb-3'>
            <Image src='/line.svg' alt='Линия' width={50} height={10}
              className='rotate-45'
            />
            <h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
              Наши задачи при разработке сайта
            </h2>
          </div>

          <div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-20 sd:mb-16 xz:mb-3'>
            <Image src='/zadachi.webp'
              alt='задачи при разработке сайта'
              className="object-cover w-full h-full xz:mx-auto sd:mx-0"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370} loading="lazy"
            />

            <div className="xz:mt-6 sd:mt-0 xz:ml-0 sd:ml-10 text-justify" >

              <p className='mb-3 p-3'>
                Добро пожаловать в мир веб-разработки и продвижения, где наши сайты становятся мостом между вашей идеей и целевой аудиторией. Наша команда специалистов горит желанием создавать уникальные и эффективные веб-платформы, нацеленные на результат. Позвольте рассказать вам о том, какие задачи мы решаем, когда приступаем к разработке вашего сайта.
              </p>
            </div>
          </div>

          <div className=''>
            <div className='bg-slate-100 p-3 rounded-md mb-1'>
              <p className=''>
                <span className='text-[#004C97] font-semibold block mb-2'>
                  Соблазнительный контент для привлечения действий:
                </span>
                Мы понимаем, что сайт – это не просто набор страниц. Это ваш голос в цифровом мире. Мы разрабатываем контент, который внушает доверие и вдохновляет к действию. Наши тексты и изображения не только информативны, но и эмоционально подходят к вашей аудитории, призывая её к взаимодействию.
              </p>
            </div>
            <div className='bg-slate-100 p-3 rounded-md mb-1'>
              <p className=''>
                <span className='text-[#004C97] font-semibold block mb-2'>
                  Простота, удобство и логичность:
                </span>
                Сложные вещи становятся легкими благодаря нашей философии дизайна. Мы стремимся создать сайты, на которых пользователь мгновенно ориентируется. Интуитивная навигация и логичное расположение элементов – это наше золотое правило. Ваш сайт не должен требовать усилий, чтобы найти нужную информацию или выполнить действие.
              </p>
            </div>

            <div className='bg-slate-100 p-3 rounded-md mb-1'>
              <p className=''>
                <span className='text-[#004C97] font-semibold block mb-2'>
                  Преобразование посетителей в клиентов:
                </span>
                Каждая наша линия кода направлена на то, чтобы увеличить конверсии. Мы анализируем поведение посетителей и оптимизируем сайт для максимальной эффективности. Будь то покупка продукта, подписка на рассылку или отправка запроса – мы знаем, как превратить интересующегося пользователя в лояльного клиента.
              </p>
            </div>

            <div className='bg-slate-100 p-3 rounded-md mb-1'>
              <p className=''>
                <span className='text-[#004C97] font-semibold block mb-2'>
                  Профессионализм и инновации:
                </span>
                Мы не стоим на месте. В мире технологий всегда есть место для улучшений. Наша команда следит за трендами и инновациями, чтобы предоставить вам лучшее. Мы не только разрабатываем сайты – мы создаем цифровые истории, которые оставляют след в памяти пользователей.
              </p>
            </div>
            <div className='bg-slate-100 p-3 rounded-md mb-1'>
              <p className='font-semibold text-[#004C97]'>
                Когда вы выбираете нас для разработки и продвижения вашего сайта, вы получаете не просто техническое решение, а партнера, который делает ваш успех своей целью. Мы воплощаем ваши идеи в веб-реальность, делая её доступной и привлекательной для всех, кто ищет то, что вы предлагаете.
              </p>
            </div>

          </div>
        </article>
      </section>

      <div className='flex justify-center sd:mt-20'>
        <VideoPlayer />
      </div>


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

      <section className="container mx-auto mt-20">
        <p className="font-semibold uppercase mb-4 text-lg">
          Наши услуги по разрабоки сайтов и веб-приложений
        </p>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-mnogostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка многостраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-sajta-vizitki`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка сайта-визитки <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-odnostranichnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка одностраничного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-lendinga`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка лендинга <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-internet-magazina`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка интернет-магазина <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/gotovye-sajty`} className="flex underline uppercase text-[#004C97] mb-3">
          Готовые сайты <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/sozdanie-korporativnogo-sajta`} className="flex underline uppercase text-[#004C97] mb-3">
          Разработка корпоративного сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/vnutrennee-korporativnoe-veb-prilozhenie`} className="flex underline uppercase text-[#004C97] ">
          Разработка внутреннего сайта <Image src='/link.svg' alt='Ссылка для перехода на сайт' width={20} height={20} className='ml-2 sd:block xz:hidden' />
        </Link>
      </section>

      <section className='mt-16'>
        <article className='container mx-auto'>
          <div className='mb-3'>
            <Image src='/line.svg' alt='Линия' width={50} height={10}
              className='rotate-45'
            />
            <h2 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
              Почему VI:TECH?
            </h2>
          </div>

          <div className='sd:flex xz:flex-row sd:justify-between  xz:mt-12 sd:mt-10 sd:mb-16 xz:mb-3'>
            <Image src='/pochemu.webp'
              alt=' Почему VI:TECH'
              className="object-cover w-full h-full xz:mx-auto sd:mx-0"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370} loading="lazy"
            />
            <div className="xz:mt-4 sd:mt-0 xz:ml-0 sd:ml-8" >
              <h3 className='p-3 font-semibold uppercase'>
                Наш подход к разработке и продвижению сайтов
              </h3>
              <p className='mb-3 p-3 text-justify'>
                Добро пожаловать в мир VI:TECH, где ваш веб-опыт превращается в эффективное средство достижения целей. Наша философия заключается в том, чтобы не только создавать красивые сайты, но и обеспечивать их максимальную функциональность, видимость и привлекательность для вашей аудитории. Позвольте рассказать о том, почему именно VI:TECH – это правильный выбор.
              </p>
            </div>
          </div>

          <div className='bg-teal-50 p-3 rounded-md mb-1'>
            <h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
              Целенаправленный подход:
            </h4>
            <p className='text-justify'>
              Мы не просто разрабатываем сайты. Мы создаем инструменты, которые помогают вам достигать ваших бизнес-целей. Наша команда вникает в ваши потребности, анализирует ваш рынок и аудиторию, чтобы создать веб-решение, которое идеально подходит для вашего бренда. Мы преображаем ваши идеи в стратегический онлайн-план.
            </p>
          </div>


          <div className='bg-slate-50 p-3 rounded-md mb-1'>
            <h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
              Современный дизайн и пользовательский опыт:
            </h4>
            <p className='text-justify'>
              Мы понимаем, что первое впечатление имеет огромное значение. Наши дизайнеры и разработчики тщательно продумывают каждую деталь, чтобы ваш сайт не только выглядел современно, но и был удобен в использовании. Мы стремимся создать платформу, которая навигируется интуитивно и оставляет положительное впечатление на посетителей.
            </p>
          </div>

          <div className='bg-teal-50 p-3 rounded-md mb-1'>
            <h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
              Интеграция технологий и инноваций:
            </h4>
            <p className='text-justify'>
              Мир онлайн-технологий постоянно меняется, и мы всегда на шаг впереди. Мы используем передовые инструменты и методы, чтобы обеспечить ваш сайт современными возможностями. Будь то адаптивный дизайн, мобильная оптимизация или интеграция с социальными сетями – мы готовы реализовать самые смелые идеи.
            </p>
          </div>

          <div className='bg-slate-50  p-3 rounded-md mb-1'>
            <h4 className='text-[#004C97] font-semibold block mb-2 uppercase'>
              Продвижение с результатом:
            </h4>
            <p className='text-justify'>
              Наши специалисты по продвижению знают, как сделать ваш сайт видимым для вашей целевой аудитории. Мы разрабатываем персонализированные стратегии SEO, контекстной рекламы и других методов, которые привлекают и конвертируют посетителей. Наша цель – не просто увеличить трафик, а обеспечить вас реальными результатами.
            </p>
          </div>

          <div className='p-3 rounded-md mb-1 text-justify'>
            <p className='font-semibold text-[#004C97]'>
              Когда вы выбираете VI:TECH, вы выбираете команду профессионалов, которая не только делает свою работу, но и разделяет ваши цели. Мы создаем не просто сайты, а партнерские отношения, направленные на ваш успех. С нами ваш онлайн-мир становится ярким и результативным.
            </p>
          </div>
        </article>
      </section>

      <div className='bg-purple-100 mt-16 px-3 py-5 rounded-sm'>
        <div className='container mx-auto'>
          <p className='font-semibold text-base sd:text-lg'>
            Не уверены, с чего начать при создании своего сайта? Нажмите кнопку «Получить консультацию» прямо сейчас, и наши эксперты по разработке сайтов будут рады предоставить вам первоклассную консультацию, которая поможет вам определить необходимые шаги для создания качественного сайта.
          </p>
          <div className='flex justify-end w-full mt-9 pr-2'>
            <BtnComp title2='Получить консультацию' tag={true} konsultaciya={true} />
          </div>
        </div>
      </div>

      <section className='mt-16'>
        <article className='container mx-auto'>
          <div className='mb-6'>
            <Image src='/line.svg' alt='Линия' width={50} height={10}
              className='rotate-45' loading="lazy"
            />
            <h3 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
              Наши ключевые направления работы
            </h3>
            <p className='p-2 text-justify'>
              С многолетним опытом в сфере веб-разработки и маркетинга, мы гордимся возможностью предложить вам наши услуги в области продвижения, которые делают ваш бизнес видимым, привлекательным и успешным.
            </p>
          </div>


          <div className='text-center border p-2 bg-slate-50 xz:mb-2 sd:mb-6'>
            <Image src='/partnery/ads.svg' alt='Google ads' className='mx-auto' width={100} height={100} />
            <p className='mb-2'>
              Google Ads
            </p>
            <p className='font-light text-sm px-10'>
              Мы создаем и оптимизируем рекламные кампании на Google, обеспечивая максимальную видимость вашего бренда и привлекая целевую аудиторию.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/analytics.svg' alt='Google Analytics' className='mx-auto' width={100} height={100} />
            <p className='mb-2'>
              Google Analytics
            </p>
            <p className='font-light text-sm px-10'>
              Анализ данных - ключевой аспект успешного маркетинга. Мы используем Google Analytics для максимально точного мониторинга и анализа поведения пользователей на вашем сайте.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/direct.svg' alt='Яндекс Директ' className='mx-auto' width={100} height={100} />
            <p className='mb-2'>
              Яндекс Директ
            </p>
            <p className='font-light text-sm px-10'>
              Эффективные рекламные кампании в Яндекс Директ, которые приводят к росту конверсии и продаж.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/metrika.svg' alt='Яндекс Метрика' className='mx-auto' width={100} height={100} />
            <p className='mb-2 mt-2'>
              Яндекс Метрика
            </p>
            <p className='font-light text-sm px-10'>
              Мы используем Яндекс Метрику для детального анализа посещаемости вашего сайта, понимания потребностей аудитории и оптимизации пользовательского опыта.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/ScreamingFrog.svg' alt='Screaming Frog' className='mx-auto' width={100} height={100} />
            <p className='mb-2 mt-2'>
              Screaming Frog
            </p>
            <p className='font-light text-sm px-10'>
              Тщательный аудит вашего сайта с использованием Screaming Frog позволяет выявить технические проблемы и оптимизировать структуру сайта.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/replain.svg' alt=' Re:plain' loading="lazy" className='mx-auto' width={100} height={100} />
            <p className='mb-2 mt-2'>
              Re:plain
            </p>
            <p className='font-light text-sm px-10'>
              Эффективная коммуникация с клиентами - залог успешного бизнеса. Мы интегрируем Re:plain для оперативной связи с вашей аудиторией.
            </p>
          </div>


          <div className='text-center border p-2 bg-slate-50 xz:mb-2 sd:mb-6'>
            <Image src='/partnery/arsenkin.svg' alt='Arsenkin' loading="lazy" className='mx-auto' width={90} height={90} />
            <p className='mb-2 mt-2'>
              Arsenkin
            </p>
            <p className='font-light text-sm px-10'>
              Уникальные инструменты для автоматизации процессов продвижения сайтов.
            </p>
          </div>


          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/serpstat.svg' alt='serpstat' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
            <p className='mb-2 mt-2'>
              Serpstat
            </p>
            <p className='font-light text-sm px-10'>
              Используя Serpstat, мы анализируем ключевые слова и конкурентное окружение, чтобы определить наилучшую стратегию продвижения.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/rush.svg' alt=' Rush-Analytic' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
            <p className='mb-2 mt-2'>
              Rush-Analytic
            </p>
            <p className='font-light text-sm px-10'>
              Для успешной оптимизации и анализа SEO-параметров мы полагаемся на инструменты, такие как Rush-Analytic.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/SEOpult.png' alt='SEOpult' loading="lazy" className='mx-auto pt-2' width={180} height={80} />
            <p className='mb-2 mt-2'>
              SEOpult
            </p>
            <p className='font-light text-sm px-10'>
              С помощью SEOpult мы эффективно управляем SEO-стратегией, обеспечивая наилучшие результаты в органической выдаче.
            </p>
          </div>

          <div className='text-center border p-2 bg-slate-50  xz:mb-2 sd:mb-6'>
            <Image src='/partnery/search.svg' alt='Google Search Console' loading="lazy" className='mx-auto pt-2' width={220} height={120} />
            {/* <p className='mb-2 mt-2'>
              Google Search Console
            </p> */}
            <p className='font-light text-sm px-10 mt-3'>
              Мониторинг здоровья вашего сайта и оптимизация для поисковых систем через Google Search Console.
            </p>
          </div>

          <p className='mt-5 p-2'>
            Мы стремимся к тому, чтобы ваш сайт стал не только функциональным, но и востребованным. Наша цель - предоставить вам комплексный и качественный сервис, который поможет вашему бизнесу процветать в онлайн-мире.
          </p>
          <p className='font-bold mt-1 p-2'>
            Присоединяйтесь к нам, и давайте вместе создадим историю успеха вашей идеи в интернете!
          </p>
        </article>
      </section>

      <section className='mt-16'>
        <article className='container mx-auto'>
          <div className='mb-6'>
            <Image src='/line.svg' alt='Линия' width={50} height={10}
              className='rotate-45'
            />
            <h3 className='text-[#004C97] uppercase xz:text-lg sd:text-xl xz:mb-4 sd:mb-6'>
              Наши работы
            </h3>
            <p className='text-justify'>
              Представленные здесь проекты — всего лишь часть нашего обширного портфолио. Гордимся каждым сайтом, ведь каждый из них становится прибыльным ресурсом для своего владельца. Наш опыт в веб-разработке укреплен глубоким пониманием рыночных тенденций. Изучая конкурентов в соответствующей сфере, мы тщательно анализируем потребности пользователей, чтобы предоставить оптимальные решения. Каждый созданный нами сайт — результат инновационных подходов и стремления к совершенству. Мы создаем уникальные веб-ресурсы, объединяя креативный дизайн с передовыми технологиями, достигая заметных результатов и успеха для наших клиентов. Важно отметить, что все наши сайты адаптированы под любое устройство пользователя: телефон, планшет, ноутбук, компьютер и даже телевизор, обеспечивая максимальный комфорт для пользователей.
            </p>
          </div>


          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Автоателье
            </p>
            <Image src='/portfolio/aprostyle.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Многостраничный веб-сайт для обеспечения полного спектра услуг. Каждая страница посвящена конкретной работе, будь то ремонт салона или обшивка руля. Дополнительно присутствует страница с контактами и раздел с отзывами. На главной странице представлена информация о компании и предлагаемых услугах.
            </p>
          </div>


          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Разаботка докумендации в экологии
            </p>
            <Image src='/portfolio/ecosan.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Многостраничный сайт посвящен разработке экологических решений. Каждая услуга представлена на отдельной странице, что способствует улучшению SEO, повышает релевантность и обеспечивает удобство для пользователей. Кроме того, на сайте присутствуют страницы контактов, информации о компании, отзывов, цен и предлагаемых услуг.
            </p>
          </div>
          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Ремонт бытовой техники
            </p>
            <Image src='/portfolio/rem-teh.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Здесь мы создали многостраничный сайт, где каждый вид услуги имеет свою собственную страницу. Такой подход не только помогает нам улучшить показатели в поисковых системах (SEO), но и делает информацию более актуальной для пользователей. Кроме того, это обеспечивает удобство и наглядность при поиске нужной информации о ремонте бытовой техники.
            </p>
          </div>


          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Аренда и ремонт строительной техники
            </p>
            <Image src='/portfolio/arenda.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Многостраничный веб-сайт, посвященный аренде и ремонту строительной техники. Каждая техника имеет свою собственную страницу, что способствует улучшению видимости в поисковых системах (SEO), делает информацию более релевантной и удобной для пользователей при поиске нужной строительной техники или услуг ремонта.
            </p>
          </div>


          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Химчистка мебели и ковров
            </p>
            <Image src='/portfolio/him.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Удобный одностраничный сайт на котором вы сможете ознакомиться со всеми предоставляемыми услугами на одной удобной странице, что обеспечивает ясность информации и легкость перемещения по сайту. Одностраничный формат позволяет быстро узнать о нашем разнообразии услуг. Преимущества такого подхода включают быструю загрузку, простой доступ к информации и удобное взаимодействие с пользователями, что экономит время и упрощает выбор услуги. Впрочем, стоит помнить, что из-за сосредоточения всей информации на одной странице, более глубокая детализация некоторых услуг может быть ограничена, и дополнительные материалы могут быть менее удобно организованы.
            </p>
          </div>

          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Грузвоперевозки
            </p>
            <Image src='/portfolio/beltrans.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Многостраничный веб-сайт специализируется в грузоперевозках и предоставляет отдельные страницы для каждой услуги. Этот подход значительно улучшает видимость сайта в поисковых системах (SEO) и облегчает навигацию.

              Сайт включает страницу с контактами, главную страницу с основными предложениями, страницу с ценами и калькулятором. Отзывы собраны на отдельной странице. В разделе 'Услуги' предоставлено подробное описание каждой услуги.

              Такой структурированный подход обеспечивает более высокий уровень обслуживания, улучшает релевантность информации и доступность, а также обеспечивает более эффективное взаимодействие с клиентами.
            </p>
          </div>

          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Интернет магазин сантехники
            </p>
            <Image src='/portfolio/soqo.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Сайт интернет-магазина, где каждая деталь продумана для удобства. Карточки товаров содержат всю необходимую информацию, корзина облегчает заказ, а возможность сравнения помогает сделать лучший выбор. Также есть страница с понравившимся товаром и страница с акциями, административная панель при этом остается простой и удобной.
            </p>
          </div>

          <div className='mt-5 text-center bg-slate-50 shadow-lg border p-3 rounded-xl'>
            <p className='uppercase text-[#004C97]'>
              Сайт-визитка
            </p>
            <Image src='/portfolio/vizitka.webp'
              alt='фото работ компании vi-tech'
              width={150} height={280}
              className='mx-auto' loading="lazy"
            />
            <p className='text-xs'>
              Краткий и содержательный сайт-визитка. Одна страница, все ключевое. Минимализм для максимальной информативности.
            </p>
          </div>

          <div className='mt-10 flex underline justify-end pr-2 items-center'>
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`}>
              смотреть больше работ
            </Link>
            <Image src='/click.svg' alt='перейти в портфолио' className='ml-2' width={20} height={20} />
          </div>

          <div className='mt-20'>
            <p className='font-semibold sd:text-xl xz:text-lg p-2 text-justify mb-10'>
              Мы — разработчики сайтов, готовые реализовать ваши потребности, учитывая ваши бюджетные рамки. От небольших, но важных сайтов-визиток, до полноценных одностраничных ресурсов и глубоких многостраничных веб-проектов. Мы также специализируемся на разработке интернет-магазинов, закрытых корпоративных приложений и образовательных платформ. Независимо от вашей цели, мы готовы создать цифровое пространство, которое эффективно будет работать для вас и вашей аудитории
            </p>

            <Image
              src='/logo/logo-street.webp'
              alt='Логотип компании по разработке сайтов'
              className="object-cover w-full h-full mx-auto"
              style={{ width: '512px', height: 'auto' }}
              width={512} height={370} loading="lazy"
            />
          </div>


        </article>
      </section>

    </main>
  )
}
