export type Suboptions = {
  [key: string]: number
};

export type ActivityValues = {
  type: {
    value: string,
    suboptions: Suboptions,
  },
  tiering: {
    value: string,
    suboptions: Suboptions,
  },
};

export type Layout = {
  title: keyof ActivityValues,
  options: {
    title: string,
    suboptions: string[]
  }[],
  colored: boolean,
};