import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

/*top navigation*/
const Navbar = ({ streak = 7, xp = 1250, level = 3 }) => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const isDark = theme === "dark";

  const navItems = [
    { key: "navHome", label: t("navHome") },
    { key: "navCourses", label: t("navCourses") },
    { key: "navPractice", label: t("navPractice") },
    { key: "navLeaderboard", label: t("navLeaderboard") },
    { key: "navProfile", label: t("navProfile") },
  ];

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full",
        "glass border-b",
        isDark
          ? "bg-ethio-dark/70 border-ethio-green/20"
          : "bg-ethio-light/80 border-ethio-green/30",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-ethio-green to-ethio-gold shadow-iso-green flex items-center justify-center">
            <span className="font-display font-bold text-ethio-dark text-lg">
              SE
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-ethio-gold ring-pulse" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg gradient-text">
              {t("brand")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">
              {t("brandSubtitle")}
            </div>
          </div>
          <div className="hidden xl:block text-[10px] opacity-60 pl-3 ml-3 border-l border-ethio-green/30 leading-tight">
            <div className="font-semibold text-ethio-gold">by Yishak</div>
            <div>Mekuannent</div>
          </div>
        </div>

        {/* nav links */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {navItems.map((item, idx) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className={[
                "px-3 py-1.5 rounded-lg text-sm font-medium",
                idx === 0
                  ? "bg-ethio-green/15 text-ethio-green"
                  : "opacity-80 hover:opacity-100 hover:bg-ethio-green/10",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex-1" />

        {/* stat badges */}
        <div className="hidden md:flex items-center gap-2">
          <StatBadge
            icon="🔥"
            label={t("streak")}
            value={`${streak} ${t("days")}`}
            tone="gold"
          />
          <StatBadge
            icon="🏆"
            label={t("xp")}
            value={xp.toLocaleString()}
            tone="green"
          />
          <StatBadge icon="⚡" label={t("level")} value={level} tone="green" />
        </div>

        {/* language toggle */}
        <div
          className={[
            "flex items-center p-1 rounded-full border text-xs font-semibold",
            isDark
              ? "border-ethio-green/30 bg-ethio-dark-2"
              : "border-ethio-green/40 bg-white",
          ].join(" ")}
          role="group"
          aria-label="Language toggle"
        >
          {["en", "am"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={[
                "px-3 py-1 rounded-full transition-all",
                lang === code
                  ? "bg-ethio-green text-white shadow-iso-green"
                  : "opacity-70 hover:opacity-100",
              ].join(" ")}
            >
              {code === "en" ? "English" : "አማርኛ"}
            </button>
          ))}
        </div>

        {/* theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className={[
            "relative w-14 h-8 rounded-full p-1 transition-colors",
            isDark ? "bg-ethio-dark-3" : "bg-ethio-light-2",
          ].join(" ")}
        >
          <span
            className={[
              "absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md",
              "flex items-center justify-center text-sm",
              "transition-transform duration-300",
              isDark
                ? "translate-x-6 bg-ethio-dark-2 text-ethio-gold"
                : "translate-x-0 text-ethio-gold",
            ].join(" ")}
          >
            {isDark ? "🌙" : "☀️"}
          </span>
        </button>
      </div>
    </header>
  );
};

const StatBadge = ({ icon, label, value, tone }) => {
  const toneClass =
    tone === "gold"
      ? "bg-ethio-gold/15 text-ethio-gold border-ethio-gold/40"
      : "bg-ethio-green/15 text-ethio-green border-ethio-green/40";
  return (
    <div
      className={[
        "flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold",
        "backdrop-blur",
        toneClass,
      ].join(" ")}
    >
      <span aria-hidden="true">{icon}</span>
      <span className="opacity-70">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default Navbar;
