import "../style.scss";
import ShowMoreButton from "@/features/ShowMoreButton";
import { getAds } from "@/entities/Advertisement/api/getAds";
import { AdvertisementItem } from "./AdvetrisementItem--new";
import { Advertisement as AdvertisementType} from "@/entities/Advertisement/model/types";
import CustomSwiper from "@/shared/ui/CustomSwiper";
import { AdvertisementWrapper } from "./AdvertisementWrapper";

export default async function Advertisement() {
    // const [ads, setAds] = useState<AdvertisementType[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getAds();
    //         setAds(result);
    //     }
        
    //     fetchData();
    // }, [])
    const ads: any[] = await getAds();

    if (!ads || ads.length === 0) {
        return (
            <section className="advertisement sectionBackground--toTopPositive">
                <div className="container">
                    <h1>Нет данных</h1>
                </div>
            </section>
        )
    }
    else if (ads.length > 0) {
        return (
            <section className="advertisement sectionBackground--toTopPositive">
                <div className="container">
                    <AdvertisementWrapper ads={ads} />
                </div>
            </section>
        )
    }
}
