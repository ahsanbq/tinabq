// tina/config.js
import { defineConfig } from "tinacms";

// tina/collection/global.js
var Global = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true
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
          label: "Title"
        },
        {
          type: "image",
          name: "logo",
          label: "Navigation Logo"
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
              isActive: false
              // Default value for isActive
            }
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href"
            },
            {
              type: "string",
              label: "Label",
              name: "label"
            },
            {
              type: "boolean",
              label: "Is Active",
              name: "isActive"
            },
            {
              type: "object",
              // Object to handle child navigation links
              label: "Child Links",
              name: "children",
              list: true,
              // Enable list for multiple child links
              ui: {
                itemProps: (childItem) => {
                  return { label: childItem?.label };
                },
                defaultItem: {
                  href: "/child",
                  label: "Child Link"
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Child Link",
                  name: "href"
                },
                {
                  type: "string",
                  label: "Child Label",
                  name: "label"
                }
              ]
            }
          ]
        }
      ]
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
              name: "facebook"
            },
            {
              type: "string",
              label: "LinkedIn",
              name: "linkedIn"
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter"
            }
          ]
        }
      ]
    }
  ]
};
var global_default = Global;

// tina/collection/page.js
var Home = {
  label: "Pages",
  name: "pages",
  path: "content/pages",
  // Path where your content is stored
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      required: true
      // Make sure the title is required
    },
    {
      label: "Description",
      name: "description",
      type: "string",
      ui: {
        component: "textarea"
        // Textarea for better UX with descriptions
      }
    },
    {
      label: "Sections",
      name: "sections",
      type: "object",
      list: true,
      ui: {
        visualSelector: true
        // Enables visual block selector in CMS
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
              required: true
            },
            {
              type: "string",
              label: "Section Description",
              name: "sectionDescription"
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroImage"
            },
            {
              type: "string",
              label: "Link",
              name: "link"
            }
          ]
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
                  required: true
                }
              ]
            },
            {
              type: "string",
              label: "Section Description",
              name: "sectionDescription"
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroImage"
            },
            {
              type: "string",
              label: "Link",
              name: "link"
            }
          ]
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
              required: true
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
                  required: true
                },
                {
                  type: "image",
                  label: "Hero Image",
                  name: "heroImage"
                }
              ]
            }
          ]
        },
        // Product Section Template
        {
          name: "productSection",
          label: "Product Section",
          fields: [
            {
              type: "string",
              // Correct type
              label: "Section Title",
              name: "sectionTitle",
              required: true
            },
            {
              type: "string",
              // Correct type
              label: "Section Content",
              name: "sectionContent",
              ui: {
                component: "textarea"
                // Text area for longer content
              }
            },
            {
              type: "object",
              name: "productSectionChild",
              label: "Product Section Child",
              list: true,
              fields: [
                {
                  type: "string",
                  // Ensure valid type
                  label: "Section Title",
                  name: "sectionTitle",
                  required: true
                },
                {
                  type: "string",
                  // Ensure valid type
                  label: "Section Description",
                  name: "sectionDescription"
                },
                {
                  type: "image",
                  // Ensure valid type
                  label: "Hero Image",
                  name: "heroImage"
                },
                {
                  type: "string",
                  // Ensure valid type
                  label: "Link",
                  name: "link"
                }
              ]
            }
          ]
        },
        // Service Section Template
        {
          name: "serviceSection",
          label: "Service Section",
          fields: [
            {
              type: "string",
              label: "Testimonial Author",
              name: "author"
            },
            {
              type: "string",
              label: "Service Quote",
              name: "quote",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    }
  ]
};
var page_default = Home;

// tina/collection/portfolio.js
var Portfolio = {
  label: "Portfolio",
  name: "portfolio",
  path: "content/portfolio",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/portfolio/${document._sys.filename}`;
    }
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true
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
        "Brand Design"
      ],
      required: true
    },
    {
      type: "string",
      label: "Category Color",
      name: "category_color",
      options: [
        { label: "Yellow", value: "text-yellow-200" },
        { label: "Pink", value: "text-pink-100" },
        { label: "Green", value: "text-green-100" },
        { label: "Indigo", value: "text-indigo-100" }
      ]
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea"
      },
      required: true
    },
    {
      type: "string",
      label: "Background Color",
      name: "bgColor",
      options: [
        { label: "Pink", value: "bg-pink-500" },
        { label: "Green", value: "bg-green-500" },
        { label: "Indigo", value: "bg-indigo-500" }
      ],
      required: true
    },
    {
      type: "string",
      label: "Text Color",
      name: "textColor",
      options: [
        { label: "Pink", value: "text-pink-100" },
        { label: "Green", value: "text-green-100" },
        { label: "Indigo", value: "text-indigo-100" }
      ],
      required: true
    },
    {
      type: "string",
      label: "Button Color",
      name: "buttonColor",
      options: [
        { label: "Pink", value: "bg-pink-800" },
        { label: "Green", value: "bg-green-800" },
        { label: "Indigo", value: "bg-indigo-800" }
      ],
      required: true
    },
    {
      type: "image",
      label: "Image",
      name: "image",
      required: true
    },
    {
      type: "image",
      label: "Background Image",
      name: "bgImage",
      required: true
    },
    {
      type: "image",
      label: "Link Image",
      name: "linkImage",
      required: true
    }
  ]
};
var portfolio_default = Portfolio;

// tina/config.js
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images"
    }
  },
  schema: {
    collections: [page_default, global_default, portfolio_default]
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  api: {
    // If you're self-hosting GitHub, point to your instance
    github: {
      owner: "bq-erp-dev",
      // GitHub username or organization
      repo: "www.binaryquest.com",
      // GitHub repo name
      branch: "main",
      // Branch where content should be pushed
      token: process.env.GITHUB_TOKEN
      // GitHub token for authentication
    }
  }
});
export {
  config_default as default
};
