import "../style.scss";
import Image from "next/image";
import logoImg from "@/public/assets/logo.png";

export const Logo = ({ extraClasses }: { extraClasses?: string[] }) => {
    return (
        <div className={`logo ${extraClasses && extraClasses.join(" ")}`}>
            <Image loading="eager" className="logo__img" src={logoImg} alt="Логотип" />
        </div>
    )
}