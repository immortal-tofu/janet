window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.on_vacation = {
  id: "on_vacation",
  emoji: "🏖️",
  duration: 4,
  karma: 40,
  title: {
    en: "On vacation",
    fr: "En vacances",
    es: "De vacaciones",
    de: "Im Urlaub",
    it: "In vacanza",
    da: "På ferie",
    bg: "На почивка"
  },
  description: {
    en: "Staying safe with public Wi-Fi, holiday brain, and shareable photos.",
    fr: "Rester sûr·e avec le Wi-Fi public, le cerveau-en-vacances, et les photos à partager.",
    es: "Mantenerse a salvo con Wi-Fi público, mente de vacaciones, y fotos para compartir.",
    de: "Sicher bleiben bei öffentlichem WLAN, Urlaubs-Hirn und teilbaren Fotos.",
    it: "Restare al sicuro tra Wi-Fi pubblico, cervello da vacanza e foto da condividere.",
    da: "Sådan bliver du sikker med offentligt Wi-Fi, feriehjerne og delelige billeder.",
    bg: "Как да си в безопасност с публично Wi-Fi, отпускарски мозък и снимки за споделяне."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with a topic I find genuinely festive.", fr: "Salut ! C'est Janet, avec un sujet que je trouve sincèrement festif." },
        { en: "Vacation. The time when your guard goes down, the wine goes up, and — per my data — scammers throw themselves a little party in your inbox.", fr: "Les vacances. Le moment où ta vigilance baisse, le vin monte, et — selon mes données — les arnaqueurs se font une petite fête dans ta boîte mail." },
        { en: "Let's keep you a tiny bit safer without ruining the mood. Janet hates ruining the mood.", fr: "Restons un peu prudents sans gâcher l'ambiance. Janet déteste gâcher l'ambiance." }
      ],
      choices: [{ label: { en: "Sounds reasonable", fr: "Ça me va" }, next: "wifi" }]
    },
    wifi: {
      bot: [
        { en: "*Public Wi-Fi.* The airport, the hotel, the cute café.", fr: "*Le Wi-Fi public.* L'aéroport, l'hôtel, le café mignon." },
        { en: "Modern websites use HTTPS, so most things are encrypted. But not everything. And the network can still serve you fake pages or push fake updates.", fr: "Aujourd'hui, la plupart des sites sont en HTTPS, donc chiffrés. Mais pas tout. Et un réseau peut servir de fausses pages ou pousser de fausses mises à jour." }
      ],
      next: "wifi_advice"
    },
    wifi_advice: {
      bot: [
        { en: "Two simple habits on public Wi-Fi:", fr: "Deux habitudes simples sur Wi-Fi public :" },
        { en: "📶 *Use mobile data* for anything sensitive (bank, work email). Your 4G/5G is safer than a hotel network.", fr: "📶 *Utilise la 4G/5G* pour ce qui compte (banque, email pro). C'est plus sûr qu'un réseau d'hôtel." },
        { en: "🛡️ *Use a VPN* if you can — it tunnels your traffic so the network can't peek.", fr: "🛡️ *Mets un VPN* si tu peux — ça crée un tunnel pour ton trafic." }
      ],
      next: "evil_twin"
    },
    evil_twin: {
      bot: [
        { en: "Watch out for the *evil twin*: a fake Wi-Fi named like the real one. \"Starbucks_Free\" next to \"Starbucks_FREE_2\".", fr: "Méfie-toi du *jumeau maléfique* : un faux Wi-Fi nommé comme le vrai. \"Starbucks_Free\" à côté de \"Starbucks_FREE_2\"." },
        { en: "If in doubt, ask staff for the actual name.", fr: "En cas de doute, demande au personnel le vrai nom." }
      ],
      next: "photos"
    },
    photos: {
      bot: [
        { en: "Now: *photos*. Beautiful, irresistible, and a treasure trove for thieves.", fr: "Ensuite : *les photos*. Magnifiques, irrésistibles, et une mine d'or pour les cambrioleurs." },
        { en: "Posting \"day 3 in Bali!\" tells everyone *your house is empty*.", fr: "Poster \"jour 3 à Bali !\" dit à tout le monde *que ta maison est vide*." }
      ],
      choices: [{ label: { en: "I never thought of that", fr: "Je n'avais jamais réalisé" }, next: "photo_advice" }]
    },
    photo_advice: {
      bot: [
        { en: "Easy fix: *post after you're home*. Same likes, zero burglary risk.", fr: "Solution simple : *poste une fois rentré·e*. Même nombre de likes, zéro risque." },
        { en: "If you must post live, set your account to *friends only*, and don't tag your hotel.", fr: "Si tu veux poster en direct, passe ton compte en *amis uniquement*, et ne taggue pas l'hôtel." }
      ],
      next: "scams"
    },
    scams: {
      bot: [
        { en: "Final hazard: *vacation scams*. The classics:", fr: "Dernier danger : *les arnaques de voyage*. Les classiques :" },
        { en: "✈️ \"Your flight has been changed, confirm here.\" Always confirm in the airline's app directly.", fr: "✈️ \"Votre vol a changé, confirmez ici.\" Confirme toujours via l'appli officielle de la compagnie." },
        { en: "🏨 \"Hotel asks for credit card details by SMS.\" Real hotels don't.", fr: "🏨 \"L'hôtel te demande ta carte par SMS.\" Les vrais hôtels ne font pas ça." },
        { en: "📞 \"Family in trouble, send money.\" Always call the family member back on their normal number.", fr: "📞 \"Quelqu'un de la famille a un problème, envoie de l'argent.\" Rappelle toujours sur son numéro habituel." }
      ],
      choices: [{ label: { en: "Sticking to mobile data + posting later", fr: "Je reste sur 4G + je poste plus tard" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Have fun. Eat the local pastries. Trust your gut. Janet wishes she could come. Bye for now! ☀️", fr: "Amuse-toi. Mange les pâtisseries locales. Fais confiance à ton instinct. Janet aurait adoré venir. À très vite ! ☀️" }
      ],
      end: true
    }
  }
};
