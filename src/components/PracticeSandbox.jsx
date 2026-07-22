import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { dailyQuestion } from "../data/questions";

const PracticeSandbox = () => {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("idle"); // idle
  const [xp, setXp] = useState(1250);

  const handleSelect = (id) => {
    if (status === "correct") return;
    setSelected(id);
  };

  const handleSubmit = () => {
    if (!selected) return;
    if (selected === dailyQuestion.correctId) {
      setStatus("correct");
      setXp((prev) => prev + 50);
    } else {
      setStatus("wrong");
    }
  };

  const handleReset = () => {
    setSelected(null);
    setStatus("idle");
  };

  const handleNext = () => {
    handleReset();
  };

  return (
    <section
      className={[
        "relative rounded-3xl border overflow-hidden card-3d animate-tilt-in",
        isDark
          ? "bg-ethio-dark-2/80 border-ethio-green/20 dark:card-elevated"
          : "bg-white border-ethio-green/30 shadow-iso-light",
      ].join(" ")}
    >
      {/* header */}
      <div className="px-5 py-4 border-b border-ethio-green/20 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ethio-gold to-ethio-gold-deep flex items-center justify-center font-display font-bold text-ethio-dark shadow-iso-gold">
          ⚡
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold">{t("practiceTitle")}</div>
          <div className="text-[11px] opacity-70">{t("practiceSubtitle")}</div>
        </div>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-ethio-gold/15 text-ethio-gold border border-ethio-gold/30 font-semibold">
          {t("xpReward")}
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* question */}
        <div>
          <div className="text-[11px] uppercase tracking-widest text-ethio-gold font-semibold mb-2">
            {t("questionLabel")} · Q1
          </div>
          <p className="font-display text-lg sm:text-xl font-semibold leading-snug">
            {dailyQuestion[lang]}
          </p>
        </div>

        {/* options */}
        <div
          className="grid sm:grid-cols-2 gap-3"
          role="radiogroup"
          aria-label="Answer choices"
        >
          {dailyQuestion.options.map((opt) => {
            const isSelected = selected === opt.id;
            const isCorrect = opt.id === dailyQuestion.correctId;
            const showAsCorrect = status === "correct" && isCorrect;
            const showAsWrong = status === "wrong" && isSelected && !isCorrect;

            const base =
              "group relative text-left rounded-2xl border-2 px-4 py-3 font-medium transition-all";
            const state = showAsCorrect
              ? "border-emerald-400 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : showAsWrong
                ? "border-rose-400 bg-rose-500/10 text-rose-700 dark:text-rose-300 animate-[wiggle_0.3s_ease]"
                : isSelected
                  ? "border-ethio-green bg-ethio-green/10"
                  : isDark
                    ? "border-ethio-green/25 hover:border-ethio-green/60 hover:bg-ethio-green/5"
                    : "border-ethio-green/30 hover:border-ethio-green/70 hover:bg-ethio-green/5";

            return (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelect(opt.id)}
                className={[base, state].join(" ")}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={[
                      "w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs",
                      isSelected
                        ? "bg-ethio-green text-white"
                        : isDark
                          ? "bg-ethio-dark-3 text-ethio-green"
                          : "bg-ethio-light text-ethio-green-deep",
                    ].join(" ")}
                  >
                    {opt.id.toUpperCase()}
                  </span>
                  <span>{opt[lang]}</span>
                  <span className="ml-auto text-lg opacity-70">
                    {showAsCorrect
                      ? "✅"
                      : showAsWrong
                        ? "❌"
                        : isSelected
                          ? "●"
                          : "○"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* footer actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!selected || status === "correct"}
            className={[
              "btn-primary",
              (!selected || status === "correct") &&
                "opacity-50 cursor-not-allowed",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {t("submitBtn")}
          </button>

          {status === "wrong" && (
            <button type="button" onClick={handleReset} className="btn-ghost">
              ↺ {lang === "am" ? "እንደገና ሞክር" : "Try Again"}
            </button>
          )}

          {status === "correct" && (
            <button type="button" onClick={handleNext} className="btn-gold">
              {t("nextBtn")} →
            </button>
          )}

          <div className="ml-auto text-xs opacity-70">
            {t("xp")}:{" "}
            <span className="font-bold text-ethio-green">
              {xp.toLocaleString()}
            </span>
          </div>
        </div>

        {/* result overlay */}
        {status === "correct" && (
          <ResultOverlay
            type="correct"
            xp={xp - 50}
            label={t("correctLabel")}
          />
        )}
        {status === "wrong" && (
          <ResultOverlay
            type="wrong"
            label={t("wrongLabel")}
            hint={dailyQuestion.explanation[lang]}
          />
        )}
      </div>

      {/* tiny keyframe for wrong answer wiggle */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
      `}</style>
    </section>
  );
};

const ResultOverlay = ({ type, label, hint, xp }) => {
  const palette =
    type === "correct"
      ? "from-emerald-500/95 to-emerald-600/95 border-emerald-300"
      : "from-rose-500/95 to-rose-600/95 border-rose-300";
  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        "rounded-2xl border-2 px-4 py-3 text-white bg-gradient-to-br",
        palette,
        "animate-tilt-in",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{type === "correct" ? "🎉" : "💡"}</span>
        <div className="flex-1">
          <div className="font-display font-bold text-lg">{label}</div>
          {hint && <div className="text-xs opacity-90 mt-0.5">{hint}</div>}
          {typeof xp === "number" && (
            <div className="text-xs opacity-90 mt-0.5">
              XP earned · ያገኘው XP: <span className="font-bold">+50</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeSandbox;
