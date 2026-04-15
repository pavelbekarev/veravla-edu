'use client'

import { MakeAppointmentButton, MakeAppointmentForm } from "@/features/MakeAppointment"
import "../style.scss"
import ModalWrapper from "@/shared/ui/ModalWrapper"
import { useModal } from "@/shared/lib/useModal"

export const OurCourse = () => {
    const ourCourseAdvantages = [
        {
            id: 1,
            title: 'Объясняем сложные вещи простым и доходчивым языком.',
        },{
            id: 2,
            title: 'Обучаем не просто языку программирования, или одной какой-то дисциплине, мы обучаем полностью всей специальности.',
        },{
            id: 3,
            title: 'Ознакомляем с содержанием урока только в режиме реального времени. Ты сможешь сразу задать вопрос и тут же получить ответы. Мы всегда будем рядом.',
        },{
            id: 4,
            title: 'Обучение ведет ведущий и действующий специалист в области искусственного интеллекта в Южной Корее.',
        },{
            id: 5,
            title: 'Обучение проходит в группе по 15 человек, которая внутри делится на 3 команды, и каждая команда выполняет собственный проект. Таким образом, студенты смогут прочувствовать тонкости командной разработки, и уже на этапе обучения окунуться в рабочую атмосферу AI специалиста.',
        },
    ]

    const { close, isOpen, open } = useModal()

    return (
        <section className="ourCourse sectionBackground--toTopNegative">
            <div className="container">
                <h2 className="title ourCourse__title">
                    Почему именно наш курс? <br/><span className="ourCourse__title--accent">Все просто!</span>
                </h2>

                <ul className="ourCourse__itemsContent">
                    {
                        ourCourseAdvantages.map((item) => (
                            <div key={item.id} className="ourCourse__item">
                                { item.title }
                            </div>
                        ))
                    }
                </ul>
                
                <MakeAppointmentButton onClickCallback={open} extraClasses={['ourCourse__makeAppointment']}/>
            </div>
            <ModalWrapper
                isOpen={isOpen} 
                onClose={close}
            >
                <MakeAppointmentForm />
            </ModalWrapper>
        </section>
    )
}