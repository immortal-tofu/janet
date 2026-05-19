window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.digital_footprint = {
  id: "digital_footprint",
  emoji: "👣",
  duration: 4,
  karma: 40,
  title: { en: "Digital footprint", fr: "Empreinte numérique" },
  description: {
    en: "The trail you leave online — and how to make it smaller.",
    fr: "Les traces que tu laisses en ligne — et comment les réduire."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Did you know — and this is a real number, I checked — every time you click, post, sign up, or simply exist online, you leave a tiny trail?", fr: "Le sais-tu — et c'est un vrai chiffre, j'ai vérifié — à chaque clic, post, inscription ou simple existence en ligne, tu laisses une petite trace ?" },
        { en: "That trail is your *digital footprint*. Some of it was your idea. A lot of it was, frankly, not.", fr: "Cette trace, c'est ton *empreinte numérique*. Une partie venait de toi. Une grosse partie, honnêtement, pas du tout." }
      ],
      choices: [{ label: { en: "What's in it?", fr: "Qu'est-ce qu'il y a dedans ?" }, next: "active" }]
    },
    active: {
      bot: [
        { en: "Two flavors of footprint.", fr: "Deux types d'empreinte." },
        { en: "✍️ *Active* — things you posted on purpose. Tweets, photos, comments, dating profiles, that one blog you forgot.", fr: "✍️ *Active* — ce que tu as posté volontairement. Tweets, photos, commentaires, profils de rencontre, ce blog que tu as oublié." },
        { en: "🛰️ *Passive* — things collected about you without you noticing. Cookies, location data, every \"accept all\" you clicked.", fr: "🛰️ *Passive* — ce que d'autres collectent à ton insu. Cookies, position, chaque \"accepter tout\" cliqué sans lire." }
      ],
      next: "stalk"
    },
    stalk: {
      bot: [
        { en: "Try this — search your full name, in quotes, on Google. Then on Bing. Then on DuckDuckGo.", fr: "Essaie : cherche ton nom complet entre guillemets sur Google. Puis sur Bing. Puis sur DuckDuckGo." },
        { en: "Add your city. Your old school. Your job. Be your own stalker for ten minutes.", fr: "Ajoute ta ville. Ton ancienne école. Ton boulot. Sois ton propre détective pendant 10 minutes." },
        { en: "What you find — anyone can find.", fr: "Ce que tu trouves — n'importe qui peut le trouver." }
      ],
      next: "why"
    },
    why: {
      bot: [
        { en: "Why care? Three reasons:", fr: "Pourquoi s'en soucier ? Trois raisons :" },
        { en: "🎯 Scammers use your footprint to write convincing phishing messages.", fr: "🎯 Les arnaqueurs s'en servent pour rédiger des messages crédibles." },
        { en: "🕵️ Strangers (employers, dates, the curious) build a story of you in five clicks.", fr: "🕵️ Des inconnus (recruteurs, dates, curieux) bâtissent une image de toi en cinq clics." },
        { en: "🏚️ Some of it is wildly out of date or wrong — and represents you anyway.", fr: "🏚️ Certaines infos sont obsolètes ou fausses — et te représentent quand même." }
      ],
      next: "actions"
    },
    actions: {
      bot: [
        { en: "Three concrete moves:", fr: "Trois actions concrètes :" },
        { en: "1. *Delete what you can.* Old social accounts, ancient forum profiles, abandoned dating apps.", fr: "1. *Supprime ce que tu peux.* Vieux comptes sociaux, profils de forums anciens, applis de rencontre dormantes." },
        { en: "2. *Lock what you keep.* Switch socials to private. Limit who sees old posts.", fr: "2. *Verrouille ce que tu gardes.* Passe en privé. Limite qui voit tes vieux posts." },
        { en: "3. *Search-and-correct.* If you find old wrong info, contact the site to remove or update it. Most will.", fr: "3. *Cherche et corrige.* Une info fausse ou obsolète ? Contacte le site pour la retirer ou la mettre à jour. La plupart le font." }
      ],
      next: "gdpr"
    },
    gdpr: {
      bot: [
        { en: "If you're in the EU, you have a magic spell: *right to be forgotten*. You can demand sites delete personal info about you.", fr: "Dans l'UE, tu as une formule magique : le *droit à l'oubli*. Tu peux exiger qu'un site supprime tes infos personnelles." },
        { en: "Google even has a form. You're welcome.", fr: "Google a même un formulaire pour ça. De rien." }
      ],
      choices: [{ label: { en: "I'll do an audit this month", fr: "Je fais le ménage ce mois-ci" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Footprints cannot be erased completely. But they can be made *quiet*. Quiet, per Janet's data, is the goal.", fr: "Les empreintes ne s'effacent pas complètement. Mais elles peuvent devenir *discrètes*. Discret, selon les données de Janet, c'est l'objectif." },
        { en: "Bye for now! 👣", fr: "À très vite ! 👣" }
      ],
      end: true
    }
  }
};
