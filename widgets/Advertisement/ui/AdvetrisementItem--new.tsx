import CardInfo from "@/shared/ui/CardInfo";

export const AdvertisementItem = ({ item }: { item: any }) => {
    const stripHtml = (html: string) => {
        return html
            .replace(/<[^>]+>/g, '')
            .replace(/&#8212;/g, '—')
            .replace(/&#8230;/g, '…')
            .trim();
    };

    const normalizedItem = {
        id: item.id,
        title: item.title.rendered,
        textContent: stripHtml(item.content.rendered),
        date: item.date,
    }

    return (
        <CardInfo data={normalizedItem} config={{isDate: false}} />
    )
}
