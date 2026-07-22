import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const PremiumPortal = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const perks = [
    { en: "Verified Certificate", am: "የተረጋገጠ ምስክር ወረቀት" },
    { en: "Offline Lessons (PDF + Video)", am: "ከመስመር ውጭ ትምህርት (PDF + ቪዲዮ)" },
    { en: "24/7 MiniMax AI Tutor", am: "24/7 MiniMax AI አስተምህር" },
    { en: "Mock Interviews & Résumé Review", am: "ሞክ ቃለ-መጠይቆች እና CV ግምገማ" },
  ];

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl p-6 sm:p-8 card-3d animate-tilt-in",
        "border-2",
        isDark
          ? "bg-gradient-to-br from-ethio-dark-2 via-ethio-dark-3 to-ethio-dark-2 border-ethio-gold/40"
          : "bg-gradient-to-br from-ethio-light via-white to-ethio-light border-ethio-gold",
      ].join(" ")}
    >
      {/* glow rings */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full
                   bg-ethio-gold/30 blur-3xl pointer-events-none animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full
                   bg-ethio-green/30 blur-3xl pointer-events-none animate-float-reverse"
      />
      {/* left */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ethio-gold">
            <span className="w-2 h-2 rounded-full bg-ethio-gold animate-pulse" />
            PRO · ፕሮ
          </span>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("premiumTitle")}
          </h3>
          <p className="mt-2 text-sm opacity-80 max-w-md">
            {t("premiumSubtitle")}
          </p>

          {/* perks grid */}
          <ul className="mt-5 grid sm:grid-cols-2 gap-2 max-w-lg">
            {perks.map((p) => (
              <li
                key={p.en}
                className={[
                  "flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium",
                  isDark
                    ? "border-ethio-green/20 bg-ethio-dark/50"
                    : "border-ethio-green/30 bg-white/70",
                ].join(" ")}
              >
                <span className="text-base">{p.icon}</span>
                <span>{p.en}</span>
                <span className="opacity-60">· {p.am}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* right */}
        <div className="relative">
          <div
            className={[
              "rounded-3xl border-2 p-6 sm:p-7",
              "bg-gradient-to-br from-ethio-gold/15 to-ethio-green/10",
              "border-ethio-gold shadow-iso-gold-lg",
              isDark ? "backdrop-blur" : "",
            ].join(" ")}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-bold gradient-text">
                299
              </span>
              <span className="text-sm opacity-70">ETB / month · በወር</span>
            </div>
            <div className="mt-1 text-xs opacity-70">
              ≈ 1000ETB · Local pricing for Ethiopian students
            </div>

            <button
              type="button"
              className="btn-gold w-full mt-5 !py-3 text-sm"
              onClick={() =>
                alert("Redirecting to Chapa / Telebirr checkout...")
              }
            >
              {t("premiumCta")}
            </button>

            {/* payment partners */}
            <div className="mt-4 flex items-center justify-center gap-3 opacity-90">
              <PartnerChip label="Chapa" />
              <PartnerChip label="Telebirr" />
              <PartnerChip label="CBE Birr" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] opacity-70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t("secureBadge")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerChip = ({ label }) => (
  <span
    className="px-3 py-1 rounded-lg border border-ethio-gold/40 bg-white/60
               text-ethio-dark font-bold text-[11px] tracking-wide"
  >
    {label}
  </span>
);

export default PremiumPortal;
