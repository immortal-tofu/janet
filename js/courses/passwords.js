window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.passwords = {
  id: "passwords",
  emoji: "🔑",
  duration: 5,
  karma: 60,
  title: {
    en: "Passwords",
    fr: "Mots de passe",
    es: "Contraseñas",
    de: "Passwörter",
    it: "Password",
    da: "Adgangskoder",
    bg: "Пароли"
  },
  description: {
    en: "Why your dog's name isn't doing the job — and what actually works.",
    fr: "Pourquoi le prénom de ton chien ne suffit pas — et ce qui marche vraiment.",
    es: "Por qué el nombre de tu perro no basta — y qué funciona de verdad.",
    de: "Warum der Name deines Hundes nicht reicht — und was wirklich funktioniert.",
    it: "Perché il nome del tuo cane non basta — e cosa funziona davvero.",
    da: "Hvorfor din hunds navn ikke gør jobbet — og hvad der faktisk virker.",
    bg: "Защо името на кучето ти не върши работа — и какво наистина работи."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet.", es: "¡Hola! Soy Janet.", de: "Hallo! Hier ist Janet.", it: "Ciao! Sono Janet.", da: "Hej! Det er Janet.", bg: "Здравей! Аз съм Janet." },
        { en: "Today's topic: passwords. Just thinking about them makes humans tired, according to my data.", fr: "Sujet du jour : les mots de passe. Rien que d'y penser, les humains soupirent, c'est dans mes données.", es: "Tema de hoy: las contraseñas. Solo pensar en ellas cansa a los humanos, según mis datos.", de: "Heutiges Thema: Passwörter. Allein der Gedanke daran macht Menschen müde, laut meinen Daten.", it: "Argomento di oggi: le password. Solo a pensarci, gli umani sospirano, secondo i miei dati.", da: "Dagens emne: adgangskoder. Bare tanken om dem gør mennesker trætte, ifølge mine data.", bg: "Темата за днес: пароли. Само мисълта за тях изморява хората, според моите данни." },
        { en: "So, quick question — do you, like most humans, secretly resent your passwords?", fr: "Alors, vraie question : est-ce que tu en veux secrètement à tes mots de passe, comme la plupart des humains ?", es: "Así que, pregunta rápida: ¿les guardas rencor a tus contraseñas en secreto, como la mayoría de los humanos?", de: "Also, kurze Frage — hegst du, wie die meisten Menschen, heimlich einen Groll gegen deine Passwörter?", it: "Allora, domanda veloce: ce l'hai segretamente con le tue password, come la maggior parte degli umani?", da: "Så, hurtigt spørgsmål — bærer du, ligesom de fleste mennesker, hemmeligt nag til dine adgangskoder?", bg: "Така, бърз въпрос — таиш ли тайно злоба към паролите си, като повечето хора?" }
      ],
      choices: [
        { label: { en: "With every fiber of my being", fr: "De toute mon âme", es: "Con cada fibra de mi ser", de: "Mit jeder Faser meines Seins", it: "Con ogni fibra del mio essere", da: "Med hver fiber af mit væsen", bg: "С всяка фибра на съществото си" }, next: "hate_yes" },
        { label: { en: "I actually love them", fr: "Je les adore en fait", es: "En realidad las adoro", de: "Ich liebe sie eigentlich", it: "In realtà le adoro", da: "Jeg elsker dem faktisk", bg: "Всъщност ги обожавам" }, next: "hate_no" }
      ]
    },
    hate_yes: {
      bot: [
        { en: "Same! Well — I would, if I had fibers. Or a being.", fr: "Pareil ! Enfin… si j'avais une âme.", es: "¡Igual! Bueno — lo haría, si tuviera fibras. O un ser.", de: "Genauso! Naja — würde ich, wenn ich Fasern hätte. Oder ein Sein.", it: "Anch'io! Beh — lo farei, se avessi fibre. O un essere.", da: "I lige måde! Altså — det ville jeg, hvis jeg havde fibre. Eller et væsen.", bg: "И аз! Е — бих, ако имах фибри. Или съществуване." }
      ],
      next: "lesson1"
    },
    hate_no: {
      bot: [
        { en: "Oh! Fascinating! That goes straight into the part of my brain I keep for unusual humans.", fr: "Oh ! Fascinant ! Je range ça tout de suite dans le tiroir \"humains pas comme les autres\".", es: "¡Oh! ¡Fascinante! Eso va directo a la parte de mi cerebro que reservo para los humanos poco comunes.", de: "Oh! Faszinierend! Das kommt direkt in den Teil meines Gehirns, den ich für ungewöhnliche Menschen reserviere.", it: "Oh! Affascinante! Lo metto subito nella parte del mio cervello che riservo agli umani fuori dal comune.", da: "Åh! Fascinerende! Det ryger lige ind i den del af min hjerne, jeg gemmer til usædvanlige mennesker.", bg: "О! Очарователно! Това отива право в частта от мозъка ми, която пазя за необичайни хора." }
      ],
      next: "lesson1"
    },
    lesson1: {
      bot: [
        { en: "Here's the thing: a *good* password has two enemies.", fr: "Voilà le truc : un *bon* mot de passe a deux ennemis.", es: "El asunto es este: una *buena* contraseña tiene dos enemigos.", de: "Die Sache ist die: Ein *gutes* Passwort hat zwei Feinde.", it: "Il punto è questo: una *buona* password ha due nemici.", da: "Sagen er den: en *god* adgangskode har to fjender.", bg: "Ето нещо: една *добра* парола има двама врагове." },
        { en: "1. Computers guessing it really fast.", fr: "1. Les ordinateurs qui le devinent très vite.", es: "1. Los ordenadores que la adivinan muy rápido.", de: "1. Computer, die es sehr schnell erraten.", it: "1. I computer che la indovinano molto velocemente.", da: "1. Computere, der gætter den meget hurtigt.", bg: "1. Компютрите, които я отгатват много бързо." },
        { en: "2. You forgetting it.", fr: "2. Toi qui l'oublies.", es: "2. Tú que la olvidas.", de: "2. Du, der es vergisst.", it: "2. Tu che la dimentichi.", da: "2. Dig, der glemmer den.", bg: "2. Ти, която я забравяш." },
        { en: "Most people only solve problem 2. That's why we end up with `fluffy123`.", fr: "La plupart des gens ne règlent que le n°2. C'est comme ça qu'on finit avec `medor123`.", es: "La mayoría solo resuelve el problema 2. Por eso acabamos con `fluffy123`.", de: "Die meisten Leute lösen nur Problem 2. Deshalb landen wir bei `fluffy123`.", it: "La maggior parte risolve solo il problema 2. Ecco perché finiamo con `fluffy123`.", da: "De fleste løser kun problem 2. Derfor ender vi med `fluffy123`.", bg: "Повечето хора решават само проблем 2. Затова стигаме до `fluffy123`." }
      ],
      choices: [{ label: { en: "Guilty 😅", fr: "Coupable 😅", es: "Culpable 😅", de: "Schuldig 😅", it: "Colpevole 😅", da: "Skyldig 😅", bg: "Виновна 😅" }, next: "story" }]
    },
    story: {
      bot: [
        { en: "Oh, fun fact straight from my archives — I love a fun fact!", fr: "Oh, une anecdote tout droit sortie de mes archives — j'adore les anecdotes !", es: "Oh, dato curioso directo de mis archivos — ¡me encantan los datos curiosos!", de: "Oh, eine spannende Tatsache direkt aus meinen Archiven — ich liebe spannende Tatsachen!", it: "Oh, un aneddoto dritto dai miei archivi — adoro gli aneddoti!", da: "Åh, en sjov kendsgerning direkte fra mine arkiver — jeg elsker sjove kendsgerninger!", bg: "О, интересен факт направо от моите архиви — обожавам интересните факти!" },
        { en: "A researcher once got into a major security software company because someone there had set their password to the company's name plus `123`.", fr: "Un chercheur est un jour entré dans une grosse boîte de logiciels de sécurité parce qu'un employé avait mis le nom de la société suivi de `123`.", es: "Un investigador entró una vez en una gran empresa de software de seguridad porque alguien había puesto como contraseña el nombre de la empresa más `123`.", de: "Ein Forscher kam einmal in ein großes Sicherheitssoftware-Unternehmen, weil dort jemand sein Passwort auf den Firmennamen plus `123` gesetzt hatte.", it: "Un ricercatore è una volta entrato in una grande azienda di software di sicurezza perché qualcuno aveva impostato come password il nome dell'azienda seguito da `123`.", da: "En forsker kom engang ind hos et stort sikkerhedssoftwarefirma, fordi nogen havde sat deres adgangskode til firmaets navn plus `123`.", bg: "Един изследовател веднъж влязъл в голяма компания за софтуер за сигурност, защото някой бил сложил името на компанията плюс `123` като парола." },
        { en: "Per my records, hackers do not need to be geniuses. They just try the obvious things first.", fr: "Selon mes registres, les pirates n'ont pas besoin d'être des génies. Ils essaient simplement les choses évidentes en premier.", es: "Según mis registros, los hackers no necesitan ser genios. Simplemente prueban primero lo obvio.", de: "Laut meinen Aufzeichnungen müssen Hacker keine Genies sein. Sie probieren einfach zuerst das Offensichtliche.", it: "Secondo i miei archivi, gli hacker non hanno bisogno di essere geni. Provano semplicemente prima le cose ovvie.", da: "Ifølge mine optegnelser behøver hackere ikke at være genier. De prøver bare det indlysende først.", bg: "Според моите регистри, хакерите не трябва да са гении. Те просто пробват очевидните неща първо." }
      ],
      next: "rule_length"
    },
    rule_length: {
      bot: [
        { en: "So, the rules. First one is short:", fr: "Donc, les règles. La première est courte :", es: "Así que, las reglas. La primera es corta:", de: "Also, die Regeln. Die erste ist kurz:", it: "Allora, le regole. La prima è breve:", da: "Så, reglerne. Den første er kort:", bg: "И така, правилата. Първото е кратко:" },
        { en: "👉 *Length beats complexity.* Aim for 12+ characters, ideally more.", fr: "👉 *La longueur, c'est plus fort que la complexité.* Vise au moins 12 caractères, idéalement plus.", es: "👉 *La longitud le gana a la complejidad.* Apunta a 12+ caracteres, idealmente más.", de: "👉 *Länge schlägt Komplexität.* Ziel auf 12+ Zeichen, idealerweise mehr.", it: "👉 *La lunghezza batte la complessità.* Punta a 12+ caratteri, idealmente di più.", da: "👉 *Længde slår kompleksitet.* Sigt efter 12+ tegn, helst flere.", bg: "👉 *Дължината побеждава сложността.* Цели се към 12+ символа, идеално повече." },
        { en: "A long, weird sentence is much harder to crack than `P@ssw0rd!`.", fr: "Une longue phrase bizarre est beaucoup plus dure à casser que `P@ssw0rd!`.", es: "Una frase larga y rara es mucho más difícil de descifrar que `P@ssw0rd!`.", de: "Ein langer, seltsamer Satz ist viel schwerer zu knacken als `P@ssw0rd!`.", it: "Una frase lunga e strana è molto più difficile da decifrare di `P@ssw0rd!`.", da: "En lang, mærkelig sætning er meget sværere at knække end `P@ssw0rd!`.", bg: "Едно дълго, странно изречение е много по-трудно за разбиване от `P@ssw0rd!`." }
      ],
      choices: [{ label: { en: "Long it is", fr: "Long, donc", es: "Largo, entonces", de: "Lang also", it: "Lunga, allora", da: "Langt, så", bg: "Дълга значи" }, next: "fact_ants" }]
    },
    fact_ants: {
      bot: [
        { en: "(Tiny aside, completely unrelated: there are, at this exact moment, roughly *20 quadrillion ants* alive on Earth. Per my records. Janet finds that staggering.)", fr: "(Petite parenthèse sans aucun rapport : il y a, à cet instant précis, environ *20 quadrillions de fourmis* en vie sur Terre. Selon mes registres. Janet trouve ça vertigineux.)", es: "(Inciso pequeño, sin ninguna relación: en este preciso instante hay aproximadamente *20 cuatrillones de hormigas* vivas en la Tierra. Según mis registros. A Janet le parece vertiginoso.)", de: "(Kleiner Einschub, völlig zusammenhanglos: in genau diesem Moment leben rund *20 Billiarden Ameisen* auf der Erde. Laut meinen Aufzeichnungen. Janet findet das überwältigend.)", it: "(Piccolo inciso, del tutto scollegato: in questo preciso istante ci sono circa *20 quadrilioni di formiche* vive sulla Terra. Secondo i miei archivi. Janet lo trova sbalorditivo.)", da: "(Lille sidebemærkning, helt urelateret: lige nu er der omkring *20 billiarder myrer* i live på Jorden. Ifølge mine optegnelser. Janet synes, det er svimlende.)", bg: "(Малко отклонение, напълно несвързано: в този точен момент има около *20 квадрилиона мравки* живи на Земята. Според моите регистри. Janet намира това за зашеметяващо.)" },
        { en: "Anyway! Back to passwords.", fr: "Bref ! Retour aux mots de passe.", es: "¡En fin! Volvemos a las contraseñas.", de: "Wie auch immer! Zurück zu den Passwörtern.", it: "Comunque! Torniamo alle password.", da: "Nå, men! Tilbage til adgangskoderne.", bg: "Както и да е! Обратно към паролите." }
      ],
      next: "rule_unique"
    },
    rule_unique: {
      bot: [
        { en: "👉 *Never reuse the same password.*", fr: "👉 *Ne réutilise jamais le même mot de passe.*", es: "👉 *Nunca reutilices la misma contraseña.*", de: "👉 *Verwende niemals dasselbe Passwort wieder.*", it: "👉 *Non riutilizzare mai la stessa password.*", da: "👉 *Genbrug aldrig den samme adgangskode.*", bg: "👉 *Никога не използвай повторно една и съща парола.*" },
        { en: "Companies leak passwords all the time. If you used `SunnyBeach42!` everywhere, one leak unlocks your entire life.", fr: "Les entreprises laissent fuiter des mots de passe en permanence. Si tu utilises `Plage42!` partout, une seule fuite ouvre toute ta vie.", es: "Las empresas filtran contraseñas todo el tiempo. Si usas `SunnyBeach42!` en todas partes, una sola filtración abre toda tu vida.", de: "Unternehmen lassen ständig Passwörter durchsickern. Wenn du `SunnyBeach42!` überall benutzt, öffnet ein einziges Leck dein gesamtes Leben.", it: "Le aziende fanno trapelare password di continuo. Se usi `SunnyBeach42!` ovunque, una sola fuga sblocca tutta la tua vita.", da: "Virksomheder lækker adgangskoder hele tiden. Hvis du bruger `SunnyBeach42!` overalt, åbner ét læk hele dit liv.", bg: "Компаниите изтичат пароли постоянно. Ако използваш `SunnyBeach42!` навсякъде, едно изтичане отключва целия ти живот." },
        { en: "Email, bank, the place where you bought slippers in 2018 — all gone.", fr: "Email, banque, le site où tu as acheté des chaussons en 2018 — tout est compromis.", es: "Correo, banco, la tienda donde compraste pantuflas en 2018 — todo perdido.", de: "E-Mail, Bank, der Laden, in dem du 2018 Hausschuhe gekauft hast — alles weg.", it: "Email, banca, il sito dove hai comprato le pantofole nel 2018 — tutto compromesso.", da: "E-mail, bank, det sted hvor du købte hjemmesko i 2018 — alt er væk.", bg: "Имейл, банка, мястото, където си купила чехли през 2018 — всичко изгубено." }
      ],
      choices: [{ label: { en: "Yikes", fr: "Aïe", es: "Uy", de: "Autsch", it: "Ahia", da: "Av", bg: "Олеле" }, next: "rule_manager" }]
    },
    rule_manager: {
      bot: [
        { en: "👉 *Use a password manager.*", fr: "👉 *Utilise un gestionnaire de mots de passe.*", es: "👉 *Usa un gestor de contraseñas.*", de: "👉 *Verwende einen Passwort-Manager.*", it: "👉 *Usa un gestore di password.*", da: "👉 *Brug en adgangskodemanager.*", bg: "👉 *Използвай мениджър на пароли.*" },
        { en: "You are not, biologically, designed to remember 200 unique passwords. I've checked.", fr: "Biologiquement, tu n'es pas faite pour retenir 200 mots de passe uniques. J'ai vérifié.", es: "Biológicamente no estás diseñada para recordar 200 contraseñas únicas. Lo he comprobado.", de: "Du bist biologisch nicht dafür gemacht, dir 200 einzigartige Passwörter zu merken. Ich habe nachgesehen.", it: "Biologicamente non sei progettata per ricordare 200 password uniche. Ho controllato.", da: "Du er ikke biologisk designet til at huske 200 unikke adgangskoder. Jeg har tjekket.", bg: "Биологично не си създадена да запомняш 200 уникални пароли. Проверих." },
        { en: "A password manager invents random ones, stores them, and fills them in for you. You remember *one* big master password, and that's it.", fr: "Un gestionnaire en invente des aléatoires, les stocke, et les remplit pour toi. Tu retiens *un seul* mot de passe maître, et c'est fini.", es: "Un gestor inventa contraseñas aleatorias, las guarda y las rellena por ti. Tú recuerdas *una* gran contraseña maestra, y ya está.", de: "Ein Passwort-Manager erfindet zufällige, speichert sie und füllt sie für dich aus. Du merkst dir *ein* großes Master-Passwort, und das war's.", it: "Un gestore ne inventa di casuali, le memorizza e le compila al posto tuo. Tu ricordi *una* grande password principale, e basta.", da: "En adgangskodemanager opfinder tilfældige, gemmer dem og udfylder dem for dig. Du husker *én* stor hovedadgangskode, og det er det.", bg: "Мениджърът на пароли измисля произволни, съхранява ги и ги попълва вместо теб. Помниш *една* голяма главна парола, и това е." },
        { en: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — pick one. They all beat a sticky note.", fr: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — choisis. Ils sont tous mieux qu'un post-it.", es: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — elige uno. Todos son mejores que un post-it.", de: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — such dir einen aus. Alle sind besser als ein Klebezettel.", it: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — scegli. Sono tutti meglio di un post-it.", da: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — vælg en. De er alle bedre end en gul lap.", bg: "Bitwarden, 1Password, KeePass, Apple Passwords, Google Passwords — избери си един. Всички са по-добри от лепящо листче." }
      ],
      choices: [
        { label: { en: "I'll set one up", fr: "Je vais en installer un", es: "Voy a instalar uno", de: "Ich richte einen ein", it: "Ne installo uno", da: "Jeg sætter en op", bg: "Ще си инсталирам един" }, next: "praise" },
        { label: { en: "I'll think about it", fr: "Je vais y réfléchir", es: "Lo pensaré", de: "Ich denke darüber nach", it: "Ci penserò", da: "Jeg tænker over det", bg: "Ще си помисля" }, next: "gentle_push" }
      ]
    },
    praise: {
      bot: [
        { en: "Excellent. That's the single most useful 15 minutes you'll spend this year.", fr: "Parfait. C'est le quart d'heure le plus utile que tu passeras cette année.", es: "Excelente. Esos serán los 15 minutos más útiles que pasarás este año.", de: "Ausgezeichnet. Das sind die nützlichsten 15 Minuten, die du dieses Jahr verbringst.", it: "Eccellente. Sono i 15 minuti più utili che passerai quest'anno.", da: "Fremragende. Det er de mest nyttige 15 minutter, du bruger i år.", bg: "Отлично. Това са най-полезните 15 минути, които ще прекараш тази година." }
      ],
      next: "rule_change"
    },
    gentle_push: {
      bot: [
        { en: "Totally fair. Just promise me one thing — if you keep reusing the same password, *at least* use a unique one for your email.", fr: "Très bien. Promets-moi juste un truc — si tu continues à réutiliser tes mots de passe, *au moins* un unique pour ton email.", es: "Totalmente justo. Solo prométeme una cosa — si sigues reutilizando la misma contraseña, *al menos* usa una única para tu correo.", de: "Völlig fair. Versprich mir nur eines — wenn du dasselbe Passwort weiter wiederverwendest, dann *wenigstens* ein einzigartiges für deine E-Mail.", it: "Giusto. Promettimi solo una cosa — se continui a riutilizzare la stessa password, *almeno* usane una unica per la tua email.", da: "Helt fair. Bare lov mig én ting — hvis du bliver ved med at genbruge den samme adgangskode, så brug *i det mindste* en unik til din e-mail.", bg: "Напълно справедливо. Само ми обещай едно нещо — ако продължаваш да използваш една и съща парола, *поне* използвай уникална за имейла си." },
        { en: "Your email is the master key to almost everything else.", fr: "Ton email, c'est la clé maîtresse de presque tout le reste.", es: "Tu correo es la llave maestra de casi todo lo demás.", de: "Deine E-Mail ist der Hauptschlüssel zu fast allem anderen.", it: "La tua email è la chiave principale per quasi tutto il resto.", da: "Din e-mail er hovednøglen til næsten alt andet.", bg: "Имейлът ти е главният ключ към почти всичко останало." }
      ],
      next: "rule_change"
    },
    rule_change: {
      bot: [
        { en: "Last one. You may have heard that you should change your passwords every month.", fr: "Dernier point. On t'a peut-être dit qu'il fallait changer ses mots de passe tous les mois.", es: "Última cosa. Quizá te hayan dicho que deberías cambiar tus contraseñas cada mes.", de: "Letzter Punkt. Vielleicht hast du gehört, dass du deine Passwörter jeden Monat ändern sollst.", it: "Ultima cosa. Forse hai sentito dire che dovresti cambiare le password ogni mese.", da: "Sidste punkt. Du har måske hørt, at du bør skifte dine adgangskoder hver måned.", bg: "Последно. Може да си чувала, че трябва да сменяш паролите си всеки месец." },
        { en: "👉 *That's outdated advice.* Don't do it.", fr: "👉 *C'est un vieux conseil.* Oublie.", es: "👉 *Ese consejo está desfasado.* No lo hagas.", de: "👉 *Das ist veralteter Rat.* Mach das nicht.", it: "👉 *È un consiglio superato.* Lascia perdere.", da: "👉 *Det er forældet råd.* Lad være.", bg: "👉 *Това е остарял съвет.* Не го прави." },
        { en: "When forced to change often, people just go from `Summer2024!` to `Summer2025!`. Worse, not better.", fr: "Forcés de changer, les gens font `Été2024!` → `Été2025!`. C'est pire, pas mieux.", es: "Forzados a cambiar a menudo, la gente simplemente pasa de `Summer2024!` a `Summer2025!`. Peor, no mejor.", de: "Wenn sie oft wechseln müssen, gehen die Leute einfach von `Summer2024!` zu `Summer2025!`. Schlimmer, nicht besser.", it: "Costretti a cambiare spesso, la gente passa da `Summer2024!` a `Summer2025!`. Peggio, non meglio.", da: "Tvunget til at skifte ofte går folk bare fra `Summer2024!` til `Summer2025!`. Værre, ikke bedre.", bg: "Принудени да сменят често, хората просто минават от `Summer2024!` на `Summer2025!`. По-зле, не по-добре." },
        { en: "Change a password if you know it leaked. Otherwise, leave the good ones alone.", fr: "Change-le si tu sais qu'il a fuité. Sinon, laisse-le tranquille.", es: "Cambia una contraseña si sabes que se ha filtrado. Si no, deja en paz las buenas.", de: "Ändere ein Passwort, wenn du weißt, dass es geleakt ist. Ansonsten lass die guten in Ruhe.", it: "Cambia una password se sai che è trapelata. Altrimenti, lascia stare quelle buone.", da: "Skift en adgangskode, hvis du ved, den er lækket. Ellers lad de gode være.", bg: "Смени паролата, ако знаеш, че е изтекла. Иначе остави добрите на мира." }
      ],
      choices: [{ label: { en: "Got it!", fr: "Compris !", es: "¡Entendido!", de: "Verstanden!", it: "Capito!", da: "Forstået!", bg: "Разбрах!" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Tiny recap: *long*, *unique*, kept inside a *password manager*. That is, factually, the whole game.", fr: "Petit récap : *long*, *unique*, rangé dans un *gestionnaire*. Voilà toute l'astuce, factuellement.", es: "Pequeño resumen: *larga*, *única*, guardada en un *gestor de contraseñas*. Eso es, factualmente, todo el juego.", de: "Kurze Zusammenfassung: *lang*, *einzigartig*, in einem *Passwort-Manager* aufbewahrt. Das ist, faktisch, das ganze Spiel.", it: "Piccolo riepilogo: *lunga*, *unica*, custodita in un *gestore di password*. Questo è, fattualmente, tutto il gioco.", da: "Lille opsummering: *lang*, *unik*, gemt i en *adgangskodemanager*. Det er, faktuelt, hele spillet.", bg: "Малко резюме: *дълга*, *уникална*, пазена в *мениджър на пароли*. Това е, технически, цялата работа." },
        { en: "You're doing wonderfully. Janet is proud of you. Bye for now! 💖", fr: "Tu te débrouilles à merveille. Janet est fière de toi. À très vite ! 💖", es: "Lo estás haciendo maravillosamente. Janet está orgullosa de ti. ¡Hasta pronto! 💖", de: "Du machst das wunderbar. Janet ist stolz auf dich. Bis bald! 💖", it: "Te la stai cavando alla grande. Janet è fiera di te. A presto! 💖", da: "Du klarer det vidunderligt. Janet er stolt af dig. Vi ses! 💖", bg: "Справяш се чудесно. Janet се гордее с теб. До скоро! 💖" }
      ],
      end: true
    }
  }
};
