interface VacancyRequirements {
  name: string;
  value: string;
}

export interface Vacancy {
  id: number;
  date?: string;
  title: string;
  requirements: VacancyRequirements[];
  img: any;
}
