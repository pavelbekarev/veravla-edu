'use client'

import '../style.scss';
import ShowMoreButton from '@/features/ShowMoreButton';
import CustomSwiper from '@/shared/ui/CustomSwiper';
import { VacancyItem } from './VacancyItem';
import { useEffect, useState } from 'react';
import { Vacancy } from '@/entities/Vacancy/model/types';
import { getVacancies } from '@/entities/Vacancy/api/getVacancies';

export const Vacancies = () => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getVacancies();
            
            setVacancies(result);
        }

        fetchData();
    }, [])

    return (
        <section className="vacancies sectionBackground--toTopNegative">
            <div className="container">
                <div className="vacancies__head">
                    <h2 className='title vacancies__title'>Вакансии</h2>
                    <ShowMoreButton text='Все вакансии' onClick={() => {}} extraClasses={['vacancies__showMoreBtn']} />
                </div>
                <div className="vacancies__itemsContent">
                    <CustomSwiper
                        swiperConfig={{
                            slides: vacancies
                        }}
                        renderSlide={(slide, key) => (
                            <VacancyItem key={key} item={slide} />
                        )}
                    />
                </div>
            </div>
        </section>
    )
}