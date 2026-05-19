window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.personal_data = {
  id: "personal_data",
  emoji: "🧬",
  duration: 5,
  karma: 50,
  title: { en: "Personal data", fr: "Données personnelles" },
  description: {
    en: "Knowing what you share — and what's quietly leaking out of you.",
    fr: "Savoir ce que tu partages — et ce qui fuit en douce."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Today's topic: *you*. Or — to be more precise — the version of you that lives on company servers.", fr: "Sujet du jour : *toi*. Plus précisément : la version de toi qui vit sur les serveurs d'entreprises." },
        { en: "What it is, who has it, and how to take a tiny bit of it back. According to Janet, this is the most empowering topic on the menu.", fr: "Ce qu'elle est, qui la possède, et comment en reprendre un petit bout. Selon Janet, c'est le sujet le plus libérateur du menu." }
      ],
      choices: [{ label: { en: "Let's go", fr: "C'est parti" }, next: "what" }]
    },
    what: {
      bot: [
        { en: "\"Personal data\" is anything that points back to you. The obvious stuff:", fr: "Une \"donnée personnelle\", c'est tout ce qui mène à toi. Les évidentes :" },
        { en: "📛 Name, age, email, phone, address.", fr: "📛 Nom, âge, email, téléphone, adresse." },
        { en: "But also a *lot* of less obvious things:", fr: "Mais aussi *plein* de choses moins évidentes :" },
        { en: "📍 Your location history.", fr: "📍 L'historique de tes positions." },
        { en: "🛒 Every product you ever bought online.", fr: "🛒 Chaque produit que tu as commandé en ligne." },
        { en: "🎵 What you searched at 2am last Wednesday.", fr: "🎵 Ce que tu as cherché à 2h du matin mercredi dernier." },
        { en: "👀 How long you stared at a photo before scrolling.", fr: "👀 Le temps passé à regarder une photo avant de scroller." }
      ],
      next: "value"
    },
    value: {
      bot: [
        { en: "All this gets bundled into a *profile* of you. Profiles are bought and sold by data brokers, ad networks, and yes, occasionally scammers.", fr: "Tout ça est assemblé en un *profil* de toi. Les profils s'achètent et se vendent entre courtiers de données, régies pub, et parfois aussi des arnaqueurs." },
        { en: "Each profile is worth pennies on its own. Bundled, they're billions.", fr: "Chaque profil ne vaut que quelques centimes. Empilés, ça pèse des milliards." }
      ],
      next: "ask"
    },
    ask: {
      bot: [
        { en: "Want the practical bits — what to do?", fr: "On passe au pratique — qu'est-ce qu'on fait ?" }
      ],
      choices: [{ label: { en: "Yes please", fr: "Oui s'il te plaît" }, next: "reduce" }]
    },
    reduce: {
      bot: [
        { en: "🪥 *Brush your data teeth* — once a year, do an account audit.", fr: "🪥 *Brossage de données* — une fois par an, fais le ménage." },
        { en: "Delete accounts you no longer use. Many sites have a *Delete account* button buried in settings.", fr: "Supprime les comptes que tu n'utilises plus. Beaucoup de sites ont un bouton *Supprimer mon compte* enterré dans les paramètres." },
        { en: "If they don't, email them — under GDPR (Europe) or CCPA (California) they often have to comply.", fr: "Sinon, écris-leur — RGPD (Europe) ou CCPA (Californie) les obligent souvent à obtempérer." }
      ],
      next: "fake_data"
    },
    fake_data: {
      bot: [
        { en: "🎭 *Lie a little, lovingly.* For low-stakes signups (newsletters, free Wi-Fi, store loyalty cards) — fake names, fake birthdays, dedicated alias emails.", fr: "🎭 *Mens un peu, gentiment.* Pour les inscriptions sans enjeu (newsletters, Wi-Fi gratuit, cartes de fidélité) — pseudo, fausse date de naissance, email-alias." },
        { en: "Apple, Gmail, Firefox Relay, and SimpleLogin can generate burner email aliases.", fr: "Apple, Gmail, Firefox Relay, ou SimpleLogin génèrent des alias jetables." }
      ],
      next: "settings"
    },
    settings: {
      bot: [
        { en: "📵 *Trim app permissions.* Open your phone settings → Permissions. Why does that flashlight app need your contacts?", fr: "📵 *Coupe les permissions d'apps.* Va dans les réglages → Permissions. Pourquoi l'appli lampe-torche a-t-elle besoin de tes contacts ?" },
        { en: "Revoke camera, mic, contacts, location from anything that doesn't *strictly* need them.", fr: "Coupe caméra, micro, contacts, position pour tout ce qui n'en a pas *strictement* besoin." }
      ],
      next: "social"
    },
    social: {
      bot: [
        { en: "📱 *Audit your socials.* Pretend to be a stranger and search yourself. What can a random person learn about you in 5 minutes?", fr: "📱 *Audite tes réseaux.* Fais semblant d'être un inconnu et cherche-toi. Que peut apprendre quelqu'un sur toi en 5 minutes ?" },
        { en: "If the answer includes your home street, workplace, kid's school, holiday dates — consider tightening privacy settings.", fr: "Si la réponse contient ta rue, ton lieu de travail, l'école des enfants, tes dates de vacances — pense à durcir tes paramètres." }
      ],
      choices: [{ label: { en: "Doing that this weekend", fr: "Je fais ça ce week-end" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Perfection is not the goal. The goal is to give scammers *less to work with*.", fr: "Le but n'est pas la perfection. Le but est de donner aux arnaqueurs *moins de matière*." },
        { en: "Each account deleted, each permission revoked = a quieter version of you on the internet. Bye for now, smaller-footprint friend! 🌱", fr: "Chaque compte supprimé, chaque permission coupée = une version plus discrète de toi sur internet. À très vite, empreinte allégée ! 🌱" }
      ],
      end: true
    }
  }
};
