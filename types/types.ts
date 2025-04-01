export type ActivityValues = {
  [key: string]: {
    value: number | string,
    suboptions?: {
      [key: string]: number,
    }
  },
};