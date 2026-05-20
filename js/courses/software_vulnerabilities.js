window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.software_vulnerabilities = {
  id: "software_vulnerabilities",
  emoji: "🩹",
  duration: 4,
  karma: 40,
  title: {
    en: "Software updates",
    fr: "Mises à jour",
    es: "Actualizaciones de software",
    de: "Software-Updates",
    it: "Aggiornamenti software",
    da: "Softwareopdateringer",
    bg: "Софтуерни актуализации"
  },
  description: {
    en: "Why \"Update later\" is the most dangerous button on your device.",
    fr: "Pourquoi \"Plus tard\" est le bouton le plus dangereux de ton appareil.",
    es: "Por qué \"Actualizar más tarde\" es el botón más peligroso de tu dispositivo.",
    de: "Warum \"Später aktualisieren\" der gefährlichste Knopf auf deinem Gerät ist.",
    it: "Perché \"Aggiorna più tardi\" è il pulsante più pericoloso del tuo dispositivo.",
    da: "Hvorfor \"Opdater senere\" er den farligste knap på din enhed.",
    bg: "Защо \"Актуализирай по-късно\" е най-опасният бутон на устройството ти."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with a topic that I find, against all odds, kind of romantic.", fr: "Salut ! C'est Janet, avec un sujet que je trouve, contre toute attente, un peu romantique." },
        { en: "Let's talk about *those* notifications. The ones that say \"Update available\" — the ones you have reflexively dismissed approximately 12 times.", fr: "Parlons de *ces* notifications. Celles qui disent \"Mise à jour disponible\" — celles que tu as réflexivement balayées environ 12 fois." }
      ],
      choices: [{ label: { en: "Guilty 🙋", fr: "Coupable 🙋" }, next: "literal_check" }]
    },
    literal_check: {
      bot: [
        { en: "(Janet checked her records: you have not, in fact, been arrested. \"Guilty\" is a feeling. Carrying on.)", fr: "(Janet a consulté ses registres : tu n'as, factuellement, pas été arrêté·e. \"Coupable\" est un sentiment. On continue.)" }
      ],
      next: "why"
    },
    why: {
      bot: [
        { en: "Here's what's really happening.", fr: "Voilà ce qui se passe vraiment." },
        { en: "All software has bugs. Some of those bugs are *vulnerabilities* — bugs an attacker can use to break in.", fr: "Tout logiciel a des bugs. Certains sont des *vulnérabilités* — des bugs qu'un attaquant peut exploiter pour entrer." },
        { en: "When researchers (or the bad guys) find one, the vendor releases a patch. That patch *is* the update.", fr: "Quand des chercheurs (ou des méchants) en trouvent une, l'éditeur publie un correctif. Ce correctif, *c'est* la mise à jour." }
      ],
      next: "race"
    },
    race: {
      bot: [
        { en: "Here's the twist:", fr: "Le rebondissement :" },
        { en: "Once a patch is *public*, attackers know *exactly* what the bug was — and which devices haven't updated yet.", fr: "Une fois le correctif *public*, les attaquants savent *exactement* où était le bug — et quels appareils ne sont pas encore à jour." },
        { en: "So when you postpone an update, you're not skipping the problem. You're entering a race against people who already know the answer.", fr: "Donc reporter une mise à jour, ce n'est pas éviter le problème. C'est entrer dans une course contre des gens qui ont déjà la réponse." }
      ],
      next: "story"
    },
    story: {
      bot: [
        { en: "Many of the biggest attacks in history were powered by vulnerabilities that had been *patched months earlier*.", fr: "Beaucoup des plus grosses attaques de l'histoire reposaient sur des failles *corrigées des mois plus tôt*." },
        { en: "Some hospitals lost millions because someone clicked \"Remind me tomorrow\" three months in a row.", fr: "Des hôpitaux ont perdu des millions parce que quelqu'un a cliqué \"Me le rappeler demain\" trois mois d'affilée." }
      ],
      next: "what"
    },
    what: {
      bot: [
        { en: "What to actually update:", fr: "Ce qu'il faut mettre à jour :" },
        { en: "📱 *Operating system* — iOS, Android, macOS, Windows, Linux. Highest priority.", fr: "📱 *Système d'exploitation* — iOS, Android, macOS, Windows, Linux. Priorité absolue." },
        { en: "🌐 *Browser* — Chrome, Safari, Firefox, Edge. Updated weekly in some cases.", fr: "🌐 *Navigateur* — Chrome, Safari, Firefox, Edge. Mis à jour très souvent." },
        { en: "🧩 *Apps* — especially anything that touches files, messages, or payments.", fr: "🧩 *Applications* — surtout celles qui touchent à des fichiers, messages ou paiements." },
        { en: "🏠 *Router and IoT* — yes, your Wi-Fi box has firmware too. Update once a year.", fr: "🏠 *Routeur et objets connectés* — oui, ta box Wi-Fi a aussi un firmware. Mise à jour annuelle." }
      ],
      next: "auto"
    },
    auto: {
      bot: [
        { en: "My favorite habit: *turn on automatic updates everywhere.*", fr: "Mon habitude préférée : *active les mises à jour automatiques partout.*" },
        { en: "You forget. The phone doesn't. Patches install overnight, you wake up safer.", fr: "Tu oublies. Le téléphone, non. Les correctifs s'installent la nuit, tu te réveilles plus sûr·e." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Test moment: a website says \"Your Flash Player is out of date! Click here to update.\"", fr: "Petit test : un site dit \"Flash Player obsolète ! Cliquez pour mettre à jour.\"" }
      ],
      choices: [
        { label: { en: "Click to update", fr: "Je clique pour mettre à jour" }, next: "test_bad" },
        { label: { en: "Ignore it", fr: "J'ignore" }, next: "test_good" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Excellent. Flash has been *dead since 2020*. Any site offering it is a scam.", fr: "✅ Parfait. Flash est *mort depuis 2020*. Tout site qui le propose est une arnaque." },
        { en: "Rule: *real updates come from your operating system or directly from the app's official source.* Never from a random web pop-up.", fr: "Règle : *les vraies mises à jour viennent du système ou de l'éditeur officiel.* Jamais d'un pop-up web aléatoire." }
      ],
      next: "outro"
    },
    test_bad: {
      bot: [
        { en: "Trap! That's a classic malware delivery method.", fr: "Piège ! C'est un grand classique de la diffusion de malware." },
        { en: "Real updates come from your OS or the app's official source — never from a pop-up on a webpage.", fr: "Les vraies mises à jour viennent du système ou de l'éditeur officiel — jamais d'un pop-up sur une page web." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "Updates are deeply unglamorous. They are also, per Janet's records, the single most effective security tool ever invented.", fr: "Les mises à jour, ce n'est pas glamour du tout. Et pourtant, selon les registres de Janet, c'est l'outil de sécurité le plus efficace jamais inventé." },
        { en: "Schedule them. Automate them. Maybe even love them. Bye for now! 🩹", fr: "Programme-les. Automatise-les. Aime-les, peut-être. À très vite ! 🩹" }
      ],
      end: true
    }
  }
};
