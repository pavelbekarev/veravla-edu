import ModalWrapper from "@/shared/ui/ModalWrapper"
import "../style.scss"
import { useModal } from "@/shared/lib/useModal"
import { InfoPopup } from "./InfoPopup"
import { useNotificationState } from "@/shared/lib/store"
import { AlertCircle, Check } from "lucide-react"

export const SuccessPopup = () => {
    const notificationStore: any = useNotificationState()

    return (
        <InfoPopup>
            <div className="successPopup">
                <Check className="infoPopup__icon" color="green" />
                <span className="infoPopup__text">
                    { notificationStore.successMessage }
                </span>
            </div>
        </InfoPopup>
    )
}