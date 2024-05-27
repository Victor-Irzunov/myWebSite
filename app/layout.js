import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer'
import dynamic from 'next/dynamic';

const ReplainWidget = dynamic(() => import('@/components/ReplainWidget/ReplainWidget'));

export const metadata = {
  title: 'Создание сайтов / Минск / Заказать разработку сайта',
  description: 'Создание сайтов в Минске ➤➤➤ Мы разрабатываем и продвигаем сайты ✓ Лучшие цены ✓ Короткие сроки ⭐ Делаем сайты 7 лет ⭐ Закажите создание сайта ☎️ (033) 351-15-97. 🔥 Высокий результат по умеренной цене!',
  keywords: "создание сайтов, заказать сайт, создание интернет магазинов, лендингов, одностраничных сайтов, многостраничных сайтов, Минск, Беларусь, веб-разработка, веб-дизайн, интернет-магазин, корпоративный сайт, создать сайт цена, разработка веб-приложений, под ключ",
  alternates: {
    canonical: 'https://vi-tech.by'
  },
  ogTitle: 'Создание сайтов / Минск / Заказать разработку сайта',
  ogDescription: "Создание сайтов в Минске ➤➤➤ Мы разрабатываем и продвигаем сайты ✓ Лучшие цены ✓ Короткие сроки ⭐ Делаем сайты 7 лет ⭐ Закажите создание сайта ☎️ (033) 351-15-97. 🔥 Высокий результат по умеренной цене!",
  ogImage: '/logo/logo-about2.wepb',
  twitterTitle: 'Создание сайтов / Минск / Заказать разработку сайта',
  twitterDescription: "Создание сайтов в Минске ➤➤➤ Мы разрабатываем и продвигаем сайты ✓ Лучшие цены ✓ Короткие сроки ⭐ Делаем сайты 7 лет ⭐ Закажите создание сайта ☎️ (033) 351-15-97. 🔥 Высокий результат по умеренной цене!",
  twitterImage: '/logo/logo-about2.wepb'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#317EFB" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="google-site-verification" content="Eo0Xif5nmQIm7hOzoU1kzcVeqrcRlDBiDWa5au4Yxz4" />
        <meta name="yandex-verification" content="4c1774881f86806f" />

        <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-11166544233"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11166544233');
              `
          }}
        />
        {/* <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-CG6QV5N03T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CG6QV5N03T');
              `
          }}
        /> */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <ReplainWidget />
      </body>
    </html>
  )
}
