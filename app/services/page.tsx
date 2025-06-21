import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Edit, Building, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=79935844456&text=Здравствуйте! Хочу узнать подробнее о ваших услугах&type=phone_number&app_absent=0"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Полный спектр услуг фото и видео съемки</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От корпоративных съемок до личных фотосессий — создаем контент, который работает на ваш бизнес
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Corporate */}
            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Building className="h-16 w-16 mx-auto mb-4 text-black" />
                <CardTitle className="text-2xl mb-2">Для бизнеса</CardTitle>
                <CardDescription className="text-lg">Корпоративные съемки и контент для компаний</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Профессиональный контент для вашего бизнеса, включая:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Корпоративные портреты сотрудников</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Фотографии офиса и рабочих процессов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Контент для социальных сетей</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Рекламные материалы</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href={whatsappUrl} target="_blank">
                    Рассчитать стоимость
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Видеопроизводство</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Создание видеоконтента для социальных сетей и рекламы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Что мы снимаем:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Video className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reels и Stories</h4>
                    <p className="text-gray-600 text-sm">Короткие вертикальные видео для Instagram и TikTok</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Video className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Рекламные ролики</h4>
                    <p className="text-gray-600 text-sm">Промо-видео для продуктов и услуг</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Video className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Корпоративные видео</h4>
                    <p className="text-gray-600 text-sm">Презентации компании и рабочих процессов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Edit className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Полный цикл производства</h4>
                    <p className="text-gray-600 text-sm">От съемки до финального монтажа и цветокоррекции</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-black">
              <CardHeader className="bg-black text-white">
                <CardTitle className="text-xl">Техническое оснащение</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Программное обеспечение:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Adobe Premiere Pro — видеомонтаж</li>
                      <li>• Adobe After Effects — моушн-дизайн</li>
                      <li>• DaVinci Resolve — цветокоррекция</li>
                      <li>• Adobe Photoshop — фоторетушь</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Оборудование:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Профессиональные камеры</li>
                      <li>• Студийное освещение</li>
                      <li>• Стабилизаторы и штативы</li>
                      <li>• Микрофоны для записи звука</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до готового результата
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Консультация</h3>
              <p className="text-gray-600">Обсуждаем ваши задачи и пожелания</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Планирование</h3>
              <p className="text-gray-600">Составляем план съемки и контент-план</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Съемка</h3>
              <p className="text-gray-600">Выезжаем на объект с оборудованием</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Обработка</h3>
              <p className="text-gray-600">Монтаж, ретушь и финальная обработка</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для получения персонального предложения
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
