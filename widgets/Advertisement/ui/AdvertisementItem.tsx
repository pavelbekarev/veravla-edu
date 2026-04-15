'use client'

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Advertisement } from "@/entities/Advertisement/model/types";

export const AdvertisementItem = ({ item }: { item: any }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="advertisement__item">
            <div className="advertisement__dateWrapper">
                <CalendarDays width={15} height={15} color="#fff" />
                <span className="advertisement__item-date">{ item.date }</span>
            </div>
            <Image src={item.img} alt="Картинка объявления" />

            <h3 className="advertisement__item-title">
                { item.title }
            </h3>
            <div className={`advertisement__text-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <p className="advertisement__item-text">
                    { item.description }
                </p>
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
