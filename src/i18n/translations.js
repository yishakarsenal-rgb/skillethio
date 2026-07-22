/**
 * Bilingual string dictionary for SkillEthio.
 * All user-facing labels live here so components stay clean.
 *
 * Every key has:
 *   en: English string
 *   am: Amharic (አማርኛ) translation
 */
export const translations = {
  // Top navigation
  brand: {
    en: "SkillEthio",
    am: "ክህሎት ኢትዮጵያ",
  },
  brandSubtitle: {
    en: "Code · Create · Conquer",
    am: "ኮድ · ፍጠር · ድል",
  },
  navHome: { en: "Dashboard", am: "ዳሽቦርድ" },
  navCourses: { en: "Courses", am: "ኮርሶች" },
  navPractice: { en: "Practice", am: "ልምምድ" },
  navLeaderboard: { en: "Ranks", am: "ደረጃ" },
  navProfile: { en: "Profile", am: "መገለጫ" },

  // Stat badges
  streak: { en: "Streak", am: "ተከታታይ" },
  xp: { en: "XP", am: "ኤክስፒ" },
  level: { en: "Level", am: "ደረጃ" },
  days: { en: "Days", am: "ቀናት" },

  // Hero / Course
  activeCourseLabel: { en: "Active Course", am: "ንቁ ኮርስ" },
  courseTitle: { en: "Introduction to C++ & Logic", am: "መግቢያ ወደ C++ እና ሎጂክ" },
  courseSubtitle: { en: "Bilingual track · በአማርኛ", am: "ሁለት ቋንቋ ትምህርት" },
  lessonLabel: { en: "Lesson", am: "ትምህርት" },
  lessonCurrent: { en: "7 of 10", am: "10 ውስጥ 7" },
  nextUp: { en: "Up next", am: "ቀጥሎ የሚመጣ" },
  nextTopic: { en: "Loops in C++ (ሉፕ)", am: "ሉፕ በ C++" },
  continueBtn: { en: "Continue Learning", am: "መማር ቀጥል" },

  // MiniMax AI Copilot
  copilotTitle: { en: "MiniMax AI Copilot", am: "MiniMax AI ረዳት" },
  copilotTag: {
    en: "Your bilingual coding mentor",
    am: "ሁለት ቋንቋ የኮዲንግ አስተምህር",
  },
  copilotPlaceholder: {
    en: "Ask MiniMax AI to explain loops in Amharic...",
    am: "ሉፕ በአማርኛ እንዲያብራራ ለ MiniMax AI ይጠይቁ...",
  },
  copilotSend: { en: "Send", am: "ላክ" },
  copilotIntro: {
    en: "Hi! I can explain any CS concept in English or አማርኛ. Try the sample below 👇",
    am: "ሰላም! ማንኛውንም የ CS ፅንሰ-ሀሳብ በእንግሊዝኛ ወይም በአማርኛ ልብራራልህ። ከዚህ በታች ያለውን ምሳሌ ተመልከት 👇",
  },
  copilotResponseTitle: { en: "Explanation", am: "ማብራሪያ" },
  copilotAsk: { en: "Explain loops in Amharic", am: "ሉፕ በአማርኛ አብራራ" },

  //Practice Sandbox
  practiceTitle: { en: "Today's Code Challenge", am: "የዛሬው ኮድ ፈተና" },
  practiceSubtitle: {
    en: "Pick the best answer to earn XP",
    am: "ለማሸነፍ ምርጥ መልሱን ይምረጡ",
  },
  questionLabel: { en: "Question", am: "ጥያቄ" },
  xpReward: { en: "+50 XP", am: "+50 ኤክስፒ" },
  correctLabel: { en: "Correct! +50 XP", am: "ትክክል! +50 ኤክስፒ" },
  wrongLabel: { en: "Try Again", am: "እንደገና ሞክር" },
  submitBtn: { en: "Submit", am: "አስገባ" },
  nextBtn: { en: "Next Question", am: "ቀጣይ ጥያቄ" },

  // Premium Portal
  premiumTitle: {
    en: "Upgrade to SkillEthio Pro",
    am: "ወደ SkillEthio Pro ይሻጉ",
  },
  premiumSubtitle: {
    en: "Verified certification, offline lessons, and AI tutoring 24/7.",
    am: "የተረጋገጠ ምስክር ወረቀት፣ ከመስመር ውጭ ትምህርት፣ እና 24/7 AI አስተምህር።",
  },
  premiumCta: {
    en: "Upgrade via Chapa / Telebirr for Verified Certification",
    am: "ለተረጋገጠ ምስክር ወረቀት በ Chapa / Telebirr ይክፈሉ",
  },
  secureBadge: {
    en: "Secure · Local Payment Partners",
    am: "ደህንነቱ የተጠበቀ · የአካባቢ ክፍያ አጋሮች",
  },

  // Footer
  footer: {
    en: "© 2026 SkillEthio · Built by Yishak Mekuannent · ",
    am: "© 2026 SkillEthio · በ Yishak Mekuannent የተሰራ",
  },
  builtBy: {
    en: "Built by Yishak Mekuannent",
  },
};

export const t = (key, lang) =>
  translations[key]?.[lang] ?? translations[key]?.en ?? key;
