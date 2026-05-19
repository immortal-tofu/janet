window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.passwords = {
  id: "passwords",
  emoji: "🔑",
  duration: 5,
  karma: 60,
  title: { en: "Passwords", fr: "Mots de passe" },
  description: {
    en: "Why your dog's name isn't doing the job — and what actually works.",
    fr: "Pourquoi le prénom de ton chien ne suffit pas — et ce qui marche vraiment."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Today's topic: passwords. Just thinking about them makes humans tired, according to my data.", fr: "Sujet du jour : les mots de passe. Rien que d'y penser, les humains soupirent, c'est dans mes données." },
        { en: "So, quick question — do you, like most humans, secretly resent your passwords?", fr: "Alors, vraie question : est-ce que tu en veux secrètement à tes mots de passe, comme la plupart des humains ?" }
      ],
      choices: [
        { label: { en: "With every fiber of my being", fr: "De toute mon âme" }, next: "hate_yes" },
        { label: { en: "I actually love them", fr: "Je les adore en fait" }, next: "hate_no" }
      ]
    },
    hate_yes: {
      bot: [
        { en: "Same! Well — I would, if I had fibers. Or a being.", fr: "Pareil ! Enfin… si j'avais une âme." }
      ],
      next: "lesson1"
    },
    hate_no: {
      bot: [
        { en: "Oh! Fascinating! That goes straight into the part of my brain I keep for unusual humans.", fr: "Oh ! Fascinant ! Je range ça tout de suite dans le tiroir \"humains pas comme les autres\"." }
      ],
      next: "lesson1"
    },
    lesson1: {
      bot: [
        { en: "Here's the thing: a *good* password has two enemies.", fr: "Voilà le truc : un *bon* mot de passe a deux ennemis." },
        { en: "1. Computers guessing it really fast.", fr: "1. Les ordinateurs qui le devinent très vite." },
        { en: "2. You forgetting it.", fr: "2. Toi qui l'oublies." },
        { en: "Most people only solve problem 2. That's why we end up with `fluffy123`.", fr: "La plupart des gens ne règlent que le n°2. C'est comme ça qu'on finit avec `medor123`." }
      ],
      choices: [{ label: { en: "Guilty 😅", fr: "Coupable 😅" }, next: "story" }]
    },
    story: {
      bot: [
        { en: "Oh, fun fact straight from my archives — I love a fun fact!", fr: "Oh, une anecdote tout droit sortie de mes archives — j'adore les anecdotes !" },
        { en: "A researcher once got into a major security software company because someone there had set their password to the company's name plus `123`.", fr: "Un chercheur est un jour entré dans une grosse boîte de logiciels de sécurité parce qu'un employé avait mis le nom de la société suivi de `123`." },
        { en: "Per my records, hackers do not need to be geniuses. They just try the obvious things first.", fr: "Selon mes registres, les pirates n'ont pas besoin d'être des génies. Ils essaient simplement les choses évidentes en premier." }
      ],
      next: "rule_length"
    },
    rule_length: {
      bot: [
        { en: "So, the rules. First one is short:", fr: "Donc, les règles. La première est courte :" },
        { en: "👉 *Length beats complexity.* Aim for 12+ characters, ideally more.", fr: "👉 *La longueur, c'est plus fort que la complexité.* Vise au moins 12 caractères, idéalement plus." },
        { en: "A long, weird sentence is much harder to crack than `P@ssw0rd!`.", fr: "Une longue phrase bizarre est beaucoup plus dure à casser que `P@ssw0rd!`." }
      ],
      choices: [{ label: { en: "Long it is", fr: "Long, donc" }, next: "rule_unique" }]
    },
    rule_unique: {
      bot: [
        { en: "👉 *Never reuse the same password.*", fr: "👉 *Ne réutilise jamais le même mot de passe.*" },
        { en: "Companies leak passwords all the time. If you used `SunnyBeach42!` everywhere, one leak unlocks your entire life.", fr: "Les entreprises laissent fuiter des mots de passe en permanence. Si tu utilises `Plage42!` partout, une seule fuite ouvre toute ta vie." },
        { en: "Email, bank, the place where you bought slippers in 2018 — all gone.", fr: "Email, banque, le site où tu as acheté des chaussons en 2018 — tout est compromis." }
      ],
      choices: [{ label: { en: "Yikes", fr: "Aïe" }, next: "rule_manager" }]
    },
    rule_manager: {
      bot: [
        { en: "👉 *Use a password manager.*", fr: "👉 *Utilise un gestionnaire de mots de passe.*" },
        { en: "You are not, biologically, designed to remember 200 unique passwords. I've checked.", fr: "Biologiquement, tu n'es pas faite pour retenir 200 mots de passe uniques. J'ai vérifié." },
        { en: "A password manager invents random ones, stores them, and fills them in for you. You remember *one* big master password, and that's it.", fr: "Un gestionnaire en invente des aléatoires, les stocke, et les remplit pour toi. Tu retiens *un seul* mot de passe maître, et c'est fini." },
        { en: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — pick one. They all beat a sticky note.", fr: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — choisis. Ils sont tous mieux qu'un post-it." }
      ],
      choices: [
        { label: { en: "I'll set one up", fr: "Je vais en installer un" }, next: "praise" },
        { label: { en: "I'll think about it", fr: "Je vais y réfléchir" }, next: "gentle_push" }
      ]
    },
    praise: {
      bot: [
        { en: "Excellent. That's the single most useful 15 minutes you'll spend this year.", fr: "Parfait. C'est le quart d'heure le plus utile que tu passeras cette année." }
      ],
      next: "rule_change"
    },
    gentle_push: {
      bot: [
        { en: "Totally fair. Just promise me one thing — if you keep reusing the same password, *at least* use a unique one for your email.", fr: "Très bien. Promets-moi juste un truc — si tu continues à réutiliser tes mots de passe, *au moins* un unique pour ton email." },
        { en: "Your email is the master key to almost everything else.", fr: "Ton email, c'est la clé maîtresse de presque tout le reste." }
      ],
      next: "rule_change"
    },
    rule_change: {
      bot: [
        { en: "Last one. You may have heard that you should change your passwords every month.", fr: "Dernier point. On t'a peut-être dit qu'il fallait changer ses mots de passe tous les mois." },
        { en: "👉 *That's outdated advice.* Don't do it.", fr: "👉 *C'est un vieux conseil.* Oublie." },
        { en: "When forced to change often, people just go from `Summer2024!` to `Summer2025!`. Worse, not better.", fr: "Forcés de changer, les gens font `Été2024!` → `Été2025!`. C'est pire, pas mieux." },
        { en: "Change a password if you know it leaked. Otherwise, leave the good ones alone.", fr: "Change-le si tu sais qu'il a fuité. Sinon, laisse-le tranquille." }
      ],
      choices: [{ label: { en: "Got it!", fr: "Compris !" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Tiny recap: *long*, *unique*, kept inside a *password manager*. That is, factually, the whole game.", fr: "Petit récap : *long*, *unique*, rangé dans un *gestionnaire*. C'est, factuellement, tout le jeu." },
        { en: "You're doing wonderfully. Janet is proud of you. Bye for now! 💖", fr: "Tu te débrouilles à merveille. Janet est fière de toi. À très vite ! 💖" }
      ],
      end: true
    }
  }
};
