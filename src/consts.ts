export const SITE = {
  title: "Kalila Documentation",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "h",
    alt: "" + "",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/kozae/kalila-docs`;

export const COMMUNITY_INVITE_URL = ``;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Tools: [
      { text: "News & Updates", link: "docs/en/news" },
      { text: "Layout Analysis", link: "docs/en/layout-analysis" },
      { text: "Line Detection", link: "docs/en/line-detection" },
      { text: "Transcription", link: "docs/en/transcription" },
      { text: "Collation", link: "docs/en/collation" },
    ],
    "Edition Guidelines": [
      { text: "Edition Symbols", link: "docs/en/edition-symbols" },
      { text: "Orthography", link: "docs/en/orthography" },
      { text: "Unit Titles", link: "docs/en/unit-titles" },
    ],
    "Othography Decisions": [
      {
        text: "أ ب ت ث ج ح خ ",
        link: "docs/en/orthography-decisions-1-alif-kha",
      },
      {
        text: "د ذ ر ز س ش ص",
        link: "docs/en/orthography-decisions-2-dal-sad",
      },
      {
        text: "ض ط ظ ع غ ف ق",
        link: "docs/en/orthography-decisions-3-dad-qaf",
      },
      {
        text: "ك ل م ن ه و ي",
        link: "docs/en/orthography-decisions-4-kaf-ya",
      },
    ],
  },
};
