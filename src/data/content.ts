/**
 * Single source of truth for all site content, in German (de) and English (en).
 * Components render both languages; CSS shows the active one based on
 * `:root[data-lang]`. Default language is German (set in Layout.astro).
 */

export type Lang = 'de' | 'en';

export interface Bilingual {
  de: string;
  en: string;
}

export interface NavItem {
  href: string;
  label: Bilingual;
}

export interface TechItem {
  /** Display name (also used as accessible label). */
  name: string;
  /** astro-icon name, e.g. "simple-icons:typescript". */
  icon: string;
  /** Brand color (hex) revealed on hover; greyscale by default. */
  color: string;
}

export interface TechGroup {
  title: Bilingual;
  items: TechItem[];
  /** When true, icons stay at full accent color instead of greyscale→hover. */
  solid?: boolean;
}

export interface Project {
  id: string;
  title: Bilingual;
  /** Short context badge, e.g. "Eigenes Projekt" / "@ NCM". */
  context: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  /** Tech tags shown on the card. */
  tech: string[];
  /** lucide icon for the card header. */
  icon: string;
  link?: {
    href: string;
    label: Bilingual;
  };
  featured?: boolean;
}

/* ------------------------------------------------------------------ */

export const site = {
  name: 'Denys-Catalin Tudosa',
  shortName: 'Denys Tudosa',
  monogram: 'DT',
  email: 'denys_tudosa@yahoo.com',
  github: 'https://github.com/TwoD97',
  githubHandle: 'TwoD97',
  location: {
    de: 'Salzburg, Österreich',
    en: 'Salzburg, Austria',
  } satisfies Bilingual,
  role: {
    de: 'Full-Stack-Entwickler',
    en: 'Full-Stack Developer',
  } satisfies Bilingual,
  description: {
    de: 'Portfolio von Denys-Catalin Tudosa — Full-Stack-Entwickler mit Schwerpunkt TypeScript und KI-Anwendungen.',
    en: 'Portfolio of Denys-Catalin Tudosa — Full-Stack Developer focused on TypeScript and AI applications.',
  } satisfies Bilingual,
};

export const nav: NavItem[] = [
  { href: '#ueber-mich', label: { de: 'Über mich', en: 'About' } },
  { href: '#tech-stack', label: { de: 'Tech-Stack', en: 'Tech stack' } },
  { href: '#projekte', label: { de: 'Projekte', en: 'Projects' } },
  { href: '#kontakt', label: { de: 'Kontakt', en: 'Contact' } },
];

export const hero = {
  eyebrow: {
    de: 'Schwerpunkt TypeScript & Künstliche Intelligenz',
    en: 'Focused on TypeScript & Artificial Intelligence',
  } satisfies Bilingual,
  headline: {
    de: 'Ich baue KI-gestützte Web-Anwendungen.',
    en: 'I build AI-powered web applications.',
  } satisfies Bilingual,
  tagline: {
    de: 'Full-Stack-Entwickler mit Leidenschaft für künstliche Intelligenz — von dynamischen RAG-Chatbots bis zu lokalen LLM-Tools. Aktuell bei NCM in Salzburg.',
    en: 'Full-stack developer with a passion for artificial intelligence — from dynamic RAG chatbots to local LLM tools. Currently at NCM in Salzburg.',
  } satisfies Bilingual,
  primaryCta: { de: 'Projekte ansehen', en: 'View projects' } satisfies Bilingual,
  secondaryCta: { de: 'Kontakt aufnehmen', en: 'Get in touch' } satisfies Bilingual,
};

export const about = {
  heading: { de: 'Über mich', en: 'About me' } satisfies Bilingual,
  lead: {
    de: 'Ich bin Full-Stack-Entwickler mit einer Leidenschaft für künstliche Intelligenz.',
    en: 'I am a full-stack developer with a passion for artificial intelligence.',
  } satisfies Bilingual,
  paragraphs: [
    {
      de: 'Mein Weg in die Softwareentwicklung führte über die Ausbildung in Applikationsentwicklung bei der Futura Arbeitsplatzstiftung — mit Schwerpunkt auf objektorientierter Programmierung in Java, meiner ersten Programmiersprache, und Webentwicklung. Seit 2024 entwickle ich als Full-Stack-Entwickler bei NCM in Salzburg KI-gestützte Anwendungen für echte Kundenprojekte.',
      en: 'My path into software development started with a vocational training in application development at the Futura employment foundation — focused on object-oriented programming in Java, my first programming language, and web development. Since 2024 I have been a full-stack developer at NCM in Salzburg, building AI-powered applications for real client projects.',
    },
    {
      de: 'TypeScript und PHP habe ich mir eigenständig im Beruf erarbeitet und direkt produktiv eingesetzt — von CMS-Modulen über SaaS-Anwendungen bis zu KI-Chatbots. Was mich antreibt, ist die Neugier, Neues schnell zu durchdringen, und die Freude daran, Software zu bauen, die Menschen wirklich nutzen.',
      en: 'I taught myself TypeScript and PHP on the job and put them straight into production — from CMS modules and SaaS applications to AI chatbots. What drives me is the curiosity to grasp new things quickly and the joy of building software people actually use.',
    },
    {
      de: 'Besonders faszinieren mich KI-Anwendungen: Sprachmodelle, Retrieval-Augmented Generation und alles, was Software intelligenter macht. Mein Schwerpunkt liegt klar auf TypeScript; Themen wie Docker, Linux und Cloud-Deployment vertiefe ich gerade mit Begeisterung weiter.',
      en: 'I am especially fascinated by AI applications: language models, retrieval-augmented generation and everything that makes software smarter. My focus is firmly on TypeScript; I am currently deepening my skills in Docker, Linux and cloud deployment with great enthusiasm.',
    },
  ] satisfies Bilingual[],
  facts: [
    { icon: 'lucide:map-pin', label: { de: 'Standort', en: 'Location' }, value: { de: 'Salzburg, Österreich', en: 'Salzburg, Austria' } },
    { icon: 'lucide:briefcase', label: { de: 'Aktuell', en: 'Currently' }, value: { de: 'Full-Stack-Entwickler @ NCM', en: 'Full-Stack Developer @ NCM' } },
    { icon: 'lucide:sparkles', label: { de: 'Fokus', en: 'Focus' }, value: { de: 'TypeScript & KI', en: 'TypeScript & AI' } },
    { icon: 'lucide:languages', label: { de: 'Sprachen', en: 'Languages' }, value: { de: 'RO · IT · DE · EN', en: 'RO · IT · DE · EN' } },
  ] as { icon: string; label: Bilingual; value: Bilingual }[],
};

export const techStack = {
  heading: { de: 'Tech-Stack', en: 'Tech stack' } satisfies Bilingual,
  intro: {
    de: 'Werkzeuge und Technologien, mit denen ich täglich arbeite.',
    en: 'Tools and technologies I work with every day.',
  } satisfies Bilingual,
  groups: [
    {
      title: { de: 'Sprachen', en: 'Languages' },
      items: [
        { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
        { name: 'JavaScript', icon: 'simple-icons:javascript', color: '#F7DF1E' },
        { name: 'PHP', icon: 'simple-icons:php', color: '#777BB4' },
        { name: 'Java', icon: 'simple-icons:openjdk', color: '#ED8B00' },
        { name: 'HTML5', icon: 'simple-icons:html5', color: '#E34F26' },
        { name: 'CSS', icon: 'simple-icons:css', color: '#1572B6' },
      ],
    },
    {
      title: { de: 'Frameworks & Tools', en: 'Frameworks & tools' },
      items: [
        { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#5FA04E' },
        { name: 'Astro', icon: 'simple-icons:astro', color: '#BC52EE' },
        { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
        { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
        { name: 'Electron', icon: 'simple-icons:electron', color: '#47848F' },
        { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
        { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
        { name: 'Linux', icon: 'simple-icons:linux', color: '#FCC624' },
      ],
    },
    {
      title: { de: 'KI & Daten', en: 'AI & data' },
      solid: true,
      items: [
        { name: 'LLM-Integration', icon: 'lucide:bot', color: '#0b6e7c' },
        { name: 'RAG', icon: 'lucide:database', color: '#0b6e7c' },
        { name: 'REST-APIs', icon: 'lucide:webhook', color: '#0b6e7c' },
        { name: 'Prompt Engineering', icon: 'lucide:sparkles', color: '#0b6e7c' },
      ],
    },
  ] satisfies TechGroup[],
};

export const projects = {
  heading: { de: 'Projekte', en: 'Projects' } satisfies Bilingual,
  intro: {
    de: 'Eine Auswahl aus eigenen Projekten und meiner Arbeit bei NCM.',
    en: 'A selection of personal projects and my work at NCM.',
  } satisfies Bilingual,
  items: [
    {
      id: 'loklm',
      featured: true,
      icon: 'lucide:notebook-pen',
      title: { de: 'LokLM', en: 'LokLM' },
      context: { de: 'Eigenes Projekt', en: 'Personal project' },
      tagline: {
        de: 'Lokales KI-Notizbuch — deine Daten bleiben auf deinem Gerät.',
        en: 'A local-first AI notebook — your data stays on your device.',
      },
      description: {
        de: 'Eine Desktop-Anwendung, die Sprachmodelle vollständig lokal ausführt. Konsequent lokal: Notizen und KI-Funktionen laufen ohne Cloud – datenschutzfreundlich und offline. Gebaut mit Electron und TypeScript.',
        en: 'A desktop application that runs language models entirely on your machine. Strictly local-first: notes and AI features run without the cloud — privacy-friendly and offline. Built with Electron and TypeScript.',
      },
      tech: ['TypeScript', 'Electron', 'Vite', 'Local LLM', 'pnpm'],
      link: { href: 'https://github.com/TwoD97/LokLM', label: { de: 'Code auf GitHub', en: 'Code on GitHub' } },
    },
    {
      id: 'rag-chatbot',
      icon: 'lucide:bot-message-square',
      title: { de: 'KI-Chatbots mit dynamischem RAG', en: 'AI chatbots with dynamic RAG' },
      context: { de: '@ NCM', en: '@ NCM' },
      tagline: {
        de: 'Website-Chatbots, die immer den aktuellen Seiteninhalt kennen.',
        en: 'Website chatbots that always know the current site content.',
      },
      description: {
        de: 'KI-Chatbots für Kunden-Websites mit dynamischem Retrieval-Augmented Generation: Jeder Bot indexiert laufend die echten Inhalte seiner Website, sodass die Antworten stets den aktuellen Stand der Seite widerspiegeln — ohne manuelles Nachpflegen.',
        en: 'AI chatbots for client websites with dynamic retrieval-augmented generation: each bot continuously indexes its website’s real content, so the answers always reflect the current state of the site — with no manual maintenance.',
      },
      tech: ['TypeScript', 'RAG', 'LLM', 'Vector Search', 'REST'],
    },
    {
      id: 'cms',
      icon: 'lucide:layout-panel-left',
      title: { de: 'CMS-Module & Integrationen', en: 'CMS modules & integrations' },
      context: { de: '@ NCM', en: '@ NCM' },
      tagline: {
        de: 'KI-Features direkt in bestehende Content-Management-Systeme integriert.',
        en: 'AI features integrated directly into existing content-management systems.',
      },
      description: {
        de: 'Entwicklung und Anbindung von CMS-Modulen für Kunden-Websites — von der Konzeption bis zum produktiven Einsatz. Schwerpunkt auf der Integration von KI-Funktionen und REST-Schnittstellen in bestehende Systeme.',
        en: 'Building and wiring up CMS modules for client websites — from concept to production. Focused on integrating AI features and REST interfaces into existing systems.',
      },
      tech: ['PHP', 'TypeScript', 'REST', 'CMS'],
    },
    {
      id: 'faq-generator',
      icon: 'lucide:list-checks',
      title: { de: 'KI-FAQ-Generator', en: 'AI FAQ generator' },
      context: { de: '@ NCM', en: '@ NCM' },
      tagline: {
        de: 'Automatisch erzeugte FAQ-Inhalte aus vorhandenem Material.',
        en: 'Automatically generated FAQ content from existing material.',
      },
      description: {
        de: 'Ein Werkzeug, das aus bestehenden Inhalten automatisch passende FAQ-Einträge generiert und damit redaktionellen Aufwand spürbar reduziert.',
        en: 'A tool that automatically generates fitting FAQ entries from existing content, noticeably reducing editorial effort.',
      },
      tech: ['TypeScript', 'LLM', 'Automation'],
    },
    {
      id: 'image-metadata',
      icon: 'lucide:image',
      title: { de: 'Automatische Bild-Metadaten', en: 'Automatic image metadata' },
      context: { de: '@ NCM', en: '@ NCM' },
      tagline: {
        de: 'KI-generierte Alt-Texte und Metadaten — barrierefrei und SEO-freundlich.',
        en: 'AI-generated alt text and metadata — accessible and SEO-friendly.',
      },
      description: {
        de: 'Automatische Erzeugung von Bildbeschreibungen und Metadaten mithilfe von KI-Vision-Modellen — für bessere Barrierefreiheit und Suchmaschinenoptimierung in großem Umfang.',
        en: 'Automatic generation of image descriptions and metadata using AI vision models — for better accessibility and SEO at scale.',
      },
      tech: ['TypeScript', 'AI Vision', 'SEO'],
    },
  ] satisfies Project[],
};

export const contact = {
  heading: { de: 'Kontakt', en: 'Get in touch' } satisfies Bilingual,
  intro: {
    de: 'Sie haben ein Projekt, eine offene Stelle oder einfach eine Frage? Schreiben Sie mir — ich freue mich auf Ihre Nachricht.',
    en: 'Have a project, a role, or just a question? Send me a message — I’d love to hear from you.',
  } satisfies Bilingual,
  form: {
    name: { de: 'Name', en: 'Name' } satisfies Bilingual,
    namePlaceholder: { de: 'Ihr Name', en: 'Your name' } satisfies Bilingual,
    email: { de: 'E-Mail', en: 'Email' } satisfies Bilingual,
    emailPlaceholder: { de: 'name@beispiel.com', en: 'name@example.com' } satisfies Bilingual,
    message: { de: 'Nachricht', en: 'Message' } satisfies Bilingual,
    messagePlaceholder: { de: 'Worum geht es?', en: 'What is it about?' } satisfies Bilingual,
    submit: { de: 'Nachricht senden', en: 'Send message' } satisfies Bilingual,
    sending: { de: 'Wird gesendet …', en: 'Sending …' } satisfies Bilingual,
    success: {
      de: 'Vielen Dank! Ihre Nachricht wurde gesendet — ich melde mich bald.',
      en: 'Thank you! Your message has been sent — I’ll be in touch soon.',
    } satisfies Bilingual,
    error: {
      de: 'Da ist etwas schiefgelaufen. Bitte schreiben Sie mir direkt per E-Mail.',
      en: 'Something went wrong. Please email me directly instead.',
    } satisfies Bilingual,
    mailto: {
      de: 'Ihr E-Mail-Programm wird geöffnet …',
      en: 'Opening your email app …',
    } satisfies Bilingual,
  },
  directLabel: { de: 'Oder direkt:', en: 'Or directly:' } satisfies Bilingual,
};

export const footer = {
  builtWith: {
    de: 'Gebaut mit Astro & Tailwind CSS.',
    en: 'Built with Astro & Tailwind CSS.',
  } satisfies Bilingual,
  backToTop: { de: 'Nach oben', en: 'Back to top' } satisfies Bilingual,
};
