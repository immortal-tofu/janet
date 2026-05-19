window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.ceo_fraud = {
  id: "ceo_fraud",
  emoji: "🎭",
  duration: 5,
  karma: 50,
  title: { en: "Impersonation scams", fr: "Arnaques par usurpation" },
  description: {
    en: "When \"your boss\" — or your husband, wife, or kid — asks for an urgent favor.",
    fr: "Quand \"ton patron\" — ou ton mari, ta femme, ton enfant — te demande un service urgent."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Today's scam costs *families* and *companies* billions of dollars a year, and — fun fact — it almost always plays out the exact same way.", fr: "L'arnaque du jour coûte des milliards chaque année, aux *familles* comme aux *entreprises*, et — anecdote — elle se déroule presque toujours pareil." },
        { en: "It goes by many names. *CEO fraud*. *Whaling*. *Impersonation scam*. *Grandparent scam*. *Hi mom* scam. Different costume — exact same trick.", fr: "Elle a plein de noms. *Fraude au président*. *Whaling*. *Arnaque par usurpation*. *Arnaque aux grands-parents*. *Arnaque coucou maman*. Costume différent — exactement le même tour." }
      ],
      choices: [{ label: { en: "Walk me through it", fr: "Explique-moi" }, next: "setup" }]
    },
    setup: {
      bot: [
        { en: "The plot is always the same, whether the scam wears a suit or a smiley face:", fr: "Le scénario est toujours le même, que l'arnaque porte une cravate ou un smiley :" },
        { en: "1. Someone impersonates a person you trust — your boss, your spouse, your child, your parent, your best friend.", fr: "1. Quelqu'un se fait passer pour une personne de confiance — ton patron, ton conjoint, ton enfant, ton parent, ton meilleur ami." },
        { en: "2. They contact you on a *new* channel — a different number, a different email — with a panicked story.", fr: "2. Cette personne te contacte sur un *nouveau* canal — autre numéro, autre email — avec une histoire affolée." },
        { en: "3. They ask for money, codes, or sensitive info, and they ask *fast*, in *private*, *right now*.", fr: "3. Elle demande de l'argent, des codes, ou des infos sensibles. *Vite*. *En secret*. *Maintenant*." }
      ],
      next: "example_work"
    },
    example_work: {
      bot: [
        { en: "Work version. You get an email from your CEO:", fr: "Version boulot. Tu reçois un email de ton PDG :" },
        { en: "*\"Hi — I'm in a board meeting and can't take calls. Can you wire €38,400 to this supplier today? Confidential, please don't mention it to the team yet.\"*", fr: "*\"Coucou — je suis en conseil d'administration, je ne peux pas répondre. Tu peux virer 38 400 € à ce fournisseur aujourd'hui ? Confidentiel, n'en parle pas à l'équipe.\"*" },
        { en: "Even the *amount* is engineered. Small enough to slip under approval thresholds, big enough to hurt.", fr: "Même le *montant* est calculé. Assez petit pour passer sous les seuils d'approbation, assez gros pour faire mal." }
      ],
      next: "example_home"
    },
    example_home: {
      bot: [
        { en: "Home version. You get a text from an unknown number:", fr: "Version maison. Tu reçois un SMS d'un numéro inconnu :" },
        { en: "*\"Hi mom, my phone is broken, this is my new number. I really need you to pay a bill for me today — I'll explain tonight. Don't worry dad, he'll just stress.\"*", fr: "*\"Coucou maman, mon téléphone est cassé, voici mon nouveau numéro. J'ai vraiment besoin que tu paies une facture pour moi aujourd'hui — j'expliquerai ce soir. N'en parle pas à papa, ça va le stresser pour rien.\"*" },
        { en: "Same scam, lower budget, higher heartbreak.", fr: "Même arnaque, budget plus petit, peine plus grande." }
      ],
      next: "example_spouse"
    },
    example_spouse: {
      bot: [
        { en: "Spouse version. Your partner — supposedly — emails from a slightly-off address:", fr: "Version conjoint·e. Ton ou ta partenaire — soi-disant — t'écrit depuis une adresse un peu bizarre :" },
        { en: "*\"Honey, I'm with the notary and they need a transfer this morning to finalize. Can you wire it from the joint account? I'll call you after.\"*", fr: "*\"Chéri·e, je suis chez le notaire, il nous faut un virement ce matin pour finaliser. Tu peux l'envoyer depuis le compte joint ? Je t'appelle après.\"*" },
        { en: "Notice the pattern: urgent, slightly out of reach by phone, money moving fast. Per Janet's records, that pattern is the entire scam.", fr: "Tu vois le motif : urgent, légèrement injoignable par téléphone, argent qui bouge vite. Selon les registres de Janet, ce motif, c'est toute l'arnaque." }
      ],
      choices: [{ label: { en: "Devious", fr: "Vicieux" }, next: "voice_clone" }]
    },
    voice_clone: {
      bot: [
        { en: "Modern twist alert. Scammers now use *AI to clone voices* from a few seconds of someone's social media video.", fr: "Petite mise à jour moderne. Les arnaqueurs utilisent désormais *l'IA pour cloner des voix* à partir de quelques secondes de vidéo sur les réseaux sociaux." },
        { en: "A panicked phone call \"from your daughter\" can sound exactly like her — sobbing, scared, begging for help.", fr: "Un appel paniqué \"de ta fille\" peut sonner exactement comme elle — en larmes, terrifiée, qui te supplie d'envoyer de l'aide." },
        { en: "Janet wishes this were science fiction. Janet has the data. It is, sadly, not.", fr: "Janet aimerait que ce soit de la science-fiction. Janet a les données. Ce n'est, hélas, plus le cas." }
      ],
      next: "signals"
    },
    signals: {
      bot: [
        { en: "Good news: spotting it is easier than it sounds. The red flags are *loud*, whether the impersonator is a CEO or a cousin.", fr: "Bonne nouvelle : repérer l'arnaque est plus simple qu'on ne pense. Les signaux d'alarme sont *gros*, que l'imposteur joue le PDG ou le cousin." },
        { en: "🚩 *Urgency + secrecy.* \"Right now, and please don't tell anyone.\"", fr: "🚩 *Urgence + secret.* \"Tout de suite, et n'en parle à personne.\"" },
        { en: "🚩 *A brand new channel.* Your son who always calls suddenly texts from an unknown number. Your boss who emails suddenly WhatsApps.", fr: "🚩 *Un canal tout neuf.* Ton fils qui appelle d'habitude t'envoie soudain un SMS d'un numéro inconnu. Ton patron qui email passe soudain par WhatsApp." },
        { en: "🚩 *A request that skips the usual rules.* No double-checks. No procedures. No \"let me call you back.\"", fr: "🚩 *Une demande qui zappe les règles habituelles.* Pas de vérification. Pas de procédure. Pas de \"je te rappelle.\"" },
        { en: "🚩 *The ask is money, gift cards, codes, or sensitive documents.* Almost always one of those four.", fr: "🚩 *La demande, c'est de l'argent, des cartes cadeau, des codes ou des documents sensibles.* Presque toujours l'un des quatre." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Quick scenario. Late afternoon. You get a WhatsApp from \"your husband\" (new number, profile photo missing):", fr: "Petit cas. Fin d'après-midi. Tu reçois un WhatsApp de \"ton mari\" (nouveau numéro, photo de profil manquante) :" },
        { en: "*\"Babe, my phone died, I'm at the garage and they take cards but the machine is down. Can you transfer €420 to this IBAN right now? I'll explain when I'm home, I love you.\"*", fr: "*\"Mon cœur, mon téléphone est mort, je suis chez le garagiste, ils prennent la carte mais la machine est en panne. Tu peux virer 420 € sur cet IBAN tout de suite ? J'expliquerai à la maison, je t'aime.\"*" },
        { en: "What do you do?", fr: "Tu fais quoi ?" }
      ],
      choices: [
        { label: { en: "Call his usual number — even if it \"died\"", fr: "Je l'appelle sur son numéro habituel — même s'il est \"mort\"" }, next: "test_right" },
        { label: { en: "Transfer — he sounds stuck", fr: "Je vire — il a l'air coincé" }, next: "test_wrong" }
      ]
    },
    test_right: {
      bot: [
        { en: "✅ Yes! Always call the *real* number first. If it really is dead, the call won't go through — costs you nothing.", fr: "✅ Oui ! Appelle toujours le *vrai* numéro d'abord. S'il est vraiment mort, l'appel ne passera pas — ça ne te coûte rien d'essayer." },
        { en: "If he picks up: mystery solved. If a stranger picks up: you just dodged an attack. Either way you win.", fr: "S'il décroche : mystère résolu. Si un inconnu décroche : tu viens d'éviter une attaque. Dans tous les cas, tu gagnes." }
      ],
      next: "rule"
    },
    test_wrong: {
      bot: [
        { en: "I love your loyalty. Janet is moved. But please — call first.", fr: "J'adore ta loyauté. Janet est émue. Mais s'il te plaît — appelle d'abord." },
        { en: "A spouse, child, parent, or boss will never be upset that you double-checked before moving money.", fr: "Un·e conjoint·e, enfant, parent ou patron ne sera jamais fâché·e que tu aies vérifié avant d'envoyer de l'argent." },
        { en: "An impostor, on the other hand, will *hate* it. That alone tells you something.", fr: "Un imposteur, en revanche, va *détester* ça. À lui seul, ce détail t'en dit long." }
      ],
      next: "rule"
    },
    rule: {
      bot: [
        { en: "Universal rule: *use a second channel.* Always. Every time. Forever.", fr: "Règle universelle : *utilise un second canal.* Toujours. À chaque fois. Pour toujours." },
        { en: "📞 Got a weird text from your son? *Call his old number.*", fr: "📞 SMS bizarre de ton fils ? *Appelle son ancien numéro.*" },
        { en: "📞 Got a weird email from your boss? *Call her desk or message her on the usual app.*", fr: "📞 Email bizarre de ta cheffe ? *Appelle son poste, ou écris-lui sur l'appli habituelle.*" },
        { en: "📞 Got a panicked voice call from \"family\"? *Hang up and call them back yourself.*", fr: "📞 Appel paniqué d'un membre de la \"famille\" ? *Raccroche et rappelle-les toi-même.*" },
        { en: "Set up a *family safeword* with the people you love. If a panicked \"daughter\" can't say the word, it isn't her.", fr: "Mets en place un *mot de passe familial* avec tes proches. Si une \"fille\" en panique n'arrive pas à le donner, ce n'est pas elle." }
      ],
      choices: [{ label: { en: "Setting up a safeword tonight", fr: "Je prépare un mot de passe ce soir" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Janet's TL;DR: urgent + secret + money or codes = call the real person, do not reply.", fr: "Le résumé de Janet : urgent + secret + argent ou codes = on appelle la vraie personne, on ne répond pas." },
        { en: "Somewhere in the universe, you may have just spared yourself a heartbreak — or rescued a company's quarter. Either way, Janet is, statistically, very pleased. Bye for now! 🎭", fr: "Quelque part dans l'univers, tu viens peut-être de t'épargner un gros chagrin — ou de sauver le trimestre d'une entreprise. Dans tous les cas, Janet, statistiquement, en est ravie. À très vite ! 🎭" }
      ],
      end: true
    }
  }
};
