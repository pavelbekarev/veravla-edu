import "../style.scss";
import Button from "@/shared/ui/Button";

export const ShowMoreButton = (
    { text, onClick, extraClasses }: 
    { text: string, onClick: () => void, extraClasses?: string[] }
) => {
    const classes = [...(extraClasses || []), 'makeAppointment'];

    return (
        <Button 
            text={text} 
            onClick={onClick} 
            extraClasses={classes} 
        />
    )
}