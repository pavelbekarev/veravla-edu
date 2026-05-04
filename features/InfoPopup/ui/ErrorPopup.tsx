import ModalWrapper from "@/shared/ui/ModalWrapper"
import "../style.scss"
import { useModal } from "@/shared/lib/useModal"
import { InfoPopup } from "./InfoPopup"
import { useNotificationState } from "@/shared/lib/store"
import { AlertCircle } from "lucide-react"

export const ErrorPopup = () => {
    const notificationStore = useNotificationState()

    return (
        <InfoPopup>
            <div className="errorPopup">
                <AlertCircle className="infoPopup__icon" color="red" />
                <span className="infoPopup__text">
                    { notificationStore.errorMessage }  
                </span>
            </div>
        </InfoPopup>
    )
}
