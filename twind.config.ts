import type { Options } from "$fresh/plugins/twind.ts";

const options: Options = {
  selfURL: import.meta.url,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
};

export default options;
