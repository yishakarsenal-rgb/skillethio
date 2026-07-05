// Static daily challenge question (Ethiopia-localized, bilingual).
export const dailyQuestion = {
  id: 'q-2026-07-05',
  en: 'Which C++ loop is best when you know the exact number of iterations, e.g. printing "ሰላም" 5 times?',
  am: 'የተወሰነ የድግግሞሽ ብዛት ስትያውቅ (ለምሳሌ "ሰላም" 5 ጊዜ ማተም) የትኛው C++ ሉፕ በተሻለ ይሰራል?',
  options: [
    { id: 'a', en: 'while loop', am: 'while ሉፕ' },
    { id: 'b', en: 'for loop',   am: 'for ሉፕ' },
    { id: 'c', en: 'do...while', am: 'do...while' },
    { id: 'd', en: 'if statement', am: 'if መግለጫ' },
  ],
  correctId: 'b',
  explanation: {
    en: 'A for loop is ideal when the iteration count is known upfront. It packs init / condition / update in one place.',
    am: 'የድግግሞሽ ብዛቱ ከመጀመርዎ በፊት ስትታወቅ for ሉፕ ምርጥ ነው። init / condition / update በአንድ ቦታ ያጠራቀማል።',
  },
};