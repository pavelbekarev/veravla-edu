export const Course = ({data}: {data: {
    step: number;
    title: string;
    description: string;
}[]}) => {
    return (
        <div className="course">
            {
                data.map((item) => (
                    <div className="course__item item" key={item.step}>
                        <span className="course__item-step">{ item.step }</span>
                        <div className="item__textContent">
                            <h2 className="course__item-title">{item.title}</h2>
                            <span className="course__item-text">{item.description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
