import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

import FloatingShapes from './components/FloatingShapes';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import MiniMaxCopilot from './components/MiniMaxCopilot';
import PracticeSandbox from './components/PracticeSandbox';
import PremiumPortal from './components/PremiumPortal';

/**
 * SkillEthio · Root single-page dashboard.
 * Wraps the entire tree in Theme + Language providers and composes the
 * floating background, navbar, content grid, and footer.
 */
const Dashboard = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <div
      className={[
        'min-h-screen w-full relative overflow-x-hidden',
        isDark
          ? 'bg-ethio-dark text-slate-100'
          : 'bg-ethio-light text-slate-800',
      ].join(' ')}
    >
      <FloatingShapes />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Hero section: course + copilot */}
        <section className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3">
            <CourseCard progress={65} />
          </div>
          <div className="lg:col-span-2">
            <MiniMaxCopilot />
          </div>
        </section>

        {/* Practice + Premium */}
        <section className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3">
            <PracticeSandbox />
          </div>
          <div className="lg:col-span-2">
            <PremiumPortal />
          </div>
        </section>
      </main>

      <footer
        className={[
          'border-t mt-6',
          isDark ? 'border-ethio-green/20 bg-ethio-dark/60' : 'border-ethio-green/30 bg-white/70',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs opacity-80 space-y-1">
          <div className="font-semibold tracking-wide text-ethio-gold">
            👨‍💻 {t('builtBy')}
          </div>
          <div>{t('footer')}</div>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <Dashboard />
    </LanguageProvider>
  </ThemeProvider>
);

export default App;