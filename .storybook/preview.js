export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const globalTypes = {
  theme: {
    name: "Testing Snippets",
    description: "Collection of useful test snippets",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
    },
  },
};
