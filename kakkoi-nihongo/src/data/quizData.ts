import type { QuizQuestion } from '../types';

export const quizCategories = [
  { id: 'hiragana', icon: 'あ', label: 'Hiragana', desc: 'Read hiragana characters' },
  { id: 'katakana', icon: 'ア', label: 'Katakana', desc: 'Read katakana characters' },
  { id: 'kanji', icon: '漢', label: 'Kanji N5', desc: 'JLPT N5 level kanji' },
  { id: 'vocab', icon: '語', label: 'Vocabulary', desc: 'Minna no Nihongo vocab' },
  { id: 'general', icon: '日', label: 'Mixed', desc: 'All categories mixed' },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateQuizQuestions(category: string, count: number = 10): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  if (category === 'hiragana' || category === 'general') {
    const chars = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ'.split('');
    const romajis = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n','ga','gi','gu','ge','go','za','ji','zu','ze','zo','da','dji','dzu','de','do','ba','bi','bu','be','bo','pa','pi','pu','pe','po'];
    const shuffled = shuffleArray(chars.map((c, i) => ({ c, r: romajis[i] })));
    const selected = shuffled.slice(0, Math.min(count, 15));
    for (const { c, r } of selected) {
      const wrong = romajis.filter(rr => rr !== r).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = shuffleArray([r, ...wrong]);
      questions.push({
        category: 'hiragana',
        question: `What is the reading of 「${c}」?`,
        jp: c,
        options,
        correct: options.indexOf(r),
      });
    }
  }

  if (category === 'katakana' || category === 'general') {
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ'.split('');
    const romajis = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n','ga','gi','gu','ge','go','za','ji','zu','ze','zo','da','dji','dzu','de','do','ba','bi','bu','be','bo','pa','pi','pu','pe','po'];
    const shuffled = shuffleArray(chars.map((c, i) => ({ c, r: romajis[i] })));
    const selected = shuffled.slice(0, Math.min(count, 15));
    for (const { c, r } of selected) {
      const wrong = romajis.filter(rr => rr !== r).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = shuffleArray([r, ...wrong]);
      questions.push({
        category: 'katakana',
        question: `What is the reading of 「${c}」?`,
        jp: c,
        options,
        correct: options.indexOf(r),
      });
    }
  }

  if (category === 'kanji' || category === 'general') {
    const kanjiList = [
      { c: '一', m: 'one' }, { c: '二', m: 'two' }, { c: '三', m: 'three' }, { c: '四', m: 'four' },
      { c: '五', m: 'five' }, { c: '六', m: 'six' }, { c: '七', m: 'seven' }, { c: '八', m: 'eight' },
      { c: '九', m: 'nine' }, { c: '十', m: 'ten' }, { c: '人', m: 'person' }, { c: '山', m: 'mountain' },
      { c: '川', m: 'river' }, { c: '水', m: 'water' }, { c: '火', m: 'fire' }, { c: '木', m: 'tree' },
      { c: '金', m: 'gold/money' }, { c: '土', m: 'earth' }, { c: '日', m: 'sun/day' }, { c: '月', m: 'moon/month' },
      { c: '大', m: 'big' }, { c: '小', m: 'small' }, { c: '中', m: 'middle' }, { c: '上', m: 'up/above' },
      { c: '下', m: 'down/below' }, { c: '右', m: 'right' }, { c: '左', m: 'left' }, { c: '年', m: 'year' },
      { c: '学', m: 'study' }, { c: '生', m: 'life/birth' },
    ];
    const shuffled = shuffleArray(kanjiList);
    const selected = shuffled.slice(0, Math.min(count, 15));
    for (const { c, m } of selected) {
      const meanings = kanjiList.map(k => k.m).filter(mm => mm !== m).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = shuffleArray([m, ...meanings]);
      questions.push({
        category: 'kanji',
        question: `What is the meaning of 「${c}」?`,
        jp: c,
        options,
        correct: options.indexOf(m),
      });
    }
  }

  return shuffleArray(questions).slice(0, count);
}
