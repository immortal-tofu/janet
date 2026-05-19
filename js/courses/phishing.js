window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.phishing = {
  id: "phishing",
  emoji: "🎣",
  duration: 6,
  karma: 60,
  title: { en: "Phishing", fr: "Phishing" },
  description: {
    en: "The #1 way humans get hacked. Let's make sure it's not you.",
    fr: "La méthode n°1 pour pirater des humains. Faisons en sorte que ce ne soit pas toi."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Today's topic is the *most popular* hacking method in the entire universe. According to my data, and I have a lot of data.", fr: "Le sujet du jour, c'est la méthode de piratage la *plus populaire* de tout l'univers. Selon mes données. Et j'en ai beaucoup." },
        { en: "It's called phishing. Pronounced exactly like fishing, because the concept is identical: dangle bait, wait for a bite.", fr: "On appelle ça le phishing. Ça se prononce comme \"fishing\", parce que le concept est identique : on lance un appât, on attend que ça morde." }
      ],
      choices: [{ label: { en: "Ooh, tell me more", fr: "Ooh, raconte" }, next: "stat" }]
    },
    stat: {
      bot: [
        { en: "Roughly *9 out of 10* cyberattacks start with a phishing email.", fr: "Environ *9 cyberattaques sur 10* commencent par un email de phishing." },
        { en: "Not malware. Not zero-days. Not Hollywood typing. Just a friendly-looking email.", fr: "Pas du malware. Pas du zero-day. Pas du tapotage hollywoodien. Juste un email qui a l'air sympa." }
      ],
      next: "anatomy"
    },
    anatomy: {
      bot: [
        { en: "Phishing has three ingredients. Let's break it down.", fr: "Le phishing a trois ingrédients. Décortiquons." },
        { en: "1️⃣ *Someone you trust.* The email looks like it's from your bank, your delivery service, your boss, your mom.", fr: "1️⃣ *Quelqu'un en qui tu as confiance.* L'email a l'air de venir de ta banque, du livreur, de ton patron, de ta maman." },
        { en: "2️⃣ *A reason to panic.* \"Your account will be closed!\" \"Confirm now!\" \"Unusual login!\"", fr: "2️⃣ *Une raison de paniquer.* \"Ton compte va être fermé !\" \"Confirme tout de suite !\" \"Connexion suspecte !\"" },
        { en: "3️⃣ *One urgent click.* A button. A link. A login form. A fake one.", fr: "3️⃣ *Un clic urgent.* Un bouton. Un lien. Un faux formulaire de connexion." }
      ],
      choices: [{ label: { en: "Classic recipe", fr: "Recette classique" }, next: "trick" }]
    },
    trick: {
      bot: [
        { en: "The whole point of the panic is to stop you from thinking.", fr: "Le but de la panique, c'est de t'empêcher de réfléchir." },
        { en: "An email that says \"please respond within 24 hours\" is fine. An email that says \"RESPOND IN 5 MINUTES OR LOSE EVERYTHING\" is almost certainly a scam.", fr: "Un email qui dit \"merci de répondre sous 24h\" est normal. Un email qui hurle \"RÉPONDS EN 5 MIN OU TU PERDS TOUT\" est presque sûrement une arnaque." }
      ],
      next: "quiz_intro"
    },
    quiz_intro: {
      bot: [
        { en: "Alright, mini-quiz! Don't worry, I grade on a very generous curve. (No curve. I just like you.)", fr: "Allez, mini-quiz ! Ne stresse pas, je note avec beaucoup d'indulgence. (Pas de note. Je t'aime bien, c'est tout.)" }
      ],
      next: "q1"
    },
    q1: {
      bot: [
        { en: "Question 1: An email from \"Netflix\" says your account will be canceled in *one hour*. The link goes to `netfllx-billing.com`. What do you do?", fr: "Question 1 : Un email \"Netflix\" t'annonce la fermeture de ton compte d'ici *une heure*. Le lien pointe vers `netfllx-billing.com`. Tu fais quoi ?" }
      ],
      choices: [
        { label: { en: "Click and check", fr: "Je clique pour voir" }, next: "q1_wrong" },
        { label: { en: "Open Netflix's app myself", fr: "J'ouvre l'appli Netflix moi-même" }, next: "q1_right" },
        { label: { en: "Reply asking for proof", fr: "Je réponds pour demander une preuve" }, next: "q1_wrong" }
      ]
    },
    q1_right: {
      bot: [
        { en: "✅ Yes! Go straight to the source, never through the email.", fr: "✅ Bravo ! Va directement à la source, jamais en passant par l'email." },
        { en: "Also: *netfllx-billing.com* has two L's. Classic phishing trick.", fr: "Aussi : *netfllx-billing.com* a deux L. Astuce classique de phishing." }
      ],
      next: "q2"
    },
    q1_wrong: {
      bot: [
        { en: "Oof, that one would have hurt.", fr: "Aïe, celui-là aurait fait mal." },
        { en: "The right move: ignore the link, open the Netflix app directly. If something's wrong, you'll see it there.", fr: "Le bon réflexe : ignorer le lien, ouvrir l'appli Netflix directement. S'il y a vraiment un problème, tu le verras dedans." }
      ],
      next: "q2"
    },
    q2: {
      bot: [
        { en: "Question 2: True or false — if the sender address *looks* right, the email is safe.", fr: "Question 2 : Vrai ou faux — si l'adresse d'expéditeur a l'air correcte, l'email est sûr." }
      ],
      choices: [
        { label: { en: "False", fr: "Faux" }, next: "q2_right" },
        { label: { en: "True", fr: "Vrai" }, next: "q2_wrong" }
      ]
    },
    q2_right: {
      bot: [
        { en: "✅ False indeed. Sender addresses can be forged. It's called email spoofing.", fr: "✅ Faux en effet. Une adresse peut être falsifiée — c'est ce qu'on appelle le *spoofing*." },
        { en: "A real-looking sender lowers your guard. Always check the *content* too: weird urgency, weird links, weird requests.", fr: "Un expéditeur crédible baisse ta garde. Vérifie aussi le *contenu* : urgence bizarre, liens bizarres, demandes bizarres." }
      ],
      next: "q3"
    },
    q2_wrong: {
      bot: [
        { en: "Friendly correction: it's false! 🙃", fr: "Petite correction amicale : c'est faux ! 🙃" },
        { en: "Sender addresses can be faked. Always check the content too, not just the \"From\" line.", fr: "Les adresses peuvent être falsifiées. Vérifie toujours le contenu aussi, pas seulement le champ \"De\"." }
      ],
      next: "q3"
    },
    q3: {
      bot: [
        { en: "Question 3: When are you most likely to fall for a phishing email?", fr: "Question 3 : Quand es-tu le plus susceptible de tomber dans le piège ?" }
      ],
      choices: [
        { label: { en: "Friday at 5pm or weekends", fr: "Vendredi 17h ou le week-end" }, next: "q3_right" },
        { label: { en: "Monday at 9am, fully focused", fr: "Lundi 9h, en pleine forme" }, next: "q3_wrong" }
      ]
    },
    q3_right: {
      bot: [
        { en: "✅ Exactly. Scammers love tired humans.", fr: "✅ Exactement. Les arnaqueurs adorent les humains fatigués." },
        { en: "Weekends, late afternoons, holidays — that's their happy hunting ground.", fr: "Week-ends, fins d'après-midi, vacances — c'est leur terrain de chasse préféré." }
      ],
      next: "oops"
    },
    q3_wrong: {
      bot: [
        { en: "Almost! It's the opposite: scammers strike when you're tired.", fr: "Presque ! C'est l'inverse : ils frappent quand tu es fatigué·e." },
        { en: "Friday 5pm, weekends, holidays — peak phishing hours.", fr: "Vendredi 17h, week-ends, vacances — l'heure de pointe du phishing." }
      ],
      next: "oops"
    },
    oops: {
      bot: [
        { en: "Last one — what if you already clicked something you shouldn't have?", fr: "Dernière question — et si tu as déjà cliqué sur ce qu'il ne fallait pas ?" }
      ],
      choices: [
        { label: { en: "Change my password immediately", fr: "Je change mon mot de passe immédiatement" }, next: "oops_right" },
        { label: { en: "Hope for the best", fr: "Je croise les doigts" }, next: "oops_wrong" }
      ]
    },
    oops_right: {
      bot: [
        { en: "✅ Yes! Speed matters.", fr: "✅ Oui ! La vitesse compte." },
        { en: "Change the password of any account you entered into the fake site. Then enable 2FA. Then warn anyone who might be next.", fr: "Change le mot de passe de chaque compte concerné. Active la 2FA. Préviens qui pourrait être ciblé après toi." }
      ],
      next: "outro"
    },
    oops_wrong: {
      bot: [
        { en: "Hope is lovely but slow. Change your password *first*, then sip your tea.", fr: "L'espoir, c'est mignon mais lent. Change ton mot de passe *d'abord*, ensuite tu bois ton thé." },
        { en: "Then turn on 2FA so it's much harder next time.", fr: "Active ensuite la 2FA pour que ce soit bien plus dur la prochaine fois." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "Three takeaways, neatly arranged:", fr: "Trois choses à retenir, joliment rangées :" },
        { en: "🛑 Slow down whenever you feel rushed.", fr: "🛑 Ralentis chaque fois qu'on te presse." },
        { en: "🔍 Hover links, check addresses, suspect everything.", fr: "🔍 Survole les liens, vérifie les adresses, doute de tout." },
        { en: "📱 Use a second channel — a call, the real app, an in-person check.", fr: "📱 Utilise un second canal — un appel, la vraie appli, une vérification en vrai." },
        { en: "You're going to be very hard to fool. Janet finds that delightful. Bye for now! 🐟", fr: "Tu vas devenir vraiment difficile à piéger. Janet trouve ça merveilleux. À très vite ! 🐟" }
      ],
      end: true
    }
  }
};
