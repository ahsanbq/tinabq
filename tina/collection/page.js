const Home = {
  label: "Pages",
  name: "pages",
  path: "content/pages", // Path where your content is stored

  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      required: true, // Make sure the title is required
    },
    {
      label: "Description",
      name: "description",
      type: "string",
      ui: {
        component: "textarea", // Textarea for better UX with descriptions
      },
    },
    {
      label: "Sections",
      name: "sections",
      type: "object",
      list: true,
      ui: {
        visualSelector: true, // Enables visual block selector in CMS
      },
      templates: [
        // Single Title Hero Section Template
        {
          name: "singleTitleHeroSection",
          label: "Single Title Hero Section",
          fields: [
            {
              type: "string",
              label: "Single Title",
              name: "singleTitle",
              required: true,
            },
            {
              type: "string",
              label: "Section Description",
              name: "sectionDescription",
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroImage",
            },
            {
              type: "string",
              label: "Link",
              name: "link",
            },
          ],
        },

        // Multiple Title Hero Section Template
        {
          name: "multipleTitleHeroSection",
          label: "Multiple Title Hero Section",
          fields: [
            {
              type: "object",
              label: "Multiple Titles",
              name: "multipleTitles",
              list: true,
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "title",
                  required: true,
                },
              ],
            },
            {
              type: "string",
              label: "Section Description",
              name: "sectionDescription",
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroImage",
            },
            {
              type: "string",
              label: "Link",
              name: "link",
            },
          ],
        },

        // Company Display Section Template
        {
          name: "companyDisplaySection",
          label: "Company Display Section",
          fields: [
            {
              type: "string",
              label: "Section Title",
              name: "sectionTitle",
              required: true,
            },
            {
              type: "object",
              label: "Company Links",
              name: "children",
              list: true,
              fields: [
                {
                  type: "string",
                  label: "Child Link",
                  name: "href",
                  required: true,
                },
                {
                  type: "image",
                  label: "Hero Image",
                  name: "heroImage",
                },
              ],
            },
          ],
        },

        // Product Section Template
        {
          name: "productSection",
          label: "Product Section",
          fields: [
            {
              type: "string", // Correct type
              label: "Section Title",
              name: "sectionTitle",
              required: true,
            },
            {
              type: "string", // Correct type
              label: "Section Content",
              name: "sectionContent",
              ui: {
                component: "textarea", // Text area for longer content
              },
            },
            {
              type: "object",
              name: "productSectionChild",
              label: "Product Section Child",
              list: true,
              fields: [
                {
                  type: "string", // Ensure valid type
                  label: "Section Title",
                  name: "sectionTitle",
                  required: true,
                },
                {
                  type: "string", // Ensure valid type
                  label: "Section Description",
                  name: "sectionDescription",
                },
                {
                  type: "image", // Ensure valid type
                  label: "Hero Image",
                  name: "heroImage",
                },
                {
                  type: "string", // Ensure valid type
                  label: "Link",
                  name: "link",
                },
              ],
            },
          ],
        },

        // Service Section Template
        {
          name: "serviceSection",
          label: "Service Section",
          fields: [
            {
              type: "string",
              label: "Testimonial Author",
              name: "author",
            },
            {
              type: "string",
              label: "Service Quote",
              name: "quote",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Home;
