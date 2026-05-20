window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.mobile_phone = {
  id: "mobile_phone",
  emoji: "📱",
  duration: 5,
  karma: 50,
  title: {
    en: "Your phone",
    fr: "Ton téléphone",
    es: "Tu teléfono",
    de: "Dein Telefon",
    it: "Il tuo telefono",
    da: "Din telefon",
    bg: "Твоят телефон"
  },
  description: {
    en: "Your most personal computer — and your biggest target.",
    fr: "Ton ordinateur le plus intime — et la plus grosse cible.",
    es: "Tu ordenador más personal — y tu mayor blanco.",
    de: "Dein persönlichster Computer — und dein größtes Ziel.",
    it: "Il tuo computer più intimo — e il tuo bersaglio più grande.",
    da: "Din mest personlige computer — og dit største mål.",
    bg: "Най-личният ти компютър — и най-голямата ти мишена."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet." },
        { en: "Take a tiny look at your phone. Well — you're already looking at it. I knew you would be. Per my records, humans look at their phones, on average, 144 times a day.", fr: "Jette un petit coup d'œil à ton téléphone. Enfin — tu le regardes déjà. Je m'en doutais. Selon mes registres, un humain regarde son téléphone en moyenne 144 fois par jour." },
        { en: "It holds your email, your bank, your photos, your messages, your location, your face. It is, factually, a *very* personal computer.", fr: "Il contient ton email, ta banque, tes photos, tes messages, ta position, ton visage. C'est, factuellement, un ordinateur *très* intime." }
      ],
      choices: [{ label: { en: "How do I protect it?", fr: "Comment je le protège ?" }, next: "lock" }]
    },
    lock: {
      bot: [
        { en: "Start with the front door:", fr: "Commence par la porte d'entrée :" },
        { en: "🔢 *Use a 6-digit PIN minimum.* 4 digits = 10,000 guesses. 6 digits = 1,000,000.", fr: "🔢 *PIN à 6 chiffres minimum.* 4 chiffres = 10 000 essais. 6 chiffres = 1 000 000." },
        { en: "👆 Add fingerprint or face unlock so you're not tempted to use `1234`.", fr: "👆 Ajoute empreinte ou reconnaissance faciale pour ne pas être tenté·e par `1234`." },
        { en: "⏱️ *Auto-lock fast.* 30 seconds, not 5 minutes.", fr: "⏱️ *Verrouillage rapide.* 30 secondes, pas 5 minutes." }
      ],
      next: "updates"
    },
    updates: {
      bot: [
        { en: "🆙 *Install updates.* The little red dot in Settings? Tap it tonight.", fr: "🆙 *Installe les mises à jour.* La pastille rouge dans Réglages ? Clique dessus ce soir." },
        { en: "Most phone hacks exploit holes that were *already patched*. You just hadn't updated yet.", fr: "La plupart des piratages exploitent des trous *déjà bouchés* par une mise à jour. Tu ne l'avais juste pas faite." }
      ],
      next: "apps"
    },
    apps: {
      bot: [
        { en: "🏪 *Only install from the official stores.* App Store or Play Store, no \"sideloaded APK from Telegram\" magic.", fr: "🏪 *Installe uniquement depuis les stores officiels.* App Store ou Play Store, pas d'\"APK de Telegram\" magique." },
        { en: "🧹 *Delete apps you don't use.* Each one is a permission, a tracker, a tiny risk.", fr: "🧹 *Supprime les applis inutilisées.* Chacune est une permission, un traceur, un petit risque." },
        { en: "🎚️ *Audit permissions* once. Settings → Privacy. Does that flashlight need your contacts?", fr: "🎚️ *Audite les permissions* une bonne fois. Réglages → Confidentialité. Pourquoi la lampe-torche veut tes contacts ?" }
      ],
      next: "lost"
    },
    lost: {
      bot: [
        { en: "If your phone gets lost or stolen, you need to wipe it remotely. Make sure that's set up *now*, not later.", fr: "Si ton téléphone est perdu ou volé, tu dois pouvoir l'effacer à distance. Active ça *maintenant*, pas plus tard." },
        { en: "📍 iPhone: *Find My iPhone* in iCloud settings.", fr: "📍 iPhone : *Localiser* dans les réglages iCloud." },
        { en: "📍 Android: *Find My Device* in Google settings.", fr: "📍 Android : *Localiser mon appareil* dans les réglages Google." }
      ],
      next: "public"
    },
    public: {
      bot: [
        { en: "Bonus tip: *don't charge your phone from random USB ports* in airports or cafés.", fr: "Bonus : *ne charge pas ton téléphone sur n'importe quel port USB* dans les aéroports ou cafés." },
        { en: "There's a thing called *juice jacking* — a doctored USB port that silently copies your data while charging. Rare but real.", fr: "Il existe un truc appelé *juice jacking* — un port USB piégé qui copie tes données pendant la charge. Rare mais réel." },
        { en: "Use a wall plug, your own cable + a *USB data blocker* (€5), or a portable battery.", fr: "Utilise une prise murale, ton propre câble + un *USB data blocker* (5 €), ou une batterie portable." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Quick test. You're in a café, your phone's at 8%, there's a free USB port on the table.", fr: "Petit test. Tu es dans un café, batterie à 8 %, un port USB est dispo sur la table." }
      ],
      choices: [
        { label: { en: "Plug in, free juice!", fr: "Je branche, l'énergie est gratuite !" }, next: "test_bad" },
        { label: { en: "Use my own wall plug", fr: "J'utilise ma propre prise murale" }, next: "test_good" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Yes! Wall plugs only carry power, no data. Always safer.", fr: "✅ Oui ! Les prises murales transportent du courant, pas de données. Toujours plus sûr." }
      ],
      next: "outro"
    },
    test_bad: {
      bot: [
        { en: "It's *probably* fine, but \"probably\" isn't a security strategy. Wall plug or your own battery is safer.", fr: "C'est *sans doute* OK, mais \"sans doute\" n'est pas une stratégie. Prise murale ou batterie perso, c'est plus sûr." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "Per Janet's data, your phone is, on most days, more sensitive than your laptop. Treat it accordingly.", fr: "Selon les données de Janet, ton téléphone est, la plupart du temps, plus sensible que ton ordi. Traite-le en conséquence." },
        { en: "Bye for now! 📲", fr: "À très vite ! 📲" }
      ],
      end: true
    }
  }
};
