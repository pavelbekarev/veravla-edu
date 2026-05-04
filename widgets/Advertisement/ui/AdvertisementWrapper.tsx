'use client'
import { ads as defaultAds } from "@/entities/Advertisement/config/defaultAds"
import ShowMoreButton from "@/features/ShowMoreButton"
import CustomSwiper from "@/shared/ui/CustomSwiper"
import "../style.scss"
import { AdvertisementItem } from "./AdvetrisementItem--new"

export const AdvertisementWrapper = ({ ads }: {ads: any[]}) => {
    const handleClick = () => {
        console.debug(ads)
    }

    return (
        <>
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
        </>
    )
}