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

export type User = {
  id: number,
  name: string,
  day: number,
  row: number,
  exp: number,
  actTotal: number,
  actMastered: number,
  lastUpdated: string,
};

export type ActivityType = {
  id: number,
  title: string,
  day: number,
  row: number,
  total: number,
  cur: number,
  goal: number,
  tiering: string,
  portrait: number,
  user_id: number,
};

export type CreateActivityArgs = {
  userId: number,
  goal: number,
  tiering: string,
  activityName: string,
  portraitIndex: number,
};