export default function Home() {
  return (
    <div className="text-center py-6 md:py-10">
      <h2 className="text-5xl sm:text-7xl md:text-8xl font-black rainbow-text mb-4 leading-tight">KAKKOI NIHONGO</h2>
      <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-300 font-light mb-8">かっこいい日本語</p>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Your gateway to learning Japanese from zero. Explore Hiragana, Katakana, 110 N5 Kanji,
          essential vocabulary from <em>Minna no Nihongo</em> Lessons 1-25, and core grammar - all in one place.
        </p>
        <div className="mb-8 flex justify-center">
          <a href="https://go.fliplink.me/view/7CB3F620-B434-41F3-A545-31CEBBE2DA71" target="_blank" rel="noopener noreferrer"
             className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            N5 Level Roadmap
          </a>
        </div>
        <div className="mb-10">
          <p className="text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Access a collection of hand-picked Japanese learning resources - including textbooks, worksheets,
            kanji practice sheets, and more - all organized in one Google Drive folder.
          </p>
          <div className="flex justify-center">
            <a href="https://drive.google.com/drive/folders/1hSWxKncq3XjPSkZ3g_6ckL5xlyIwVMOj?usp=sharing" target="_blank" rel="noopener noreferrer"
               className="google-drive-btn inline-block px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Google Drive
            </a>
          </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="px-6 py-3 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium">ひらがな</span>
          <span className="px-6 py-3 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 font-medium">カタカナ</span>
          <span className="px-6 py-3 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-medium">漢字</span>
          <span className="px-6 py-3 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium">語彙</span>
          <span className="px-6 py-3 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 font-medium">文法</span>
          <span className="px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 font-medium">ストーリー</span>
          <span className="px-6 py-3 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-medium">クイズ</span>
          <span className="px-6 py-3 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 font-medium">文化</span>
          <span className="px-6 py-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-medium">県</span>
        </div>
    </div>
  );
}
