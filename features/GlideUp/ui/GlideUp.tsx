'use client'

import "../style.scss";
import { ArrowUp } from "lucide-react";

export const GlideUp = ({extraClasses}: {extraClasses?: string[]}) => {
    const handleGlideUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`glideUp ${extraClasses && extraClasses.join(" ")}`}>
            <span className="glideUp__text">Подняться наверх</span>
            <button onClick={handleGlideUp} className="glideUp__button">
                <ArrowUp color="#fff" height={100} />
            </button>
        </div>
    )
}