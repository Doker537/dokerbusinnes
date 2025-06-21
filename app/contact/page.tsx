import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=79935844456&text=Здравствуйте! Хочу обсудить съемку&type=phone_number&app_absent=0"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Свяжитесь со мной</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Готов обсудить ваш проект и ответить на все вопросы</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-black transition-colors text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Самый быстрый способ связи</p>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href={whatsappUrl} target="_blank">
                    Написать в WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors text-center">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Звоните в рабочее время</p>
                <Button asChild variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                  <Link href="tel:+79935844456">+7 (993) 584-44-56</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors text-center">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Для подробных запросов</p>
                <Button asChild variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                  <Link href="mailto:vbif537@mail.ru">Написать письмо</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Режим работы</h2>
            <p className="text-xl text-gray-600">Готов обсуждать проекты и проводить съемки</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Консультации</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-900 font-semibold">Понедельник - Пятница</p>
                <p className="text-gray-600">10:00 - 20:00</p>
                <p className="text-gray-900 font-semibold">Суббота - Воскресенье</p>
                <p className="text-gray-600">12:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Съемки</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-900 font-semibold">Выезд на объект</p>
                <p className="text-gray-600">В любое удобное время</p>
                <p className="text-gray-900 font-semibold">Студийные съемки</p>
                <p className="text-gray-600">По предварительной записи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы о съемке</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Сколько времени занимает обработка материалов?
                </h3>
                <p className="text-gray-600">
                  Обычно 3-7 рабочих дней в зависимости от объема работы. Для срочных заказов возможна ускоренная
                  обработка за дополнительную плату.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  В каком формате предоставляются готовые материалы?
                </h3>
                <p className="text-gray-600">
                  Фотографии в высоком разрешении (JPEG), видео в формате MP4. Также предоставляю версии, адаптированные
                  для социальных сетей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Возможны ли съемки в выходные дни?</h3>
                <p className="text-gray-600">
                  Да, работаю в выходные дни. Стоимость съемки в выходные может отличаться от будничных дней.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Предоставляете ли вы оборудование для съемки?
                </h3>
                <p className="text-gray-600">
                  Да, у меня есть все необходимое профессиональное оборудование: камеры, объективы, освещение, штативы,
                  стабилизаторы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Напишите мне в WhatsApp, и мы обсудим детали вашего проекта
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Link href={whatsappUrl} target="_blank">
              Написать в WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
