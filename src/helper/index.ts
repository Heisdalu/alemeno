function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomDueDate = (): string => {
  //generate random due date
  return `${generateRandomNumber(1, 26)}/${generateRandomNumber(1, 12)}/2024`;
};
