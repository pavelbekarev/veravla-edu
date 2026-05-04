import "../style.scss";

export const InfoPopup = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="infoPopup">
            { children }
        </div>
    )
}
