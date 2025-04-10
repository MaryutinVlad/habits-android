import type { Layout, ActivityValues } from "@/types/types";

import { getDate } from "@/helpers/helpers";

export const layout: Layout[] = [
  {
    title: "type",
    options: [
      {
        title: "countable",
        suboptions: ["value"],
      },
      {
        title: "yes/no",
        suboptions: [],
      }
    ],
    colored: false
  },
  {
    title: "tiering",
    options: [
      {
        title: "standard",
        suboptions: [],
      },
      {
        title: "custom",
        suboptions: ["tier1", "tier2", "tier3", "tier4", "tier5", "tier6"],
      }
    ],
    colored: true
  },
];

export const emptyValues : ActivityValues = {
  type: {
    value: "",
    suboptions: {
      value: 0,
    }
  },
  tiering: {
    value: "",
    suboptions: {
      tier1: 0,
      tier2: 0,
      tier3: 0,
      tier4: 0,
      tier5: 0,
      tier6: 0,
    }
  }
};

export const emptySuboptions = {
  title: "",
  content: [""],
  colored: false,
};

export const emptyUser = {
  id: 0,
  name: "",
  day: 0,
  row: 0,
  exp: 0,
  actTotal: 0,
  actMastered: 0,
  lastUpdated: getDate(),
};

export const gallery = [
  require("@/assets/images/defaultPortrait.png"),
  require("@/assets/images/learn.png"),
  require("@/assets/images/pe.png"),
  require("@/assets/images/defaultPortrait.png"),
  require("@/assets/images/learn.png"),
  require("@/assets/images/pe.png"),
  require("@/assets/images/defaultPortrait.png"),
  require("@/assets/images/learn.png"),
  require("@/assets/images/pe.png"),
  require("@/assets/images/defaultPortrait.png"),
  require("@/assets/images/learn.png"),
  require("@/assets/images/pe.png"),
];