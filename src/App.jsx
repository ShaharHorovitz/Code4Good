import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Heart, 
  Users, 
  Database, 
  Layout, 
  ArrowRight, 
  ArrowLeft,
  Menu, 
  X, 
  Globe, 
  CheckCircle,
  Activity,
  BarChart,
  Smile,
  Linkedin,
  Sparkles,
  Rocket
} from 'lucide-react';

// --- DATA & TRANSLATIONS ---

const translations = {
  en: {
    nav: {
      about: "About",
      current: "2026 Recruitment",
      portfolio: "Portfolio",
      team: "Team",
      contact: "Contact Us"
    },
    hero: {
      tag: "Founded in 2020",
      titleStart: "Engineering solutions for",
      titleHighlight: "social impact",
      subtitle: "Code4Good connects Computer Science students with non-profit organizations to build sustainable technological solutions.",
      ctaPortfolio: "View Our Portfolio",
      ctaLearn: "Learn More"
    },
    about: {
      subtitle: "About Us",
      title: "Technology with a Heart",
      p1: "Code4Good is a unique initiative at Reichman University where academic excellence meets social responsibility.",
      p2: "Under the guidance of the Dean of Computer Science, Prof. Shimon Schocken, our students have been dedicating their skills to building technological infrastructure for non-profit organizations since 2020.",
      p3: "Despite challenges, including the war and reserve duty service, our students remained committed to delivering impactful products.",
      ceremony: "Students & Faculty Ceremony"
    },
    current: {
      subtitle: "Class of 2026",
      title: "Join the Movement",
      cardTitle: "Recruiting Now!",
      cardDesc: "We are currently recruiting new students from Reichman University for our 2026 class. We have 6 amazing projects waiting that will be revealed in 2026.",
      reveal: "Apply Now"
    },
    portfolio: {
      subtitle: "Our Impact",
      title: "Project Portfolio",
      solutionLabel: "The Solution",
      developedBy: "Developed By"
    },
    team: {
      subtitle: "Our Team",
      title: "Program Leadership",
      mentorsTitle: "Industry Mentors",
      mentorsDesc: "Our professional mentors provide critical guidance, code reviews, and industry best practices to our student teams.",
      pastManagersTitle: "Past Program Managers",
      pastManagersList: "[List previous years' managers here]"
    },
    footer: {
      uni: "Reichman University, Herzliya",
      est: "Est. 2020",
      email: "code4good.idc@gmail.com",
      rights: "Code4Good. All rights reserved.",
      built: "Built with ❤️ by CS Students",
      followUs: "Want to hear more? Follow us!"
    }
  },
  he: {
    nav: {
      about: "אודות",
      current: "גיוס למחזור 2026",
      portfolio: "תיק עבודות",
      team: "הצוות",
      contact: "צרו קשר"
    },
    hero: {
      tag: "נוסד ב-2020",
      titleStart: "פתרונות טכנולוגיים",
      titleHighlight: "לאימפקט חברתי",
      subtitle: "תוכנית Code4Good מחברת בין סטודנטים למדעי המחשב לעמותות, במטרה לבנות פתרונות טכנולוגיים ברי-קיימא לבעיות חברתיות.",
      ctaPortfolio: "לתיק העבודות",
      ctaLearn: "קרא עוד"
    },
    about: {
      subtitle: "מי אנחנו",
      title: "טכנולוגיה עם לב",
      p1: "Code4Good היא יוזמה ייחודית באוניברסיטת רייכמן המשלבת מצוינות אקדמית עם אחריות חברתית.",
      p2: "בהנחיית דיקן בית הספר למדעי המחשב, פרופ' שמעון שוקן, הסטודנטים שלנו מקדישים את כישוריהם לבניית תשתיות טכנולוגיות לעמותות מאז 2020.",
      p3: "למרות האתגרים, כולל המלחמה ושירות המילואים, הסטודנטים שלנו נשארו מחויבים ומסרו מוצרים בעלי השפעה.",
      ceremony: "טקס סיום עם הסטודנטים והסגל"
    },
    current: {
      subtitle: "מחזור 2026",
      title: "הצטרפו לעשייה",
      cardTitle: "הגיוס בעיצומו!",
      cardDesc: "אנו מגייסים כעת סטודנטים חדשים מאוניברסיטת רייכמן למחזור 2026. מחכים לנו 6 פרויקטים מדהימים שייחשפו במהלך שנת 2026.",
      reveal: "הירשמו עכשיו"
    },
    portfolio: {
      subtitle: "ההשפעה שלנו",
      title: "תיק הפרויקטים",
      solutionLabel: "הפתרון",
      developedBy: "פותח על ידי"
    },
    team: {
      subtitle: "הצוות שלנו",
      title: "הנהלת התוכנית",
      mentorsTitle: "מנטורים מהתעשייה",
      mentorsDesc: "המנטורים המקצועיים שלנו מספקים הכוונה קריטית, סקירות קוד ושיטות עבודה מומלצות לצוותי הסטודנטים.",
      pastManagersTitle: "מנהלי תוכנית קודמים",
      pastManagersList: "[רשימת מנהלים משנים קודמות]"
    },
    footer: {
      uni: "אוניברסיטת רייכמן, הרצליה",
      est: "נוסד 2020",
      email: "code4good.idc@gmail.com",
      rights: "Code4Good. כל הזכויות שמורות.",
      built: "נבנה עם ❤️ על ידי סטודנטים למדעי המחשב",
      followUs: "רוצים לשמוע עוד? עקבו אחרינו!"
    }
  }
};

const projectsData = [
  {
    icon: Users,
    // Placeholder for logo - upload file and I'll add "filename.png" here
    logo: null,
    imageUrl: "/images/orgs/hosatge_families.png",
    content: {
      en: {
        title: "Hostages Families Forum",
        description: "Managing advocacy events and volunteer shifts through WhatsApp surveys was inefficient. We created a centralized platform.",
        solution: "A robust Event Management System connected to AWS. Features a Flask REST API and React/MUI frontend for easy shift scheduling.",
        tech: ["React", "MUI", "Python Flask", "AWS"]
      },
      he: {
        title: "מטה משפחות החטופים",
        description: "כבר לא ינהלו פעילות באמצעות סקרים בווטסאפ! הסטודנטים שלנו בנו אתר שמחובר לשרת של AWS לשיבוץ נציגים לאירועי הסברה.",
        solution: "מערכת ניהול אירועים הכוללת REST API ב-Flask וצד לקוח ב-React עם MUI לממשק משתמש מודרני וידידותי.",
        tech: ["React", "MUI", "Python Flask", "AWS"]
      }
    },
    team: ["Noa Noach", "Rotem Medina", "Ohad Ben Amram", "Daniel Mass", "Dylan Lewis"]
  },
  {
    icon: Heart,
    logo: null,
    imageUrl: "/images/orgs/mandala_of_the_heart.png",
    content: {
      en: {
        title: "Mandala of the Heart",
        description: "Replaced manual email/SMS communication with an automated community management system.",
        solution: "A Node.js & Express server integrating directly with Salesforce. Serves as the foundation for a future community app.",
        tech: ["Node.js", "Express", "Salesforce API", "Security"]
      },
      he: {
        title: "מנדלת הלב",
        description: "כבר לא ינהלו תקשורת מול הקהילה באופן ידני! הסטודנטים בנו שרת המשתלב עם מערכת ה-Salesforce ומהווה בסיס לאפליקציה עתידית.",
        solution: "שרת Node.js + Express הכולל אימות משתמשים וגישה לנתוני Salesforce להצגת מידע רלוונטי באופן מאובטח.",
        tech: ["Node.js", "Express", "Salesforce API", "Security"]
      }
    },
    team: ["Etay Zaslavsky", "Omer Bengal", "Rotem Breslauer", "Omry Maor", "Haim Didi"]
  },
  {
    icon: Activity,
    logo: null,
    imageUrl: "/images/orgs/not_abandoning_the_wounded.png",
    content: {
      en: {
        title: "Not Abandoning Wounded",
        description: "The organization was managing critical patient tracking on Excel spreadsheets.",
        solution: "A custom automation ecosystem using Monday.com and Make. Handles appointment scheduling and patient tracking automatically.",
        tech: ["Monday.com", "Make", "Automation"]
      },
      he: {
        title: "לא מפקירים פצועים בשטח",
        description: "כבר לא ינהלו את פעילות העמותה באקסלים! הסטודנטים בנו מערכת מותאמת אישית לניהול מטופלים ותיאום פגישות.",
        solution: "מערכת אוטומציה באמצעות Monday.com ו־Make המאפשרת מעקב שוטף וניהול הפעילות בצורה פשוטה ומסודרת.",
        tech: ["Monday.com", "Make", "Automation"]
      }
    },
    team: ["Maya Orpaz", "Yair Tzach", "Amit Frumkin", "Romi Golan"]
  },
  {
    icon: Smile,
    logo: null,
    imageUrl: "/images/orgs/maslulim.png",
    content: {
      en: {
        title: "Maslulim",
        description: "Tracking child development progress using pen and paper made long-term analysis impossible.",
        solution: "A digital solution combining visual questionnaires with Google Sheets & Looker for powerful data analytics.",
        tech: ["Google Sheets", "Looker Studio", "Data Analysis"]
      },
      he: {
        title: "מסלולים",
        description: "כבר לא יתעדו את תהליך הפיתוח של הילדים עם דף ועט! פתרון טכנולוגי המשלב שאלון ויזואלי מהנה לילדים.",
        solution: "מערכת המבוססת על Google Sheets ו-Google Looker המאפשרת מעקב לאורך זמן, ניתוח נתונים וסטטיסטיקות לניהול העמותה.",
        tech: ["Google Sheets", "Looker Studio", "Data Analysis"]
      }
    },
    team: ["Maayan Crystal", "Yoav Sborovsky", "Sapir Erlich", "Mazal Iliadjanov", "Asa Cohen"]
  },
  {
    icon: BarChart,
    logo: null,
    imageUrl: "/images/orgs/heroes_for_life.webp",
    content: {
      en: {
        title: "Heroes for Life",
        description: "Lack of data visibility made it hard to make strategic decisions about missions and volunteers.",
        solution: "An advanced Grafana Dashboard that visualizes organization data for recruitment and mission planning.",
        tech: ["Grafana", "Data Viz", "BI"]
      },
      he: {
        title: "לוחמים ללא גבולות",
        description: "כבר לא מגששים באפלה! דשבורד המאפשר למנהלים לקבל החלטות מבוססות נתונים בנוגע לגיוס מתנדבים ופתיחת משלחות.",
        solution: "דשבורד ב-Grafana שמנתח את נתוני העמותה, מזהה טרנדים ומאפשר הפקת מסקנות משמעותיות לניהול מיטבי.",
        tech: ["Grafana", "Data Viz", "BI"]
      }
    },
    team: ["Paz Peleg", "Noam Shildekraut", "Libby Rosenman", "Gal Machluf"]
  },
  {
    icon: Heart,
    logo: null,
    imageUrl: "/images/orgs/The_Mother_of_the_Lone_Soldiers.avif",
    content: {
      en: {
        title: "The Mother of the Lone Soldiers",
        description: "Scheduling cooking shifts for lone soldiers was done manually with pen and paper.",
        solution: "A custom app overlaying TimeTree via REST API. Allows volunteers to sign up independently.",
        tech: ["TimeTree API", "REST API", "Mobile"]
      },
      he: {
        title: "אמא של החיילים הבודדים",
        description: "שיבוץ משמרות בישול לחיילים בודדים נעשה ידנית בצורה שהקשתה על המעקב.",
        solution: "אפליקציה המבוססת על TimeTree המאפשרת למתנדבים להירשם עצמאית בעוד המנהלים שומרים על בקרה.",
        tech: ["TimeTree API", "REST API", "Mobile"]
      }
    },
    team: []
  },
  {
    icon: Users,
    logo: null,
    imageUrl: "/images/orgs/krembo_wings.jpg",
    content: {
      en: {
        title: "Krembo Wings",
        description: "The instruction department struggled to track activity plans in messy folders.",
        solution: "A dedicated content library system (Moodle/Trello integration) to manage activity plans.",
        tech: ["Moodle/Trello", "Content Mgmt", "Automation"]
      },
      he: {
        title: "כנפיים של קרמבו",
        description: "מחלקת ההדרכה התקשתה לעקוב אחר מערכי פעילות שהלכו לאיבוד בתיקיות.",
        solution: "ספרייה לניהול מסמכים ומערכי פעילות (Moodle/Trello) המאפשרת גישה נוחה ומעקב אחר הורדות.",
        tech: ["Moodle/Trello", "Content Mgmt", "Automation"]
      }
    },
    team: []
  },
  {
    icon: Database,
    logo: null,
    imageUrl: "/images/orgs/israel_2050.png",
    content: {
      en: {
        title: "Israel 2050",
        description: "Candidate sorting was inefficient, requiring manual SMS and emails.",
        solution: "An automated sorting system using Airtable and Zapier for seamless communication.",
        tech: ["Airtable", "Zapier", "Automation"]
      },
      he: {
        title: "ישראל 2050",
        description: "תהליך מיון המועמדים היה איטי וכלל שליחת הודעות ומיילים ידניים.",
        solution: "מערכת מיון אוטומטית (Airtable + Zapier) המעדכנת סטטוסים ושולחת תקשורת למועמדים באופן אוטומטי.",
        tech: ["Airtable", "Zapier", "Automation"]
      }
    },
    team: []
  }
];

const managersData = [
  { 
    name: { en: "Shahar Horovitz", he: "שחר הורוביץ" },
    title: { en: "Program Manager", he: "מנהלת תוכנית" },
    photo: "/images/orgs/shahar_horovitz.jpg",
    linkedin: "https://www.linkedin.com/in/shahar-horovitz-341672227/"
  },
  { 
    name: { en: "Maayan Levy", he: "מעיין לוי" },
    title: { en: "Program Manager", he: "מנהלת תוכנית" },
    photo: "/images/orgs/maayan_levi.jpeg",
    linkedin: "https://www.linkedin.com/in/maayan-levi-418770273/"
  },
  { 
    name: { en: "Itay Zaslavsky", he: "איתי זסלבסקי" },
    title: { en: "Program Manager", he: "מנהל תוכנית" },
    photo: "/images/orgs/Itay_zaslavsky.png",
    linkedin: "https://www.linkedin.com/in/etay-zaslavsky/"
  },
];

// --- COMPONENTS ---

const Logo = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      {!imgError ? (
        <img 
          src="/images/orgs/logo.png" 
          alt="Code4Good logo" 
          className="h-10 w-auto object-contain" 
          onError={() => setImgError(true)}
        />
      ) : (
        /* Fallback SVG if image fails */
        <div className="relative w-10 h-10 bg-[#2A9D8F] rounded-full flex items-center justify-center overflow-hidden shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white relative z-10" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L12 12" className="opacity-0" />
            <path d="M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16l-4-4" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
            <path d="M10 10L17 17L19 12L10 10Z" fill="white" stroke="none" />
          </svg>
        </div>
      )}
      <a 
        href="https://www.linkedin.com/company/code4good-il/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#0077b5] transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
    </div>
  );
};

const NavLink = ({ href, children, mobile, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`${
      mobile 
        ? 'block w-full px-4 py-3 text-lg hover:bg-gray-50' 
        : 'text-sm font-medium hover:text-[#2A9D8F] transition-colors'
    } text-gray-600 cursor-pointer`}
  >
    {children}
  </a>
);

const SectionHeading = ({ subtitle, title, align = 'center', lang }) => (
  <div className={`mb-12 ${align === 'left' ? (lang === 'he' ? 'text-right' : 'text-left') : 'text-center'}`}>
    <span className="text-[#2A9D8F] font-bold tracking-wider text-sm uppercase mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      {title}
    </h2>
    <div className={`h-1 w-20 bg-[#2A9D8F] mt-4 rounded-full ${align === 'left' ? (lang === 'he' ? 'ml-auto mr-0' : 'mr-auto') : 'mx-auto'}`}></div>
  </div>
);

const ProjectCard = ({ project, lang }) => {
  const content = project.content[lang];
  const Icon = project.icon;
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group text-start">
      {project.imageUrl && (
        <div className="w-full h-56 flex items-center justify-center bg-white">
          <img 
            src={project.imageUrl} 
            alt={content.title} 
            className="max-h-full w-auto object-contain"
            onError={() => setImgError(true)}
          />
        </div>
      )}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4 h-14">
          {project.logo && !imgError ? (
             <img 
               src={project.logo} 
               alt={content.title} 
               className="h-full w-auto object-contain max-w-[120px]" 
               onError={() => setImgError(true)}
             />
          ) : (
            <div className="p-3 bg-teal-50 rounded-lg text-[#2A9D8F] group-hover:bg-[#2A9D8F] group-hover:text-white transition-colors">
              <Icon size={24} />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content.description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">{translations[lang].portfolio.solutionLabel}</h4>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
            {content.solution}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {content.tech.map((item, idx) => (
            <span key={idx} className="px-2 py-1 bg-teal-50 text-[#2A9D8F] text-xs font-semibold rounded-md border border-teal-100">
              {item}
            </span>
          ))}
        </div>
      </div>

      {project.team && project.team.length > 0 && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{translations[lang].portfolio.developedBy}</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.team.map((student, idx) => (
              <span key={idx} className="text-xs font-medium text-gray-700 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] ltr:mr-1.5 rtl:ml-1.5"></span>
                {student}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const LeadershipCard = ({ name, title, photo, linkedin }) => {
  const [imgError, setImgError] = React.useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');

  // Reset error state when photo changes
  React.useEffect(() => {
    setImgError(false);
  }, [photo]);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {photo && !imgError ? (
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-teal-100 mx-auto bg-teal-50 flex items-center justify-center">
          <img 
            src={photo} 
            alt={name} 
            className="w-full h-full object-cover object-top" 
            style={{ objectPosition: 'center top' }}
            onError={(e) => {
              e.target.onerror = null; 
              setImgError(true);
            }}
          />
        </div>
      ) : (
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-teal-50 border-4 border-teal-100 flex items-center justify-center mx-auto">
          <span className="text-3xl font-bold text-[#2A9D8F]">{initials}</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 text-center">{name}</h3>
      <p className="text-[#2A9D8F] font-medium text-sm mb-4 text-center">{title}</p>
      {linkedin && (
        <a 
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-2 hover:text-[#0A66C2] transition-colors"
        >
          <Linkedin size={20} className="text-gray-400" />
        </a>
      )}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'he'

  const t = translations[lang];
  const isRTL = lang === 'he';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'he' : 'en');
    setIsMenuOpen(false);
  };

  const mentors = [
    "Noa Buchman", "Zevi Arnovitz", "Roi Bnaya", "Omri Achituv", 
    "Omer Sella", "Michael Gasis", "Kfir Alfandary", "Igor Linkov", "May Kremer"
  ];

  return (
    <div className={`font-sans text-gray-900 bg-white min-h-screen ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#about">{t.nav.about}</NavLink>
              <NavLink href="#current-projects">{t.nav.current}</NavLink>
              <NavLink href="#portfolio">{t.nav.portfolio}</NavLink>
              <NavLink href="#team">{t.nav.team}</NavLink>
              
              <div className="flex items-center gap-4 border-l border-gray-200 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4">
                 <button 
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-[#2A9D8F] transition-colors"
                >
                  <Globe size={18} />
                  <span>{lang === 'en' ? 'HE' : 'EN'}</span>
                </button>
                <a href="#contact" className="px-5 py-2.5 bg-[#2A9D8F] hover:bg-[#21867a] text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md">
                  {t.nav.contact}
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-bold text-[#2A9D8F]"
              >
                {lang === 'en' ? 'HE' : 'EN'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
            <div className="flex flex-col py-2">
              <NavLink mobile href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</NavLink>
              <NavLink mobile href="#current-projects" onClick={() => setIsMenuOpen(false)}>{t.nav.current}</NavLink>
              <NavLink mobile href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t.nav.portfolio}</NavLink>
              <NavLink mobile href="#team" onClick={() => setIsMenuOpen(false)}>{t.nav.team}</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 rtl:left-0 rtl:right-auto rtl:-ml-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 rtl:right-0 rtl:left-auto rtl:-mr-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2A9D8F]"></span>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{t.hero.tag}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {t.hero.titleStart} <span className="text-[#2A9D8F]">{t.hero.titleHighlight}</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#portfolio" className="px-8 py-3.5 bg-[#2A9D8F] hover:bg-[#21867a] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2">
                {t.hero.ctaPortfolio} {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </a>
              <a href="#about" className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                {t.hero.ctaLearn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle={t.about.subtitle} title={t.about.title} align="left" lang={lang} />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {t.about.p2}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t.about.p3}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#2A9D8F] rounded-2xl rotate-3 opacity-10"></div>
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/orgs/2025_class.png" 
                  alt={t.about.ceremony} 
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Placeholder */}
      <section id="current-projects" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle={t.current.subtitle} title={t.current.title} lang={lang} />
          
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-teal-100 relative overflow-hidden">
            <div className={`absolute top-0 -mt-10 w-40 h-40 bg-teal-50 rounded-full blur-2xl ${isRTL ? 'left-0 -ml-10' : 'right-0 -mr-10'}`}></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-teal-100 text-[#2A9D8F] rounded-full">
                  <Rocket size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.current.cardTitle}</h3>
              <p className="text-gray-600 text-lg mb-8">
                {t.current.cardDesc}
              </p>
              <a 
                href="https://forms.monday.com/forms/b7eda6f027586f757c9498f2d7e7425d?r=euc1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2A9D8F] font-semibold bg-teal-50 px-6 py-3 rounded-full hover:bg-teal-100 transition-colors"
              >
                <Sparkles size={18} />
                <span>{t.current.reveal}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section (All Past Projects) */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t.portfolio.subtitle} title={t.portfolio.title} lang={lang} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t.team.subtitle} title={t.team.title} lang={lang} />
          
          {/* Current Managers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {managersData.map((manager, idx) => (
              <LeadershipCard 
                key={idx} 
                name={manager.name[lang]} 
                title={manager.title[lang]} 
                photo={manager.photo}
                linkedin={manager.linkedin}
              />
            ))}
          </div>

          {/* Mentors / Past Team */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.team.mentorsTitle}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.team.mentorsDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {mentors.map((mentor, idx) => (
                <span key={idx} className="px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-[#2A9D8F] hover:text-white hover:border-[#2A9D8F] transition-colors cursor-default shadow-sm">
                  {mentor}
                </span>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-200">
               <h4 className="text-lg font-semibold text-gray-400 mb-4">{t.team.pastManagersTitle}</h4>
               <p className="text-gray-500 text-sm">
                 {t.team.pastManagersList}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className={`flex items-center justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} gap-2 mb-2`}>
                 <Globe size={20} className="text-[#2A9D8F]" />
                 <span className="text-white font-bold text-lg">Code4Good</span>
              </div>
              <p className="text-sm">{t.footer.uni}</p>
              <p className="text-sm mt-1">{t.footer.est}</p>
              <p className="text-sm mt-2">
                <a href="mailto:code4good.idc@gmail.com" className="text-[#2A9D8F] hover:text-[#21867a] transition-colors">
                  {t.footer.email}
                </a>
              </p>
            </div>

            {/* Social Media Section */}
            <div className={`text-center ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              <p className="text-sm text-slate-300 mb-3">{t.footer.followUs}</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/code4good-il/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0077b5] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/code4good_il/?igsh=MW5leGxucmU5dGJwOQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/p/Code4good-100075953242095/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={`text-center ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              <p className="text-sm">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
              <p className="text-xs mt-2">{t.footer.built}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
