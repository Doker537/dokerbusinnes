"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Video, Edit, Palette, Clock, Star, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function HomePage() {
    const whatsappUrl =
        "https://api.whatsapp.com/send/?phone=79935844456&text=Здравствуйте! Хочу узнать подробнее о ваших услугах фото и видео съемки&type=phone_number&app_absent=0"

    useEffect(() => {
        // Добавление скрипта Яндекс.Метрики
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            }
            m[i].l = 1 * new Date()
            for (var j = 0; j < e.scripts.length; j++) {
                if (e.scripts[j].src === r) return
            }
            k = e.createElement(t)
            a = e.getElementsByTagName(t)[0]
            k.async = 1
            k.src = r
            a.parentNode.insertBefore(k, a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")

        ym(103121125, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        })
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Создаем контент,
                        <br />
                        который <span className="text-black underline decoration-4">продает!</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Полный цикл производства контента для вашего бизнеса: от съемки до готовых роликов. Помогаем компаниям
                        создавать качественный контент для социальных сетей и рекламы.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                            <Link href={whatsappUrl} target="_blank">
                                Заказать съемку
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Что вы получите</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Комплексные решения для создания профессионального контента
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="border-2 hover:border-black transition-colors">
                            <CardHeader className="text-center">
                                <Camera className="h-12 w-12 mx-auto mb-4 text-black" />
                                <CardTitle className="text-xl">Фотосъемка</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">Профессионально обработанные фотографии с ретушью</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-black transition-colors">
                            <CardHeader className="text-center">
                                <Video className="h-12 w-12 mx-auto mb-4 text-black" />
                                <CardTitle className="text-xl">Видеосъемка</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">Видеоролики формата Reels, Stories и рекламные клипы</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-black transition-colors">
                            <CardHeader className="text-center">
                                <Edit className="h-12 w-12 mx-auto mb-4 text-black" />
                                <CardTitle className="text-xl">Монтаж</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">
                                    Профессиональный монтаж и цветокоррекция в Adobe Premiere Pro
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-black transition-colors">
                            <CardHeader className="text-center">
                                <Palette className="h-12 w-12 mx-auto mb-4 text-black" />
                                <CardTitle className="text-xl">Контент-план</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">
                                    Разработка сценариев и контент-плана для продвижения бизнеса
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Main Package */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 text-sm font-medium border-black text-black">
                            Популярный пакет
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Месячное сотрудничество</h2>
                        <p className="text-xl text-gray-600">Выезд раз в неделю на съемки + полная обработка контента</p>
                    </div>

                    <Card className="border-2 border-black">
                        <CardHeader className="text-center bg-black text-white">
                            <CardTitle className="text-2xl">Полный цикл производства контента</CardTitle>
                            <CardDescription className="text-gray-200 text-lg">
                                Все включено: от съемки до готового контента
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Что входит в пакет:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Выезд на объект с профессиональным оборудованием</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">10-15 обработанных фотографий в неделю</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">5-7 видеороликов (Reels, Stories, реклама)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Монтаж и цветокоррекция</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Помощь персоналу во время съемки</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Работаю по индивидуальному договору, который учитывает интересы клиента и не ограничивает его в правах — всё прозрачно, без "мелкого шрифта" и скрытых условий.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Бонусы:</h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start gap-3">
                                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Портретная съемка персонала бесплатно в первый месяц</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Разработка контент-плана</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">Фиксация рабочих процессов компании</span>
                                        </li>
                                    </ul>

                                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">15 000 ₽</div>
                                        <div className="text-gray-600 mb-4">за месяц сотрудничества</div>
                                        <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                                            <Link href={whatsappUrl} target="_blank">
                                                Заказать пакет
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Профессиональные навыки</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Использую современное оборудование и профессиональное ПО
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Video className="h-6 w-6" />
                                    Видеомонтаж
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">Adobe Premiere Pro</p>
                                <p className="text-sm text-gray-500">Профессиональный монтаж видеороликов любой сложности</p>
                            </CardContent>
                        </Card>

                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Palette className="h-6 w-6" />
                                    Моушн-дизайн
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">Adobe After Effects</p>
                                <p className="text-sm text-gray-500">Создание анимации и спецэффектов</p>
                            </CardContent>
                        </Card>

                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Edit className="h-6 w-6" />
                                    Цветокоррекция
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">DaVinci Resolve</p>
                                <p className="text-sm text-gray-500">Профессиональная цветокоррекция видео</p>
                            </CardContent>
                        </Card>

                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Camera className="h-6 w-6" />
                                    Фоторетушь
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">Adobe Photoshop</p>
                                <p className="text-sm text-gray-500">Обработка и ретушь фотографий</p>
                            </CardContent>
                        </Card>

                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Clock className="h-6 w-6" />
                                    Соблюдение сроков
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">Ответственный подход</p>
                                <p className="text-sm text-gray-500">Внимание к деталям и пунктуальность</p>
                            </CardContent>
                        </Card>

                        <Card className="border hover:border-black transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Star className="h-6 w-6" />
                                    Освещение
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-3">Естественное и искусственное</p>
                                <p className="text-sm text-gray-500">Профессиональная работа со светом</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать создавать качественный контент?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Свяжитесь со мной для обсуждения вашего проекта. Предложу индивидуальные решения, исходя из целей и задач
                        вашего бизнеса.
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
