import CardInfo from "@/shared/ui/CardInfo";

export const AdvertisementItem = ({ item }: { item: any }) => {
    return (
        <CardInfo data={item} config={{isDate: false}} />
    )
}
