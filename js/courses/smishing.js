window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.smishing = {
  id: "smishing",
  emoji: "💬",
  duration: 4,
  karma: 40,
  title: { en: "Smishing (SMS scams)", fr: "Smishing (arnaques par SMS)" },
  description: {
    en: "Phishing's smaller, faster cousin — delivered to your pocket.",
    fr: "Le petit cousin rapide du phishing — livré dans ta poche."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the world's silliest word.", fr: "Salut ! C'est Janet, avec le mot le plus rigolo du monde." },
        { en: "*Smishing.* It's SMS + phishing. Adorable on the tongue, very annoying in the pocket.", fr: "*Smishing.* C'est SMS + phishing. Mignon à dire, pénible à recevoir." }
      ],
      choices: [{ label: { en: "Why is it so common?", fr: "Pourquoi c'est si fréquent ?" }, next: "why" }]
    },
    why: {
      bot: [
        { en: "Two reasons texts are a scammer's dream:", fr: "Deux raisons qui font des SMS un rêve pour les arnaqueurs :" },
        { en: "1. They feel personal and urgent. Most of us read every SMS within minutes.", fr: "1. Ça paraît personnel et urgent. La plupart d'entre nous lit chaque SMS en quelques minutes." },
        { en: "2. There are no filters. Your email has a spam folder; your SMS app does not.", fr: "2. Il n'y a pas de filtres. Ta boîte mail a un dossier spam ; ton appli SMS, non." }
      ],
      next: "templates"
    },
    templates: {
      bot: [
        { en: "The greatest hits, you've seen them all:", fr: "Les classiques que tu as forcément vus :" },
        { en: "📦 \"Your package couldn't be delivered. Pay €1.49 customs fee here.\"", fr: "📦 \"Votre colis n'a pas pu être livré. Payez 1,49 € de frais de douane ici.\"" },
        { en: "🏦 \"Suspicious login on your bank account. Confirm now.\"", fr: "🏦 \"Connexion suspecte sur votre compte. Confirmez ici.\"" },
        { en: "📨 \"Hi mom/dad, this is my new number. Phone broken.\"", fr: "📨 \"Coucou maman/papa, c'est mon nouveau numéro. Mon téléphone est cassé.\"" },
        { en: "💸 \"You have a tax refund of €283. Click to receive.\"", fr: "💸 \"Vous avez un remboursement d'impôts de 283 €. Cliquez pour recevoir.\"" }
      ],
      next: "tricks"
    },
    tricks: {
      bot: [
        { en: "What makes them work:", fr: "Pourquoi ça marche :" },
        { en: "🎯 *Tiny amount asked.* €1.49 feels too small to fight. They just want your card number.", fr: "🎯 *Petit montant demandé.* 1,49 €, ça paraît dérisoire. Ce qu'ils veulent, c'est ton numéro de carte." },
        { en: "🎯 *Hyper-short link.* `bit.ly/abc` hides where you're actually going.", fr: "🎯 *Lien ultra-court.* `bit.ly/abc` cache vraiment où tu vas." },
        { en: "🎯 *Plausible timing.* You ordered something last week, of course you'd believe a delivery text.", fr: "🎯 *Timing crédible.* Tu as commandé un truc la semaine dernière, normal de croire un SMS de livraison." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Test moment. You get: *\"Hi, this is your daughter, my phone broke, can you send 200€ to this IBAN? I'll explain tonight.\"*", fr: "Petit test. Tu reçois : *\"Coucou maman, c'est ta fille, mon téléphone est cassé, tu peux m'envoyer 200 € sur ce IBAN ? J'expliquerai ce soir.\"*" },
        { en: "What do you do?", fr: "Tu fais quoi ?" }
      ],
      choices: [
        { label: { en: "Call my daughter's real number", fr: "J'appelle le vrai numéro de ma fille" }, next: "test_good" },
        { label: { en: "Reply to ask details", fr: "Je réponds pour avoir des détails" }, next: "test_bad" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Perfect. The \"new number / broken phone / urgent money\" trio is one of the most common scams in the world.", fr: "✅ Parfait. Le trio \"nouveau numéro / téléphone cassé / argent urgent\" est l'une des arnaques les plus répandues au monde." },
        { en: "You just \"turned the tables\" on them — which Janet researched and confirmed does not, in fact, involve actual furniture.", fr: "Tu viens de \"renvoyer l'ascenseur\" à l'arnaqueur — ce qui, Janet a vérifié, ne nécessite pas réellement d'ascenseur." }
      ],
      next: "report"
    },
    test_bad: {
      bot: [
        { en: "Tempting, but every reply confirms your number is active. Don't engage — call the real person directly.", fr: "C'est tentant, mais chaque réponse confirme que ton numéro est actif. N'engage pas — appelle la vraie personne directement." }
      ],
      next: "report"
    },
    report: {
      bot: [
        { en: "Bonus move: *report and delete.*", fr: "Bonus : *signale et supprime.*" },
        { en: "On iOS: long-press → Report Junk. On Android: the three-dot menu → Report spam.", fr: "Sur iOS : appui long → Signaler comme spam. Sur Android : menu trois points → Signaler comme spam." },
        { en: "In France, forward the SMS to *33700*. In the US, forward to *7726* (\"SPAM\").", fr: "En France, transfère le SMS au *33700*. Aux États-Unis, au *7726*." }
      ],
      choices: [{ label: { en: "Filed away", fr: "C'est noté" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Janet's golden rule: *if a text wants you to click, pay, or hurry — politely decline.*", fr: "Règle d'or de Janet : *si un SMS te pousse à cliquer, payer ou te dépêcher — refuse poliment.*" },
        { en: "Bye for now! 📵", fr: "À très vite ! 📵" }
      ],
      end: true
    }
  }
};
