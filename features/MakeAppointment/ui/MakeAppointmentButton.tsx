'use client'

import Button from "@/shared/ui/Button";
import "../style.scss";
import { useMakeAppointment } from "../model/useMakeAppointment";

export const MakeAppointmentButton = ({ onClickCallback, extraClasses }: { onClickCallback?: () => void, extraClasses?: string[] }) => {
    const classes = [extraClasses, 'makeAppointment'];

    return (
        <Button 
            text="записаться на ознакомительный вебинар" 
            onClick={onClickCallback} 
            extraClasses={classes} 
        />
    )
}