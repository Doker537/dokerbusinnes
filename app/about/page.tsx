import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Video, Edit, Palette, Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=79935844456&text=Здравствуйте! Хочу узнать больше о вашем опыте работы&type=phone_number&app_absent=0"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Профессиональный фотограф и видеограф</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Создаю качественный контент для бизнеса. Специализируюсь на корпоративной съемке, рекламном
            контенте и видео для социальных сетей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
              <Link href={whatsappUrl} target="_blank">
                Связаться со мной
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-6 py-4 text-lg border-black text-black hover:bg-gray-50"
              >
                <Link href="https://dokerphoto.ru/moi-raboty" target="_blank">
                  Мои фото
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-6 py-4 text-lg border-black text-black hover:bg-gray-50"
              >
                <Link href="https://dokerphoto.ru/videovizitki" target="_blank">
                  Мои видео
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Профессиональные навыки</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Использую современное оборудование и профессиональное программное обеспечение
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Video className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Видеомонтаж</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Adobe Premiere Pro</p>
                <p className="text-sm text-gray-500">
                  Профессиональный монтаж видеороликов любой сложности, создание динамичного контента для социальных
                  сетей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Моушн-дизайн</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Adobe After Effects</p>
                <p className="text-sm text-gray-500">
                  Создание анимации, спецэффектов и трекинга для рекламных роликов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Edit className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Цветокоррекция</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">DaVinci Resolve</p>
                <p className="text-sm text-gray-500">Профессиональная цветокоррекция и грейдинг видео</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Фоторетушь</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Adobe Photoshop</p>
                <p className="text-sm text-gray-500">Обработка и ретушь фотографий, адаптация для социальных сетей</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Освещение</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Студийное и естественное</p>
                <p className="text-sm text-gray-500">
                  Профессиональная работа с естественным и искусственным освещением
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-xl">Ответственность</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Соблюдение сроков</p>
                <p className="text-sm text-gray-500">Ответственный подход, внимание к деталям и пунктуальность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Опыт работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Работал с различными типами бизнеса и знаю, как создать эффективный контент
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Что умею:</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Работа по техническому заданию</h4>
                    <p className="text-gray-600">Умею четко следовать брифу и взаимодействовать с маркетологами</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Работа с людьми</h4>
                    <p className="text-gray-600">Помогаю персоналу чувствовать себя уверенно во время съемки</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Индивидуальный подход</h4>
                    <p className="text-gray-600">Предлагаю решения, исходя из целей и задач конкретного бизнеса</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Полный цикл</h4>
                    <p className="text-gray-600">От планирования съемки до финальной обработки и доставки материалов</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Типы проектов:</h3>
              <div className="space-y-4">
                <Card className="border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Корпоративная съемка</h4>
                    <p className="text-sm text-gray-600">
                      Портреты сотрудников, офисные пространства, рабочие процессы
                    </p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Контент для соцсетей</h4>
                    <p className="text-sm text-gray-600">Reels, Stories, посты для Instagram, TikTok, VK</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Рекламные материалы</h4>
                    <p className="text-sm text-gray-600">Промо-ролики, каталожная съемка, презентационные видео</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Мероприятия</h4>
                    <p className="text-sm text-gray-600">Конференции, корпоративы, презентации, networking</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Мой подход к работе</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый проект — это возможность создать что-то уникальное
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Понимание задач</h3>
              <p className="text-gray-600">
                Детально изучаю специфику вашего бизнеса и целевую аудиторию, чтобы создать максимально эффективный
                контент
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Качество</h3>
              <p className="text-gray-600">
                Использую профессиональное оборудование и современные технологии для достижения высокого качества
                результата
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Результат</h3>
              <p className="text-gray-600">
                Создаю контент, который не только красиво выглядит, но и работает на достижение ваших бизнес-целей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы работать вместе?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Расскажите о своем проекте, и я предложу оптимальное решение для вашего бизнеса
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Link href={whatsappUrl} target="_blank">
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
