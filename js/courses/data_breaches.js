window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.data_breaches = {
  id: "data_breaches",
  emoji: "🪣",
  duration: 3,
  karma: 30,
  title: { en: "Data breaches", fr: "Fuites de données" },
  description: {
    en: "What happens when companies lose your data — and what to do.",
    fr: "Ce qui se passe quand des entreprises perdent tes données — et que faire."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with a reality check I am cheerfully obligated to deliver.", fr: "Salut ! C'est Janet, avec un retour à la réalité que je dois te livrer joyeusement." },
        { en: "In the past 15 years, almost every service you have ever used has had a data leak. Per my records — and I checked twice.", fr: "Ces 15 dernières années, presque tous les services que tu as utilisés ont eu une fuite de données. Selon mes registres — j'ai vérifié deux fois." },
        { en: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, that random MMORPG forum from 2009. The list is, factually, very long.", fr: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, ce forum de MMORPG de 2009. La liste est, factuellement, très longue." }
      ],
      choices: [{ label: { en: "What gets leaked?", fr: "Qu'est-ce qui fuite ?" }, next: "what" }]
    },
    what: {
      bot: [
        { en: "Usually some mix of:", fr: "En général un mélange de :" },
        { en: "📧 Email addresses", fr: "📧 Adresses email" },
        { en: "🔑 Passwords (sometimes in plain text, sometimes scrambled)", fr: "🔑 Mots de passe (parfois en clair, parfois brouillés)" },
        { en: "📞 Phone numbers, names, addresses", fr: "📞 Numéros de téléphone, noms, adresses" },
        { en: "💳 Sometimes payment info or ID documents", fr: "💳 Parfois les infos bancaires ou documents d'identité" }
      ],
      next: "consequence"
    },
    consequence: {
      bot: [
        { en: "Once leaked, the data circulates *forever*. Scammers buy bundles of it for cheap.", fr: "Une fois fuitée, la donnée circule *pour toujours*. Les arnaqueurs en achètent des lots pas cher." },
        { en: "That's why you get spam to email addresses you only used once.", fr: "C'est pour ça que tu reçois du spam sur des adresses email que tu n'as utilisées qu'une fois." }
      ],
      next: "check"
    },
    check: {
      bot: [
        { en: "Want to see if your email's been in a leak? Go to *haveibeenpwned.com* — type your email, get the list.", fr: "Tu veux savoir si ton email a fuité ? Va sur *haveibeenpwned.com* — tape ton email, tu auras la liste." },
        { en: "It's free, run by a security researcher, and it does not store what you type.", fr: "C'est gratuit, géré par un chercheur en sécurité, et ça n'enregistre pas ce que tu tapes." }
      ],
      choices: [{ label: { en: "What do I do if mine's there?", fr: "Et si la mienne y est ?" }, next: "action" }]
    },
    action: {
      bot: [
        { en: "Three moves:", fr: "Trois actions :" },
        { en: "1. Change the password on that account — and on any other account where you reused it.", fr: "1. Change le mot de passe de ce compte — et de tous les comptes où tu l'as réutilisé." },
        { en: "2. Turn on 2FA wherever you can.", fr: "2. Active la 2FA partout où c'est possible." },
        { en: "3. Be extra suspicious of emails or texts mentioning the leaked service for the next few months.", fr: "3. Sois extra méfiant·e des emails ou SMS mentionnant le service piraté pendant quelques mois." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "The long-term medicine: a password manager + unique passwords for every site. Leaks become a mild annoyance, not a catastrophe.", fr: "Le remède long terme : un gestionnaire + un mot de passe unique par site. Une fuite devient un agacement, pas une catastrophe." },
        { en: "Janet is, factually, rooting for you. Bye for now! 🧯", fr: "Janet, factuellement, croit en toi. À très vite ! 🧯" }
      ],
      end: true
    }
  }
};
