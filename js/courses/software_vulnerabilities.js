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
        { en: "Hi there! Janet here, with a topic that I find, against all odds, kind of romantic.", fr: "Salut ! C'est Janet, avec un sujet que je trouve, contre toute attente, un peu romantique.", es: "¡Hola! Soy Janet, con un tema que, contra todo pronóstico, me parece bastante romántico.", de: "Hallo! Janet hier, mit einem Thema, das ich wider Erwarten irgendwie romantisch finde.", it: "Ciao! Sono Janet, con un argomento che, contro ogni aspettativa, trovo un po' romantico.", da: "Hej! Det er Janet, med et emne som jeg, trods alt, finder lidt romantisk.", bg: "Здравей! Аз съм Janet, с тема, която, противно на очакванията, намирам за малко романтична." },
        { en: "Let's talk about *those* notifications. The ones that say \"Update available\" — the ones you have reflexively dismissed approximately 12 times.", fr: "Parlons de *ces* notifications. Celles qui disent \"Mise à jour disponible\" — celles que tu as réflexivement balayées environ 12 fois.", es: "Hablemos de *esas* notificaciones. Las que dicen \"Actualización disponible\" — esas que has descartado por reflejo unas 12 veces.", de: "Reden wir über *diese* Benachrichtigungen. Die mit \"Update verfügbar\" — die du etwa 12 Mal reflexartig weggewischt hast.", it: "Parliamo di *quelle* notifiche. Quelle che dicono \"Aggiornamento disponibile\" — quelle che hai scartato per riflesso circa 12 volte.", da: "Lad os tale om *de* notifikationer. Dem der siger \"Opdatering tilgængelig\" — dem du refleksivt har afvist cirka 12 gange.", bg: "Нека поговорим за *тези* известия. Тези, които казват \"Налична е актуализация\" — тези, които си отхвърлил·а рефлексивно около 12 пъти." }
      ],
      choices: [{ label: { en: "Guilty 🙋", fr: "Coupable 🙋", es: "Culpable 🙋", de: "Schuldig 🙋", it: "Colpevole 🙋", da: "Skyldig 🙋", bg: "Виновен·на 🙋" }, next: "literal_check" }]
    },
    literal_check: {
      bot: [
        { en: "(Janet checked her records: you have not, in fact, been arrested. \"Guilty\" is a feeling. Carrying on.)", fr: "(Janet a consulté ses registres : tu n'as, factuellement, pas été arrêté·e. \"Coupable\" est un sentiment. On continue.)", es: "(Janet ha consultado sus registros: factualmente, no has sido detenido·a. \"Culpable\" es un sentimiento. Seguimos.)", de: "(Janet hat ihre Aufzeichnungen geprüft: du wurdest faktisch nicht verhaftet. \"Schuldig\" ist ein Gefühl. Weiter geht's.)", it: "(Janet ha controllato i suoi archivi: fattualmente non sei stato·a arrestato·a. \"Colpevole\" è un sentimento. Andiamo avanti.)", da: "(Janet har tjekket sine optegnelser: du er faktuelt ikke blevet anholdt. \"Skyldig\" er en følelse. Vi fortsætter.)", bg: "(Janet провери своите регистри: технически не си арестуван·а. \"Виновен·на\" е чувство. Продължаваме.)" }
      ],
      next: "why"
    },
    why: {
      bot: [
        { en: "Here's what's really happening.", fr: "Voilà ce qui se passe vraiment.", es: "Esto es lo que pasa en realidad.", de: "Hier ist, was wirklich passiert.", it: "Ecco cosa sta succedendo davvero.", da: "Her er, hvad der virkelig sker.", bg: "Ето какво всъщност се случва." },
        { en: "All software has bugs. Some of those bugs are *vulnerabilities* — bugs an attacker can use to break in.", fr: "Tout logiciel a des bugs. Certains sont des *vulnérabilités* — des bugs qu'un attaquant peut exploiter pour entrer.", es: "Todo el software tiene bugs. Algunos son *vulnerabilidades* — bugs que un atacante puede usar para entrar.", de: "Jede Software hat Bugs. Manche davon sind *Sicherheitslücken* — Bugs, die ein Angreifer zum Einbruch nutzen kann.", it: "Tutti i software hanno bug. Alcuni sono *vulnerabilità* — bug che un attaccante può sfruttare per entrare.", da: "Al software har bugs. Nogle af dem er *sårbarheder* — bugs en angriber kan bruge til at bryde ind.", bg: "Целият софтуер има бъгове. Някои от тях са *уязвимости* — бъгове, които нападател може да използва, за да проникне." },
        { en: "When researchers (or the bad guys) find one, the vendor releases a patch. That patch *is* the update.", fr: "Quand des chercheurs (ou des méchants) en trouvent une, l'éditeur publie un correctif. Ce correctif, *c'est* la mise à jour.", es: "Cuando los investigadores (o los malos) encuentran una, el fabricante publica un parche. Ese parche *es* la actualización.", de: "Wenn Forscher (oder die Bösen) eine finden, veröffentlicht der Hersteller einen Patch. Dieser Patch *ist* das Update.", it: "Quando i ricercatori (o i cattivi) ne trovano una, il produttore rilascia una patch. Quella patch *è* l'aggiornamento.", da: "Når forskere (eller skurkene) finder en, udgiver leverandøren en patch. Den patch *er* opdateringen.", bg: "Когато изследователите (или лошите) намерят такава, производителят пуска кръпка. Тази кръпка *е* актуализацията." }
      ],
      next: "race"
    },
    race: {
      bot: [
        { en: "Here's the twist:", fr: "Le rebondissement :", es: "Aquí está el giro:", de: "Und jetzt der Clou:", it: "Ecco il colpo di scena:", da: "Her er twisten:", bg: "Ето къде идва обратът:" },
        { en: "Once a patch is *public*, attackers know *exactly* what the bug was — and which devices haven't updated yet.", fr: "Une fois le correctif *public*, les attaquants savent *exactement* où était le bug — et quels appareils ne sont pas encore à jour.", es: "Una vez que el parche es *público*, los atacantes saben *exactamente* cuál era el bug — y qué dispositivos aún no se han actualizado.", de: "Sobald ein Patch *öffentlich* ist, wissen Angreifer *genau*, was der Bug war — und welche Geräte noch nicht aktualisiert sind.", it: "Una volta che una patch è *pubblica*, gli attaccanti sanno *esattamente* qual era il bug — e quali dispositivi non sono ancora aggiornati.", da: "Når en patch er *offentlig*, ved angriberne *præcis*, hvad bug'en var — og hvilke enheder der ikke er opdateret endnu.", bg: "Веднъж щом кръпката е *публична*, нападателите знаят *точно* какъв е бил бъгът — и кои устройства още не са актуализирани." },
        { en: "So when you postpone an update, you're not skipping the problem. You're entering a race against people who already know the answer.", fr: "Donc reporter une mise à jour, ce n'est pas éviter le problème. C'est entrer dans une course contre des gens qui ont déjà la réponse.", es: "Así que cuando pospones una actualización, no estás esquivando el problema. Estás entrando en una carrera contra gente que ya sabe la respuesta.", de: "Wenn du ein Update verschiebst, umgehst du also nicht das Problem. Du startest ein Rennen gegen Leute, die die Antwort schon kennen.", it: "Quindi quando rimandi un aggiornamento, non stai evitando il problema. Stai entrando in una corsa contro persone che già conoscono la risposta.", da: "Så når du udskyder en opdatering, springer du ikke problemet over. Du går ind i et kapløb mod folk, der allerede kender svaret.", bg: "Така че когато отлагаш актуализация, не пропускаш проблема. Влизаш в надпревара срещу хора, които вече знаят отговора." }
      ],
      next: "story"
    },
    story: {
      bot: [
        { en: "Many of the biggest attacks in history were powered by vulnerabilities that had been *patched months earlier*.", fr: "Beaucoup des plus grosses attaques de l'histoire reposaient sur des failles *corrigées des mois plus tôt*.", es: "Muchos de los mayores ataques de la historia se basaron en vulnerabilidades que ya estaban *parcheadas meses antes*.", de: "Viele der größten Angriffe der Geschichte beruhten auf Sicherheitslücken, die *Monate zuvor schon gepatcht* waren.", it: "Molti dei più grandi attacchi della storia sfruttavano vulnerabilità che erano state *corrette mesi prima*.", da: "Mange af historiens største angreb byggede på sårbarheder, der var blevet *patchet måneder forinden*.", bg: "Много от най-големите атаки в историята са се случили чрез уязвимости, които вече са били *закърпени месеци по-рано*." },
        { en: "Some hospitals lost millions because someone clicked \"Remind me tomorrow\" three months in a row.", fr: "Des hôpitaux ont perdu des millions parce que quelqu'un a cliqué \"Me le rappeler demain\" trois mois d'affilée.", es: "Algunos hospitales perdieron millones porque alguien pulsó \"Recordármelo mañana\" tres meses seguidos.", de: "Manche Krankenhäuser haben Millionen verloren, weil jemand drei Monate lang \"Morgen erinnern\" geklickt hat.", it: "Alcuni ospedali hanno perso milioni perché qualcuno ha cliccato \"Ricordamelo domani\" tre mesi di fila.", da: "Nogle hospitaler tabte millioner, fordi nogen klikkede \"Mind mig om det i morgen\" tre måneder i træk.", bg: "Някои болници са загубили милиони, защото някой е щракнал \"Напомни ми утре\" три месеца поред." }
      ],
      next: "what"
    },
    what: {
      bot: [
        { en: "What to actually update:", fr: "Ce qu'il faut mettre à jour :", es: "Qué hay que actualizar de verdad:", de: "Was du wirklich aktualisieren solltest:", it: "Cosa aggiornare davvero:", da: "Hvad du faktisk skal opdatere:", bg: "Какво всъщност да актуализираш:" },
        { en: "📱 *Operating system* — iOS, Android, macOS, Windows, Linux. Highest priority.", fr: "📱 *Système d'exploitation* — iOS, Android, macOS, Windows, Linux. Priorité absolue.", es: "📱 *Sistema operativo* — iOS, Android, macOS, Windows, Linux. Máxima prioridad.", de: "📱 *Betriebssystem* — iOS, Android, macOS, Windows, Linux. Höchste Priorität.", it: "📱 *Sistema operativo* — iOS, Android, macOS, Windows, Linux. Massima priorità.", da: "📱 *Styresystem* — iOS, Android, macOS, Windows, Linux. Højeste prioritet.", bg: "📱 *Операционна система* — iOS, Android, macOS, Windows, Linux. Най-висок приоритет." },
        { en: "🌐 *Browser* — Chrome, Safari, Firefox, Edge. Updated weekly in some cases.", fr: "🌐 *Navigateur* — Chrome, Safari, Firefox, Edge. Mis à jour très souvent.", es: "🌐 *Navegador* — Chrome, Safari, Firefox, Edge. A veces se actualiza cada semana.", de: "🌐 *Browser* — Chrome, Safari, Firefox, Edge. Teilweise wöchentlich aktualisiert.", it: "🌐 *Browser* — Chrome, Safari, Firefox, Edge. In alcuni casi aggiornati ogni settimana.", da: "🌐 *Browser* — Chrome, Safari, Firefox, Edge. Opdateres i nogle tilfælde ugentligt.", bg: "🌐 *Браузър* — Chrome, Safari, Firefox, Edge. В някои случаи се актуализира всяка седмица." },
        { en: "🧩 *Apps* — especially anything that touches files, messages, or payments.", fr: "🧩 *Applications* — surtout celles qui touchent à des fichiers, messages ou paiements.", es: "🧩 *Apps* — sobre todo las que tocan archivos, mensajes o pagos.", de: "🧩 *Apps* — vor allem alles, was mit Dateien, Nachrichten oder Zahlungen zu tun hat.", it: "🧩 *App* — soprattutto quelle che toccano file, messaggi o pagamenti.", da: "🧩 *Apps* — især alt der rører ved filer, beskeder eller betalinger.", bg: "🧩 *Приложения* — особено всичко, което докосва файлове, съобщения или плащания." },
        { en: "🏠 *Router and IoT* — yes, your Wi-Fi box has firmware too. Update once a year.", fr: "🏠 *Routeur et objets connectés* — oui, ta box Wi-Fi a aussi un firmware. Mise à jour annuelle.", es: "🏠 *Router e IoT* — sí, tu caja Wi-Fi también tiene firmware. Actualízalo una vez al año.", de: "🏠 *Router und IoT* — ja, deine Wi-Fi-Box hat auch Firmware. Einmal pro Jahr aktualisieren.", it: "🏠 *Router e IoT* — sì, anche il tuo modem Wi-Fi ha un firmware. Aggiornalo una volta all'anno.", da: "🏠 *Router og IoT* — ja, din Wi-Fi-boks har også firmware. Opdater en gang om året.", bg: "🏠 *Рутер и IoT* — да, твоята Wi-Fi кутия също има фърмуер. Актуализирай го веднъж годишно." }
      ],
      next: "auto"
    },
    auto: {
      bot: [
        { en: "My favorite habit: *turn on automatic updates everywhere.*", fr: "Mon habitude préférée : *active les mises à jour automatiques partout.*", es: "Mi hábito favorito: *activa las actualizaciones automáticas en todas partes.*", de: "Meine Lieblingsgewohnheit: *aktiviere überall automatische Updates.*", it: "La mia abitudine preferita: *attiva gli aggiornamenti automatici ovunque.*", da: "Min yndlingsvane: *slå automatiske opdateringer til alle steder.*", bg: "Любимият ми навик: *включи автоматичните актуализации навсякъде.*" },
        { en: "You forget. The phone doesn't. Patches install overnight, you wake up safer.", fr: "Tu oublies. Le téléphone, non. Les correctifs s'installent la nuit, tu te réveilles plus sûr·e.", es: "Tú te olvidas. El teléfono no. Los parches se instalan por la noche y te despiertas más seguro·a.", de: "Du vergisst es. Das Handy nicht. Patches installieren sich nachts, du wachst sicherer auf.", it: "Tu dimentichi. Il telefono no. Le patch si installano di notte, e ti svegli più al sicuro.", da: "Du glemmer det. Telefonen gør ikke. Patches installeres om natten, og du vågner mere sikker.", bg: "Ти забравяш. Телефонът — не. Кръпките се инсталират през нощта, а ти се събуждаш по-защитен·а." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Test moment: a website says \"Your Flash Player is out of date! Click here to update.\"", fr: "Petit test : un site dit \"Flash Player obsolète ! Cliquez pour mettre à jour.\"", es: "Momento de prueba: una web dice \"¡Tu Flash Player está desactualizado! Haz clic aquí para actualizar.\"", de: "Testmoment: eine Website sagt \"Dein Flash Player ist veraltet! Hier klicken zum Aktualisieren.\"", it: "Momento di prova: un sito dice \"Il tuo Flash Player non è aggiornato! Clicca qui per aggiornarlo.\"", da: "Testmoment: en hjemmeside siger \"Din Flash Player er forældet! Klik her for at opdatere.\"", bg: "Тестов момент: уебсайт казва \"Твоят Flash Player е остарял! Кликни тук, за да актуализираш.\"" }
      ],
      choices: [
        { label: { en: "Click to update", fr: "Je clique pour mettre à jour", es: "Hago clic para actualizar", de: "Zum Aktualisieren klicken", it: "Clicco per aggiornare", da: "Klik for at opdatere", bg: "Кликвам, за да актуализирам" }, next: "test_bad" },
        { label: { en: "Ignore it", fr: "J'ignore", es: "Lo ignoro", de: "Ignorieren", it: "Lo ignoro", da: "Ignorer det", bg: "Игнорирам го" }, next: "test_good" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Excellent. Flash has been *dead since 2020*. Any site offering it is a scam.", fr: "✅ Parfait. Flash est *mort depuis 2020*. Tout site qui le propose est une arnaque.", es: "✅ Excelente. Flash está *muerto desde 2020*. Cualquier sitio que lo ofrezca es una estafa.", de: "✅ Ausgezeichnet. Flash ist *seit 2020 tot*. Jede Seite, die es anbietet, ist Betrug.", it: "✅ Perfetto. Flash è *morto dal 2020*. Qualsiasi sito che lo offra è una truffa.", da: "✅ Fremragende. Flash har været *død siden 2020*. Enhver side, der tilbyder det, er svindel.", bg: "✅ Отлично. Flash е *мъртъв от 2020*. Всеки сайт, който го предлага, е измама." },
        { en: "Rule: *real updates come from your operating system or directly from the app's official source.* Never from a random web pop-up.", fr: "Règle : *les vraies mises à jour viennent du système ou de l'éditeur officiel.* Jamais d'un pop-up web aléatoire.", es: "Regla: *las actualizaciones reales vienen de tu sistema operativo o directamente de la fuente oficial de la app.* Nunca de un pop-up al azar.", de: "Regel: *echte Updates kommen von deinem Betriebssystem oder direkt von der offiziellen Quelle der App.* Nie von einem zufälligen Web-Pop-up.", it: "Regola: *gli aggiornamenti veri arrivano dal tuo sistema operativo o direttamente dalla fonte ufficiale dell'app.* Mai da un pop-up casuale del web.", da: "Regel: *rigtige opdateringer kommer fra dit styresystem eller direkte fra appens officielle kilde.* Aldrig fra et tilfældigt pop-up på nettet.", bg: "Правило: *истинските актуализации идват от операционната ти система или директно от официалния източник на приложението.* Никога от случаен изскачащ прозорец." }
      ],
      next: "outro"
    },
    test_bad: {
      bot: [
        { en: "Trap! That's a classic malware delivery method.", fr: "Piège ! C'est un grand classique de la diffusion de malware.", es: "¡Trampa! Es un método clásico para colar malware.", de: "Falle! Das ist eine klassische Methode, um Malware zu verteilen.", it: "Trappola! È un metodo classico per distribuire malware.", da: "Fælde! Det er en klassisk metode til at sprede malware.", bg: "Капан! Това е класически метод за разпространение на зловреден софтуер." },
        { en: "Real updates come from your OS or the app's official source — never from a pop-up on a webpage.", fr: "Les vraies mises à jour viennent du système ou de l'éditeur officiel — jamais d'un pop-up sur une page web.", es: "Las actualizaciones reales vienen del sistema operativo o de la fuente oficial de la app — nunca de un pop-up en una página.", de: "Echte Updates kommen vom Betriebssystem oder von der offiziellen Quelle der App — nie von einem Pop-up auf einer Webseite.", it: "Gli aggiornamenti veri arrivano dal sistema operativo o dalla fonte ufficiale dell'app — mai da un pop-up su una pagina web.", da: "Rigtige opdateringer kommer fra dit styresystem eller appens officielle kilde — aldrig fra et pop-up på en webside.", bg: "Истинските актуализации идват от операционната ти система или от официалния източник на приложението — никога от изскачащ прозорец на уебстраница." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "Updates are deeply unglamorous. They are also, per Janet's records, the single most effective security tool ever invented.", fr: "Les mises à jour, ce n'est pas glamour du tout. Et pourtant, selon les registres de Janet, c'est l'outil de sécurité le plus efficace jamais inventé.", es: "Las actualizaciones son profundamente poco glamurosas. También son, según los registros de Janet, la herramienta de seguridad más eficaz jamás inventada.", de: "Updates sind zutiefst unglamourös. Sie sind aber auch, laut Janets Aufzeichnungen, das wirkungsvollste Sicherheitswerkzeug, das je erfunden wurde.", it: "Gli aggiornamenti non sono per niente affascinanti. Sono però, secondo gli archivi di Janet, lo strumento di sicurezza più efficace mai inventato.", da: "Opdateringer er dybt uglamourøse. De er også, ifølge Janets optegnelser, det mest effektive sikkerhedsværktøj nogensinde opfundet.", bg: "Актуализациите са дълбоко безславни. Те са също, според регистрите на Janet, най-ефективният инструмент за сигурност, изобретяван някога." },
        { en: "Schedule them. Automate them. Maybe even love them. Bye for now! 🩹", fr: "Programme-les. Automatise-les. Aime-les, peut-être. À très vite ! 🩹", es: "Prográmalas. Automatízalas. Quizá hasta quiérelas. ¡Hasta pronto! 🩹", de: "Plane sie ein. Automatisiere sie. Vielleicht liebst du sie sogar. Bis bald! 🩹", it: "Programmali. Automatizzali. Magari imparali ad amarli. A presto! 🩹", da: "Planlæg dem. Automatisér dem. Måske endda elsk dem. Vi ses! 🩹", bg: "Планирай ги. Автоматизирай ги. Може дори да ги обикнеш. До скоро! 🩹" }
      ],
      end: true
    }
  }
};
