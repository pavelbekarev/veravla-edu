import Logo from "@/shared/ui/Logo";
import "../style.scss";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import whatappIcon from "@/public/assets/whatsappIcon.svg"
import facebookIcon from "@/public/assets/facebookIcon.svg"
import facebook2Icon from "@/public/assets/facebook2Icon.svg"
import youtubeIcon from "@/public/assets/youtubeIcon.svg"
import cacaoIcon from "@/public/assets/cacaoIcon.svg"
import GlideUp from "@/features/GlideUp";

export const Footer = () => {
    return (
        <footer className="footer sectionBackground--toTopPositive">
            <div className="container footer__content">
                <Logo extraClasses={['footer__logo']} />
                <div className="footer__socials">
                    <div className="footer__contactsContent">
                        <div className="footer__socials-item">
                            <Mail color="#4ABCEC" />
                            <Link 
                                className="footer__socials-text footer__socials-text--accent footer__socials-text--email"
                                href={"mailto: veravlaedu@gmail.com"} 
                                aria-label="Написать на почту veravlaedu@gmail.com"
                            >
                                veravlaedu@gmail.com
                            </Link>
                        </div>
                        <div className="footer__socials-item">
                            <Phone color="#4ABCEC" />
                            <Link 
                                className="footer__socials-text"
                                href={"tel: +82(10)75269192"} 
                                aria-label="Позвонить по номеру + 82 (10) 7526-9192"
                            >
                                + 82 (10) 7526-9192
                            </Link>
                        </div>
                    </div>
                    <div className="footer__contactsContent">
                        <span className="footer__text">Мы в соц сетях</span>
                        <div className="footer__socialsLinks">
                            <Link href={"/"} aria-label="Перейти в соц сеть facebook"><Image width={30} height={30} src={facebookIcon} alt="Иконка соц сети" /></Link>
                            <Link href={"/"} aria-label="Перейти в соц сеть facebook"><Image width={30} height={30} src={facebook2Icon} alt="Иконка соц сети" /></Link>
                            <Link href={"/"} aria-label="Перейти в соц сеть youtube"><Image width={30} height={30} src={youtubeIcon} alt="Иконка соц сети" /></Link>
                            <Link href={"/"} aria-label="Перейти в соц сеть Whatapp"><Image width={30} height={30} src={whatappIcon} alt="Иконка соц сети" /></Link>
                            <Link href={"/"} aria-label="Перейти в соц сеть cacao"><Image width={30} height={30} src={cacaoIcon} alt="Иконка соц сети" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <span className="footer__copyright-text">Copyright © 2021 VeraVla edu. All rights reserved</span>
            </div>
            <GlideUp extraClasses={['footer__glideUp']} />
        </footer>
    )
}