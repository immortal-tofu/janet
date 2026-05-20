window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.ransomware = {
  id: "ransomware",
  emoji: "💰",
  duration: 5,
  karma: 50,
  title: {
    en: "Ransomware",
    fr: "Rançongiciels",
    es: "Ransomware",
    de: "Erpressersoftware",
    it: "Ransomware",
    da: "Ransomware",
    bg: "Ransomware"
  },
  description: {
    en: "When all your files turn into a hostage situation.",
    fr: "Quand tous tes fichiers deviennent des otages.",
    es: "Cuando todos tus archivos se convierten en una toma de rehenes.",
    de: "Wenn all deine Dateien zu Geiseln werden.",
    it: "Quando tutti i tuoi file diventano ostaggi.",
    da: "Når alle dine filer bliver taget som gidsler.",
    bg: "Когато всичките ти файлове стават заложници."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the malware that has, factually, the most theatrical flair.", fr: "Salut ! C'est Janet, avec le malware qui a, factuellement, le plus de panache théâtral." },
        { en: "Ransomware encrypts every file on your device, then displays one large dramatic message: *Pay X bitcoin or your files are gone forever.*", fr: "Le rançongiciel chiffre tous tes fichiers, puis affiche un grand message dramatique : *Paie X bitcoins ou tes fichiers sont perdus à jamais.*" },
        { en: "It is essentially a digital villain monologue. Janet finds it almost funny. Almost.", fr: "C'est en gros un monologue de méchant numérique. Janet trouve ça presque drôle. Presque." }
      ],
      choices: [{ label: { en: "Yikes", fr: "Aïe" }, next: "who" }]
    },
    who: {
      bot: [
        { en: "It used to target big organizations only. Hospitals, schools, factories, city governments.", fr: "Avant, ça ne visait que les grosses structures. Hôpitaux, écoles, usines, mairies." },
        { en: "Now? Anyone with files worth more than the ransom — which, if you have a decade of family photos, is *you*.", fr: "Aujourd'hui ? Toute personne dont les fichiers valent plus que la rançon — donc, si tu as 10 ans de photos de famille, *toi*." }
      ],
      next: "lifecycle"
    },
    lifecycle: {
      bot: [
        { en: "It usually goes like this:", fr: "Le scénario typique :" },
        { en: "1. You open a malicious attachment or click a sketchy link.", fr: "1. Tu ouvres une pièce jointe piégée ou tu cliques sur un lien douteux." },
        { en: "2. The malware silently encrypts your files (sometimes over days).", fr: "2. Le malware chiffre tes fichiers en silence (parfois sur plusieurs jours)." },
        { en: "3. *Then* it announces itself with a ransom screen.", fr: "3. *Ensuite* il se manifeste avec un écran de rançon." }
      ],
      next: "pay"
    },
    pay: {
      bot: [
        { en: "Should you pay? The honest answer: probably not.", fr: "Faut-il payer ? Honnêtement : probablement pas." },
        { en: "Many victims pay and *still* don't get their files back. Paying also funds the next attack.", fr: "Beaucoup de victimes paient et *quand même*, ne récupèrent rien. Et payer finance la prochaine attaque." }
      ],
      choices: [{ label: { en: "So what saves me?", fr: "Qu'est-ce qui me sauve, alors ?" }, next: "backup" }]
    },
    backup: {
      bot: [
        { en: "*Backups.* Backups, backups, backups.", fr: "*Les sauvegardes.* Sauvegardes, sauvegardes, sauvegardes." },
        { en: "If your files exist in two places, ransomware becomes a bad afternoon, not a tragedy.", fr: "Si tes fichiers existent à deux endroits, un rançongiciel devient un mauvais après-midi, pas une tragédie." }
      ],
      next: "rule321"
    },
    rule321: {
      bot: [
        { en: "There's a classic rule: *3-2-1*.", fr: "Il y a une règle classique : *3-2-1*." },
        { en: "3 copies of your important files.", fr: "3 copies de tes fichiers importants." },
        { en: "2 different kinds of storage.", fr: "2 types de stockage différents." },
        { en: "1 of them *offline* or *offsite* — disconnected from your computer.", fr: "1 d'entre elles *hors ligne* ou *ailleurs* — déconnectée de ton ordi." }
      ],
      next: "practical"
    },
    practical: {
      bot: [
        { en: "Practical version for a regular human:", fr: "Version pratique pour un humain ordinaire :" },
        { en: "💾 An external hard drive, plugged in once a week, then unplugged.", fr: "💾 Un disque dur externe, branché une fois par semaine, puis débranché." },
        { en: "☁️ A cloud backup (iCloud, Google One, Backblaze, Proton Drive).", fr: "☁️ Une sauvegarde dans le cloud (iCloud, Google One, Backblaze, Proton Drive)." },
        { en: "✅ Test it once a year by actually restoring one file. \"Untested backup\" = no backup.", fr: "✅ Teste-la une fois par an en restaurant un fichier. \"Sauvegarde non testée\" = pas de sauvegarde." }
      ],
      next: "prevention"
    },
    prevention: {
      bot: [
        { en: "Plus the usual hygiene: keep your OS updated, don't open weird attachments, avoid cracked software.", fr: "Plus l'hygiène habituelle : système à jour, pas de pièces jointes étranges, pas de logiciels craqués." }
      ],
      choices: [{ label: { en: "Setting up backups today", fr: "Je mets ça en place aujourd'hui" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "You just leveled up. Future-you, restoring photos one day, will say a quiet thank-you. Janet has seen this in 1.8 million simulations.", fr: "Tu viens de monter d'un niveau. Le toi du futur, en restaurant tes photos un jour, dira un petit merci. Janet l'a vu dans 1,8 million de simulations." },
        { en: "Bye for now! 🔒", fr: "À très vite ! 🔒" }
      ],
      end: true
    }
  }
};
