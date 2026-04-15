'use client'

import { CalendarDays } from "lucide-react";
import "../style.scss";
import Image from "next/image";
import { useState } from "react";

interface CardInfoData<T = string> {
    id: number;
    title: string;
    textContent: string | T;
    img?: any;
    date?: string
}

interface CardInfoConfig {
    isDate: boolean;
}

export const CardInfo = <T, >(
    { data, children, config }: 
    { data: CardInfoData<T>, children?: React.ReactNode, config?: CardInfoConfig }
) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="advertisement__item">
            {
                config?.isDate && 
                    <div className="advertisement__dateWrapper">
                        <CalendarDays width={15} height={15} color="#fff" />
                        <span className="advertisement__item-date">{ data.date }</span>
                    </div>
            }
            <Image src={data.img} alt="Картинка объявления" />

            <h3 className="advertisement__item-title">
                { data.title }
            </h3>
            <div className={`advertisement__text-wrapper ${isExpanded ? 'expanded' : ''}`}>
                {
                    typeof data.textContent !== 'string' ? 
                    data.textContent.map((item: string, key: number) => (
                        <div className="experience-item" key={key}>
                            <span className="experience-item__label">{item.name}</span>
                            <div className="experience-item__dots"></div>
                            <span className="experience-item__value">{item.value}</span>
                        </div>
                    )) :
                    <p className="advertisement__item-text">{data.textContent}</p>
                }
            </div>
            <span 
                className="advertisement__showMore"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Свернуть' : 'Подробнее'}
            </span>
        </div>
    )
}
