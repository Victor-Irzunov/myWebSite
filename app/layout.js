import Header from '@/components/header/Header';
import './globals.css';
import Footer from '@/components/footer/Footer';
import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

const ReplainWidget = dynamic(() => import('@/components/ReplainWidget/ReplainWidget'));

export const metadata = {
  title: 'Создание сайтов / Минск / Заказать разработку сайта',
  description: 'Создание сайтов в Минске ➤➤➤ Мы разрабатываем и продвигаем сайты ✓ Лучшие цены ✓ Короткие сроки ⭐ Делаем сайты 7 лет ⭐ Закажите создание сайта ☎️ (033) 351-15-97. 🔥 Высокий результат по умеренной цене! Директор Ирзунов Виктор',
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
        <GoogleTagManager gtmId="GTM-N9CXDHMG" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="google-site-verification" content="Eo0Xif5nmQIm7hOzoU1kzcVeqrcRlDBiDWa5au4Yxz4" />
        <meta name="yandex-verification" content="4c1774881f86806f" />
      </head>
      <body>

        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9CXDHMG"
            height="0" width="0" style={{ display:'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>

        <Header />
        {children}
        <Footer />

        <ReplainWidget />
      </body>
    </html>
  )
}
