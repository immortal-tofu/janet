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
        { en: "Hi there! Janet here, with my favorite kind of security topic: the kind that does not involve computers at all.", fr: "Salut ! C'est Janet, avec mon type préféré de sujet de sécurité : celui qui ne touche aucun ordinateur.", es: "¡Hola! Soy Janet, con mi tipo favorito de tema de seguridad: el que no involucra ordenadores para nada.", de: "Hallo! Hier ist Janet, mit meiner Lieblingsart von Sicherheitsthema: der Art, die überhaupt keine Computer betrifft.", it: "Ciao! Sono Janet, con il mio tipo preferito di argomento di sicurezza: quello che non coinvolge affatto i computer.", da: "Hej! Det er Janet, med min yndlingsslags sikkerhedsemne: den slags, der slet ikke involverer computere.", bg: "Здравей! Аз съм Janet, с любимия ми вид тема за сигурност: онази, която изобщо не включва компютри." },
        { en: "Quick question: have you ever held a door open for someone behind you, just to be polite?", fr: "Petite question : as-tu déjà tenu une porte à quelqu'un derrière toi, juste par politesse ?", es: "Pregunta rápida: ¿alguna vez has sostenido una puerta a alguien detrás de ti, solo por educación?", de: "Kurze Frage: Hast du jemals jemandem hinter dir eine Tür aufgehalten, einfach aus Höflichkeit?", it: "Domanda veloce: hai mai tenuto aperta una porta a qualcuno dietro di te, solo per cortesia?", da: "Hurtigt spørgsmål: har du nogensinde holdt en dør åben for nogen bag dig, bare for at være høflig?", bg: "Бърз въпрос: държала ли си някога вратата на някого зад теб, просто от учтивост?" }
      ],
      choices: [
        { label: { en: "Of course, always", fr: "Bien sûr, toujours", es: "Por supuesto, siempre", de: "Natürlich, immer", it: "Certo, sempre", da: "Selvfølgelig, altid", bg: "Разбира се, винаги" }, next: "trap" },
        { label: { en: "Almost never", fr: "Presque jamais", es: "Casi nunca", de: "Fast nie", it: "Quasi mai", da: "Næsten aldrig", bg: "Почти никога" }, next: "rare" }
      ]
    },
    trap: {
      bot: [
        { en: "Same — politeness is wonderful. Sadly, attackers love it.", fr: "Pareil — la politesse, c'est merveilleux. Hélas, les attaquants adorent ça.", es: "Igual — la educación es maravillosa. Tristemente, a los atacantes les encanta.", de: "Genauso — Höflichkeit ist wunderbar. Leider lieben Angreifer sie.", it: "Anch'io — la cortesia è meravigliosa. Purtroppo, gli attaccanti la adorano.", da: "I lige måde — høflighed er vidunderligt. Desværre elsker angribere det.", bg: "И аз — учтивостта е прекрасна. За съжаление, нападателите я обожават." }
      ],
      next: "what"
    },
    rare: {
      bot: [
        { en: "Look at you, defying social convention to stay safe. I respect it.", fr: "Quel·le rebelle, qui défie les conventions sociales pour rester en sécurité. Respect.", es: "Mírate, desafiando las convenciones sociales para estar a salvo. Lo respeto.", de: "Sieh dich an, wie du soziale Konventionen herausforderst, um sicher zu bleiben. Respekt.", it: "Guarda te, che sfidi le convenzioni sociali per restare al sicuro. Rispetto.", da: "Se dig, der trodser sociale konventioner for at være sikker. Respekt.", bg: "Виж се, нарушаваш социалните конвенции, за да си в безопасност. Уважение." }
      ],
      next: "what"
    },
    what: {
      bot: [
        { en: "*Tailgating* is when someone follows you through a secured door — and you let them in without realizing.", fr: "Le *tailgating*, c'est quand quelqu'un te suit à travers une porte sécurisée — et tu le laisses entrer sans t'en rendre compte.", es: "El *tailgating* es cuando alguien te sigue a través de una puerta segura — y tú le dejas entrar sin darte cuenta.", de: "*Tailgating* ist, wenn dir jemand durch eine gesicherte Tür folgt — und du ihn hereinlässt, ohne es zu merken.", it: "Il *tailgating* è quando qualcuno ti segue attraverso una porta protetta — e tu lo lasci entrare senza rendertene conto.", da: "*Tailgating* er, når nogen følger efter dig gennem en sikret dør — og du lukker dem ind uden at opdage det.", bg: "*Tailgating* е когато някой те следва през защитена врата — и го пускаш да влезе, без да забележиш." },
        { en: "No hacking. No phishing. Just a smile and a coffee cup in their hand.", fr: "Pas de piratage. Pas de phishing. Juste un sourire et un café à la main.", es: "Sin hackeo. Sin phishing. Solo una sonrisa y un café en la mano.", de: "Kein Hacking. Kein Phishing. Nur ein Lächeln und ein Kaffeebecher in der Hand.", it: "Niente hacking. Niente phishing. Solo un sorriso e una tazza di caffè in mano.", da: "Ingen hacking. Intet phishing. Bare et smil og en kaffekop i hånden.", bg: "Никакво хакване. Никакъв phishing. Просто усмивка и чаша кафе в ръка." }
      ],
      next: "scene"
    },
    scene: {
      bot: [
        { en: "Picture it: you badge into your office building. Someone in a delivery uniform, hands full of packages, slips in behind you.", fr: "Imagine : tu badges pour entrer dans ton bureau. Quelqu'un en uniforme de livreur, les bras chargés, s'engouffre derrière toi.", es: "Imagínalo: pasas la tarjeta para entrar a tu oficina. Alguien con uniforme de mensajería, los brazos llenos de paquetes, se cuela detrás de ti.", de: "Stell dir vor: Du badgest dich in dein Bürogebäude. Jemand in einer Lieferanten-Uniform, die Arme voller Pakete, schlüpft hinter dir herein.", it: "Immagina: passi il badge per entrare in ufficio. Qualcuno in uniforme da fattorino, le braccia piene di pacchi, si infila dietro di te.", da: "Forestil dig: du scanner dit kort ind i din kontorbygning. En person i kurértøj, armene fulde af pakker, smutter ind bag dig.", bg: "Представи си: чекираш картата си, за да влезеш в офиса. Някой в куриерска униформа, с ръце, пълни с пакети, се промъква зад теб." },
        { en: "Would you stop them?", fr: "Tu l'arrêtes ?", es: "¿Le pararías?", de: "Würdest du sie aufhalten?", it: "Lo fermeresti?", da: "Ville du stoppe vedkommende?", bg: "Би ли го спряла?" }
      ],
      choices: [
        { label: { en: "I'd ask them to badge in", fr: "Je lui demande de badger", es: "Le pediría que pase su tarjeta", de: "Ich würde sie bitten, ihren Ausweis zu nutzen", it: "Gli chiederei di passare il badge", da: "Jeg ville bede dem om at scanne kortet", bg: "Бих го помолила да чекира картата си" }, next: "good" },
        { label: { en: "I'd let them through", fr: "Je le laisse passer", es: "Le dejaría pasar", de: "Ich würde sie durchlassen", it: "Lo lascerei passare", da: "Jeg ville lade dem komme igennem", bg: "Бих го пуснала да мине" }, next: "bad" }
      ]
    },
    good: {
      bot: [
        { en: "✅ Awkward, but heroic. \"Sorry, we have to badge in individually\" is a complete sentence.", fr: "✅ C'est gênant, mais héroïque. \"Désolé, on doit badger chacun·e\" est une phrase complète.", es: "✅ Incómodo, pero heroico. \"Perdona, tenemos que pasar la tarjeta individualmente\" es una frase completa.", de: "✅ Unangenehm, aber heldenhaft. \"Entschuldigung, wir müssen uns einzeln einbadgen\" ist ein vollständiger Satz.", it: "✅ Imbarazzante, ma eroico. \"Scusa, dobbiamo passare il badge individualmente\" è una frase completa.", da: "✅ Akavet, men heroisk. \"Beklager, vi skal scanne kortet individuelt\" er en hel sætning.", bg: "✅ Неловко, но героично. \"Извинявай, трябва да чекираме картите си индивидуално\" е цяло изречение." }
      ],
      next: "research"
    },
    bad: {
      bot: [
        { en: "I get it. But that uniform was on Amazon for €18. The packages? Empty.", fr: "Je comprends. Mais cet uniforme se trouve sur Amazon à 18 €. Les colis ? Vides.", es: "Lo entiendo. Pero ese uniforme estaba en Amazon por 18 €. ¿Los paquetes? Vacíos.", de: "Verstehe ich. Aber diese Uniform gab's auf Amazon für 18 €. Die Pakete? Leer.", it: "Capisco. Ma quell'uniforme era su Amazon a 18 €. I pacchi? Vuoti.", da: "Jeg forstår det godt. Men den uniform var på Amazon til 18 €. Pakkerne? Tomme.", bg: "Разбирам. Но онази униформа е била в Amazon за 18 €. Пакетите? Празни." },
        { en: "Once inside, the \"delivery person\" walks past reception and plugs in a sneaky USB device somewhere quiet.", fr: "Une fois à l'intérieur, le \"livreur\" passe la réception et branche une clé USB pirate dans un coin tranquille.", es: "Una vez dentro, el \"repartidor\" pasa la recepción y enchufa un USB malicioso en algún rincón tranquilo.", de: "Einmal drinnen, geht der \"Lieferant\" an der Rezeption vorbei und steckt irgendwo in einer ruhigen Ecke ein heimliches USB-Gerät ein.", it: "Una volta dentro, il \"fattorino\" supera la reception e inserisce una chiavetta USB malevola in qualche angolo tranquillo.", da: "Når \"buddet\" er inde, går vedkommende forbi receptionen og tilslutter en lusket USB-enhed et stille sted.", bg: "Веднъж вътре, \"куриерът\" минава покрай рецепцията и включва коварно USB устройство в някое тихо ъгълче." }
      ],
      next: "research"
    },
    research: {
      bot: [
        { en: "How does a tailgater know what to wear, who to mention, when to show up?", fr: "Comment un tailgater sait comment s'habiller, qui mentionner, quand venir ?", es: "¿Cómo sabe un tailgater qué ponerse, a quién mencionar, cuándo presentarse?", de: "Woher weiß ein Tailgater, was er anziehen, wen er erwähnen, wann er auftauchen soll?", it: "Come fa un tailgater a sapere cosa indossare, chi menzionare, quando presentarsi?", da: "Hvordan ved en tailgater, hvad vedkommende skal have på, hvem der skal nævnes, hvornår vedkommende skal dukke op?", bg: "Как един tailgater знае какво да облече, кого да спомене, кога да се появи?" },
        { en: "Same way as spear phishers: by reading your company's LinkedIn, your team's Twitter, the news. \"Hi, I have a 2pm with Marie in Engineering.\"", fr: "Comme les phishers ciblés : en lisant le LinkedIn de ta boîte, le Twitter de l'équipe, l'actu. \"Bonjour, j'ai un rdv 14h avec Marie de l'ingénierie.\"", es: "De la misma forma que los spear phishers: leyendo el LinkedIn de tu empresa, el Twitter de tu equipo, las noticias. \"Hola, tengo una reunión a las 14h con Marie de Ingeniería.\"", de: "Genauso wie Spear-Phisher: indem sie das LinkedIn deiner Firma, das Twitter deines Teams, die Nachrichten lesen. \"Hallo, ich habe um 14 Uhr einen Termin mit Marie aus dem Engineering.\"", it: "Allo stesso modo dei spear phisher: leggendo il LinkedIn della tua azienda, il Twitter del tuo team, le notizie. \"Salve, ho un appuntamento alle 14 con Marie dell'Ingegneria.\"", da: "På samme måde som spear phishers: ved at læse din virksomheds LinkedIn, dit teams Twitter, nyhederne. \"Hej, jeg har et møde kl. 14 med Marie fra Engineering.\"", bg: "По същия начин като spear phishers: като четат LinkedIn на компанията ти, Twitter на екипа ти, новините. \"Здравейте, имам среща в 14 ч. с Marie от Инженерния отдел.\"" }
      ],
      next: "tips"
    },
    tips: {
      bot: [
        { en: "Defenses don't require kung fu:", fr: "La défense ne demande pas de kung-fu :", es: "Las defensas no requieren kung-fu:", de: "Verteidigung erfordert kein Kung-Fu:", it: "Le difese non richiedono kung-fu:", da: "Forsvar kræver ikke kung fu:", bg: "Защитата не изисква кунг-фу:" },
        { en: "🪪 *Badge in solo.* If someone tailgates, point them politely at reception.", fr: "🪪 *Badge seul·e.* Si quelqu'un te suit en tailgating, oriente la personne vers l'accueil, gentiment.", es: "🪪 *Pasa la tarjeta tú sola.* Si alguien hace tailgating, oriéntale educadamente a recepción.", de: "🪪 *Badge dich allein ein.* Wenn jemand Tailgating macht, verweise die Person höflich an die Rezeption.", it: "🪪 *Passa il badge da sola.* Se qualcuno fa tailgating, indirizzalo gentilmente alla reception.", da: "🪪 *Scan kortet alene.* Hvis nogen tailgater, peg dem høfligt mod receptionen.", bg: "🪪 *Чекирай се сама.* Ако някой прави tailgating, насочи го учтиво към рецепцията." },
        { en: "👀 *Notice strangers.* If you don't know them, it's okay to ask who they're visiting.", fr: "👀 *Repère les inconnus.* Si tu ne les connais pas, c'est OK de demander qui ils viennent voir.", es: "👀 *Fíjate en los desconocidos.* Si no los conoces, está bien preguntar a quién vienen a ver.", de: "👀 *Achte auf Fremde.* Wenn du sie nicht kennst, ist es okay zu fragen, wen sie besuchen.", it: "👀 *Nota gli sconosciuti.* Se non li conosci, va bene chiedere chi sono venuti a trovare.", da: "👀 *Læg mærke til fremmede.* Hvis du ikke kender dem, er det okay at spørge, hvem de besøger.", bg: "👀 *Забелязвай непознатите.* Ако не ги познаваш, нормално е да попиташ кого посещават." },
        { en: "🔌 *Don't plug in random USB sticks.* The classic test: drop branded USBs in a parking lot, see how many end up plugged into work laptops. (Spoiler: a lot.)", fr: "🔌 *Ne branche pas une clé USB inconnue.* Test classique : on en sème dans le parking pour voir combien finissent dans les portables pros. (Indice : beaucoup.)", es: "🔌 *No conectes USBs aleatorios.* La prueba clásica: dejar USBs con logo en un aparcamiento y ver cuántos acaban enchufados en portátiles del trabajo. (Spoiler: muchísimos.)", de: "🔌 *Steck keine fremden USB-Sticks ein.* Der klassische Test: gebrandete USB-Sticks auf einem Parkplatz auslegen und sehen, wie viele in Arbeitslaptops landen. (Spoiler: viele.)", it: "🔌 *Non collegare chiavette USB sconosciute.* Il test classico: lasciare USB con logo in un parcheggio per vedere quante finiscono nei portatili aziendali. (Spoiler: tante.)", da: "🔌 *Tilslut ikke tilfældige USB-stik.* Den klassiske test: smid USB-stik med logo på en parkeringsplads, og se hvor mange der ender i arbejdscomputere. (Spoiler: mange.)", bg: "🔌 *Не включвай случайни USB флашки.* Класическият тест: пускат брандирани USB-та на паркинг и гледат колко завършват включени в служебни лаптопи. (Спойлер: много.)" }
      ],
      choices: [{ label: { en: "I'll be politely vigilant", fr: "Je serai poliment vigilant·e", es: "Seré educadamente vigilante", de: "Ich werde höflich wachsam sein", it: "Sarò gentilmente vigile", da: "Jeg vil være høfligt årvågen", bg: "Ще бъда учтиво бдителна" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Questioning a friendly stranger does feel awkward. But \"awkward for 8 seconds\" is, statistically, much better than \"breach for 8 weeks.\"", fr: "Questionner un inconnu sympathique, ça fait un peu honte. Mais \"gêné·e 8 secondes\" vaut, statistiquement, beaucoup mieux que \"compromis 8 semaines\".", es: "Cuestionar a un desconocido amable se siente incómodo. Pero \"incómoda 8 segundos\" es, estadísticamente, mucho mejor que \"comprometida 8 semanas\".", de: "Einen freundlichen Fremden zu hinterfragen, fühlt sich unangenehm an. Aber \"8 Sekunden unangenehm\" ist statistisch viel besser als \"8 Wochen Sicherheitsvorfall\".", it: "Mettere in dubbio uno sconosciuto cordiale è imbarazzante. Ma \"imbarazzata per 8 secondi\" è, statisticamente, molto meglio di \"compromessa per 8 settimane\".", da: "At stille spørgsmål til en venlig fremmed føles akavet. Men \"akavet i 8 sekunder\" er, statistisk set, meget bedre end \"brud i 8 uger\".", bg: "Да разпиташ дружелюбен непознат е неловко. Но \"неловко 8 секунди\" е, статистически, много по-добре от \"пробив за 8 седмици\"." },
        { en: "Polite but vigilant. That's the vibe. Bye for now! 🚪", fr: "Poli·e mais vigilant·e. C'est l'esprit. À très vite ! 🚪", es: "Educada pero vigilante. Esa es la vibra. ¡Hasta pronto! 🚪", de: "Höflich, aber wachsam. Das ist die Stimmung. Bis bald! 🚪", it: "Gentile ma vigile. Questo è lo spirito. A presto! 🚪", da: "Høflig, men årvågen. Det er stemningen. Vi ses! 🚪", bg: "Учтива, но бдителна. Това е настроението. До скоро! 🚪" }
      ],
      end: true
    }
  }
};
