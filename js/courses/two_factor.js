window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.two_factor = {
  id: "two_factor",
  emoji: "✌️",
  duration: 4,
  karma: 50,
  title: { en: "Two-factor auth", fr: "Double authentification" },
  description: {
    en: "The single most powerful upgrade to your online safety.",
    fr: "L'amélioration la plus puissante pour ta sécurité en ligne."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with what is, I have decided, my favorite security topic.", fr: "Salut ! Janet à l'appareil, avec — j'ai décidé — mon sujet de sécurité préféré." },
        { en: "Quick thought experiment: imagine someone steals your house key. Inconvenient.", fr: "Petite expérience de pensée : imagine qu'on te vole ta clé de maison. Embêtant." },
        { en: "Now imagine your door also asks *what's your grandmother's name* before unlocking. The thief, suddenly, has a problem.", fr: "Maintenant imagine que ta porte demande aussi *quel est le prénom de ta grand-mère* avant d'ouvrir. Le voleur, soudainement, a un souci." }
      ],
      choices: [{ label: { en: "Cute analogy", fr: "Joli !" }, next: "intro" }]
    },
    intro: {
      bot: [
        { en: "That second question is what we call *two-factor authentication*. Or 2FA, if you like saving syllables.", fr: "Cette deuxième question, c'est ce qu'on appelle la *double authentification*. Ou 2FA, si tu aimes les acronymes." },
        { en: "Translated: even if someone steals your password, they *still* can't get in.", fr: "Traduction : même si quelqu'un vole ton mot de passe, il ne peut *toujours pas* entrer." }
      ],
      choices: [{ label: { en: "How does it work?", fr: "Ça fonctionne comment ?" }, next: "how" }]
    },
    how: {
      bot: [
        { en: "Three flavors. Listed from least secure to most:", fr: "Trois saveurs. De la moins sûre à la plus sûre :" },
        { en: "📱 *SMS code* — they text you a number. Easy to use. Sadly, also the easiest for hackers to hijack.", fr: "📱 *Code SMS* — on t'envoie un code par texto. Facile, mais aussi le plus facile à détourner pour les pirates." },
        { en: "🪄 *Authenticator app* — an app like Authy, 1Password or Google Authenticator generates a 6-digit code every 30 seconds. Much better.", fr: "🪄 *Application d'authentification* — Authy, 1Password ou Google Authenticator génèrent un code à 6 chiffres toutes les 30 secondes. Bien mieux." },
        { en: "🔑 *Hardware key* — a tiny USB stick (like a YubiKey). You touch it, you're in. Strongest by far.", fr: "🔑 *Clé physique* — une petite clé USB (comme une YubiKey). Tu la touches, c'est validé. Le top du top." }
      ],
      choices: [{ label: { en: "Which should I use?", fr: "Laquelle choisir ?" }, next: "fact_blink" }]
    },
    fact_blink: {
      bot: [
        { en: "(Tiny aside: the average human blinks about *14,400 times a day*. Janet finds that an impressive amount of involuntary maintenance.)", fr: "(Petite parenthèse : un humain cligne des yeux environ *14 400 fois par jour*. Janet trouve ça beaucoup d'entretien involontaire.)" },
        { en: "Anyway! Two-factor auth.", fr: "Bref ! L'authentification à deux facteurs." }
      ],
      next: "advice"
    },
    advice: {
      bot: [
        { en: "Honest answer: anything is better than nothing.", fr: "Honnêtement : tout est mieux que rien." },
        { en: "If SMS is the only option a site gives you — turn it on. Now.", fr: "Si un site ne propose que le SMS — active-le. Tout de suite." },
        { en: "If you can pick an authenticator app, even better.", fr: "Si tu peux prendre une appli d'authentification, encore mieux." },
        { en: "And for your *most important* accounts — your email and your bank — try a hardware key.", fr: "Et pour tes comptes les *plus importants* — email, banque — pense à la clé physique." }
      ],
      next: "sms_warning"
    },
    sms_warning: {
      bot: [
        { en: "Quick warning about SMS: there's a trick called *SIM swapping* where attackers convince your phone provider to transfer your number to *their* SIM.", fr: "Petit avertissement sur les SMS : il existe une technique, le *SIM swapping*, où des attaquants convainquent ton opérateur de transférer ton numéro vers *leur* carte SIM." },
        { en: "Then your codes arrive on their phone, not yours. Spooky.", fr: "Et là, tes codes arrivent sur leur téléphone, pas le tien. Glaçant." },
        { en: "An authenticator app or hardware key avoids that entirely.", fr: "Une appli d'authentification ou une clé physique évite complètement le problème." }
      ],
      choices: [{ label: { en: "Switching to an app then", fr: "Je passe à une appli alors" }, next: "campfire" }]
    },
    campfire: {
      bot: [
        { en: "Smart human.", fr: "Sage décision, humain·e." },
        { en: "Last tip: the *campfire rule*. Scouts say — leave the campsite cleaner than you found it.", fr: "Dernier conseil : la *règle du feu de camp*. Chez les scouts — laisse le campement plus propre qu'à l'arrivée." },
        { en: "Each time you log in to an account, take 30 seconds to turn on 2FA if it isn't already on.", fr: "Chaque fois que tu te connectes à un compte, prends 30 secondes pour activer la 2FA si elle ne l'est pas." },
        { en: "In a few months, your whole digital life will be protected — without ever scheduling a \"security afternoon.\"", fr: "En quelques mois, toute ta vie numérique sera protégée — sans avoir programmé un seul \"après-midi sécurité\"." }
      ],
      choices: [{ label: { en: "I love it", fr: "J'adore" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "If you're picking an order: email first, then bank, then socials, then everything else. That's what Janet recommends.", fr: "Si tu cherches un ordre : email d'abord, puis banque, puis réseaux sociaux, puis le reste. Voilà ce que Janet conseille." },
        { en: "You're about to be very hard to break into. I am, factually, delighted. Bye for now! 🔐", fr: "Tu vas devenir vraiment difficile à forcer. Je suis, factuellement, ravie. À très vite ! 🔐" }
      ],
      end: true
    }
  }
};
