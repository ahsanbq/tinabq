import { defineConfig } from "tinacms";
import Global from "./collection/global";
import Home from "./collection/page";
import Portfolio from "./collection/portfolio";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [Home, Global, Portfolio],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  api: {
    // If you're self-hosting GitHub, point to your instance
    github: {
      owner: "bq-erp-dev", // GitHub username or organization
      repo: "www.binaryquest.com", // GitHub repo name
      branch: "main", // Branch where content should be pushed
      token: process.env.GITHUB_TOKEN, // GitHub token for authentication
    },
  },
});
