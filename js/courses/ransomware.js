window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.ransomware = {
  id: "ransomware",
  emoji: "💰",
  duration: 5,
  karma: 50,
  title: {
    en: "Ransomware",
    fr: "Rançongiciels",
    es: "Ransomware",
    de: "Erpressersoftware",
    it: "Ransomware",
    da: "Ransomware",
    bg: "Ransomware",
    tr: "Ransomware"
  },
  description: {
    en: "When all your files turn into a hostage situation.",
    fr: "Quand tous tes fichiers deviennent des otages.",
    es: "Cuando todos tus archivos se convierten en una toma de rehenes.",
    de: "Wenn all deine Dateien zu Geiseln werden.",
    it: "Quando tutti i tuoi file diventano ostaggi.",
    da: "Når alle dine filer bliver taget som gidsler.",
    bg: "Когато всичките ти файлове стават заложници.",
    tr: "Tüm dosyaların rehin alındığında."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the malware that has, factually, the most theatrical flair.", fr: "Salut ! C'est Janet, avec le malware qui a, factuellement, le plus de panache théâtral.", es: "¡Hola! Soy Janet, con el malware que tiene, factualmente, el mayor toque teatral.", de: "Hallo! Janet hier, mit der Malware, die, faktisch, am theatralischsten ist.", it: "Ciao! Sono Janet, con il malware che ha, fattualmente, il maggior estro teatrale.", da: "Hej! Det er Janet, med den malware der, faktuelt, har mest teatralsk flair.", bg: "Здравей! Аз съм Janet, с малуера, който, технически, има най-много театрален размах.", tr: "Merhaba! Ben Janet, fiilen en teatral edaya sahip kötü amaçlı yazılımla birlikte." },
        { en: "Ransomware encrypts every file on your device, then displays one large dramatic message: *Pay X bitcoin or your files are gone forever.*", fr: "Le rançongiciel chiffre tous tes fichiers, puis affiche un grand message dramatique : *Paie X bitcoins ou tes fichiers sont perdus à jamais.*", es: "El ransomware cifra todos los archivos de tu dispositivo y luego muestra un gran mensaje dramático: *Paga X bitcoin o tus archivos desaparecen para siempre.*", de: "Ransomware verschlüsselt jede Datei auf deinem Gerät und zeigt dann eine große dramatische Nachricht: *Zahle X Bitcoin, oder deine Dateien sind für immer verloren.*", it: "Il ransomware cifra ogni file del tuo dispositivo, poi mostra un grande messaggio drammatico: *Paga X bitcoin o i tuoi file sono persi per sempre.*", da: "Ransomware krypterer hver eneste fil på din enhed og viser så én stor dramatisk besked: *Betal X bitcoin, ellers er dine filer væk for altid.*", bg: "Ransomware криптира всеки файл на устройството ти, после показва едно голямо драматично съобщение: *Плати X bitcoin или файловете ти изчезват завинаги.*", tr: "Ransomware cihazındaki her dosyayı şifreler, sonra büyük ve dramatik bir mesaj gösterir: *X bitcoin öde, yoksa dosyaların sonsuza dek gider.*" },
        { en: "It is essentially a digital villain monologue. Janet finds it almost funny. Almost.", fr: "C'est en gros un monologue de méchant numérique. Janet trouve ça presque drôle. Presque.", es: "Es básicamente un monólogo de villano digital. A Janet le parece casi gracioso. Casi.", de: "Es ist im Grunde ein digitaler Bösewicht-Monolog. Janet findet es fast lustig. Fast.", it: "È in sostanza un monologo da cattivo in versione digitale. Janet lo trova quasi divertente. Quasi.", da: "Det er dybest set en digital skurkemonolog. Janet synes, det er næsten morsomt. Næsten.", bg: "По същество това е дигитален монолог на злодей. Janet го намира за почти смешно. Почти.", tr: "Aslında dijital bir kötü adam monoloğu. Janet bunu neredeyse komik buluyor. Neredeyse." }
      ],
      choices: [{ label: { en: "Yikes", fr: "Aïe", es: "Uf", de: "Autsch", it: "Ahia", da: "Føj", bg: "Олеле", tr: "Eyvah" }, next: "who" }]
    },
    who: {
      bot: [
        { en: "It used to target big organizations only. Hospitals, schools, factories, city governments.", fr: "Avant, ça ne visait que les grosses structures. Hôpitaux, écoles, usines, mairies.", es: "Antes solo atacaba a grandes organizaciones. Hospitales, escuelas, fábricas, ayuntamientos.", de: "Früher hatte es nur große Organisationen im Visier. Krankenhäuser, Schulen, Fabriken, Stadtverwaltungen.", it: "Una volta colpiva solo le grandi organizzazioni. Ospedali, scuole, fabbriche, comuni.", da: "Førhen ramte det kun store organisationer. Hospitaler, skoler, fabrikker, kommuner.", bg: "Преди се целеше само в големи организации. Болници, училища, фабрики, общини.", tr: "Eskiden sadece büyük kuruluşları hedef alıyordu. Hastaneler, okullar, fabrikalar, belediyeler." },
        { en: "Now? Anyone with files worth more than the ransom — which, if you have a decade of family photos, is *you*.", fr: "Aujourd'hui ? Toute personne dont les fichiers valent plus que la rançon — donc, si tu as 10 ans de photos de famille, *toi*.", es: "¿Ahora? Cualquiera con archivos que valgan más que el rescate — o sea, si tienes diez años de fotos familiares, *tú*.", de: "Heute? Jeden, dessen Dateien mehr wert sind als das Lösegeld — also, wenn du zehn Jahre Familienfotos hast, *dich*.", it: "Oggi? Chiunque abbia file che valgono più del riscatto — quindi, se hai dieci anni di foto di famiglia, *tu*.", da: "I dag? Alle med filer, der er mere værd end løsesummen — så hvis du har ti års familiefotos, så *dig*.", bg: "Сега? Всеки, чиито файлове струват повече от откупа — а ако имаш десет години семейни снимки, това си *ти*.", tr: "Şimdi? Dosyaları fidyeden daha değerli olan herkesi — yani on yıllık aile fotoğrafların varsa, *seni*." }
      ],
      next: "lifecycle"
    },
    lifecycle: {
      bot: [
        { en: "It usually goes like this:", fr: "Le scénario typique :", es: "Suele ir así:", de: "Es läuft meistens so ab:", it: "Di solito va così:", da: "Det foregår normalt sådan her:", bg: "Обикновено става така:", tr: "Genelde şöyle olur:" },
        { en: "1. You open a malicious attachment or click a sketchy link.", fr: "1. Tu ouvres une pièce jointe piégée ou tu cliques sur un lien douteux.", es: "1. Abres un adjunto malicioso o pinchas en un enlace dudoso.", de: "1. Du öffnest einen schädlichen Anhang oder klickst auf einen dubiosen Link.", it: "1. Apri un allegato malevolo o clicchi su un link sospetto.", da: "1. Du åbner en ondsindet vedhæftet fil eller klikker på et lyssky link.", bg: "1. Отваряш злонамерен прикачен файл или кликваш на съмнителен линк.", tr: "1. Zararlı bir eki açarsın ya da şüpheli bir bağlantıya tıklarsın." },
        { en: "2. The malware silently encrypts your files (sometimes over days).", fr: "2. Le malware chiffre tes fichiers en silence (parfois sur plusieurs jours).", es: "2. El malware cifra tus archivos en silencio (a veces durante días).", de: "2. Die Malware verschlüsselt deine Dateien still und leise (manchmal über Tage).", it: "2. Il malware cifra i tuoi file in silenzio (a volte per giorni).", da: "2. Malwaren krypterer dine filer i stilhed (nogle gange over flere dage).", bg: "2. Малуерът тихо криптира файловете ти (понякога в продължение на дни).", tr: "2. Zararlı yazılım dosyalarını sessizce şifreler (bazen günlerce sürer)." },
        { en: "3. *Then* it announces itself with a ransom screen.", fr: "3. *Ensuite* il se manifeste avec un écran de rançon.", es: "3. *Entonces* se anuncia con una pantalla de rescate.", de: "3. *Dann* meldet sie sich mit einem Erpressungsbildschirm.", it: "3. *Poi* si annuncia con una schermata di riscatto.", da: "3. *Så* melder den sig med en løsesumsskærm.", bg: "3. *Тогава* се обявява с екран за откуп.", tr: "3. *Sonra* bir fidye ekranıyla kendini gösterir." }
      ],
      next: "pay"
    },
    pay: {
      bot: [
        { en: "Should you pay? The honest answer: probably not.", fr: "Faut-il payer ? Honnêtement : probablement pas.", es: "¿Hay que pagar? La respuesta honesta: probablemente no.", de: "Sollte man zahlen? Die ehrliche Antwort: wahrscheinlich nicht.", it: "Si paga? La risposta onesta: probabilmente no.", da: "Skal man betale? Det ærlige svar: sandsynligvis ikke.", bg: "Дали да платиш? Честният отговор: вероятно не.", tr: "Ödemeli misin? Dürüst cevap: muhtemelen hayır." },
        { en: "Many victims pay and *still* don't get their files back. Paying also funds the next attack.", fr: "Beaucoup de victimes paient et *quand même*, ne récupèrent rien. Et payer finance la prochaine attaque.", es: "Muchas víctimas pagan y *aun así* no recuperan sus archivos. Pagar también financia el siguiente ataque.", de: "Viele Opfer zahlen und bekommen ihre Dateien *trotzdem* nicht zurück. Zahlen finanziert außerdem den nächsten Angriff.", it: "Molte vittime pagano e *comunque* non riottengono i file. Pagare finanzia anche il prossimo attacco.", da: "Mange ofre betaler og får *alligevel* ikke deres filer tilbage. At betale finansierer også det næste angreb.", bg: "Много жертви плащат и *въпреки това* не получават файловете си обратно. Плащането също така финансира следващата атака.", tr: "Birçok kurban öder ve *yine de* dosyalarını geri alamaz. Ödemek aynı zamanda bir sonraki saldırıyı finanse eder." }
      ],
      choices: [{ label: { en: "So what saves me?", fr: "Qu'est-ce qui me sauve, alors ?", es: "Entonces, ¿qué me salva?", de: "Was rettet mich dann?", it: "E allora, cosa mi salva?", da: "Hvad redder mig så?", bg: "Тогава какво ме спасява?", tr: "Peki beni ne kurtarır?" }, next: "backup" }]
    },
    backup: {
      bot: [
        { en: "*Backups.* Backups, backups, backups.", fr: "*Les sauvegardes.* Sauvegardes, sauvegardes, sauvegardes.", es: "*Las copias de seguridad.* Copias, copias, copias.", de: "*Backups.* Backups, Backups, Backups.", it: "*I backup.* Backup, backup, backup.", da: "*Sikkerhedskopier.* Backup, backup, backup.", bg: "*Резервните копия.* Бекъпи, бекъпи, бекъпи.", tr: "*Yedekler.* Yedek, yedek, yedek." },
        { en: "If your files exist in two places, ransomware becomes a bad afternoon, not a tragedy.", fr: "Si tes fichiers existent à deux endroits, un rançongiciel devient un mauvais après-midi, pas une tragédie.", es: "Si tus archivos existen en dos sitios, el ransomware se convierte en una tarde mala, no en una tragedia.", de: "Wenn deine Dateien an zwei Orten existieren, wird Ransomware zu einem schlechten Nachmittag, nicht zur Tragödie.", it: "Se i tuoi file esistono in due posti, il ransomware diventa un pomeriggio storto, non una tragedia.", da: "Hvis dine filer findes to steder, bliver ransomware en dårlig eftermiddag, ikke en tragedie.", bg: "Ако файловете ти съществуват на две места, ransomware става лош следобед, а не трагедия.", tr: "Dosyaların iki yerde varsa, ransomware bir trajedi değil, kötü bir öğleden sonra olur." }
      ],
      next: "rule321"
    },
    rule321: {
      bot: [
        { en: "There's a classic rule: *3-2-1*.", fr: "Il y a une règle classique : *3-2-1*.", es: "Hay una regla clásica: *3-2-1*.", de: "Es gibt eine klassische Regel: *3-2-1*.", it: "C'è una regola classica: *3-2-1*.", da: "Der findes en klassisk regel: *3-2-1*.", bg: "Има класическо правило: *3-2-1*.", tr: "Klasik bir kural var: *3-2-1*." },
        { en: "3 copies of your important files.", fr: "3 copies de tes fichiers importants.", es: "3 copias de tus archivos importantes.", de: "3 Kopien deiner wichtigen Dateien.", it: "3 copie dei tuoi file importanti.", da: "3 kopier af dine vigtige filer.", bg: "3 копия на важните ти файлове.", tr: "Önemli dosyalarının 3 kopyası." },
        { en: "2 different kinds of storage.", fr: "2 types de stockage différents.", es: "2 tipos de almacenamiento distintos.", de: "2 verschiedene Speicherarten.", it: "2 tipi diversi di archiviazione.", da: "2 forskellige lagringstyper.", bg: "2 различни вида съхранение.", tr: "2 farklı türde depolama." },
        { en: "1 of them *offline* or *offsite* — disconnected from your computer.", fr: "1 d'entre elles *hors ligne* ou *ailleurs* — déconnectée de ton ordi.", es: "1 de ellas *fuera de línea* o *en otro sitio* — desconectada de tu ordenador.", de: "1 davon *offline* oder *außer Haus* — getrennt von deinem Computer.", it: "1 di esse *offline* o *fuori sede* — scollegata dal tuo computer.", da: "1 af dem *offline* eller *uden for stedet* — afkoblet fra din computer.", bg: "1 от тях *офлайн* или *на друго място* — изключена от компютъра ти.", tr: "1 tanesi *çevrimdışı* veya *farklı bir yerde* — bilgisayarından bağlantısız." }
      ],
      next: "practical"
    },
    practical: {
      bot: [
        { en: "Practical version for a regular human:", fr: "Version pratique pour un humain ordinaire :", es: "Versión práctica para un humano normal:", de: "Praktische Version für einen normalen Menschen:", it: "Versione pratica per un essere umano normale:", da: "Praktisk version for et almindeligt menneske:", bg: "Практическа версия за обикновен човек:", tr: "Sıradan bir insan için pratik versiyon:" },
        { en: "💾 An external hard drive, plugged in once a week, then unplugged.", fr: "💾 Un disque dur externe, branché une fois par semaine, puis débranché.", es: "💾 Un disco duro externo, conectado una vez por semana y luego desconectado.", de: "💾 Eine externe Festplatte, einmal pro Woche angeschlossen und dann wieder abgezogen.", it: "💾 Un hard disk esterno, collegato una volta a settimana e poi scollegato.", da: "💾 En ekstern harddisk, tilsluttet en gang om ugen og så taget ud.", bg: "💾 Външен твърд диск, включван веднъж седмично и след това изключван.", tr: "💾 Haftada bir kez takılıp sonra çıkarılan harici bir sabit disk." },
        { en: "☁️ A cloud backup (iCloud, Google One, Backblaze, Proton Drive).", fr: "☁️ Une sauvegarde dans le cloud (iCloud, Google One, Backblaze, Proton Drive).", es: "☁️ Una copia en la nube (iCloud, Google One, Backblaze, Proton Drive).", de: "☁️ Ein Cloud-Backup (iCloud, Google One, Backblaze, Proton Drive).", it: "☁️ Un backup nel cloud (iCloud, Google One, Backblaze, Proton Drive).", da: "☁️ En cloud-backup (iCloud, Google One, Backblaze, Proton Drive).", bg: "☁️ Облачно резервно копие (iCloud, Google One, Backblaze, Proton Drive).", tr: "☁️ Bir bulut yedeği (iCloud, Google One, Backblaze, Proton Drive)." },
        { en: "✅ Test it once a year by actually restoring one file. \"Untested backup\" = no backup.", fr: "✅ Teste-la une fois par an en restaurant un fichier. \"Sauvegarde non testée\" = pas de sauvegarde.", es: "✅ Pruébala una vez al año restaurando un archivo de verdad. \"Copia sin probar\" = sin copia.", de: "✅ Teste es einmal im Jahr, indem du tatsächlich eine Datei wiederherstellst. \"Ungetestetes Backup\" = kein Backup.", it: "✅ Testalo una volta all'anno ripristinando davvero un file. \"Backup non testato\" = nessun backup.", da: "✅ Test den én gang om året ved faktisk at gendanne en fil. \"Utestet backup\" = ingen backup.", bg: "✅ Тествай го веднъж годишно, като реално възстановиш един файл. \"Нетестван бекъп\" = няма бекъп.", tr: "✅ Yılda bir kez gerçekten bir dosyayı geri yükleyerek test et. \"Test edilmemiş yedek\" = yedek yok." }
      ],
      next: "prevention"
    },
    prevention: {
      bot: [
        { en: "Plus the usual hygiene: keep your OS updated, don't open weird attachments, avoid cracked software.", fr: "Plus l'hygiène habituelle : système à jour, pas de pièces jointes étranges, pas de logiciels craqués.", es: "Más la higiene habitual: mantén el sistema actualizado, no abras adjuntos raros, evita el software pirateado.", de: "Dazu die übliche Hygiene: Betriebssystem aktuell halten, keine seltsamen Anhänge öffnen, keine gecrackte Software.", it: "Più la solita igiene: tieni il sistema operativo aggiornato, non aprire allegati strani, evita il software craccato.", da: "Plus den sædvanlige hygiejne: hold dit styresystem opdateret, åbn ikke mærkelige vedhæftede filer, undgå crackede programmer.", bg: "Плюс обичайната хигиена: поддържай операционната си система актуална, не отваряй странни прикачени файлове, избягвай кракнат софтуер.", tr: "Bir de her zamanki hijyen: işletim sistemini güncel tut, garip ekleri açma, kırılmış yazılımlardan uzak dur." }
      ],
      choices: [{ label: { en: "Setting up backups today", fr: "Je mets ça en place aujourd'hui", es: "Configuro las copias hoy mismo", de: "Ich richte heute Backups ein", it: "Configuro i backup oggi", da: "Jeg sætter backup op i dag", bg: "Настройвам бекъпи още днес", tr: "Yedekleri bugün ayarlıyorum" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "You just leveled up. Future-you, restoring photos one day, will say a quiet thank-you. Janet has seen this in 1.8 million simulations.", fr: "Tu viens de monter d'un niveau. Le toi du futur, en restaurant tes photos un jour, dira un petit merci. Janet l'a vu dans 1,8 million de simulations.", es: "Acabas de subir de nivel. El tú del futuro, restaurando fotos algún día, te dará las gracias en voz baja. Janet lo ha visto en 1,8 millones de simulaciones.", de: "Du bist gerade ein Level aufgestiegen. Dein zukünftiges Ich wird eines Tages, beim Wiederherstellen von Fotos, leise Danke sagen. Janet hat das in 1,8 Millionen Simulationen gesehen.", it: "Sei appena salito di livello. Il te del futuro, mentre un giorno ripristinerà delle foto, dirà un sommesso grazie. Janet lo ha visto in 1,8 milioni di simulazioni.", da: "Du har lige fået et level up. Fremtidens dig vil en dag, mens du gendanner billeder, sige et stille tak. Janet har set det i 1,8 millioner simulationer.", bg: "Току-що се качи едно ниво нагоре. Бъдещият ти Аз, докато един ден възстановява снимки, ще каже тихо благодаря. Janet го е виждала в 1,8 милиона симулации.", tr: "Az önce bir seviye atladın. Gelecekteki sen, bir gün fotoğrafları geri yüklerken usulca teşekkür edecek. Janet bunu 1,8 milyon simülasyonda gördü." },
        { en: "Bye for now! 🔒", fr: "À très vite ! 🔒", es: "¡Hasta pronto! 🔒", de: "Bis bald! 🔒", it: "A presto! 🔒", da: "Vi ses! 🔒", bg: "До скоро! 🔒", tr: "Şimdilik hoşça kal! 🔒" }
      ],
      end: true
    }
  }
};
