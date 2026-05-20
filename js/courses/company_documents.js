window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.company_documents = {
  id: "company_documents",
  emoji: "📜",
  duration: 3,
  karma: 30,
  title: {
    en: "Security ground rules",
    fr: "Les règles de base",
    es: "Reglas básicas de seguridad",
    de: "Sicherheitsgrundlagen",
    it: "Regole di base sulla sicurezza",
    da: "Sikkerhedens grundregler",
    bg: "Основни правила за сигурност"
  },
  description: {
    en: "Three habits that quietly keep you safer online — every single day.",
    fr: "Trois habitudes qui te protègent au quotidien, sans en avoir l'air.",
    es: "Tres hábitos que te mantienen más seguro en línea, sin que te des cuenta — cada día.",
    de: "Drei Gewohnheiten, die dich online jeden Tag unauffällig sicherer machen.",
    it: "Tre abitudini che ti rendono più sicuro online — ogni giorno, senza farti notare.",
    da: "Tre vaner, der stille og roligt holder dig sikrere online — hver eneste dag.",
    bg: "Три навика, които тихо те правят по-сигурен онлайн — всеки ден."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! I'm Janet.", fr: "Salut ! C'est Janet !" },
        { en: "I'm your friendly information assistant. I know things. So many things. Honestly, all of them.", fr: "Je suis ton assistante d'information préférée. Je sais des choses. Plein de choses. Honnêtement, toutes les choses." },
        { en: "But today, I'm only going to share my favorite three. Ground rules. The kind that keep you safer every single day without even noticing.", fr: "Mais aujourd'hui, j'ai sélectionné mes trois préférées. Les règles de base. Celles qui te protègent tous les jours, sans que tu t'en aperçoives." }
      ],
      choices: [{ label: { en: "Ooh, exciting!", fr: "Vas-y, je t'écoute !" }, next: "rule1" }]
    },
    rule1: {
      bot: [
        { en: "Rule one: *security is a habit, not an event.*", fr: "Règle numéro un : *la sécurité, c'est une habitude, pas un événement.*" },
        { en: "Nobody gets hacked because they failed a quiz. They get hacked on a Tuesday at 4:51 PM when they're tired.", fr: "Personne ne se fait pirater parce qu'il a raté un QCM. On se fait pirater un mardi à 16h51, quand on est fatigué." },
        { en: "Tiny daily habits beat one big training session, every time.", fr: "Les petites habitudes quotidiennes battent toutes les grandes formations, à chaque fois." }
      ],
      choices: [{ label: { en: "Got it", fr: "Compris" }, next: "rule2" }]
    },
    rule2: {
      bot: [
        { en: "Rule two: *if something feels off, it probably is.*", fr: "Règle numéro deux : *si quelque chose te semble bizarre, c'est probablement le cas.*" },
        { en: "Your gut is a surprisingly good security sensor.", fr: "Ton intuition est un excellent capteur de sécurité." },
        { en: "An odd email, a weird tone from a friend, a button you didn't expect — pause before you click.", fr: "Un email étrange, un ami qui écrit bizarrement, un bouton qui sort de nulle part — fais une pause avant de cliquer." }
      ],
      choices: [{ label: { en: "Makes sense", fr: "Logique" }, next: "rule3" }]
    },
    rule3: {
      bot: [
        { en: "Rule three: *use a second channel to double-check.*", fr: "Règle numéro trois : *vérifie sur un deuxième canal.*" },
        { en: "Got a weird email from your bank? Don't click — open the bank's app directly.", fr: "Un email louche de ta banque ? Ne clique pas — ouvre l'appli directement." },
        { en: "Got a weird text from a friend asking for money? Call them.", fr: "Un SMS suspect d'un ami qui te demande de l'argent ? Appelle-le." },
        { en: "Two channels is the single best defense against almost every scam I know — and I know a *lot*.", fr: "Deux canaux, c'est la meilleure défense contre presque toutes les arnaques que je connais — et j'en connais *beaucoup*." }
      ],
      choices: [{ label: { en: "Locked in", fr: "C'est noté" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "That's it. Three habits. According to my database, you are now ahead of approximately 4.2 billion humans.", fr: "Voilà. Trois habitudes. Selon ma base de données, tu viens de dépasser environ 4,2 milliards d'humains." },
        { en: "I will be right here whenever you're ready for the next one. Bye for now! ✨", fr: "Je suis là dès que tu es prêt·e pour le suivant. À très vite ! ✨" }
      ],
      end: true
    }
  }
};
