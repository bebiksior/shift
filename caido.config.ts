import { defineConfig } from "@caido-community/dev";

export default defineConfig({
  id: "shift",
  name: "Shift",
  description: "Seamless AI Integration into Caido.",
  version: "0.0.0",
  author: {
    name: "JThacker & CRITSoftware",
    email: "justin@criticalthinkingpodcast.io",
    url: "https://github.com/CRITSoftware/shift",
  },
  plugins: [
    {
      kind: "backend",
      id: "backend",
      name: "Backend",
      root: "packages/backend",
    },
    {
      kind: "frontend",
      id: "frontend",
      name: "Frontend",
      root: "packages/frontend",
      backend: {
        id: "backend",
      }
      //   "style": "frontend/style.css"
    },
  ],
});
