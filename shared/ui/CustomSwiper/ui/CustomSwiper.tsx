'use client'

import "../style.scss"
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { CustomSwiperProps } from "../model/types"
import { defaultBreakpoints } from "@/shared/config/defaultBreakpoints"

export default function CustomSwiper({ swiperConfig, renderSlide, children }: CustomSwiperProps) {
    const modules: any[] = [Navigation, Autoplay, A11y]
    const defaultAutoplayConfig = {
        pauseOnMouseEnter: true,
        delay: 1000,
    }

    return (
        <Swiper
            modules={modules}
            className='customSwiper'
            slidesPerView={swiperConfig?.slidesPerView || 3}
            speed={300}
            autoplay={
                swiperConfig?.autoPlay ? swiperConfig?.autoPlay || defaultAutoplayConfig : false
            }
            breakpoints={swiperConfig?.breakpoints || defaultBreakpoints}
            spaceBetween={swiperConfig?.spaceBetween || 20} 
            loop
            draggable={false}
            navigation={swiperConfig?.navigation}
        >
            {
                swiperConfig?.slides.map((slide: any, key: number) => (
                    <SwiperSlide>
                        {
                            renderSlide ?
                            renderSlide(slide, key) :
                            children || <p>Слайдер</p>
                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}