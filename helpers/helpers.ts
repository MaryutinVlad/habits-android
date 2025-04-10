import type { Suboptions, ActivityType } from "@/types/types";

export function getDate() {
  const date = new Date();
  return date.toLocaleDateString("en-US");
};

export function defineStandardTiering(step: number) {

  const tiers: number[] = [];
  const multipliers: number[] = [3, 10, 21, 37, 60, 90];
  
  for (let multiplier of multipliers) {
    tiers.push(step * multiplier);
  }

  return tiers;
};

export function defineCustomTiering(data: Suboptions) {

  const tiers: number[] = [];
  const keys = Object.keys(data);

  for (let key of keys) {
    tiers.push(data[key]);
  }

  return tiers;
}

export function defineTier(total: number, tiers: number[]) {

  let index = 0;

  for (index; index < tiers.length; index ++) {
    if (total < tiers[index]) {
      return index;
    }
  }

  return index;
};

export function defineEfficency(activities: ActivityType[]) {

  const efficencies = activities.map(activity => activity.cur / activity.goal);
  const averageEfficency = Math.round((efficencies.reduce((acc, cur) => acc + cur) / efficencies.length) * 100);

  return averageEfficency;
};

export function defineLevel(exp: number, levelReqs: number[]) {

  let level = 0;

  for (let levelReq of levelReqs) {
    if (exp < levelReq) {
      break;
    } else {
      level ++;
    }
  }

  const expOfNextLevel = exp / levelReqs[level];

  return { level, expOfNextLevel };
};