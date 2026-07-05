import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Learning Content Engine — the active course card with progress bar.
 */
const CourseCard = ({ progress = 65 }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={[
        'relative overflow-hidden rounded-3xl p-6 sm:p-8 card-3d animate-tilt-in',
        'border',
        isDark
          ? 'bg-ethio-dark-2/80 border-ethio-green/20 dark:card-elevated'
          : 'bg-white border-ethio-green/30 shadow-iso-light',
      ].join(' ')}
    >
      {/* Decorative corner glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full
                   bg-ethio-green/30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full
                   bg-ethio-gold/25 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left: course meta + progress */}
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ethio-green">
            <span className="w-2 h-2 rounded-full bg-ethio-green animate-pulse" />
            {t('activeCourseLabel')}
          </span>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t('courseTitle')}
          </h2>
          <p className="mt-1 text-sm opacity-70">{t('courseSubtitle')}</p>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs uppercase tracking-wider opacity-70">
                {t('lessonLabel')} · {t('lessonCurrent')}
              </span>
              <span className="font-display text-xl font-bold text-ethio-green">
                {progress}%
              </span>
            </div>
            <div
              className={[
                'relative w-full h-4 rounded-full overflow-hidden border',
                isDark ? 'bg-ethio-dark-3 border-ethio-green/20' : 'bg-ethio-light-2 border-ethio-green/30',
              ].join(' ')}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full
                           bg-gradient-to-r from-ethio-green to-ethio-gold
                           shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full shimmer-bar"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Milestones */}
            <div className="mt-2 flex justify-between text-[10px] opacity-60">
              <span>Intro</span>
              <span>Variables</span>
              <span>Conditions</span>
              <span>Loops</span>
              <span>Functions</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button type="button" className="btn-primary">
              ▶ {t('continueBtn')}
            </button>
            <div className="text-xs opacity-70">
              {t('nextUp')}: <span className="font-semibold text-ethio-gold">{t('nextTopic')}</span>
            </div>
          </div>
        </div>

        {/* Right: 3D stack visualization */}
        <div className="relative w-full lg:w-72 shrink-0 hidden sm:block">
          <div className="relative h-56">
            <StackCard offset={0} tone="green" title="printf()"  sub="Hello World" />
            <StackCard offset={1} tone="gold"  title="int main()" sub="Entry Point" />
            <StackCard offset={2} tone="green" title="#include"  sub="<iostream>" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StackCard = ({ offset, tone, title, sub }) => {
  const palette =
    tone === 'gold'
      ? 'from-ethio-gold/90 to-ethio-gold-deep border-ethio-gold'
      : 'from-ethio-green/90 to-ethio-green-deep border-ethio-green';
  return (
    <div
      className={[
        'absolute left-0 right-0 rounded-2xl border-2 px-4 py-3',
        'bg-gradient-to-br', palette,
        'text-ethio-dark shadow-iso-green',
      ].join(' ')}
      style={{
        top: offset * 28,
        transform: `translateY(${offset * -2}px) translateZ(${offset * 18}px)`,
        zIndex: 10 - offset,
      }}
    >
      <div className="font-mono font-bold">{title}</div>
      <div className="text-xs opacity-80">{sub}</div>
    </div>
  );
};

export default CourseCard;