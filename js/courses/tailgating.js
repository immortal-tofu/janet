window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.tailgating = {
  id: "tailgating",
  emoji: "🚪",
  duration: 4,
  karma: 40,
  title: {
    en: "Tailgating",
    fr: "Tailgating",
    es: "Tailgating",
    de: "Tailgating",
    it: "Tailgating",
    da: "Tailgating",
    bg: "Tailgating"
  },
  description: {
    en: "The hack that doesn't need a computer at all.",
    fr: "L'attaque qui n'a même pas besoin d'un ordinateur.",
    es: "El ataque que no necesita ningún ordenador.",
    de: "Der Hack, der gar keinen Computer braucht.",
    it: "L'attacco che non ha bisogno di alcun computer.",
    da: "Det hack, der slet ikke kræver en computer.",
    bg: "Хакът, който изобщо не се нуждае от компютър."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with my favorite kind of security topic: the kind that does not involve computers at all.", fr: "Salut ! C'est Janet, avec mon type préféré de sujet de sécurité : celui qui ne touche aucun ordinateur." },
        { en: "Quick question: have you ever held a door open for someone behind you, just to be polite?", fr: "Petite question : as-tu déjà tenu une porte à quelqu'un derrière toi, juste par politesse ?" }
      ],
      choices: [
        { label: { en: "Of course, always", fr: "Bien sûr, toujours" }, next: "trap" },
        { label: { en: "Almost never", fr: "Presque jamais" }, next: "rare" }
      ]
    },
    trap: {
      bot: [
        { en: "Same — politeness is wonderful. Sadly, attackers love it.", fr: "Pareil — la politesse, c'est merveilleux. Hélas, les attaquants adorent ça." }
      ],
      next: "what"
    },
    rare: {
      bot: [
        { en: "Look at you, defying social convention to stay safe. I respect it.", fr: "Quel·le rebelle, qui défie les conventions sociales pour rester en sécurité. Respect." }
      ],
      next: "what"
    },
    what: {
      bot: [
        { en: "*Tailgating* is when someone follows you through a secured door — and you let them in without realizing.", fr: "Le *tailgating*, c'est quand quelqu'un te suit à travers une porte sécurisée — et tu le laisses entrer sans t'en rendre compte." },
        { en: "No hacking. No phishing. Just a smile and a coffee cup in their hand.", fr: "Pas de piratage. Pas de phishing. Juste un sourire et un café à la main." }
      ],
      next: "scene"
    },
    scene: {
      bot: [
        { en: "Picture it: you badge into your office building. Someone in a delivery uniform, hands full of packages, slips in behind you.", fr: "Imagine : tu badges pour entrer dans ton bureau. Quelqu'un en uniforme de livreur, les bras chargés, s'engouffre derrière toi." },
        { en: "Would you stop them?", fr: "Tu l'arrêtes ?" }
      ],
      choices: [
        { label: { en: "I'd ask them to badge in", fr: "Je lui demande de badger" }, next: "good" },
        { label: { en: "I'd let them through", fr: "Je le laisse passer" }, next: "bad" }
      ]
    },
    good: {
      bot: [
        { en: "✅ Awkward, but heroic. \"Sorry, we have to badge in individually\" is a complete sentence.", fr: "✅ C'est gênant, mais héroïque. \"Désolé, on doit badger chacun·e\" est une phrase complète." }
      ],
      next: "research"
    },
    bad: {
      bot: [
        { en: "I get it. But that uniform was on Amazon for €18. The packages? Empty.", fr: "Je comprends. Mais cet uniforme se trouve sur Amazon à 18 €. Les colis ? Vides." },
        { en: "Once inside, the \"delivery person\" walks past reception and plugs in a sneaky USB device somewhere quiet.", fr: "Une fois à l'intérieur, le \"livreur\" passe la réception et branche une clé USB pirate dans un coin tranquille." }
      ],
      next: "research"
    },
    research: {
      bot: [
        { en: "How does a tailgater know what to wear, who to mention, when to show up?", fr: "Comment un tailgater sait comment s'habiller, qui mentionner, quand venir ?" },
        { en: "Same way as spear phishers: by reading your company's LinkedIn, your team's Twitter, the news. \"Hi, I have a 2pm with Marie in Engineering.\"", fr: "Comme les phishers ciblés : en lisant le LinkedIn de ta boîte, le Twitter de l'équipe, l'actu. \"Bonjour, j'ai un rdv 14h avec Marie de l'ingénierie.\"" }
      ],
      next: "tips"
    },
    tips: {
      bot: [
        { en: "Defenses don't require kung fu:", fr: "La défense ne demande pas de kung-fu :" },
        { en: "🪪 *Badge in solo.* If someone tailgates, point them politely at reception.", fr: "🪪 *Badge seul·e.* Si quelqu'un te suit en tailgating, oriente la personne vers l'accueil, gentiment." },
        { en: "👀 *Notice strangers.* If you don't know them, it's okay to ask who they're visiting.", fr: "👀 *Repère les inconnus.* Si tu ne les connais pas, c'est OK de demander qui ils viennent voir." },
        { en: "🔌 *Don't plug in random USB sticks.* The classic test: drop branded USBs in a parking lot, see how many end up plugged into work laptops. (Spoiler: a lot.)", fr: "🔌 *Ne branche pas une clé USB inconnue.* Test classique : on en sème dans le parking pour voir combien finissent dans les portables pros. (Indice : beaucoup.)" }
      ],
      choices: [{ label: { en: "I'll be politely vigilant", fr: "Je serai poliment vigilant·e" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Questioning a friendly stranger does feel awkward. But \"awkward for 8 seconds\" is, statistically, much better than \"breach for 8 weeks.\"", fr: "Questionner un inconnu sympathique, ça fait un peu honte. Mais \"gêné·e 8 secondes\" vaut, statistiquement, beaucoup mieux que \"compromis 8 semaines\"." },
        { en: "Polite but vigilant. That's the vibe. Bye for now! 🚪", fr: "Poli·e mais vigilant·e. C'est l'esprit. À très vite ! 🚪" }
      ],
      end: true
    }
  }
};
