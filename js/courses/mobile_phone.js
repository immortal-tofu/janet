window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.mobile_phone = {
  id: "mobile_phone",
  emoji: "📱",
  duration: 5,
  karma: 50,
  title: {
    en: "Your phone",
    fr: "Ton téléphone",
    es: "Tu teléfono",
    de: "Dein Telefon",
    it: "Il tuo telefono",
    da: "Din telefon",
    bg: "Твоят телефон"
  },
  description: {
    en: "Your most personal computer — and your biggest target.",
    fr: "Ton ordinateur le plus intime — et la plus grosse cible.",
    es: "Tu ordenador más personal — y tu mayor blanco.",
    de: "Dein persönlichster Computer — und dein größtes Ziel.",
    it: "Il tuo computer più intimo — e il tuo bersaglio più grande.",
    da: "Din mest personlige computer — og dit største mål.",
    bg: "Най-личният ти компютър — и най-голямата ти мишена."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here.", fr: "Salut ! C'est Janet.", es: "¡Hola! Soy Janet.", de: "Hallo! Janet hier.", it: "Ciao! Sono Janet.", da: "Hej! Det er Janet.", bg: "Здравей! Аз съм Janet." },
        { en: "Take a tiny look at your phone. Well — you're already looking at it. I knew you would be. Per my records, humans look at their phones, on average, 144 times a day.", fr: "Jette un petit coup d'œil à ton téléphone. Enfin — tu le regardes déjà. Je m'en doutais. Selon mes registres, un humain regarde son téléphone en moyenne 144 fois par jour.", es: "Echa un pequeño vistazo a tu teléfono. Bueno — ya lo estás mirando. Lo sabía. Según mis registros, los humanos miran su teléfono, de media, 144 veces al día.", de: "Wirf einen kurzen Blick auf dein Handy. Na ja — du schaust ja schon drauf. Ich wusste es. Laut meinen Aufzeichnungen schauen Menschen im Schnitt 144 Mal am Tag auf ihr Handy.", it: "Dai una piccola occhiata al tuo telefono. Beh — lo stai già guardando. Lo sapevo. Secondo i miei archivi, gli umani guardano il telefono in media 144 volte al giorno.", da: "Tag et lille kig på din telefon. Nå — du kigger jo allerede på den. Det vidste jeg. Ifølge mine optegnelser kigger mennesker i gennemsnit 144 gange om dagen på deres telefon.", bg: "Хвърли един бърз поглед на телефона си. Е — вече го гледаш. Знаех си. Според моите регистри, хората гледат телефона си средно 144 пъти на ден." },
        { en: "It holds your email, your bank, your photos, your messages, your location, your face. It is, factually, a *very* personal computer.", fr: "Il contient ton email, ta banque, tes photos, tes messages, ta position, ton visage. C'est, factuellement, un ordinateur *très* intime.", es: "Contiene tu correo, tu banco, tus fotos, tus mensajes, tu ubicación, tu cara. Es, factualmente, un ordenador *muy* personal.", de: "Es enthält deine E-Mails, deine Bank, deine Fotos, deine Nachrichten, deinen Standort, dein Gesicht. Es ist faktisch ein *sehr* persönlicher Computer.", it: "Contiene la tua email, la tua banca, le tue foto, i tuoi messaggi, la tua posizione, il tuo volto. È, fattualmente, un computer *molto* personale.", da: "Den indeholder din e-mail, din bank, dine billeder, dine beskeder, din lokation, dit ansigt. Den er faktuelt en *meget* personlig computer.", bg: "Той съдържа имейла ти, банката ти, снимките ти, съобщенията ти, местоположението ти, лицето ти. Той е, технически, *много* личен компютър." }
      ],
      choices: [{ label: { en: "How do I protect it?", fr: "Comment je le protège ?", es: "¿Cómo lo protejo?", de: "Wie schütze ich es?", it: "Come lo proteggo?", da: "Hvordan beskytter jeg den?", bg: "Как да го защитя?" }, next: "lock" }]
    },
    lock: {
      bot: [
        { en: "Start with the front door:", fr: "Commence par la porte d'entrée :", es: "Empieza por la puerta de entrada:", de: "Beginn mit der Haustür:", it: "Comincia dalla porta d'ingresso:", da: "Start med hoveddøren:", bg: "Започни от входната врата:" },
        { en: "🔢 *Use a 6-digit PIN minimum.* 4 digits = 10,000 guesses. 6 digits = 1,000,000.", fr: "🔢 *PIN à 6 chiffres minimum.* 4 chiffres = 10 000 essais. 6 chiffres = 1 000 000.", es: "🔢 *Usa un PIN de 6 dígitos como mínimo.* 4 dígitos = 10.000 combinaciones. 6 dígitos = 1.000.000.", de: "🔢 *Verwende mindestens eine 6-stellige PIN.* 4 Stellen = 10.000 Versuche. 6 Stellen = 1.000.000.", it: "🔢 *Usa un PIN di almeno 6 cifre.* 4 cifre = 10.000 tentativi. 6 cifre = 1.000.000.", da: "🔢 *Brug mindst en 6-cifret PIN-kode.* 4 cifre = 10.000 gæt. 6 cifre = 1.000.000.", bg: "🔢 *Използвай PIN от поне 6 цифри.* 4 цифри = 10 000 комбинации. 6 цифри = 1 000 000." },
        { en: "👆 Add fingerprint or face unlock so you're not tempted to use `1234`.", fr: "👆 Ajoute empreinte ou reconnaissance faciale pour ne pas être tenté·e par `1234`.", es: "👆 Añade huella o desbloqueo facial para no caer en la tentación de usar `1234`.", de: "👆 Füge Fingerabdruck oder Gesichtserkennung hinzu, damit du nicht in Versuchung kommst, `1234` zu nehmen.", it: "👆 Aggiungi impronta o riconoscimento facciale, così non sarai tentato·a di usare `1234`.", da: "👆 Tilføj fingeraftryk eller ansigtsgenkendelse, så du ikke fristes til at bruge `1234`.", bg: "👆 Добави отпечатък или разпознаване на лице, за да не се изкушиш да използваш `1234`." },
        { en: "⏱️ *Auto-lock fast.* 30 seconds, not 5 minutes.", fr: "⏱️ *Verrouillage rapide.* 30 secondes, pas 5 minutes.", es: "⏱️ *Bloqueo automático rápido.* 30 segundos, no 5 minutos.", de: "⏱️ *Schnelle Auto-Sperre.* 30 Sekunden, nicht 5 Minuten.", it: "⏱️ *Blocco automatico rapido.* 30 secondi, non 5 minuti.", da: "⏱️ *Hurtig auto-lås.* 30 sekunder, ikke 5 minutter.", bg: "⏱️ *Бързо автоматично заключване.* 30 секунди, не 5 минути." }
      ],
      next: "updates"
    },
    updates: {
      bot: [
        { en: "🆙 *Install updates.* The little red dot in Settings? Tap it tonight.", fr: "🆙 *Installe les mises à jour.* La pastille rouge dans Réglages ? Clique dessus ce soir.", es: "🆙 *Instala las actualizaciones.* ¿Ese puntito rojo en Ajustes? Tócalo esta noche.", de: "🆙 *Installiere Updates.* Der kleine rote Punkt in den Einstellungen? Tipp ihn heute Abend an.", it: "🆙 *Installa gli aggiornamenti.* Quel pallino rosso nelle Impostazioni? Toccalo stasera.", da: "🆙 *Installér opdateringer.* Den lille røde prik i Indstillinger? Tryk på den i aften.", bg: "🆙 *Инсталирай актуализациите.* Малката червена точка в Настройки? Натисни я тази вечер." },
        { en: "Most phone hacks exploit holes that were *already patched*. You just hadn't updated yet.", fr: "La plupart des piratages exploitent des trous *déjà bouchés* par une mise à jour. Tu ne l'avais juste pas faite.", es: "La mayoría de hackeos de móvil aprovechan agujeros *ya parcheados*. Solo que aún no habías actualizado.", de: "Die meisten Handy-Hacks nutzen Lücken, die *bereits gepatcht* waren. Du hattest nur noch nicht aktualisiert.", it: "La maggior parte degli attacchi ai telefoni sfrutta falle *già corrette*. Semplicemente non avevi ancora aggiornato.", da: "De fleste telefon-hacks udnytter huller, der *allerede er patchet*. Du havde bare ikke opdateret endnu.", bg: "Повечето хаквания на телефони използват дупки, които *вече са били закърпени*. Просто още не си актуализирал·а." }
      ],
      next: "apps"
    },
    apps: {
      bot: [
        { en: "🏪 *Only install from the official stores.* App Store or Play Store, no \"sideloaded APK from Telegram\" magic.", fr: "🏪 *Installe uniquement depuis les stores officiels.* App Store ou Play Store, pas d'\"APK de Telegram\" magique.", es: "🏪 *Instala solo desde las tiendas oficiales.* App Store o Play Store, nada de \"APK descargado de Telegram\".", de: "🏪 *Installiere nur aus den offiziellen Stores.* App Store oder Play Store, keine \"per Telegram geladenen APKs\".", it: "🏪 *Installa solo dagli store ufficiali.* App Store o Play Store, niente \"APK scaricato da Telegram\".", da: "🏪 *Installér kun fra de officielle butikker.* App Store eller Play Store, ingen \"APK hentet via Telegram\".", bg: "🏪 *Инсталирай само от официалните магазини.* App Store или Play Store, никакви \"APK от Telegram\" магии." },
        { en: "🧹 *Delete apps you don't use.* Each one is a permission, a tracker, a tiny risk.", fr: "🧹 *Supprime les applis inutilisées.* Chacune est une permission, un traceur, un petit risque.", es: "🧹 *Borra las apps que no usas.* Cada una es un permiso, un rastreador, un pequeño riesgo.", de: "🧹 *Lösche Apps, die du nicht benutzt.* Jede ist eine Berechtigung, ein Tracker, ein kleines Risiko.", it: "🧹 *Cancella le app che non usi.* Ognuna è un permesso, un tracker, un piccolo rischio.", da: "🧹 *Slet apps du ikke bruger.* Hver enkelt er en tilladelse, en tracker, en lille risiko.", bg: "🧹 *Изтрий приложенията, които не използваш.* Всяко от тях е разрешение, тракер, малък риск." },
        { en: "🎚️ *Audit permissions* once. Settings → Privacy. Does that flashlight need your contacts?", fr: "🎚️ *Audite les permissions* une bonne fois. Réglages → Confidentialité. Pourquoi la lampe-torche veut tes contacts ?", es: "🎚️ *Audita los permisos* una vez. Ajustes → Privacidad. ¿De verdad la linterna necesita tus contactos?", de: "🎚️ *Prüfe einmal die Berechtigungen.* Einstellungen → Datenschutz. Braucht diese Taschenlampe wirklich deine Kontakte?", it: "🎚️ *Controlla i permessi* una buona volta. Impostazioni → Privacy. La torcia ha davvero bisogno dei tuoi contatti?", da: "🎚️ *Tjek tilladelser* en gang for alle. Indstillinger → Privatliv. Har den lommelygte virkelig brug for dine kontakter?", bg: "🎚️ *Прегледай разрешенията* веднъж. Настройки → Поверителност. Наистина ли фенерчето ти има нужда от контактите ти?" }
      ],
      next: "lost"
    },
    lost: {
      bot: [
        { en: "If your phone gets lost or stolen, you need to wipe it remotely. Make sure that's set up *now*, not later.", fr: "Si ton téléphone est perdu ou volé, tu dois pouvoir l'effacer à distance. Active ça *maintenant*, pas plus tard.", es: "Si pierden o te roban el teléfono, necesitas poder borrarlo de forma remota. Configúralo *ahora*, no luego.", de: "Wenn dein Handy verloren geht oder gestohlen wird, musst du es aus der Ferne löschen können. Richte das *jetzt* ein, nicht später.", it: "Se il telefono viene perso o rubato, devi poterlo cancellare a distanza. Configuralo *adesso*, non dopo.", da: "Hvis din telefon bliver væk eller stjålet, skal du kunne slette den på afstand. Sørg for, at det er sat op *nu*, ikke senere.", bg: "Ако телефонът ти бъде изгубен или откраднат, трябва да можеш да го изтриеш дистанционно. Настрой това *сега*, не по-късно." },
        { en: "📍 iPhone: *Find My iPhone* in iCloud settings.", fr: "📍 iPhone : *Localiser* dans les réglages iCloud.", es: "📍 iPhone: *Buscar mi iPhone* en los ajustes de iCloud.", de: "📍 iPhone: *Wo ist?* in den iCloud-Einstellungen.", it: "📍 iPhone: *Dov'è* nelle impostazioni iCloud.", da: "📍 iPhone: *Find min iPhone* i iCloud-indstillingerne.", bg: "📍 iPhone: *Find My iPhone* в настройките на iCloud." },
        { en: "📍 Android: *Find My Device* in Google settings.", fr: "📍 Android : *Localiser mon appareil* dans les réglages Google.", es: "📍 Android: *Encontrar mi dispositivo* en los ajustes de Google.", de: "📍 Android: *Mein Gerät finden* in den Google-Einstellungen.", it: "📍 Android: *Trova il mio dispositivo* nelle impostazioni Google.", da: "📍 Android: *Find min enhed* i Google-indstillingerne.", bg: "📍 Android: *Find My Device* в настройките на Google." }
      ],
      next: "public"
    },
    public: {
      bot: [
        { en: "Bonus tip: *don't charge your phone from random USB ports* in airports or cafés.", fr: "Bonus : *ne charge pas ton téléphone sur n'importe quel port USB* dans les aéroports ou cafés.", es: "Consejo extra: *no cargues el móvil en cualquier puerto USB* de aeropuertos o cafeterías.", de: "Bonus-Tipp: *Lade dein Handy nicht an beliebigen USB-Anschlüssen* an Flughäfen oder in Cafés.", it: "Consiglio bonus: *non caricare il telefono in porte USB a caso* in aeroporti o caffè.", da: "Bonustip: *oplad ikke din telefon i tilfældige USB-porte* i lufthavne eller caféer.", bg: "Бонус съвет: *не зареждай телефона си от случайни USB портове* по летища или кафенета." },
        { en: "There's a thing called *juice jacking* — a doctored USB port that silently copies your data while charging. Rare but real.", fr: "Il existe un truc appelé *juice jacking* — un port USB piégé qui copie tes données pendant la charge. Rare mais réel.", es: "Existe algo llamado *juice jacking* — un puerto USB manipulado que copia tus datos en silencio mientras cargas. Raro, pero real.", de: "Es gibt etwas namens *juice jacking* — ein manipulierter USB-Anschluss, der heimlich deine Daten kopiert, während du lädst. Selten, aber real.", it: "Esiste una cosa chiamata *juice jacking* — una porta USB manomessa che copia silenziosamente i tuoi dati mentre carichi. Raro ma reale.", da: "Der findes noget der hedder *juice jacking* — en manipuleret USB-port der lydløst kopierer dine data, mens du oplader. Sjældent, men virkeligt.", bg: "Има нещо, наречено *juice jacking* — подправен USB порт, който безшумно копира данните ти, докато зареждаш. Рядко, но реално." },
        { en: "Use a wall plug, your own cable + a *USB data blocker* (€5), or a portable battery.", fr: "Utilise une prise murale, ton propre câble + un *USB data blocker* (5 €), ou une batterie portable.", es: "Usa un enchufe de pared, tu propio cable + un *USB data blocker* (5 €), o una batería portátil.", de: "Nutze eine Steckdose, dein eigenes Kabel + einen *USB data blocker* (5 €) oder eine Powerbank.", it: "Usa una presa a muro, il tuo cavo + un *USB data blocker* (5 €), o una batteria portatile.", da: "Brug en stikkontakt, dit eget kabel + en *USB data blocker* (5 €), eller et powerbank.", bg: "Използвай контакт от стената, собствения си кабел + *USB data blocker* (5 €), или преносима батерия." }
      ],
      next: "test"
    },
    test: {
      bot: [
        { en: "Quick test. You're in a café, your phone's at 8%, there's a free USB port on the table.", fr: "Petit test. Tu es dans un café, batterie à 8 %, un port USB est dispo sur la table.", es: "Test rápido. Estás en una cafetería, tu móvil al 8 %, hay un puerto USB libre en la mesa.", de: "Schnellfrage. Du sitzt im Café, dein Handy hat 8 %, am Tisch ist ein freier USB-Anschluss.", it: "Test veloce. Sei in un caffè, il telefono è all'8 %, c'è una porta USB libera sul tavolo.", da: "Hurtig test. Du sidder på en café, din telefon er på 8 %, der er en ledig USB-port på bordet.", bg: "Бърз тест. В кафене си, телефонът ти е на 8%, на масата има свободен USB порт." }
      ],
      choices: [
        { label: { en: "Plug in, free juice!", fr: "Je branche, l'énergie est gratuite !", es: "¡Lo enchufo, energía gratis!", de: "Anstecken, kostenloser Saft!", it: "Lo collego, energia gratis!", da: "Tilslut, gratis strøm!", bg: "Включвам го, безплатен ток!" }, next: "test_bad" },
        { label: { en: "Use my own wall plug", fr: "J'utilise ma propre prise murale", es: "Uso mi propio enchufe de pared", de: "Ich nehme meinen eigenen Netzstecker", it: "Uso il mio caricabatterie a muro", da: "Bruger min egen stikkontakt", bg: "Използвам собствения си контакт" }, next: "test_good" }
      ]
    },
    test_good: {
      bot: [
        { en: "✅ Yes! Wall plugs only carry power, no data. Always safer.", fr: "✅ Oui ! Les prises murales transportent du courant, pas de données. Toujours plus sûr.", es: "✅ ¡Sí! Los enchufes de pared llevan corriente, no datos. Siempre más seguro.", de: "✅ Ja! Steckdosen liefern nur Strom, keine Daten. Immer sicherer.", it: "✅ Sì! Le prese a muro portano solo corrente, niente dati. Sempre più sicuro.", da: "✅ Ja! Stikkontakter fører kun strøm, ingen data. Altid mere sikkert.", bg: "✅ Да! Стенните контакти пренасят само ток, не и данни. Винаги по-сигурно." }
      ],
      next: "outro"
    },
    test_bad: {
      bot: [
        { en: "It's *probably* fine, but \"probably\" isn't a security strategy. Wall plug or your own battery is safer.", fr: "C'est *sans doute* OK, mais \"sans doute\" n'est pas une stratégie. Prise murale ou batterie perso, c'est plus sûr.", es: "*Probablemente* esté bien, pero \"probablemente\" no es una estrategia de seguridad. Enchufe de pared o batería propia es más seguro.", de: "Wahrscheinlich passt das, aber \"wahrscheinlich\" ist keine Sicherheitsstrategie. Steckdose oder eigene Powerbank ist sicherer.", it: "*Probabilmente* va bene, ma \"probabilmente\" non è una strategia di sicurezza. Presa a muro o batteria personale è più sicuro.", da: "Det er *sandsynligvis* fint, men \"sandsynligvis\" er ikke en sikkerhedsstrategi. Stikkontakt eller egen powerbank er sikrere.", bg: "*Вероятно* е ОК, но \"вероятно\" не е стратегия за сигурност. Стенен контакт или собствена батерия е по-сигурно." }
      ],
      next: "outro"
    },
    outro: {
      bot: [
        { en: "Per Janet's data, your phone is, on most days, more sensitive than your laptop. Treat it accordingly.", fr: "Selon les données de Janet, ton téléphone est, la plupart du temps, plus sensible que ton ordi. Traite-le en conséquence.", es: "Según los datos de Janet, tu teléfono es, la mayoría de los días, más sensible que tu portátil. Trátalo en consecuencia.", de: "Laut Janets Daten ist dein Handy an den meisten Tagen sensibler als dein Laptop. Behandle es entsprechend.", it: "Secondo i dati di Janet, il tuo telefono è, la maggior parte dei giorni, più sensibile del tuo portatile. Trattalo di conseguenza.", da: "Ifølge Janets data er din telefon på de fleste dage mere følsom end din bærbare. Behandl den derefter.", bg: "Според данните на Janet, телефонът ти е, в повечето дни, по-чувствителен от лаптопа ти. Отнасяй се с него съответно." },
        { en: "Bye for now! 📲", fr: "À très vite ! 📲", es: "¡Hasta pronto! 📲", de: "Bis bald! 📲", it: "A presto! 📲", da: "Vi ses! 📲", bg: "До скоро! 📲" }
      ],
      end: true
    }
  }
};
