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
    suboptions: [0]
  },
  tiering: {
    value: "",
    suboptions: [0]
  },
  portrait: "",
};

export const emptySuboptions = {
    title: "",
    content: [""],
    colored: false,
  };