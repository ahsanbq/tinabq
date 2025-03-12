const Global = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "logo",
          label: "Navigation Logo",
        },
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "/",
              label: "Home",
              isActive: false, // Default value for isActive
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
            {
              type: "boolean",
              label: "Is Active",
              name: "isActive",
            },
            {
              type: "object", // Object to handle child navigation links
              label: "Child Links",
              name: "children",
              list: true, // Enable list for multiple child links
              ui: {
                itemProps: (childItem) => {
                  return { label: childItem?.label };
                },
                defaultItem: {
                  href: "/child",
                  label: "Child Link",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Child Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Child Label",
                  name: "label",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "object",
          label: "Social Links",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "LinkedIn",
              name: "linkedIn",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
          ],
        },
      ],
    },
  ],
};

export default Global;
