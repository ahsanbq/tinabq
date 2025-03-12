const Portfolio = {
  label: "Portfolio",
  name: "portfolio",
  path: "content/portfolio",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/portfolio/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Category",
      name: "category",
      options: [
        "Product Design",
        "Custom App",
        "Website Development",
        "ERP Management",
        "Brand Design",
      ],
      required: true,
    },
    {
      type: "string",
      label: "Category Color",
      name: "category_color",
      options: [
        { label: "Yellow", value: "text-yellow-200" },
        { label: "Pink", value: "text-pink-100" },
        { label: "Green", value: "text-green-100" },
        { label: "Indigo", value: "text-indigo-100" },
      ],
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      label: "Background Color",
      name: "bgColor",
      options: [
        { label: "Pink", value: "bg-pink-500" },
        { label: "Green", value: "bg-green-500" },
        { label: "Indigo", value: "bg-indigo-500" },
      ],
      required: true,
    },
    {
      type: "string",
      label: "Text Color",
      name: "textColor",
      options: [
        { label: "Pink", value: "text-pink-100" },
        { label: "Green", value: "text-green-100" },
        { label: "Indigo", value: "text-indigo-100" },
      ],
      required: true,
    },
    {
      type: "string",
      label: "Button Color",
      name: "buttonColor",
      options: [
        { label: "Pink", value: "bg-pink-800" },
        { label: "Green", value: "bg-green-800" },
        { label: "Indigo", value: "bg-indigo-800" },
      ],
      required: true,
    },
    {
      type: "image",
      label: "Image",
      name: "image",
      required: true,
    },
    {
      type: "image",
      label: "Background Image",
      name: "bgImage",
      required: true,
    },
    {
      type: "image",
      label: "Link Image",
      name: "linkImage",
      required: true,
    }
  ],
};

export default Portfolio;
