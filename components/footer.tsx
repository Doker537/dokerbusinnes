import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function Footer() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=79935844456&text=Здравствуйте! Хочу узнать о ваших услугах&type=phone_number&app_absent=0"

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="Doker" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Создаем качественный контент для бизнеса. Фото и видео съемка для социальных сетей и рекламы.
            </p>
            <div className="flex space-x-4">
              <Link href={whatsappUrl} target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="tel:+79935844456" className="text-gray-600 hover:text-black transition-colors">
                <Phone className="h-5 w-5" />
              </Link>
              <Link href="mailto:vbif537@mail.ru" className="text-gray-600 hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Корпоративная съемка
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Видео для соцсетей
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Рекламные ролики
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Фотосессии
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="https://dokerphoto.ru/moi-raboty"
                  target="_blank"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Фото работы
                </Link>
              </li>
              <li>
                <Link
                  href="https://dokerphoto.ru/videovizitki"
                  target="_blank"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Видео работы
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2024 Doker. Все права защищены.</p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">Фото и видео съемка для бизнеса</p>
        </div>
      </div>
    </footer>
  )
}
