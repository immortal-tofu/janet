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
    bg: "Smishing (SMS измами)",
    tr: "Smishing (SMS dolandırıcılıkları)"
  },
  description: {
    en: "Phishing's smaller, faster cousin — delivered to your pocket.",
    fr: "Le petit cousin rapide du phishing — livré direct dans ta poche.",
    es: "El primo más pequeño y rápido del phishing — entregado a tu bolsillo.",
    de: "Der kleinere, schnellere Cousin des Phishings — direkt in deine Tasche geliefert.",
    it: "Il cugino più piccolo e veloce del phishing — consegnato in tasca tua.",
    da: "Phishingens mindre, hurtigere fætter — leveret direkte i din lomme.",
    bg: "По-малкият, по-бърз братовчед на phishing — доставен в джоба ти.",
    tr: "Phishing'in daha küçük, daha hızlı kuzeni — doğrudan cebine teslim."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the world's silliest word.", fr: "Salut ! C'est Janet, avec le mot le plus ridicule du monde.", es: "¡Hola! Soy Janet, con la palabra más ridícula del mundo.", de: "Hallo! Hier ist Janet, mit dem albernsten Wort der Welt.", it: "Ciao! Sono Janet, con la parola più buffa del mondo.", da: "Hej! Det er Janet, med verdens fjolleteste ord.", bg: "Здравей! Аз съм Janet, с най-смешната дума на света.", tr: "Merhaba! Ben Janet, dünyanın en saçma kelimesiyle birlikte." },
        { en: "*Smishing.* It's SMS + phishing. Adorable on the tongue, very annoying in the pocket.", fr: "*Smishing.* C'est SMS + phishing. Adorable à prononcer, pénible à se prendre dans le téléphone.", es: "*Smishing.* Es SMS + phishing. Encantador al pronunciarla, muy molesto al recibirla.", de: "*Smishing.* Das ist SMS + Phishing. Niedlich auf der Zunge, sehr ärgerlich in der Tasche.", it: "*Smishing.* È SMS + phishing. Adorabile da dire, fastidiosissimo da ricevere.", da: "*Smishing.* Det er SMS + phishing. Sødt at sige, meget irriterende at modtage.", bg: "*Smishing.* Това е SMS + phishing. Сладка на езика, много досадна в джоба.", tr: "*Smishing.* SMS + phishing demek. Söylemesi şirin, cebe düştüğünde çok sinir bozucu." }
      ],
      choices: [{ label: { en: "Why is it so common?", fr: "Pourquoi c'est si fréquent ?", es: "¿Por qué es tan común?", de: "Warum ist das so verbreitet?", it: "Perché è così diffuso?", da: "Hvorfor er det så almindeligt?", bg: "Защо е толкова често срещано?", tr: "Neden bu kadar yaygın?" }, next: "why" }]
    },
    why: {
      bot: [
        { en: "Two reasons texts are a scammer's dream:", fr: "Deux raisons font des SMS le terrain de jeu rêvé des arnaqueurs :", es: "Dos razones por las que los SMS son un sueño para los estafadores:", de: "Zwei Gründe, warum SMS ein Traum für Betrüger sind:", it: "Due motivi per cui gli SMS sono il sogno dei truffatori:", da: "To grunde til at sms'er er en svindlers drøm:", bg: "Две причини, поради които SMS-ите са мечтата на измамника:", tr: "SMS'lerin dolandırıcının rüyası olmasının iki nedeni:" },
        { en: "1. They feel personal and urgent. Most of us read every SMS within minutes.", fr: "1. Ça a l'air personnel et urgent. La plupart d'entre nous ouvre ses SMS dans la minute.", es: "1. Se sienten personales y urgentes. La mayoría leemos cada SMS en cuestión de minutos.", de: "1. Sie wirken persönlich und dringend. Die meisten von uns lesen jede SMS innerhalb von Minuten.", it: "1. Sembrano personali e urgenti. Quasi tutti leggiamo ogni SMS nel giro di minuti.", da: "1. De føles personlige og presserende. De fleste af os læser hver sms inden for få minutter.", bg: "1. Усещат се лични и спешни. Повечето от нас четат всеки SMS в рамките на минути.", tr: "1. Kişisel ve acil hissettirirler. Çoğumuz her SMS'i dakikalar içinde okuruz." },
        { en: "2. There are no filters. Your email has a spam folder; your SMS app does not.", fr: "2. Aucun filtre. Ta boîte mail a son dossier spam ; ton appli SMS, elle, n'a rien.", es: "2. No hay filtros. Tu correo tiene una carpeta de spam; tu app de SMS no.", de: "2. Es gibt keine Filter. Dein E-Mail-Postfach hat einen Spam-Ordner; deine SMS-App nicht.", it: "2. Non ci sono filtri. La tua email ha una cartella spam; la tua app SMS no.", da: "2. Der er ingen filtre. Din e-mail har en spammappe; din sms-app har ikke.", bg: "2. Няма филтри. Имейлът ти има папка спам; SMS приложението — не.", tr: "2. Filtre yok. E-postanın spam klasörü var; SMS uygulamanın yok." }
      ],
      next: "templates"
    },
    templates: {
      bot: [
        { en: "The greatest hits, you've seen them all:", fr: "Les grands classiques, tu les as forcément déjà reçus :", es: "Los grandes éxitos, los has visto todos:", de: "Die Klassiker, die du alle schon gesehen hast:", it: "I grandi classici, li hai visti tutti:", da: "De største hits, du har set dem alle:", bg: "Най-големите хитове, виждала си ги всичките:", tr: "En büyük hitler, hepsini görmüşsündür:" },
        { en: "📦 \"Your package couldn't be delivered. Pay €1.49 customs fee here.\"", fr: "📦 \"Votre colis n'a pas pu être livré. Réglez 1,49 € de frais de douane ici.\"", es: "📦 \"Su paquete no se ha podido entregar. Pague 1,49 € de gastos de aduana aquí.\"", de: "📦 \"Ihr Paket konnte nicht zugestellt werden. Zahlen Sie hier 1,49 € Zollgebühr.\"", it: "📦 \"Il tuo pacco non ha potuto essere consegnato. Paga qui 1,49 € di spese doganali.\"", da: "📦 \"Din pakke kunne ikke leveres. Betal 1,49 € i toldgebyr her.\"", bg: "📦 \"Пратката Ви не можа да бъде доставена. Платете 1,49 € митническа такса тук.\"", tr: "📦 \"Kargonuz teslim edilemedi. 1,49 € gümrük ücretini buradan ödeyin.\"" },
        { en: "🏦 \"Suspicious login on your bank account. Confirm now.\"", fr: "🏦 \"Connexion suspecte sur votre compte bancaire. Confirmez maintenant.\"", es: "🏦 \"Inicio de sesión sospechoso en su cuenta bancaria. Confirme ahora.\"", de: "🏦 \"Verdächtige Anmeldung bei Ihrem Bankkonto. Jetzt bestätigen.\"", it: "🏦 \"Accesso sospetto sul tuo conto bancario. Conferma ora.\"", da: "🏦 \"Mistænkeligt login på din bankkonto. Bekræft nu.\"", bg: "🏦 \"Подозрителен вход в банковата Ви сметка. Потвърдете сега.\"", tr: "🏦 \"Banka hesabınızda şüpheli giriş tespit edildi. Hemen onaylayın.\"" },
        { en: "📨 \"Hi mom/dad, this is my new number. Phone broken.\"", fr: "📨 \"Coucou maman/papa, c'est mon nouveau numéro, mon tel est cassé.\"", es: "📨 \"Hola mamá/papá, este es mi nuevo número. El móvil se me rompió.\"", de: "📨 \"Hi Mama/Papa, das ist meine neue Nummer. Handy kaputt.\"", it: "📨 \"Ciao mamma/papà, questo è il mio nuovo numero. Telefono rotto.\"", da: "📨 \"Hej mor/far, det her er mit nye nummer. Telefon i stykker.\"", bg: "📨 \"Здрасти, мамо/тате, това е новият ми номер. Телефонът е счупен.\"", tr: "📨 \"Anne/baba, bu yeni numaram. Telefonum bozuldu.\"" },
        { en: "💸 \"You have a tax refund of €283. Click to receive.\"", fr: "💸 \"Vous avez un remboursement d'impôts de 283 € à percevoir. Cliquez ici pour le recevoir.\"", es: "💸 \"Tiene una devolución de Hacienda de 283 €. Pulse para recibirla.\"", de: "💸 \"Sie haben eine Steuerrückerstattung von 283 €. Klicken Sie zum Erhalt.\"", it: "💸 \"Hai un rimborso fiscale di 283 €. Clicca per riceverlo.\"", da: "💸 \"Du har et skatterefusion på 283 €. Klik for at modtage.\"", bg: "💸 \"Имате данъчно възстановяване от 283 €. Натиснете, за да получите.\"", tr: "💸 \"283 € tutarında vergi iadeniz var. Almak için tıklayın.\"" }
      ],
      next: "tricks"
    },
    tricks: {
      bot: [
        { en: "What makes them work:", fr: "Pourquoi ça marche :", es: "Por qué funcionan:", de: "Warum sie funktionieren:", it: "Perché funzionano:", da: "Hvorfor de virker:", bg: "Защо работят:", tr: "Neden işe yarıyorlar:" },
        { en: "🎯 *Tiny amount asked.* €1.49 feels too small to fight. They just want your card number.", fr: "🎯 *Une somme ridicule.* À 1,49 €, on ne va pas se battre. Ce qui les intéresse, c'est ton numéro de carte.", es: "🎯 *Importe ridículo.* 1,49 € parece demasiado poco como para pelear. Lo que quieren es tu número de tarjeta.", de: "🎯 *Winziger Betrag verlangt.* 1,49 € wirkt zu klein, um sich zu wehren. Sie wollen nur deine Kartennummer.", it: "🎯 *Cifra minuscola richiesta.* 1,49 € sembra troppo poco per protestare. Quello che vogliono è il numero della tua carta.", da: "🎯 *Lille beløb anmodet.* 1,49 € føles for lille til at kæmpe imod. De vil bare have dit kortnummer.", bg: "🎯 *Малка сума.* 1,49 € изглежда твърде малка, за да си струва спорът. Всъщност искат номера на картата ти.", tr: "🎯 *Çok küçük bir miktar isteniyor.* 1,49 € uğraşmaya değmeyecek kadar küçük gelir. Aslında istedikleri kart numaran." },
        { en: "🎯 *Hyper-short link.* `bit.ly/abc` hides where you're actually going.", fr: "🎯 *Lien raccourci à l'extrême.* `bit.ly/abc` masque complètement la destination.", es: "🎯 *Enlace ultra corto.* `bit.ly/abc` oculta a dónde vas realmente.", de: "🎯 *Ultrakurzer Link.* `bit.ly/abc` verbirgt, wohin du wirklich gehst.", it: "🎯 *Link ultra corto.* `bit.ly/abc` nasconde dove stai davvero andando.", da: "🎯 *Ultrakort link.* `bit.ly/abc` skjuler, hvor du i virkeligheden ender.", bg: "🎯 *Ултра-кратък линк.* `bit.ly/abc` скрива къде всъщност отиваш.", tr: "🎯 *Aşırı kısa link.* `bit.ly/abc` aslında nereye gittiğini gizler." },
        { en: "🎯 *Plausible timing.* You ordered something last week, of course you'd believe a delivery text.", fr: "🎯 *Timing crédible.* Tu as commandé un truc la semaine dernière : forcément, un SMS de livraison, ça passe crème.", es: "🎯 *Timing creíble.* Pediste algo la semana pasada, lógico que te creas un SMS de entrega.", de: "🎯 *Glaubwürdiges Timing.* Du hast letzte Woche etwas bestellt, klar glaubst du eine Liefer-SMS.", it: "🎯 *Tempistica plausibile.* Hai ordinato qualcosa la settimana scorsa, è naturale credere a un SMS di consegna.", da: "🎯 *Troværdig timing.* Du har bestilt noget i sidste uge — selvfølgelig tror du på en leverings-sms.", bg: "🎯 *Правдоподобно време.* Поръчала си нещо миналата седмица, нормално е да повярваш на SMS за доставка.", tr: "🎯 *İnandırıcı zamanlama.* Geçen hafta bir şey sipariş ettin, kargo mesajına inanman gayet doğal." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Test moment. You get: *\"Hi, this is your daughter, my phone broke, can you send 200€ to this IBAN? I'll explain tonight.\"*", fr: "Petit test. Tu reçois : *\"Coucou maman c'est ta fille mon tel est cassé tu peux m'envoyer 200€ sur cet IBAN je t'explique ce soir bisous\"*", es: "Momento de prueba. Recibes: *\"Hola, soy tu hija, se me rompió el móvil, ¿puedes enviarme 200 € a este IBAN? Te explico esta noche.\"*", de: "Test-Moment. Du bekommst: *\"Hi, ich bin's, deine Tochter, mein Handy ist kaputt, kannst du mir 200 € auf diese IBAN schicken? Ich erkläre es heute Abend.\"*", it: "Momento del test. Ricevi: *\"Ciao, sono tua figlia, il telefono si è rotto, puoi mandarmi 200 € su questo IBAN? Ti spiego stasera.\"*", da: "Test-øjeblik. Du modtager: *\"Hej, det er din datter, min telefon er gået i stykker, kan du sende 200 € til denne IBAN? Jeg forklarer i aften.\"*", bg: "Момент за тест. Получаваш: *\"Здрасти, дъщеря ти е, телефонът ми се счупи, можеш ли да ми пратиш 200 € на този IBAN? Ще ти обясня довечера.\"*", tr: "Test anı. Şu mesaj geliyor: *\"Anne, kızınım, telefonum bozuldu, bu IBAN'a 200 € gönderebilir misin? Akşam anlatırım.\"*" },
        { en: "What do you do?", fr: "Tu fais quoi ?", es: "¿Qué haces?", de: "Was machst du?", it: "Cosa fai?", da: "Hvad gør du?", bg: "Какво правиш?", tr: "Ne yaparsın?" }
      ],
      choices: [
        { label: { en: "Call my daughter's real number", fr: "J'appelle le vrai numéro de ma fille", es: "Llamo al número real de mi hija", de: "Ich rufe die echte Nummer meiner Tochter an", it: "Chiamo il vero numero di mia figlia", da: "Jeg ringer til min datters rigtige nummer", bg: "Звъня на истинския номер на дъщеря ми", tr: "Kızımın gerçek numarasını ararım" }, next: "test_good" },
        { label: { en: "Reply to ask details", fr: "Je réponds pour avoir des détails", es: "Respondo para pedir detalles", de: "Ich antworte, um nach Details zu fragen", it: "Rispondo per chiedere dettagli", da: "Jeg svarer for at spørge om detaljer", bg: "Отговарям, за да поискам подробности", tr: "Detay sormak için cevap yazarım" }, next: "test_bad" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Perfect. The \"new number / broken phone / urgent money\" trio is one of the most common scams in the world.", fr: "✅ Parfait. Le combo \"nouveau numéro / téléphone cassé / argent urgent\" est l'une des arnaques les plus répandues au monde.", es: "✅ Perfecto. El trío \"número nuevo / móvil roto / dinero urgente\" es una de las estafas más comunes del mundo.", de: "✅ Perfekt. Das Trio \"neue Nummer / kaputtes Handy / dringend Geld\" gehört zu den häufigsten Betrugsmaschen der Welt.", it: "✅ Perfetto. Il trio \"nuovo numero / telefono rotto / soldi urgenti\" è una delle truffe più diffuse al mondo.", da: "✅ Perfekt. Trioen \"nyt nummer / itu telefon / akutte penge\" er en af verdens mest udbredte svindlere.", bg: "✅ Перфектно. Триото \"нов номер / счупен телефон / спешни пари\" е една от най-разпространените измами в света.", tr: "✅ Mükemmel. \"Yeni numara / bozuk telefon / acil para\" üçlüsü dünyadaki en yaygın dolandırıcılıklardan biridir." },
        { en: "You just \"turned the tables\" on them — which Janet researched and confirmed does not, in fact, involve actual furniture.", fr: "Tu viens de \"retourner la situation\" à ton avantage — et Janet a vérifié, il n'y a pas de situation à retourner physiquement.", es: "Acabas de \"darle la vuelta a la tortilla\" — y Janet ha investigado y confirma que, de hecho, no hay ninguna tortilla involucrada.", de: "Du hast gerade den Spieß umgedreht — Janet hat recherchiert und bestätigt: tatsächlich ist dabei kein echter Spieß im Spiel.", it: "Hai appena \"ribaltato la frittata\" — e Janet ha verificato che, in realtà, non c'è nessuna frittata coinvolta.", da: "Du har lige \"vendt bøtten\" på dem — hvilket Janet har undersøgt og bekræftet ikke faktisk involverer en bøtte.", bg: "Току-що \"им обърна играта\" — което, Janet провери и потвърждава, всъщност не включва истинска игра.", tr: "Az önce onlara \"oyunlarını bozdun\" — ki Janet araştırdı ve teknik olarak ortada bozulan bir oyuncak olmadığını teyit etti." }
      ],
      next: "report"
    },
    test_bad: {
      bot: [
        { en: "Tempting, but every reply confirms your number is active. Don't engage — call the real person directly.", fr: "C'est tentant, mais chaque réponse confirme aux arnaqueurs que ton numéro est actif. Ne réponds pas — appelle directement la vraie personne.", es: "Es tentador, pero cada respuesta confirma que tu número está activo. No entres al trapo — llama directamente a la persona real.", de: "Verlockend, aber jede Antwort bestätigt, dass deine Nummer aktiv ist. Lass dich nicht darauf ein — ruf die echte Person direkt an.", it: "Allettante, ma ogni risposta conferma che il tuo numero è attivo. Non rispondere — chiama direttamente la persona vera.", da: "Fristende, men hvert svar bekræfter, at dit nummer er aktivt. Lad være med at engagere dig — ring direkte til den rigtige person.", bg: "Изкушаващо, но всеки отговор потвърждава, че номерът ти е активен. Не се ангажирай — обади се директно на истинския човек.", tr: "Cazip, ama her cevap numaranın aktif olduğunu doğrular. Muhatap olma — doğrudan gerçek kişiyi ara." }
      ],
      next: "report"
    },
    report: {
      bot: [
        { en: "Bonus move: *report and delete.*", fr: "Petit bonus : *signale, puis supprime.*", es: "Movimiento extra: *denuncia y borra.*", de: "Bonus-Tipp: *melden und löschen.*", it: "Mossa bonus: *segnala ed elimina.*", da: "Bonus-træk: *anmeld og slet.*", bg: "Бонус ход: *подай сигнал и изтрий.*", tr: "Bonus hamle: *bildir ve sil.*" },
        { en: "On iOS: long-press → Report Junk. On Android: the three-dot menu → Report spam.", fr: "Sur iOS : appui long → Signaler comme indésirable. Sur Android : menu trois points → Signaler comme spam.", es: "En iOS: pulsación larga → Reportar como basura. En Android: menú de tres puntos → Denunciar como spam.", de: "Auf iOS: lange drücken → Als Werbung melden. Auf Android: Drei-Punkte-Menü → Als Spam melden.", it: "Su iOS: pressione prolungata → Segnala come indesiderato. Su Android: menu tre puntini → Segnala come spam.", da: "På iOS: langt tryk → Anmeld som uønsket. På Android: trepunktsmenuen → Anmeld som spam.", bg: "На iOS: дълго натискане → Докладвай като спам. На Android: меню с три точки → Докладвай като спам.", tr: "iOS'ta: uzun bas → Önemsiz Olarak Bildir. Android'de: üç nokta menüsü → Spam olarak bildir." },
        { en: "In France, forward the SMS to *33700*. In the US, forward to *7726* (\"SPAM\").", fr: "En France, transfère le SMS au *33700*. Aux États-Unis, au *7726*.", es: "En Francia, reenvía el SMS al *33700*. En EE. UU., reenvíalo al *7726* (\"SPAM\").", de: "In Frankreich leite die SMS an *33700* weiter. In den USA an *7726* (\"SPAM\").", it: "In Francia, inoltra l'SMS al *33700*. Negli USA, al *7726* (\"SPAM\").", da: "I Frankrig videresendes sms'en til *33700*. I USA videresendes den til *7726* (\"SPAM\").", bg: "Във Франция препрати SMS-а на *33700*. В САЩ — на *7726* (\"SPAM\").", tr: "Fransa'da SMS'i *33700*'e yönlendir. ABD'de *7726*'ya yönlendir (\"SPAM\")." }
      ],
      choices: [{ label: { en: "Filed away", fr: "C'est noté", es: "Anotado", de: "Notiert", it: "Annotato", da: "Noteret", bg: "Записано", tr: "Not edildi" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Janet's golden rule: *if a text wants you to click, pay, or hurry — politely decline.*", fr: "La règle d'or de Janet : *si un SMS te presse de cliquer, de payer ou de te dépêcher — décline poliment.*", es: "Regla de oro de Janet: *si un SMS te empuja a hacer clic, pagar o darte prisa — declina amablemente.*", de: "Janets goldene Regel: *Wenn eine SMS dich zum Klicken, Zahlen oder Eilen drängt — höflich ablehnen.*", it: "La regola d'oro di Janet: *se un SMS ti spinge a cliccare, pagare o sbrigarti — rifiuta gentilmente.*", da: "Janets gyldne regel: *hvis en sms vil have dig til at klikke, betale eller skynde dig — afvis høfligt.*", bg: "Златното правило на Janet: *ако SMS те кара да кликнеш, платиш или бързаш — учтиво откажи.*", tr: "Janet'in altın kuralı: *bir SMS seni tıklatmaya, ödeme yapmaya veya acele etmeye zorluyorsa — kibarca reddet.*" },
        { en: "Bye for now! 📵", fr: "À très vite ! 📵", es: "¡Hasta pronto! 📵", de: "Bis bald! 📵", it: "A presto! 📵", da: "Hej så længe! 📵", bg: "До скоро! 📵", tr: "Şimdilik hoşça kal! 📵" }
      ],
      end: true
    }
  }
};
