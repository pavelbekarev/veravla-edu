import "../style.scss";
import managerIcon from "@/public/assets/manager.png"
import blockchainIcon from "@/public/assets/blockchain.png"
import webDesignIcon from "@/public/assets/webDesign.png"
import surveyIcon from "@/public/assets/survey.png"
import peopleIcon from "@/public/assets/people.png"
import conferenceIcon from "@/public/assets/conference.png"
import skyscapersIcon from "@/public/assets/skyscapers.png"
import Image from "next/image";
// types/advantage.ts
export interface Advantage {
    id: number;
    icon: any; 
    title: string;
}

export const WhyUs = () => {

    const advantages: Advantage[] = [
        {
            id: 1,
            icon: managerIcon,
            title: "Ты станешь востребованным специалистом в области искусственного интеллекта",
        },
        {
            id: 2,
            icon: blockchainIcon,
            title: "Будешь создавать свои модели искусственного интеллекта на языке программирования Python",
        },
        {
            id: 3,
            icon: webDesignIcon,
            title: "Сумеешь создавать программы, связанные с компьютерным зрением и нейронными сетями",
        },
        {
            id: 4,
            icon: surveyIcon,
            title: "Мы обучаем только тому, что тебе пригодится во время работы!",
        },
        {
            id: 5,
            icon: peopleIcon,
            title: "Ты найдешь единомышленников, с которыми сможешь создавать свои проекты",
        },
        {
            id: 6,
            icon: conferenceIcon,
            title: "Мы создаём сообщество профессионалов, таких же как и мы, жаждущих развивать и изменять этот мир к лучшему с помощью IT технологий",
        },
        {
            id: 7,
            icon: skyscapersIcon,
            title: "После успешного завершения курса, мы поможем тебе трудоустроиться в Южнокорейские IT компании!",
        },
    ];

    return (
        <section className="whyUs sectionBackground--toTopPositive">
            <div className="container">
                <h2 className="title whyUs__title">
                    <span className="whyUs__title--accent">7 причин</span> почему<br/> именно мы?
                </h2>

                <div className="whyUs__itemsContent">
                    {
                        advantages.map((item: Advantage) => (
                            <div key={item.id} className="whyUs__item">
                                <Image 
                                    className="whyUs__item-img" 
                                    src={item.icon} 
                                    alt="Иконка" 
                                />
                                <span className="whyUs__item-text">
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
