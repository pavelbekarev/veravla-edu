import { Vacancy } from "@/entities/Vacancy/model/types"
import CardInfo from "@/shared/ui/CardInfo"

export const VacancyItem = ({ item }: { item: Vacancy }) => {
    return (
        <CardInfo 
            data={{
                ...item,
                textContent: item.requirements
            }} 
            config={{
                isDate: false
            }}
        />
    )
}
