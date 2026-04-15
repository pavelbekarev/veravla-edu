'use client'

import "../style.scss";
import { Headset } from "lucide-react";

export const MakeAppointmentAside = ({ text, onClickCallback  }: { text?: string, onClickCallback?: () => void }) => {
    return (
        <div className="makeAppointmentAside">
            <div className="makeAppointmentAside__imgWrapper">
                <Headset onClick={onClickCallback} className="makeAppointmentAside__img" />
            </div>
            <span className="makeAppointmentAside__text makeAppointmentAside__text--rotate">
                { text }
            </span>
        </div>
    )
}
