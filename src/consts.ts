export const SITE = {
  title: "Kalila Documentation",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/kozae/kalila-docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

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
    "User Guide": [
      { text: "News & Updates", link: "en/news" },
      { text: "Layout Analysis", link: "en/layout-analysis" },
      { text: "Line Detection", link: "en/line-detection" },
      { text: "Transcription", link: "en/transcription" },
    ],
    "Edition Guidelines": [
      { text: "Edition Symbols", link: "en/edition-symbols" },
      { text: "Standard Orthography", link: "en/standard-orthography" },
      {
        text: "Word Othography, أ ب ت ث ج ح خ ",
        link: "en/word-orthography-1-alif-kha",
      },
      {
        text: "Word Othography, د ذ ر ز س ش ص",
        link: "en/word-orthography-2-dal-sad",
      },
      {
        text: "Word Othography, ض ط ظ ع غ ف ق",
        link: "en/word-orthography-3-dad-qaf",
      },
      {
        text: "Word Othography, ك ل م ن ه و ي",
        link: "en/word-orthography-4-kaf-ya",
      },
    ],
  },
};
