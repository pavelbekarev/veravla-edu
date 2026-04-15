import "../style.scss"

export const CourseAuthor = () => {
    const paragraphs = [
        'Основателем курса является Владимир Ким — действующий и ведущий специалист в области искусственного интеллекта в Южной Корее, который разрабатывал системы искусственного интеллекта для компаний Samsung SDS, LG Science Park и LG Digital Park.',
        'На данный момент Владимир занимается разработкой виртуальных сенсоров на основе нейронных сетей.',
        'Он является одним из авторов диссертации об обработке больших данных для Южнокорейского института по развитию Интернета.',
        'Владимир Ким — действующий член ассоциации разработчиков программного обеспечения в Южной Корее.',
        'Активно участвует в R&D проектах по внедрению искусственного интеллекта для государственных предприятий Южной Кореи.'
    ]

    return (
        <section className="courseAuthor sectionBackground--toTopNegative">
            <div className="container">
                <h2 className="title courseAuthor__title">
                    Автор курса
                </h2>

                <div className="courseAuthor__itemsContent">
                    {
                        paragraphs.map((item: string, key: number) => (
                            <p key={key} className="courseAuthor__item">
                                { item }
                            </p>
                        ))
                    }
                </div>

                <div className="courseAuthor__aboutAuthor">
                    <span className="courseAuthor__authorName">
                        Владимир Ким
                    </span>
                    <span className="courseAuthor__authorPosition">
                        Ведущий специалист
                    </span>
                </div>
            </div>
        </section>
    )
}