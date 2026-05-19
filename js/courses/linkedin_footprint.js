window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.linkedin_footprint = {
  id: "linkedin_footprint",
  emoji: "💼",
  duration: 4,
  karma: 40,
  title: { en: "Your LinkedIn trail", fr: "Ton empreinte LinkedIn" },
  description: {
    en: "Why your CV is a scammer's favorite reading material.",
    fr: "Pourquoi ton CV est la lecture préférée des arnaqueurs."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with what is — per my classifications — the most paradoxical social network ever invented.", fr: "Salut ! C'est Janet, avec — selon mes classifications — le réseau social le plus paradoxal jamais inventé." },
        { en: "LinkedIn. Simultaneously the most useful and the most dangerous one.", fr: "LinkedIn. À la fois le plus utile et le plus dangereux." },
        { en: "Useful, because it finds you jobs. Dangerous, because it's a public CV with your manager's name printed on it.", fr: "Utile, parce qu'il te trouve des jobs. Dangereux, parce que c'est un CV public avec le nom de ta cheffe imprimé dessus." }
      ],
      choices: [{ label: { en: "I never thought of it that way", fr: "Je n'avais jamais vu ça comme ça" }, next: "info" }]
    },
    info: {
      bot: [
        { en: "From your LinkedIn profile, a scammer can learn in 60 seconds:", fr: "Sur ta page LinkedIn, un arnaqueur apprend en 60 secondes :" },
        { en: "👤 Your full name and current employer.", fr: "👤 Ton nom complet et ton employeur." },
        { en: "👔 Your boss's name (\"[name] reports to [name]\").", fr: "👔 Le nom de ta cheffe (\"[nom] est rattaché à [nom]\")." },
        { en: "🏢 Names of your colleagues and your team's structure.", fr: "🏢 Le nom de tes collègues et la structure de ton équipe." },
        { en: "📍 Where you work, your specialty, your tools.", fr: "📍 Où tu bosses, ta spécialité, tes outils." }
      ],
      next: "use"
    },
    use: {
      bot: [
        { en: "Now imagine that scammer sending you a perfectly written email signed by your boss, on the project you actually work on. Convincing, no?", fr: "Imagine maintenant que l'arnaqueur t'envoie un email parfaitement rédigé, signé de ta cheffe, sur le projet sur lequel tu bosses réellement. Convaincant, non ?" }
      ],
      next: "balance"
    },
    balance: {
      bot: [
        { en: "I'm not saying delete LinkedIn. I'm saying — be a little choosier.", fr: "Je ne te dis pas de supprimer LinkedIn. Je dis — sois un peu plus sélectif·ve." }
      ],
      next: "tips"
    },
    tips: {
      bot: [
        { en: "Tips that don't hurt your career:", fr: "Conseils sans nuire à ta carrière :" },
        { en: "🔒 *Hide your connections list* (Settings → Visibility). Scammers love this list for impersonation.", fr: "🔒 *Cache ta liste de relations* (Paramètres → Visibilité). Les arnaqueurs adorent cette liste pour l'usurpation." },
        { en: "📧 *Don't list your work email* on the profile.", fr: "📧 *N'affiche pas ton email pro* sur ton profil." },
        { en: "✋ *Be picky with connection requests.* No mutuals + brand-new account = decline.", fr: "✋ *Tri tes demandes de contact.* Aucun lien commun + compte tout neuf = refuse." },
        { en: "📷 *Reverse-image-search a stranger's photo* before connecting. Stock photo = scam.", fr: "📷 *Recherche inversée d'image* avant d'accepter un inconnu. Photo de banque d'images = arnaque." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Scenario: a \"recruiter\" with a generic profile pings you about a dream job. They want to take it to WhatsApp and \"send you the contract.\"", fr: "Cas : un \"recruteur\" au profil générique t'envoie un message pour le job de tes rêves. Il veut basculer sur WhatsApp et te \"transmettre le contrat\"." }
      ],
      choices: [
        { label: { en: "Check their company first", fr: "Je vérifie l'entreprise d'abord" }, next: "test_good" },
        { label: { en: "Switch to WhatsApp", fr: "Je passe sur WhatsApp" }, next: "test_bad" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Smart. Search the company's actual careers page. If the job isn't listed — that's your answer.", fr: "✅ Bien vu. Cherche la vraie page carrière de l'entreprise. Si l'offre n'y est pas, voilà ta réponse." },
        { en: "Real recruiters can also be confirmed via the company's LinkedIn page → employees list.", fr: "Tu peux aussi vérifier un vrai recruteur via la page LinkedIn de l'entreprise → employés." }
      ],
      next: "outro"
    },
    test_bad: {
      bot: [
        { en: "Stop! Recruiter scams are huge. They'll later \"need a small fee\" or \"verify your identity\" by collecting documents.", fr: "Stop ! Les arnaques aux recruteurs sont énormes. Ensuite vient \"des frais à régler\" ou \"une vérification d'identité\" via des documents." },
        { en: "Always confirm via the company's official careers page first.", fr: "Vérifie toujours via la page carrière officielle de l'entreprise." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "LinkedIn is genuinely useful. Just remember: every detail you share builds a more convincing impersonation of you. Or your boss.", fr: "LinkedIn est franchement utile. Souviens-toi juste : chaque détail partagé alimente une imitation plus crédible de toi. Ou de ta cheffe." },
        { en: "Janet recommends: be helpful, be findable, but maybe a little mysterious. Bye for now! 💼", fr: "Janet recommande : sois utile, restable trouvable, mais reste un poil mystérieux·se. À très vite ! 💼" }
      ],
      end: true
    }
  }
};
