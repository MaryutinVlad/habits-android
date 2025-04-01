export const addPopupLayout = [
  {
    title: "type",
    options: [
      {
        title: "countable",
        suboptions: ["value"],
        colored: false,
      },
      {
        title: "yes/no",
        suboptions: [""],
        colored: false,
      }
    ]
  },
  {
    title: "tiering",
    options: [
      {
        title: "standard",
        suboptions: [""],
        colored: false,
      },
      {
        title: "custom",
        suboptions: ["tier 1", "tier 2", "tier 3", "tier 4", "tier 5", "tier 6"],
        colored: true,
      }
    ]
  }
];

export const emptyValues = {
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
  },
  portrait: {
    value: "default portrait link",
  },
};

export const emptySuboptions = {
    title: "",
    content: [""],
    colored: false,
  };