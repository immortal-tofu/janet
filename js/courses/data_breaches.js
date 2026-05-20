window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.data_breaches = {
  id: "data_breaches",
  emoji: "🪣",
  duration: 3,
  karma: 30,
  title: {
    en: "Data breaches",
    fr: "Fuites de données",
    es: "Filtraciones de datos",
    de: "Datenpannen",
    it: "Violazioni di dati",
    da: "Datalæk",
    bg: "Изтичания на данни",
    tr: "Veri ihlalleri"
  },
  description: {
    en: "What happens when companies lose your data — and what to do.",
    fr: "Ce qui se passe quand des entreprises perdent tes données — et que faire.",
    es: "Qué pasa cuando las empresas pierden tus datos — y qué hacer.",
    de: "Was passiert, wenn Unternehmen deine Daten verlieren — und was zu tun ist.",
    it: "Cosa succede quando le aziende perdono i tuoi dati — e cosa fare.",
    da: "Hvad sker der, når virksomheder mister dine data — og hvad gør man.",
    bg: "Какво се случва, когато компаниите загубят данните ти — и какво да правиш.",
    tr: "Şirketler verilerini kaybettiğinde ne olur — ve ne yapmalısın."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with a reality check I am cheerfully obligated to deliver.", fr: "Salut ! C'est Janet, avec un retour à la réalité que je dois te livrer joyeusement.", es: "¡Hola! Soy Janet, con un baño de realidad que tengo el alegre deber de darte.", de: "Hallo! Janet hier, mit einer Realitätsdosis, die ich dir fröhlich überreichen muss.", it: "Ciao! Sono Janet, con una bella dose di realtà che ho il piacere di consegnarti.", da: "Hej! Det er Janet, med en realitetstjek jeg muntert er nødt til at levere.", bg: "Здравей! Аз съм Janet, с малко реалност, която с радост съм длъжна да ти поднеса.", tr: "Merhaba! Ben Janet, sana neşeyle iletmekle yükümlü olduğum bir gerçeklik dozuyla geldim." },
        { en: "In the past 15 years, almost every service you have ever used has had a data leak. Per my records — and I checked twice.", fr: "Ces 15 dernières années, presque tous les services que tu as utilisés ont eu une fuite de données. Selon mes registres — j'ai vérifié deux fois.", es: "En los últimos 15 años, casi todos los servicios que has usado han sufrido una filtración de datos. Según mis registros — y lo he comprobado dos veces.", de: "In den letzten 15 Jahren hatte fast jeder Dienst, den du je benutzt hast, ein Datenleck. Laut meinen Aufzeichnungen — und ich habe zweimal nachgeschaut.", it: "Negli ultimi 15 anni, quasi tutti i servizi che hai mai usato hanno avuto una fuga di dati. Secondo i miei archivi — e ho controllato due volte.", da: "I de seneste 15 år har næsten alle de tjenester, du nogensinde har brugt, haft et datalæk. Ifølge mine optegnelser — og jeg tjekkede to gange.", bg: "През последните 15 години почти всяка услуга, която някога си използвал, е имала изтичане на данни. Според моите регистри — и проверих два пъти.", tr: "Son 15 yılda, hiç kullandığın neredeyse her servisin bir veri sızıntısı oldu. Kayıtlarıma göre — ve iki kez kontrol ettim." },
        { en: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, that random MMORPG forum from 2009. The list is, factually, very long.", fr: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, ce forum de MMORPG de 2009. La liste est, factuellement, très longue.", es: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, aquel foro random de MMORPG de 2009. La lista es, factualmente, muy larga.", de: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, dieses zufällige MMORPG-Forum von 2009. Die Liste ist, faktisch, sehr lang.", it: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, quel forum a caso di MMORPG del 2009. La lista è, fattualmente, molto lunga.", da: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, det tilfældige MMORPG-forum fra 2009. Listen er, faktuelt, meget lang.", bg: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, онзи произволен MMORPG форум от 2009. Списъкът е, технически, много дълъг.", tr: "Yahoo, LinkedIn, Adobe, Dropbox, Marriott, 2009'dan kalma o rastgele MMORPG forumu. Liste, fiilen, çok uzun." }
      ],
      choices: [{ label: { en: "What gets leaked?", fr: "Qu'est-ce qui fuite ?", es: "¿Qué se filtra?", de: "Was wird geleakt?", it: "Cosa viene rubato?", da: "Hvad lækker?", bg: "Какво изтича?", tr: "Ne sızıyor?" }, next: "what" }]
    },
    what: {
      bot: [
        { en: "Usually some mix of:", fr: "En général un mélange de :", es: "Normalmente una mezcla de:", de: "Meistens eine Mischung aus:", it: "Di solito un mix di:", da: "Som regel en blanding af:", bg: "Обикновено комбинация от:", tr: "Genellikle şunların bir karışımı:" },
        { en: "📧 Email addresses", fr: "📧 Adresses email", es: "📧 Direcciones de correo", de: "📧 E-Mail-Adressen", it: "📧 Indirizzi email", da: "📧 E-mailadresser", bg: "📧 Имейл адреси", tr: "📧 E-posta adresleri" },
        { en: "🔑 Passwords (sometimes in plain text, sometimes scrambled)", fr: "🔑 Mots de passe (parfois en clair, parfois brouillés)", es: "🔑 Contraseñas (a veces en texto plano, a veces cifradas)", de: "🔑 Passwörter (mal im Klartext, mal verschlüsselt)", it: "🔑 Password (a volte in chiaro, a volte cifrate)", da: "🔑 Adgangskoder (nogle gange i klartekst, nogle gange krypteret)", bg: "🔑 Пароли (понякога в чист текст, понякога разбъркани)", tr: "🔑 Parolalar (bazen düz metin, bazen karıştırılmış)" },
        { en: "📞 Phone numbers, names, addresses", fr: "📞 Numéros de téléphone, noms, adresses", es: "📞 Números de teléfono, nombres, direcciones", de: "📞 Telefonnummern, Namen, Adressen", it: "📞 Numeri di telefono, nomi, indirizzi", da: "📞 Telefonnumre, navne, adresser", bg: "📞 Телефонни номера, имена, адреси", tr: "📞 Telefon numaraları, isimler, adresler" },
        { en: "💳 Sometimes payment info or ID documents", fr: "💳 Parfois les infos bancaires ou documents d'identité", es: "💳 A veces datos de pago o documentos de identidad", de: "💳 Manchmal Zahlungsdaten oder Ausweisdokumente", it: "💳 A volte dati di pagamento o documenti d'identità", da: "💳 Nogle gange betalingsoplysninger eller ID-dokumenter", bg: "💳 Понякога платежна информация или документи за самоличност", tr: "💳 Bazen ödeme bilgileri veya kimlik belgeleri" }
      ],
      next: "consequence"
    },
    consequence: {
      bot: [
        { en: "Once leaked, the data circulates *forever*. Scammers buy bundles of it for cheap.", fr: "Une fois fuitée, la donnée circule *pour toujours*. Les arnaqueurs en achètent des lots pas cher.", es: "Una vez filtrados, los datos circulan *para siempre*. Los estafadores compran paquetes baratos.", de: "Einmal geleakt, kursieren die Daten *für immer*. Betrüger kaufen ganze Pakete davon zum Spottpreis.", it: "Una volta trapelati, i dati circolano *per sempre*. I truffatori ne comprano pacchetti a poco prezzo.", da: "Når data først er lækket, cirkulerer de *for evigt*. Svindlere køber dem i bundter for en slik.", bg: "Веднъж изтекли, данните циркулират *завинаги*. Измамниците купуват цели пакети на безценица.", tr: "Sızdırılan veri *sonsuza dek* dolaşır. Dolandırıcılar bundan paket paket ucuza satın alır." },
        { en: "That's why you get spam to email addresses you only used once.", fr: "C'est pour ça que tu reçois du spam sur des adresses email que tu n'as utilisées qu'une fois.", es: "Por eso recibes spam en direcciones de correo que solo usaste una vez.", de: "Deshalb bekommst du Spam an E-Mail-Adressen, die du nur ein einziges Mal benutzt hast.", it: "Ecco perché ricevi spam su indirizzi email che hai usato una volta sola.", da: "Det er derfor, du får spam på e-mailadresser, du kun har brugt én gang.", bg: "Ето защо получаваш спам на имейл адреси, които си използвал само веднъж.", tr: "Sadece bir kez kullandığın e-posta adreslerine spam gelmesinin sebebi bu." }
      ],
      next: "check"
    },
    check: {
      bot: [
        { en: "Want to see if your email's been in a leak? Go to *haveibeenpwned.com* — type your email, get the list.", fr: "Tu veux savoir si ton email a fuité ? Va sur *haveibeenpwned.com* — tape ton email, tu auras la liste.", es: "¿Quieres saber si tu correo ha estado en una filtración? Entra en *haveibeenpwned.com* — escribe tu email y verás la lista.", de: "Willst du wissen, ob deine E-Mail in einem Leak war? Geh auf *haveibeenpwned.com* — E-Mail eingeben, Liste erhalten.", it: "Vuoi sapere se la tua email è finita in una fuga? Vai su *haveibeenpwned.com* — scrivi la tua email e ottieni l'elenco.", da: "Vil du se, om din e-mail har været i et læk? Gå til *haveibeenpwned.com* — skriv din e-mail, og få listen.", bg: "Искаш ли да видиш дали имейлът ти е изтичал? Отиди на *haveibeenpwned.com* — въведи имейла си, ще получиш списък.", tr: "E-postanın bir sızıntıda olup olmadığını görmek ister misin? *haveibeenpwned.com* adresine git — e-postanı yaz, listeyi al." },
        { en: "It's free, run by a security researcher, and it does not store what you type.", fr: "C'est gratuit, géré par un chercheur en sécurité, et ça n'enregistre pas ce que tu tapes.", es: "Es gratis, lo gestiona un investigador de seguridad y no guarda lo que escribes.", de: "Es ist kostenlos, wird von einem Sicherheitsforscher betrieben und speichert nicht, was du eingibst.", it: "È gratis, gestito da un ricercatore di sicurezza, e non memorizza ciò che digiti.", da: "Det er gratis, drevet af en sikkerhedsforsker, og det gemmer ikke det, du skriver.", bg: "Безплатно е, поддържа се от изследовател по сигурност и не запазва това, което въвеждаш.", tr: "Ücretsiz, bir güvenlik araştırmacısı tarafından işletiliyor ve yazdığını saklamıyor." }
      ],
      choices: [{ label: { en: "What do I do if mine's there?", fr: "Et si la mienne y est ?", es: "¿Y si la mía está ahí?", de: "Was tue ich, wenn meine dabei ist?", it: "E se la mia c'è?", da: "Hvad gør jeg, hvis min er der?", bg: "Какво да правя, ако моят е там?", tr: "Benimki oradaysa ne yapmalıyım?" }, next: "action" }]
    },
    action: {
      bot: [
        { en: "Three moves:", fr: "Trois actions :", es: "Tres movimientos:", de: "Drei Schritte:", it: "Tre mosse:", da: "Tre træk:", bg: "Три действия:", tr: "Üç hamle:" },
        { en: "1. Change the password on that account — and on any other account where you reused it.", fr: "1. Change le mot de passe de ce compte — et de tous les comptes où tu l'as réutilisé.", es: "1. Cambia la contraseña de esa cuenta — y de cualquier otra donde la hayas reutilizado.", de: "1. Ändere das Passwort dieses Kontos — und jedes anderen Kontos, bei dem du es wiederverwendet hast.", it: "1. Cambia la password di quell'account — e di qualunque altro dove l'hai riutilizzata.", da: "1. Skift adgangskoden på den konto — og på enhver anden konto, hvor du har genbrugt den.", bg: "1. Смени паролата на този акаунт — и на всеки друг акаунт, където си я използвал повторно.", tr: "1. O hesabın parolasını değiştir — ve aynı parolayı tekrar kullandığın diğer tüm hesaplarda da." },
        { en: "2. Turn on 2FA wherever you can.", fr: "2. Active la 2FA partout où c'est possible.", es: "2. Activa la 2FA donde puedas.", de: "2. Aktiviere 2FA, wo immer es geht.", it: "2. Attiva la 2FA ovunque sia possibile.", da: "2. Slå 2FA til, hvor du kan.", bg: "2. Включи 2FA навсякъде, където можеш.", tr: "2. Yapabildiğin her yerde 2FA'yı aç." },
        { en: "3. Be extra suspicious of emails or texts mentioning the leaked service for the next few months.", fr: "3. Méfie-toi tout particulièrement des emails ou SMS qui mentionnent le service piraté, pendant quelques mois.", es: "3. Desconfía especialmente de los correos o SMS que mencionen el servicio filtrado durante los próximos meses.", de: "3. Sei in den nächsten Monaten besonders misstrauisch bei E-Mails oder SMS, die den geleakten Dienst erwähnen.", it: "3. Diffida in modo particolare di email o SMS che menzionano il servizio violato per i prossimi mesi.", da: "3. Vær ekstra mistænksom over for e-mails eller sms'er, der nævner den lækkede tjeneste, i de næste par måneder.", bg: "3. Бъди особено подозрителен към имейли или съобщения, които споменават изтеклата услуга, през следващите няколко месеца.", tr: "3. Önümüzdeki birkaç ay boyunca, sızdırılan servisten bahseden e-postalara veya mesajlara karşı ekstra şüpheci ol." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "The long-term medicine: a password manager + unique passwords for every site. Leaks become a mild annoyance, not a catastrophe.", fr: "Le remède long terme : un gestionnaire + un mot de passe unique par site. Une fuite devient un agacement, pas une catastrophe.", es: "El remedio a largo plazo: un gestor de contraseñas + contraseñas únicas para cada sitio. Las filtraciones se vuelven una pequeña molestia, no una catástrofe.", de: "Die Langzeitmedizin: ein Passwort-Manager + einzigartige Passwörter für jede Seite. Lecks werden zu einem kleinen Ärgernis, nicht zur Katastrophe.", it: "La cura a lungo termine: un gestore di password + password uniche per ogni sito. Le fughe diventano un piccolo fastidio, non una catastrofe.", da: "Den langsigtede medicin: en adgangskodemanager + unikke adgangskoder til hvert site. Læk bliver en mild irritation, ikke en katastrofe.", bg: "Дългосрочното лекарство: мениджър на пароли + уникална парола за всеки сайт. Изтичанията се превръщат в леко неудобство, а не в катастрофа.", tr: "Uzun vadeli ilaç: bir parola yöneticisi + her site için benzersiz parolalar. Sızıntılar artık felaket değil, küçük bir sıkıntı olur." },
        { en: "Janet is, factually, rooting for you. Bye for now! 🧯", fr: "Janet, factuellement, croit en toi. À très vite ! 🧯", es: "Janet, factualmente, te está animando. ¡Hasta pronto! 🧯", de: "Janet drückt dir, faktisch, die Daumen. Bis bald! 🧯", it: "Janet, fattualmente, fa il tifo per te. A presto! 🧯", da: "Janet hepper, faktuelt, på dig. Vi ses! 🧯", bg: "Janet, технически, държи палци за теб. До скоро! 🧯", tr: "Janet, fiilen, sana tezahürat yapıyor. Şimdilik hoşça kal! 🧯" }
      ],
      end: true
    }
  }
};
