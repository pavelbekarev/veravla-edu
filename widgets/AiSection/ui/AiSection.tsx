'use client'

import Image from "next/image";
import "../style.scss";
import marker from "@/public/assets/ai__marker.svg"
import { MakeAppointmentButton, MakeAppointmentForm } from "@/features/MakeAppointment";
import { Blicks } from "./Blicks";
import ModalWrapper from "@/shared/ui/ModalWrapper";
import { useModal } from "@/shared/lib/useModal";

export const AiSection = () => {
    const aiAdvantages = [
        {
            id: 1,
            title: "На данный момент только в Южной Корее ищут 10,000 специалистов в области AI!"
        },{
            id: 2,
            title: "Младшие разработчики искусственного интеллекта без опыта работы могут получать в Южной Корее 60,000,000 вон (51,000$) в год. Специалист со средним стажем работы может получать уже около 100,000,000 вон (85,000$) в год."
        },{
            id: 3,
            title: `В США уровень зарплат ещё выше! Младший специалист без опыта работы получает в среднем 93,000$ в год. А инженер со средним стажем работы получает уже больше 140,000$ в год!`
        },{
            id: 4,
            title: "А самое вкусное то, что твоя зарплата будет расти вместе с твоими навыками. Стаж не так важен."
        },
        
    ]

    const { close, isOpen, open } = useModal();

    return (
        <section className="aiSection sectionBackground--toTopNegative">
            <Blicks />
            <div className="container">
                <h2 className="aiSection__title title">
                    <span className="aiSection__title--accent">Искусственный<br/> интеллект</span> - это круто?
                </h2>

                <ul className="aiSection__itemsContent">
                    {
                        aiAdvantages.map((item) => (
                            <li key={item.id} className="aiSection__item">
                                <Image src={marker} alt="маркер" />
                                <span className="aiSection__item-text">{ item.title }</span>
                                <div className="ellipse ellipse--text" />
                            </li>
                        ))
                    }
                </ul>

                <MakeAppointmentButton extraClasses={['aiSection__makeAppointment']} onClickCallback={open} />
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
