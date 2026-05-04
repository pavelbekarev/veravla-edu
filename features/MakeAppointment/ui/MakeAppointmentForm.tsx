import { useMakeAppointment } from "../model/useMakeAppointment";
import "../style.scss";

export const MakeAppointmentForm = () => {
    const { formData, handleMakeAppointment, setFormData, handleChange, isLoading } = useMakeAppointment();

    return (
        <form onSubmit={(e: any) => handleMakeAppointment(e)} action="" className="makeAppointmentForm">
            <h2 className="makeAppointmentForm__title">
                <span className="makeAppointmentForm__title--accent">Записаться</span> на ознакомительный вебинар
            </h2>

            <div className="makeAppointmentForm__itemsContent">
                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="fullname">Ваше ФИО:</label>
                    <input onChange={handleChange} className="makeAppointmentForm__item-input" id="fullname" name="fullname" type="text" placeholder="Иванов Иван Иванович" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="phoneNumber">Номер телефона:</label>
                    <input onChange={handleChange}  className="makeAppointmentForm__item-input" id="phoneNumber" name="phone" type="text" placeholder="+7 (___) ___-__-__" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="email">Ваш email:</label>
                    <input onChange={handleChange}  className="makeAppointmentForm__item-input" id="email" name="email" type="text" placeholder="name@gmail.com" />
                </div>

                <div className="makeAppointmentForm__item">
                    <label className="makeAppointmentForm__item-label" htmlFor="vebinarDate">Выберите дату и время вебинара:</label>
                    <input onChange={handleChange}  className="makeAppointmentForm__item-input" id="vebinarDate" name="webinarDate" type="datetime-local" step="60" placeholder="2021-12-05 18.00" />
                </div>
            </div>
            <button className="makeAppointmentForm__submitBtn">Записаться</button>
        </form>
    )
}