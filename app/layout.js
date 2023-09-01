import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Создание сайтов в Минске | Заказать разработку сайта под ключ, стоимость',
  description: 'Мы разрабатываем и продвигаем сайты в Минске и Беларуси. Закажите сайт у нас и получите клиентов из Google и Яндекс. Высокий результат по приятной цене!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
