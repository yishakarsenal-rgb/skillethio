import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

/**
 * MiniMaxCopilot — embedded AI chat widget.
 * For this static build, the AI response is a pre-rendered bilingual tutorial
 * with a C++ snippet (no network call). Wiring a real backend is a single
 * fetch() swap inside `askCopilot`.
 */
const sampleResponse = {
  intro: {
    en: 'A loop is a way to repeat a block of code. Think of it like the rounds of a coffee ceremony (የቡና ፈረቃ): you repeat the same steps until the third round (በረካ) is complete.',
    am: 'ሉፕ የኮድ ቡድን የሚደግም መንገድ ነው። እንደ የቡና ፈረቃ ያህል ነው — ተመሳሳይ እርምጃዎችን ድግግሞሽ በረካ እስኪጠናቀቅ ድረስ ትደግማለህ።',
  },
  code: `#include <iostream>
using namespace std;

int main() {
    // ሶስት ዙር የቡና ፈረቃ ለማካሄድ — repeat 3 rounds of coffee
    for (int round = 1; round <= 3; round++) {
        cout << "ምንቃለሁ! Round " << round << " ላይ ነኝ" << endl;
    }
    return 0;
}`,
  codeOutput: 'ምንቃለሁ! Round 1 ላይ ነኝ\nምንቃለሁ! Round 2 ላይ ነኝ\nምንቃለሁ! Round 3 ላይ ነኝ',
  outro: {
    en: 'Tip: Use `for` when the count is known, `while` when it depends on a condition.',
    am: 'ምክር: ብዛቱ ስትታውቅ `for` ተጠቀም፣ ሁኔታ ላይ ስትመሰረት `while` ተጠቀም።',
  },
};

const MiniMaxCopilot = () => {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [messages, setMessages] = useState([
    { role: 'ai', text: sampleResponse },
  ]);
  const [draft, setDraft] = useState('');

  const askCopilot = (e) => {
    e?.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;
    // Static build: always show the same bilingual response after the user types.
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'ai', text: sampleResponse },
    ]);
    setDraft('');
  };

  return (
    <section
      className={[
        'relative rounded-3xl border overflow-hidden card-3d animate-tilt-in',
        isDark
          ? 'bg-ethio-dark-2/80 border-ethio-green/20 dark:card-elevated'
          : 'bg-white border-ethio-green/30 shadow-iso-light',
      ].join(' ')}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-ethio-green/20 flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-ethio-green to-ethio-gold shadow-iso-green flex items-center justify-center font-display font-bold text-ethio-dark">
          M
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-ethio-dark animate-pulse" />
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold">{t('copilotTitle')}</div>
          <div className="text-[11px] opacity-70">{t('copilotTag')}</div>
        </div>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-ethio-green/15 text-ethio-green border border-ethio-green/30 font-semibold">
          ONLINE
        </span>
      </div>

      {/* Messages */}
      <div className="px-5 py-5 space-y-4 max-h-[420px] overflow-y-auto">
        <AssistantBubble>{t('copilotIntro')}</AssistantBubble>

        {messages.map((m, i) =>
          m.role === 'user' ? (
            <UserBubble key={i}>{m.text}</UserBubble>
          ) : (
            <AssistantBubble key={i}>
              <div className="space-y-3">
                <p>{m.text.intro[lang]}</p>
                <CodeBlock code={m.text.code} lang="cpp" />
                <div
                  className={[
                    'rounded-xl p-3 font-mono text-xs',
                    isDark ? 'bg-black/40 text-emerald-300' : 'bg-ethio-light text-emerald-700',
                  ].join(' ')}
                >
                  <div className="opacity-60 mb-1">// output</div>
                  <pre className="whitespace-pre-wrap">{m.text.codeOutput}</pre>
                </div>
                <p className="text-xs opacity-80">{m.text.outro[lang]}</p>
              </div>
            </AssistantBubble>
          )
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={askCopilot}
        className={[
          'border-t border-ethio-green/20 p-3 flex items-center gap-2',
          isDark ? 'bg-ethio-dark/60' : 'bg-ethio-light/60',
        ].join(' ')}
      >
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t('copilotPlaceholder')}
          className={[
            'flex-1 px-4 py-2.5 rounded-xl text-sm outline-none border',
            isDark
              ? 'bg-ethio-dark-3 border-ethio-green/30 placeholder:text-slate-500 text-white'
              : 'bg-white border-ethio-green/40 placeholder:text-slate-400',
          ].join(' ')}
          aria-label="Ask MiniMax AI"
        />
        <button type="submit" className="btn-primary !py-2.5">
          {t('copilotSend')} →
        </button>
      </form>
    </section>
  );
};

const AssistantBubble = ({ children }) => (
  <div className="flex gap-3">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ethio-green to-ethio-gold flex items-center justify-center font-bold text-ethio-dark shrink-0">
      M
    </div>
    <div
      className="rounded-2xl rounded-tl-sm px-4 py-3 max-w-[88%]
                 bg-ethio-green/10 border border-ethio-green/20 text-sm leading-relaxed"
    >
      {children}
    </div>
  </div>
);

const UserBubble = ({ children }) => (
  <div className="flex gap-3 justify-end">
    <div
      className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-[88%]
                 bg-ethio-gold/15 border border-ethio-gold/30 text-sm leading-relaxed"
    >
      {children}
    </div>
    <div className="w-8 h-8 rounded-lg bg-ethio-gold flex items-center justify-center font-bold text-ethio-dark shrink-0">
      እ
    </div>
  </div>
);

const CodeBlock = ({ code, lang = 'cpp' }) => (
  <div className="relative rounded-xl overflow-hidden border border-ethio-green/30 shadow-iso-green bg-[#0b1220]">
    <div className="flex items-center justify-between px-3 py-1.5 bg-black/40 border-b border-ethio-green/20 text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
      <span>{lang}</span>
      <span className="opacity-70">main.cpp</span>
    </div>
    <pre className="px-4 py-3 text-[12.5px] leading-relaxed font-mono text-emerald-200 overflow-x-auto">
      <code>{code}</code>
    </pre>
  </div>
);

export default MiniMaxCopilot;