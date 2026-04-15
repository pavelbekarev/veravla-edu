import "../style.scss";

export const MakeAppointmentForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit} action="" className="makeAppointmentForm">
            <h2 className="makeAppointmentForm__title">
                <span className="makeAppointmentForm__title--accent">Записаться</span> на ознакомительный вебинар
            </h2>

            <div className="makeAppointmentForm__itemsContent">
                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="fullname">Ваше ФИО:</label>
                    <input className="makeAppointmentForm__item-input" id="fullname" type="text" placeholder="Иванов Иван Иванович" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="phoneNumber">Номер телефона:</label>
                    <input className="makeAppointmentForm__item-input" id="phoneNumber" type="text" placeholder="+7 (___) ___-__-__" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="email">Ваш email:</label>
                    <input className="makeAppointmentForm__item-input" id="email" type="text" placeholder="name@gmail.com" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="vebinarDate">Выберите дату и время вебинара:</label>
                    <input className="makeAppointmentForm__item-input" id="vebinarDate" type="datetime-local" step="60" placeholder="2021-12-05 18.00" />
                </div>
            </div>
            <button className="makeAppointmentForm__submitBtn">Записаться</button>
        </form>
    )
}