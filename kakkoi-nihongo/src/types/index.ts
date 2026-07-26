export interface KanaChar {
  hiragana: string;
  katakana: string;
  romaji: string;
}

export interface DakutenHandakutenChar {
  hiragana: string;
  katakana: string;
  romaji: string;
}

export interface YoonChar {
  hiragana: string;
  katakana: string;
  romaji: string;
}

export interface KanjiEntry {
  char: string;
  on: string;
  kun: string;
  meaning: string;
  examples?: { word: string; reading: string; meaning: string }[];
}

export interface VocabEntry {
  lesson: number;
  jp: string;
  en: string;
}

export interface GrammarPointDetail {
  id: string;
  jp: string;
  en: string;
  detail: string;
  examples: { jp: string; en: string }[];
}

export interface GrammarPoint {
  lesson: number;
  title: string;
  theme: string;
  overview: string;
  points: GrammarPointDetail[];
}

export interface QuizQuestion {
  category: string;
  question: string;
  jp: string;
  options: string[];
  correct: number;
}

export interface Prefecture {
  id: number;
  ja: string;
  en: string;
  romaji: string;
  capital: string;
  region: string;
  population: string;
  area_km2: string;
  founded: string;
  flower: string;
  tree: string;
  bird: string;
  food: string;
  famous: string;
  festivals: string;
  landmarks: string;
  history: string;
  climate: string;
  economy: string;
  fun_facts: string;
  dialects: string;
  unesco_sites: string;
}
