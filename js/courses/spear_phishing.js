window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.spear_phishing = {
  id: "spear_phishing",
  emoji: "🎯",
  duration: 5,
  karma: 60,
  title: { en: "Spear phishing", fr: "Phishing ciblé" },
  description: {
    en: "When the scam is written *just for you*.",
    fr: "Quand l'arnaque est écrite *rien que pour toi*."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the fancy version of phishing.", fr: "Salut ! C'est Janet, avec la version raffinée du phishing." },
        { en: "Regular phishing is a hacker shouting in a crowded room, hoping someone turns around.", fr: "Le phishing classique, c'est un pirate qui crie dans une salle bondée, en espérant qu'on se retourne." },
        { en: "*Spear* phishing is a hacker walking up to you, smiling, and using your name. Politely. Like someone who belongs there.", fr: "Le phishing *ciblé*, c'est un pirate qui s'approche, te sourit et t'appelle par ton prénom. Poliment. Comme quelqu'un qui a le droit d'être là." }
      ],
      choices: [{ label: { en: "Spooky", fr: "Frissons" }, next: "research" }]
    },
    research: {
      bot: [
        { en: "Before they send anything, they research you. LinkedIn, Instagram, Facebook, the local paper, your company's website.", fr: "Avant d'envoyer quoi que ce soit, ils enquêtent. LinkedIn, Instagram, Facebook, le journal local, le site de ton entreprise." },
        { en: "They find out: who your boss is, what project you're on, who you trust, where you vacation.", fr: "Ils découvrent : qui est ton patron, sur quel projet tu bosses, en qui tu as confiance, où tu pars en vacances." },
        { en: "Then the email writes itself.", fr: "Ensuite, l'email s'écrit tout seul." }
      ],
      next: "example_intro"
    },
    example_intro: {
      bot: [
        { en: "Picture this: you get an email that says —", fr: "Imagine : tu reçois un email qui dit —" },
        { en: "*\"Hey, it's Sarah from the Berlin trip. Can you take a look at this doc before the deadline?\"*", fr: "*\"Coucou, c'est Sarah du séjour à Berlin. Tu peux jeter un œil à ce doc avant la deadline ?\"*" },
        { en: "How would you react?", fr: "Tu réagis comment ?" }
      ],
      choices: [
        { label: { en: "Open the doc — Sarah's a friend", fr: "J'ouvre — Sarah, c'est une amie" }, next: "trap" },
        { label: { en: "Text Sarah to confirm", fr: "Je texte Sarah pour vérifier" }, next: "good" }
      ]
    },
    trap: {
      bot: [
        { en: "Aaaand that's exactly what they wanted.", fr: "Et c'est exactement ce qu'ils voulaient." },
        { en: "The \"document\" is a fake login page. The Berlin detail came from your tagged Instagram photo last summer.", fr: "Le \"document\" est une fausse page de connexion. Le détail \"Berlin\" venait de ton Instagram taggué l'été dernier." },
        { en: "Don't beat yourself up — these emails are designed to be irresistible.", fr: "Ne te culpabilise pas — ces emails sont conçus pour être irrésistibles." }
      ],
      next: "lesson"
    },
    good: {
      bot: [
        { en: "💯 Beautiful instinct.", fr: "💯 Réflexe magnifique." },
        { en: "A 10-second text saves you from a 10-month headache.", fr: "Dix secondes de SMS t'épargnent dix mois de galère." }
      ],
      next: "lesson"
    },
    lesson: {
      bot: [
        { en: "Spear phishing red flags often hide *inside* the legitimate-looking parts.", fr: "Les indices du phishing ciblé se cachent souvent *à l'intérieur* des parties qui ont l'air légitimes." },
        { en: "🔎 The sender address: usually *one* letter is off. `m.harris@acme.co` vs `m.harris@acme.com`.", fr: "🔎 L'adresse d'envoi : souvent *une* lettre change. `m.harris@acme.co` vs `m.harris@acme.com`." },
        { en: "🔎 The tone: a little too urgent, a little too casual, just slightly off.", fr: "🔎 Le ton : un peu trop pressant, un peu trop familier, légèrement à côté." },
        { en: "🔎 The ask: a transfer, a password, a \"quick favor\" that bypasses normal channels.", fr: "🔎 La demande : un virement, un mot de passe, un \"petit service\" qui contourne les procédures." }
      ],
      next: "rule"
    },
    rule: {
      bot: [
        { en: "My golden rule for spear phishing: *the more personalized the email, the more you should verify it.*", fr: "Ma règle d'or sur le phishing ciblé : *plus l'email est personnalisé, plus il faut le vérifier.*" },
        { en: "Generic spam is annoying. A perfectly-tailored email about your real project? Treat it as suspicious until proven otherwise.", fr: "Le spam générique, c'est juste pénible. Un email parfait, hyper-précis sur ton vrai projet ? Considère-le suspect jusqu'à preuve du contraire." }
      ],
      choices: [{ label: { en: "Counterintuitive — I like it", fr: "Contre-intuitif — j'aime bien" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "When something feels off, *pick up the phone*. Real Sarah will understand. Fake Sarah will vanish like a sneeze.", fr: "Quand ça sent louche, *décroche ton téléphone*. La vraie Sarah comprendra. La fausse Sarah disparaîtra comme un éternuement." },
        { en: "Be a tiny bit suspicious. According to Janet, it's basically a love language. Bye for now! 🦈", fr: "Sois un peu méfiant·e. Selon Janet, c'est une déclaration d'amour. À très vite ! 🦈" }
      ],
      end: true
    }
  }
};
