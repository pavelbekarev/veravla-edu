import { vacancies } from "../config/defaultVacancies";

export async function getVacancies() {
  // async code to server
  await new Promise((resolve) => setTimeout(resolve, 500));

  return vacancies;
}
