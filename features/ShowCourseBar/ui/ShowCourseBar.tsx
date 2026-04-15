import "../style.scss"
import { ChevronDown } from "lucide-react"
import { ChevronUp } from "lucide-react"
import { memo } from "react"

export const ShowCourseBar = memo(({ item, onClick, isActive }: { item: any, onClick: () => void, isActive: boolean }) => {
    return (
        <button className="showCourseBar" onClick={onClick}>
            <div className="showCourseBar__textContent">
                <span className="showCourseBar__title">{ item.title }</span>
                <span className="showCourseBar__text">{ item.duration }</span>
                { item.isDeveloping && 
                    <span className="showCourseBar__text showCourseBar__text--developing">
                        В разработке
                    </span> 
                }
            </div>
            <div className="showCourseBar__openCourseBtn">
                {
                    isActive 
                    ? 
                    <ChevronUp color="#fff" />
                    :
                    <ChevronDown color="#fff" />
                }
            </div> 
        </button>
    )
})
