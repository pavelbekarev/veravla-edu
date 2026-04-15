'use client';

import "../style.scss";
import Logo from "@/shared/ui/Logo";
import Image from "next/image";
import advantageIcon from "@/public/assets/header__advantageIcon.png"
import Link from "next/link";
import { MakeAppointmentAside, MakeAppointmentButton } from "@/features/MakeAppointment";
import img1 from "@/public/assets/headerBg__left.jpeg"
import img2 from "@/public/assets/headerBg__top.jpeg"
import img3 from "@/public/assets/headerBg__main.jpeg"
import ModalWrapper from "@/shared/ui/ModalWrapper";
import { MakeAppointmentForm } from "@/features/MakeAppointment/ui/MakeAppointmentForm";
import { useModal } from "@/shared/lib/useModal";

export const Header = () => {
    const { isOpen, close, open } = useModal();

    return (
        <header className="header sectionBackground--toTopNegative">
            <div className="circle circle--top" />
            <div className="circle circle--bottom" />
            
            <div className="header__bgImgWrapper header__bgImgWrapper--left">
                <Image 
                    className="header__bgImg header__bgImg--left" 
                    src={img1} 
                    alt="задний фон" 
                />
            </div>
            <div className="header__bgImgWrapper header__bgImgWrapper--top">
                <Image 
                    className="header__bgImg header__bgImg--top" 
                    src={img2} 
                    alt="задний фон" 
                />
            </div>
            <div className="header__bgImgWrapper header__bgImgWrapper--main">
                <Image 
                    className="header__bgImg header__bgImg--main" 
                    src={img3} 
                    alt="задний фон" 
                />
            </div>

            <div className="header__makeAppointmentWrapper">
                <MakeAppointmentAside text="Бесплатная консультация" onClickCallback={open} />
            </div>
            <div className="container">
                <div className="header__navBar">
                    <Logo extraClasses={['header__logo']} />
                    <div className="header__navBar-item">
                        <div className="header__phoneIcon" />
                        <Link 
                            aria-label="Позвонить на номер +82(10)7526-9192" 
                            className="header__navBar-text" 
                            href={'tel: +82(10)7526-9192'}
                        >
                            + 82 (10) 7526-9192
                        </Link>
                    </div>
                </div>

                <div className="header__content">
                    <div className="header__textBlock">
                        <span className="text text--dark">
                            Добро пожаловать в онлайн школу
                        </span>
                        <h1 className="title--head">
                            VeraVla edu!
                        </h1>
                        <span className="text header__text">
                            Переквалифицируйся в разработчика искусственного интеллекта<br />
                            и получи высокооплачиваемую работу
                        </span>
                    </div>
                    <div className="header__advantage">
                        <Image src={advantageIcon} alt="Иконка преимущества" />
                        <div className="header__advantageContent">
                            <span className="header__advantage-title">
                                Мы обучаем с гарантией!
                            </span>
                            <span className="header__advantage-text">
                                Первый месяц действует гарантия 100% <br />
                                возврата денег, если тебя не устроят наши курсы
                            </span>
                        </div>
                    </div>

                    <MakeAppointmentButton onClickCallback={open} extraClasses={['header__makeAppointment']} />
                </div>
            </div>
            <ModalWrapper
                isOpen={isOpen} 
                onClose={close}
            >
                <MakeAppointmentForm />
            </ModalWrapper>
        </header>
        
    )
}
