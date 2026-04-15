import "../style.scss";
import card1 from "@/public/assets/card1.png"
import card2 from "@/public/assets/card2.png"
import card3 from "@/public/assets/card3.png"
import card4 from "@/public/assets/card4.png"
import Image from "next/image";

export const ImportantToUnderstand = () => {
    const cards = [
        {
            id: 1,
            title: 'Искусственный интеллект - это не одна дисциплина, как думают многие, а совокупность различных между собой направлений.',
            img: card1,
        },{
            id: 2,
            title: 'Подготовка реально хороших специалистов требует времени, краткосрочные курсы эффекта не дают.',
            img: card2,
        },{
            id: 3,
            title: 'Большинство менторов никогда не работали над реальными проектами. Они изучали все по видеоурокам и книжкам, и преподают без практики, что очень печально.',
            img: card3,
        },{
            id: 4,
            title: 'На многих курсах преподают готовые/идеальные кейсы без всяких сложностей, поэтому студенты после таких курсов не могут решать реальные задачи на работе.',
            img: card4,
        },
    ]

    return (
        <section className="importantToUnderstand sectionBackground--toTopPositive">
            <div className="container">
                <h2 className="title importantToUnderstand__title">
                    <span className="importantToUnderstand__title--accent">
                        Важно
                    </span> понимать что
                </h2>

                <div className="importantToUnderstand__itemsContent">
                    {
                        cards.map((item) => (
                            <div key={item.id} className="importantToUnderstand__item">
                                <Image 
                                    src={item.img} 
                                    alt={`Картинка карточки ${item.id}`}
                                    className="importantToUnderstand__item-img"
                                />
                                <span className="importantToUnderstand__item-text">
                                    { item.title }
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
