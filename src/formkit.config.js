import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./tailwind-theme.js";
import { en, ar } from "@formkit/i18n";

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
  locales: {
    en,
    ar,
  },
  locale: "ar",
};
