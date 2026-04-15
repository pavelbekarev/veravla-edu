'use client';

import "../style.scss";
import ShowMoreButton from "@/features/ShowMoreButton";
import { getAds } from "@/entities/Advertisement/api/getAds";
import { AdvertisementItem } from "./AdvetrisementItem--new";
import { Advertisement as AdvertisementType} from "@/entities/Advertisement/model/types";
import { useEffect, useState } from "react";
import CustomSwiper from "@/shared/ui/CustomSwiper";

export const Advertisement = () => {
    const [ads, setAds] = useState<AdvertisementType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAds();
            setAds(result);
        }
        
        fetchData();
    }, [])

    const handleClick = () => {
        console.debug(ads)
    }

    return (
        <section className="advertisement sectionBackground--toTopPositive">
            <div className="container">
                <div className="advertisement__head">
                    <h2 className="title advertisement__title">
                        Объявления школы
                    </h2>
                    <ShowMoreButton text="Все объявления" onClick={handleClick} extraClasses={['advertisement__showMoreBtn']} />
                </div>
                <div className="advertisement__itemsContent">
                    <CustomSwiper
                        swiperConfig={{
                            slides: ads,
                            spaceBetween: 0,
                        }}
                        renderSlide={(slide, key) => (
                            <AdvertisementItem key={key} item={slide} />
                        )}
                    />
                </div>
            </div>
        </section>
    )
}
