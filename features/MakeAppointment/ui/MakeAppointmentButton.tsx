'use client'

import Button from "@/shared/ui/Button";
import "../style.scss";

export const MakeAppointmentButton = ({ 
    onClickCallback, 
    extraClasses 
}: { 
    onClickCallback?: () => void, 
    extraClasses?: string[] 
}) => {
    // Фильтруем undefined и объединяем массивы
    const classes = [...(extraClasses || []), 'makeAppointment'];

    return (
        <Button 
            text="записаться на ознакомительный вебинар" 
            onClick={onClickCallback} 
            extraClasses={classes} 
        />
    )
}