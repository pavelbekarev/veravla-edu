// переместить в shared/lib

export const validation = (formData: any) => {
  const validatedArr = Object.values(formData).filter((item) => item === "");

  return validatedArr.length === 0;
};
