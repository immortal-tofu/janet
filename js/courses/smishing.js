window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.smishing = {
  id: "smishing",
  emoji: "💬",
  duration: 4,
  karma: 40,
  title: {
    en: "Smishing (SMS scams)",
    fr: "Smishing (arnaques par SMS)",
    es: "Smishing (estafas por SMS)",
    de: "Smishing (SMS-Betrug)",
    it: "Smishing (truffe via SMS)",
    da: "Smishing (SMS-svindel)",
    bg: "Smishing (SMS измами)"
  },
  description: {
    en: "Phishing's smaller, faster cousin — delivered to your pocket.",
    fr: "Le petit cousin rapide du phishing — livré dans ta poche.",
    es: "El primo más pequeño y rápido del phishing — entregado a tu bolsillo.",
    de: "Der kleinere, schnellere Cousin des Phishings — direkt in deine Tasche geliefert.",
    it: "Il cugino più piccolo e veloce del phishing — consegnato in tasca tua.",
    da: "Phishingens mindre, hurtigere fætter — leveret direkte i din lomme.",
    bg: "По-малкият, по-бърз братовчед на phishing — доставен в джоба ти."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the world's silliest word.", fr: "Salut ! C'est Janet, avec le mot le plus rigolo du monde.", es: "¡Hola! Soy Janet, con la palabra más ridícula del mundo.", de: "Hallo! Hier ist Janet, mit dem albernsten Wort der Welt.", it: "Ciao! Sono Janet, con la parola più buffa del mondo.", da: "Hej! Det er Janet, med verdens fjolleteste ord.", bg: "Здравей! Аз съм Janet, с най-смешната дума на света." },
        { en: "*Smishing.* It's SMS + phishing. Adorable on the tongue, very annoying in the pocket.", fr: "*Smishing.* C'est SMS + phishing. Mignon à dire, pénible à recevoir.", es: "*Smishing.* Es SMS + phishing. Encantador al pronunciarla, muy molesto al recibirla.", de: "*Smishing.* Das ist SMS + Phishing. Niedlich auf der Zunge, sehr ärgerlich in der Tasche.", it: "*Smishing.* È SMS + phishing. Adorabile da dire, fastidiosissimo da ricevere.", da: "*Smishing.* Det er SMS + phishing. Sødt at sige, meget irriterende at modtage.", bg: "*Smishing.* Това е SMS + phishing. Сладка на езика, много досадна в джоба." }
      ],
      choices: [{ label: { en: "Why is it so common?", fr: "Pourquoi c'est si fréquent ?", es: "¿Por qué es tan común?", de: "Warum ist das so verbreitet?", it: "Perché è così diffuso?", da: "Hvorfor er det så almindeligt?", bg: "Защо е толкова често срещано?" }, next: "why" }]
    },
    why: {
      bot: [
        { en: "Two reasons texts are a scammer's dream:", fr: "Deux raisons qui font des SMS un rêve pour les arnaqueurs :", es: "Dos razones por las que los SMS son un sueño para los estafadores:", de: "Zwei Gründe, warum SMS ein Traum für Betrüger sind:", it: "Due motivi per cui gli SMS sono il sogno dei truffatori:", da: "To grunde til at sms'er er en svindlers drøm:", bg: "Две причини, поради които SMS-ите са мечтата на измамника:" },
        { en: "1. They feel personal and urgent. Most of us read every SMS within minutes.", fr: "1. Ça paraît personnel et urgent. La plupart d'entre nous lit chaque SMS en quelques minutes.", es: "1. Se sienten personales y urgentes. La mayoría leemos cada SMS en cuestión de minutos.", de: "1. Sie wirken persönlich und dringend. Die meisten von uns lesen jede SMS innerhalb von Minuten.", it: "1. Sembrano personali e urgenti. Quasi tutti leggiamo ogni SMS nel giro di minuti.", da: "1. De føles personlige og presserende. De fleste af os læser hver sms inden for få minutter.", bg: "1. Усещат се лични и спешни. Повечето от нас четат всеки SMS в рамките на минути." },
        { en: "2. There are no filters. Your email has a spam folder; your SMS app does not.", fr: "2. Il n'y a pas de filtres. Ta boîte mail a un dossier spam ; ton appli SMS, non.", es: "2. No hay filtros. Tu correo tiene una carpeta de spam; tu app de SMS no.", de: "2. Es gibt keine Filter. Dein E-Mail-Postfach hat einen Spam-Ordner; deine SMS-App nicht.", it: "2. Non ci sono filtri. La tua email ha una cartella spam; la tua app SMS no.", da: "2. Der er ingen filtre. Din e-mail har en spammappe; din sms-app har ikke.", bg: "2. Няма филтри. Имейлът ти има папка спам; SMS приложението — не." }
      ],
      next: "templates"
    },
    templates: {
      bot: [
        { en: "The greatest hits, you've seen them all:", fr: "Les classiques que tu as forcément vus :", es: "Los grandes éxitos, los has visto todos:", de: "Die Klassiker, die du alle schon gesehen hast:", it: "I grandi classici, li hai visti tutti:", da: "De største hits, du har set dem alle:", bg: "Най-големите хитове, виждала си ги всичките:" },
        { en: "📦 \"Your package couldn't be delivered. Pay €1.49 customs fee here.\"", fr: "📦 \"Votre colis n'a pas pu être livré. Payez 1,49 € de frais de douane ici.\"", es: "📦 \"Su paquete no se ha podido entregar. Pague 1,49 € de gastos de aduana aquí.\"", de: "📦 \"Ihr Paket konnte nicht zugestellt werden. Zahlen Sie hier 1,49 € Zollgebühr.\"", it: "📦 \"Il tuo pacco non ha potuto essere consegnato. Paga qui 1,49 € di spese doganali.\"", da: "📦 \"Din pakke kunne ikke leveres. Betal 1,49 € i toldgebyr her.\"", bg: "📦 \"Пратката Ви не можа да бъде доставена. Платете 1,49 € митническа такса тук.\"" },
        { en: "🏦 \"Suspicious login on your bank account. Confirm now.\"", fr: "🏦 \"Connexion suspecte sur votre compte. Confirmez ici.\"", es: "🏦 \"Inicio de sesión sospechoso en su cuenta bancaria. Confirme ahora.\"", de: "🏦 \"Verdächtige Anmeldung bei Ihrem Bankkonto. Jetzt bestätigen.\"", it: "🏦 \"Accesso sospetto sul tuo conto bancario. Conferma ora.\"", da: "🏦 \"Mistænkeligt login på din bankkonto. Bekræft nu.\"", bg: "🏦 \"Подозрителен вход в банковата Ви сметка. Потвърдете сега.\"" },
        { en: "📨 \"Hi mom/dad, this is my new number. Phone broken.\"", fr: "📨 \"Coucou maman/papa, c'est mon nouveau numéro. Mon téléphone est cassé.\"", es: "📨 \"Hola mamá/papá, este es mi nuevo número. El móvil se me rompió.\"", de: "📨 \"Hi Mama/Papa, das ist meine neue Nummer. Handy kaputt.\"", it: "📨 \"Ciao mamma/papà, questo è il mio nuovo numero. Telefono rotto.\"", da: "📨 \"Hej mor/far, det her er mit nye nummer. Telefon i stykker.\"", bg: "📨 \"Здрасти, мамо/тате, това е новият ми номер. Телефонът е счупен.\"" },
        { en: "💸 \"You have a tax refund of €283. Click to receive.\"", fr: "💸 \"Vous avez un remboursement d'impôts de 283 €. Cliquez pour recevoir.\"", es: "💸 \"Tiene una devolución de Hacienda de 283 €. Pulse para recibirla.\"", de: "💸 \"Sie haben eine Steuerrückerstattung von 283 €. Klicken Sie zum Erhalt.\"", it: "💸 \"Hai un rimborso fiscale di 283 €. Clicca per riceverlo.\"", da: "💸 \"Du har et skatterefusion på 283 €. Klik for at modtage.\"", bg: "💸 \"Имате данъчно възстановяване от 283 €. Натиснете, за да получите.\"" }
      ],
      next: "tricks"
    },
    tricks: {
      bot: [
        { en: "What makes them work:", fr: "Pourquoi ça marche :", es: "Por qué funcionan:", de: "Warum sie funktionieren:", it: "Perché funzionano:", da: "Hvorfor de virker:", bg: "Защо работят:" },
        { en: "🎯 *Tiny amount asked.* €1.49 feels too small to fight. They just want your card number.", fr: "🎯 *Petit montant demandé.* 1,49 €, ça paraît dérisoire. Ce qu'ils veulent, c'est ton numéro de carte.", es: "🎯 *Importe ridículo.* 1,49 € parece demasiado poco como para pelear. Lo que quieren es tu número de tarjeta.", de: "🎯 *Winziger Betrag verlangt.* 1,49 € wirkt zu klein, um sich zu wehren. Sie wollen nur deine Kartennummer.", it: "🎯 *Cifra minuscola richiesta.* 1,49 € sembra troppo poco per protestare. Quello che vogliono è il numero della tua carta.", da: "🎯 *Lille beløb anmodet.* 1,49 € føles for lille til at kæmpe imod. De vil bare have dit kortnummer.", bg: "🎯 *Малка сума.* 1,49 € изглежда твърде малка, за да си струва спорът. Всъщност искат номера на картата ти." },
        { en: "🎯 *Hyper-short link.* `bit.ly/abc` hides where you're actually going.", fr: "🎯 *Lien ultra-court.* `bit.ly/abc` cache vraiment où tu vas.", es: "🎯 *Enlace ultra corto.* `bit.ly/abc` oculta a dónde vas realmente.", de: "🎯 *Ultrakurzer Link.* `bit.ly/abc` verbirgt, wohin du wirklich gehst.", it: "🎯 *Link ultra corto.* `bit.ly/abc` nasconde dove stai davvero andando.", da: "🎯 *Ultrakort link.* `bit.ly/abc` skjuler, hvor du i virkeligheden ender.", bg: "🎯 *Ултра-кратък линк.* `bit.ly/abc` скрива къде всъщност отиваш." },
        { en: "🎯 *Plausible timing.* You ordered something last week, of course you'd believe a delivery text.", fr: "🎯 *Timing crédible.* Tu as commandé un truc la semaine dernière, normal de croire un SMS de livraison.", es: "🎯 *Timing creíble.* Pediste algo la semana pasada, lógico que te creas un SMS de entrega.", de: "🎯 *Glaubwürdiges Timing.* Du hast letzte Woche etwas bestellt, klar glaubst du eine Liefer-SMS.", it: "🎯 *Tempistica plausibile.* Hai ordinato qualcosa la settimana scorsa, è naturale credere a un SMS di consegna.", da: "🎯 *Troværdig timing.* Du har bestilt noget i sidste uge — selvfølgelig tror du på en leverings-sms.", bg: "🎯 *Правдоподобно време.* Поръчала си нещо миналата седмица, нормално е да повярваш на SMS за доставка." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Test moment. You get: *\"Hi, this is your daughter, my phone broke, can you send 200€ to this IBAN? I'll explain tonight.\"*", fr: "Petit test. Tu reçois : *\"Coucou maman, c'est ta fille, mon téléphone est cassé, tu peux m'envoyer 200 € sur ce IBAN ? J'expliquerai ce soir.\"*", es: "Momento de prueba. Recibes: *\"Hola, soy tu hija, se me rompió el móvil, ¿puedes enviarme 200 € a este IBAN? Te explico esta noche.\"*", de: "Test-Moment. Du bekommst: *\"Hi, ich bin's, deine Tochter, mein Handy ist kaputt, kannst du mir 200 € auf diese IBAN schicken? Ich erkläre es heute Abend.\"*", it: "Momento del test. Ricevi: *\"Ciao, sono tua figlia, il telefono si è rotto, puoi mandarmi 200 € su questo IBAN? Ti spiego stasera.\"*", da: "Test-øjeblik. Du modtager: *\"Hej, det er din datter, min telefon er gået i stykker, kan du sende 200 € til denne IBAN? Jeg forklarer i aften.\"*", bg: "Момент за тест. Получаваш: *\"Здрасти, дъщеря ти е, телефонът ми се счупи, можеш ли да ми пратиш 200 € на този IBAN? Ще ти обясня довечера.\"*" },
        { en: "What do you do?", fr: "Tu fais quoi ?", es: "¿Qué haces?", de: "Was machst du?", it: "Cosa fai?", da: "Hvad gør du?", bg: "Какво правиш?" }
      ],
      choices: [
        { label: { en: "Call my daughter's real number", fr: "J'appelle le vrai numéro de ma fille", es: "Llamo al número real de mi hija", de: "Ich rufe die echte Nummer meiner Tochter an", it: "Chiamo il vero numero di mia figlia", da: "Jeg ringer til min datters rigtige nummer", bg: "Звъня на истинския номер на дъщеря ми" }, next: "test_good" },
        { label: { en: "Reply to ask details", fr: "Je réponds pour avoir des détails", es: "Respondo para pedir detalles", de: "Ich antworte, um nach Details zu fragen", it: "Rispondo per chiedere dettagli", da: "Jeg svarer for at spørge om detaljer", bg: "Отговарям, за да поискам подробности" }, next: "test_bad" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Perfect. The \"new number / broken phone / urgent money\" trio is one of the most common scams in the world.", fr: "✅ Parfait. Le trio \"nouveau numéro / téléphone cassé / argent urgent\" est l'une des arnaques les plus répandues au monde.", es: "✅ Perfecto. El trío \"número nuevo / móvil roto / dinero urgente\" es una de las estafas más comunes del mundo.", de: "✅ Perfekt. Das Trio \"neue Nummer / kaputtes Handy / dringend Geld\" gehört zu den häufigsten Betrugsmaschen der Welt.", it: "✅ Perfetto. Il trio \"nuovo numero / telefono rotto / soldi urgenti\" è una delle truffe più diffuse al mondo.", da: "✅ Perfekt. Trioen \"nyt nummer / itu telefon / akutte penge\" er en af verdens mest udbredte svindlere.", bg: "✅ Перфектно. Триото \"нов номер / счупен телефон / спешни пари\" е една от най-разпространените измами в света." },
        { en: "You just \"turned the tables\" on them — which Janet researched and confirmed does not, in fact, involve actual furniture.", fr: "Tu viens de \"renvoyer l'ascenseur\" à l'arnaqueur — ce qui, Janet a vérifié, ne nécessite pas réellement d'ascenseur.", es: "Acabas de \"darle la vuelta a la tortilla\" — y Janet ha investigado y confirma que, de hecho, no hay ninguna tortilla involucrada.", de: "Du hast gerade den Spieß umgedreht — Janet hat recherchiert und bestätigt: tatsächlich ist dabei kein echter Spieß im Spiel.", it: "Hai appena \"ribaltato la frittata\" — e Janet ha verificato che, in realtà, non c'è nessuna frittata coinvolta.", da: "Du har lige \"vendt bøtten\" på dem — hvilket Janet har undersøgt og bekræftet ikke faktisk involverer en bøtte.", bg: "Току-що \"им обърна играта\" — което, Janet провери и потвърждава, всъщност не включва истинска игра." }
      ],
      next: "report"
    },
    test_bad: {
      bot: [
        { en: "Tempting, but every reply confirms your number is active. Don't engage — call the real person directly.", fr: "C'est tentant, mais chaque réponse confirme que ton numéro est actif. N'engage pas — appelle la vraie personne directement.", es: "Es tentador, pero cada respuesta confirma que tu número está activo. No entres al trapo — llama directamente a la persona real.", de: "Verlockend, aber jede Antwort bestätigt, dass deine Nummer aktiv ist. Lass dich nicht darauf ein — ruf die echte Person direkt an.", it: "Allettante, ma ogni risposta conferma che il tuo numero è attivo. Non rispondere — chiama direttamente la persona vera.", da: "Fristende, men hvert svar bekræfter, at dit nummer er aktivt. Lad være med at engagere dig — ring direkte til den rigtige person.", bg: "Изкушаващо, но всеки отговор потвърждава, че номерът ти е активен. Не се ангажирай — обади се директно на истинския човек." }
      ],
      next: "report"
    },
    report: {
      bot: [
        { en: "Bonus move: *report and delete.*", fr: "Bonus : *signale et supprime.*", es: "Movimiento extra: *denuncia y borra.*", de: "Bonus-Tipp: *melden und löschen.*", it: "Mossa bonus: *segnala ed elimina.*", da: "Bonus-træk: *anmeld og slet.*", bg: "Бонус ход: *подай сигнал и изтрий.*" },
        { en: "On iOS: long-press → Report Junk. On Android: the three-dot menu → Report spam.", fr: "Sur iOS : appui long → Signaler comme spam. Sur Android : menu trois points → Signaler comme spam.", es: "En iOS: pulsación larga → Reportar como basura. En Android: menú de tres puntos → Denunciar como spam.", de: "Auf iOS: lange drücken → Als Werbung melden. Auf Android: Drei-Punkte-Menü → Als Spam melden.", it: "Su iOS: pressione prolungata → Segnala come indesiderato. Su Android: menu tre puntini → Segnala come spam.", da: "På iOS: langt tryk → Anmeld som uønsket. På Android: trepunktsmenuen → Anmeld som spam.", bg: "На iOS: дълго натискане → Докладвай като спам. На Android: меню с три точки → Докладвай като спам." },
        { en: "In France, forward the SMS to *33700*. In the US, forward to *7726* (\"SPAM\").", fr: "En France, transfère le SMS au *33700*. Aux États-Unis, au *7726*.", es: "En Francia, reenvía el SMS al *33700*. En EE. UU., reenvíalo al *7726* (\"SPAM\").", de: "In Frankreich leite die SMS an *33700* weiter. In den USA an *7726* (\"SPAM\").", it: "In Francia, inoltra l'SMS al *33700*. Negli USA, al *7726* (\"SPAM\").", da: "I Frankrig videresendes sms'en til *33700*. I USA videresendes den til *7726* (\"SPAM\").", bg: "Във Франция препрати SMS-а на *33700*. В САЩ — на *7726* (\"SPAM\")." }
      ],
      choices: [{ label: { en: "Filed away", fr: "C'est noté", es: "Anotado", de: "Notiert", it: "Annotato", da: "Noteret", bg: "Записано" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Janet's golden rule: *if a text wants you to click, pay, or hurry — politely decline.*", fr: "Règle d'or de Janet : *si un SMS te pousse à cliquer, payer ou te dépêcher — refuse poliment.*", es: "Regla de oro de Janet: *si un SMS te empuja a hacer clic, pagar o darte prisa — declina amablemente.*", de: "Janets goldene Regel: *Wenn eine SMS dich zum Klicken, Zahlen oder Eilen drängt — höflich ablehnen.*", it: "La regola d'oro di Janet: *se un SMS ti spinge a cliccare, pagare o sbrigarti — rifiuta gentilmente.*", da: "Janets gyldne regel: *hvis en sms vil have dig til at klikke, betale eller skynde dig — afvis høfligt.*", bg: "Златното правило на Janet: *ако SMS те кара да кликнеш, платиш или бързаш — учтиво откажи.*" },
        { en: "Bye for now! 📵", fr: "À très vite ! 📵", es: "¡Hasta pronto! 📵", de: "Bis bald! 📵", it: "A presto! 📵", da: "Hej så længe! 📵", bg: "До скоро! 📵" }
      ],
      end: true
    }
  }
};
