import type { Preview } from "@storybook/react";
import "../resources/css/app.css";
import "./reset.css";


import { usePage, route } from "./mocks/inertiaMock";

global.route = (name, params = {}) => {
  return `${name}?${new URLSearchParams(params).toString()}`;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

