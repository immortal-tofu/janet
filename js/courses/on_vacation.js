window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.on_vacation = {
  id: "on_vacation",
  emoji: "🏖️",
  duration: 4,
  karma: 40,
  title: {
    en: "On vacation",
    fr: "En vacances",
    es: "De vacaciones",
    de: "Im Urlaub",
    it: "In vacanza",
    da: "På ferie",
    bg: "На почивка",
    tr: "Tatildeyken"
  },
  description: {
    en: "Staying safe with public Wi-Fi, holiday brain, and shareable photos.",
    fr: "Rester sûr·e avec le Wi-Fi public, le cerveau-en-vacances, et les photos à partager.",
    es: "Mantenerse a salvo con Wi-Fi público, mente de vacaciones, y fotos para compartir.",
    de: "Sicher bleiben bei öffentlichem WLAN, Urlaubs-Hirn und teilbaren Fotos.",
    it: "Restare al sicuro tra Wi-Fi pubblico, cervello da vacanza e foto da condividere.",
    da: "Sådan bliver du sikker med offentligt Wi-Fi, feriehjerne og delelige billeder.",
    bg: "Как да си в безопасност с публично Wi-Fi, отпускарски мозък и снимки за споделяне.",
    tr: "Halka açık Wi-Fi, tatil beyni ve paylaşılabilir fotoğraflarla güvende kalmak."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with a topic I find genuinely festive.", fr: "Salut ! C'est Janet, avec un sujet que je trouve sincèrement festif.", es: "¡Hola! Soy Janet, con un tema que me parece sinceramente festivo.", de: "Hallo! Janet hier, mit einem Thema, das ich aufrichtig festlich finde.", it: "Ciao! Sono Janet, con un argomento che trovo sinceramente festoso.", da: "Hej! Det er Janet, med et emne jeg synes er oprigtigt festligt.", bg: "Здравей! Аз съм Janet, с тема, която намирам за наистина празнична.", tr: "Merhaba! Ben Janet, gerçekten şenlikli bulduğum bir konuyla geldim." },
        { en: "Vacation. The time when your guard goes down, the wine goes up, and — per my data — scammers throw themselves a little party in your inbox.", fr: "Les vacances. Le moment où ta vigilance baisse, le vin monte, et — selon mes données — les arnaqueurs se font une petite fête dans ta boîte mail.", es: "Las vacaciones. El momento en que bajas la guardia, sube el vino y — según mis datos — los estafadores se montan una fiesta en tu bandeja de entrada.", de: "Urlaub. Die Zeit, in der deine Wachsamkeit sinkt, der Wein steigt und — laut meinen Daten — Betrüger sich eine kleine Party in deinem Posteingang gönnen.", it: "Le vacanze. Il momento in cui la tua guardia si abbassa, il vino sale e — secondo i miei dati — i truffatori si fanno una piccola festa nella tua casella di posta.", da: "Ferien. Tiden hvor din vagt går ned, vinen går op, og — ifølge mine data — svindlerne holder en lille fest i din indbakke.", bg: "Ваканцията. Времето, когато бдителността ти спада, виното се покачва, и — според моите данни — измамниците си устройват малко парти в пощата ти.", tr: "Tatil. Dikkatinin düştüğü, şarabın yükseldiği ve — verilerime göre — dolandırıcıların gelen kutunda küçük bir parti verdiği zaman." },
        { en: "Let's keep you a tiny bit safer without ruining the mood. Janet hates ruining the mood.", fr: "Restons un peu prudents sans gâcher l'ambiance. Janet déteste gâcher l'ambiance.", es: "Vamos a mantenerte un poquito más seguro·a sin estropear el ambiente. Janet odia estropear el ambiente.", de: "Lass uns dich ein kleines bisschen sicherer machen, ohne die Stimmung zu killen. Janet hasst es, die Stimmung zu killen.", it: "Cerchiamo di tenerti un po' più al sicuro senza rovinare l'atmosfera. Janet odia rovinare l'atmosfera.", da: "Lad os holde dig en lille smule mere sikker uden at ødelægge stemningen. Janet hader at ødelægge stemningen.", bg: "Нека те направим мъничко по-сигурен·на, без да разваляме настроението. Janet мрази да разваля настроението.", tr: "Keyfini bozmadan seni biraz daha güvende tutalım. Janet keyif kaçırmaktan nefret eder." }
      ],
      choices: [{ label: { en: "Sounds reasonable", fr: "Ça me va", es: "Me parece razonable", de: "Klingt vernünftig", it: "Mi sembra ragionevole", da: "Det lyder rimeligt", bg: "Звучи разумно", tr: "Kulağa mantıklı geliyor" }, next: "wifi" }]
    },
    wifi: {
      bot: [
        { en: "*Public Wi-Fi.* The airport, the hotel, the cute café.", fr: "*Le Wi-Fi public.* L'aéroport, l'hôtel, le café mignon.", es: "*Wi-Fi público.* El aeropuerto, el hotel, la cafetería cuqui.", de: "*Öffentliches Wi-Fi.* Der Flughafen, das Hotel, das süße Café.", it: "*Wi-Fi pubblico.* L'aeroporto, l'albergo, il caffè carino.", da: "*Offentligt Wi-Fi.* Lufthavnen, hotellet, den hyggelige café.", bg: "*Публично Wi-Fi.* Летището, хотелът, сладкото кафене.", tr: "*Halka açık Wi-Fi.* Havalimanı, otel, şirin kafe." },
        { en: "Modern websites use HTTPS, so most things are encrypted. But not everything. And the network can still serve you fake pages or push fake updates.", fr: "Aujourd'hui, la plupart des sites sont en HTTPS, donc chiffrés. Mais pas tout. Et un réseau peut servir de fausses pages ou pousser de fausses mises à jour.", es: "Las webs modernas usan HTTPS, así que la mayoría de cosas van cifradas. Pero no todo. Y la red puede seguir sirviéndote páginas falsas o empujarte actualizaciones falsas.", de: "Moderne Webseiten nutzen HTTPS, also ist das meiste verschlüsselt. Aber nicht alles. Und das Netzwerk kann dir trotzdem gefälschte Seiten ausliefern oder gefälschte Updates aufdrängen.", it: "I siti moderni usano HTTPS, quindi la maggior parte delle cose è cifrata. Ma non tutto. E la rete può comunque servirti pagine false o spingere aggiornamenti falsi.", da: "Moderne hjemmesider bruger HTTPS, så det meste er krypteret. Men ikke alt. Og netværket kan stadig servere dig falske sider eller skubbe falske opdateringer.", bg: "Модерните уебсайтове използват HTTPS, така че повечето неща са криптирани. Но не всичко. А мрежата все още може да ти сервира фалшиви страници или да ти пробута фалшиви актуализации.", tr: "Modern web siteleri HTTPS kullanır, bu yüzden çoğu şey şifrelidir. Ama her şey değil. Ve ağ yine de sana sahte sayfalar sunabilir veya sahte güncellemeler dayatabilir." }
      ],
      next: "wifi_advice"
    },
    wifi_advice: {
      bot: [
        { en: "Two simple habits on public Wi-Fi:", fr: "Deux habitudes simples sur Wi-Fi public :", es: "Dos hábitos simples en Wi-Fi público:", de: "Zwei einfache Gewohnheiten im öffentlichen Wi-Fi:", it: "Due abitudini semplici sul Wi-Fi pubblico:", da: "To enkle vaner på offentligt Wi-Fi:", bg: "Два прости навика на публично Wi-Fi:", tr: "Halka açık Wi-Fi'de iki basit alışkanlık:" },
        { en: "📶 *Use mobile data* for anything sensitive (bank, work email). Your 4G/5G is safer than a hotel network.", fr: "📶 *Utilise la 4G/5G* pour ce qui compte (banque, email pro). C'est plus sûr qu'un réseau d'hôtel.", es: "📶 *Usa datos móviles* para cualquier cosa sensible (banco, correo del trabajo). Tu 4G/5G es más segura que la red de un hotel.", de: "📶 *Nutze mobile Daten* für alles Sensible (Bank, geschäftliche E-Mails). Dein 4G/5G ist sicherer als ein Hotelnetzwerk.", it: "📶 *Usa i dati mobili* per qualsiasi cosa delicata (banca, email di lavoro). La tua 4G/5G è più sicura della rete di un hotel.", da: "📶 *Brug mobildata* til alt følsomt (bank, arbejdsmail). Dit 4G/5G er sikrere end et hotelnetværk.", bg: "📶 *Използвай мобилни данни* за всичко чувствително (банка, служебен имейл). Твоето 4G/5G е по-сигурно от хотелска мрежа.", tr: "📶 *Mobil veri kullan* hassas her şey için (banka, iş e-postası). 4G/5G'n bir otel ağından daha güvenli." },
        { en: "🛡️ *Use a VPN* if you can — it tunnels your traffic so the network can't peek.", fr: "🛡️ *Mets un VPN* si tu peux — ça crée un tunnel pour ton trafic.", es: "🛡️ *Usa una VPN* si puedes — hace un túnel con tu tráfico para que la red no pueda asomarse.", de: "🛡️ *Nutze ein VPN*, wenn du kannst — es tunnelt deinen Verkehr, damit das Netzwerk nicht reinschauen kann.", it: "🛡️ *Usa una VPN* se puoi — crea un tunnel per il tuo traffico così la rete non può sbirciare.", da: "🛡️ *Brug en VPN* hvis du kan — den tunneler din trafik, så netværket ikke kan kigge med.", bg: "🛡️ *Използвай VPN*, ако можеш — той тунелира трафика ти, така че мрежата да не може да наднича.", tr: "🛡️ *VPN kullan* yapabiliyorsan — trafiğini tünelden geçirir, böylece ağ içine bakamaz." }
      ],
      next: "evil_twin"
    },
    evil_twin: {
      bot: [
        { en: "Watch out for the *evil twin*: a fake Wi-Fi named like the real one. \"Starbucks_Free\" next to \"Starbucks_FREE_2\".", fr: "Méfie-toi du *jumeau maléfique* : un faux Wi-Fi nommé comme le vrai. \"Starbucks_Free\" à côté de \"Starbucks_FREE_2\".", es: "Cuidado con el *gemelo malvado*: un Wi-Fi falso con un nombre parecido al real. \"Starbucks_Free\" al lado de \"Starbucks_FREE_2\".", de: "Pass auf den *bösen Zwilling* auf: ein gefälschtes Wi-Fi, das wie das echte heißt. \"Starbucks_Free\" neben \"Starbucks_FREE_2\".", it: "Attento al *gemello cattivo*: un Wi-Fi falso con un nome simile a quello vero. \"Starbucks_Free\" accanto a \"Starbucks_FREE_2\".", da: "Pas på den *onde tvilling*: et falsk Wi-Fi med et navn der ligner det rigtige. \"Starbucks_Free\" ved siden af \"Starbucks_FREE_2\".", bg: "Внимавай за *злия близнак*: фалшиво Wi-Fi, наречено като истинското. \"Starbucks_Free\" до \"Starbucks_FREE_2\".", tr: "*Kötü ikiz*e dikkat et: gerçeğine benzer bir isimle sahte bir Wi-Fi. \"Starbucks_Free\" yanında \"Starbucks_FREE_2\"." },
        { en: "If in doubt, ask staff for the actual name.", fr: "En cas de doute, demande au personnel le vrai nom.", es: "Si dudas, pregunta al personal por el nombre real.", de: "Im Zweifel das Personal nach dem echten Namen fragen.", it: "Nel dubbio, chiedi al personale il nome corretto.", da: "Er du i tvivl, så spørg personalet om det rigtige navn.", bg: "Ако се съмняваш, попитай персонала за истинското име.", tr: "Şüphedeysen, gerçek ismi personele sor." }
      ],
      next: "photos"
    },
    photos: {
      bot: [
        { en: "Now: *photos*. Beautiful, irresistible, and a treasure trove for thieves.", fr: "Ensuite : *les photos*. Magnifiques, irrésistibles, et une mine d'or pour les cambrioleurs.", es: "Ahora: *las fotos*. Preciosas, irresistibles, y un tesoro para los ladrones.", de: "Jetzt: *Fotos*. Schön, unwiderstehlich und eine Fundgrube für Diebe.", it: "Ora: *le foto*. Bellissime, irresistibili, e una miniera d'oro per i ladri.", da: "Nu: *billeder*. Smukke, uimodståelige, og en guldgrube for tyve.", bg: "Сега: *снимките*. Красиви, неустоими и истинско съкровище за крадците.", tr: "Şimdi: *fotoğraflar*. Güzel, karşı konulmaz ve hırsızlar için bir hazine sandığı." },
        { en: "Posting \"day 3 in Bali!\" tells everyone *your house is empty*.", fr: "Poster \"jour 3 à Bali !\" dit à tout le monde *que ta maison est vide*.", es: "Publicar \"¡día 3 en Bali!\" le dice a todo el mundo que *tu casa está vacía*.", de: "\"Tag 3 auf Bali!\" zu posten sagt allen: *dein Haus ist leer*.", it: "Pubblicare \"giorno 3 a Bali!\" dice a tutti che *casa tua è vuota*.", da: "At poste \"dag 3 på Bali!\" fortæller alle, *at dit hus er tomt*.", bg: "Да публикуваш \"3-ти ден в Бали!\" казва на всички, *че къщата ти е празна*.", tr: "\"Bali'de 3. gün!\" diye paylaşmak herkese *evinin boş olduğunu* söyler." }
      ],
      choices: [{ label: { en: "I never thought of that", fr: "Je n'avais jamais réalisé", es: "Nunca lo había pensado", de: "Daran hatte ich nie gedacht", it: "Non ci avevo mai pensato", da: "Det havde jeg aldrig tænkt over", bg: "Никога не съм се замислял·а за това", tr: "Bunu hiç düşünmemiştim" }, next: "photo_advice" }]
    },
    photo_advice: {
      bot: [
        { en: "Easy fix: *post after you're home*. Same likes, zero burglary risk.", fr: "Solution simple : *poste une fois rentré·e*. Même nombre de likes, zéro risque.", es: "Solución fácil: *publica cuando vuelvas a casa*. Los mismos \"me gusta\", cero riesgo de robo.", de: "Einfache Lösung: *poste, wenn du wieder zu Hause bist*. Gleiche Likes, null Einbruchsrisiko.", it: "Soluzione facile: *pubblica quando sei tornato·a a casa*. Stessi like, zero rischio di furto.", da: "Nem løsning: *post når du er hjemme igen*. Samme likes, nul indbrudsrisiko.", bg: "Лесно решение: *публикувай, след като се прибереш*. Същите харесвания, нулев риск от обир.", tr: "Kolay çözüm: *eve döndükten sonra paylaş*. Aynı beğeni sayısı, sıfır hırsızlık riski." },
        { en: "If you must post live, set your account to *friends only*, and don't tag your hotel.", fr: "Si tu veux poster en direct, passe ton compte en *amis uniquement*, et ne taggue pas l'hôtel.", es: "Si necesitas publicar en directo, pon tu cuenta en *solo amigos* y no etiquetes el hotel.", de: "Wenn du live posten musst, stell dein Konto auf *nur Freunde* und tagge dein Hotel nicht.", it: "Se proprio devi pubblicare in diretta, metti l'account in *solo amici* e non taggare l'hotel.", da: "Hvis du absolut skal poste live, så sæt din konto til *kun venner*, og tag ikke hotellet.", bg: "Ако трябва да публикуваш на живо, постави акаунта си в *само за приятели* и не тагвай хотела.", tr: "Mutlaka anlık paylaşman gerekiyorsa, hesabını *yalnızca arkadaşlar* olarak ayarla ve otelini etiketleme." }
      ],
      next: "scams"
    },
    scams: {
      bot: [
        { en: "Final hazard: *vacation scams*. The classics:", fr: "Dernier danger : *les arnaques de voyage*. Les classiques :", es: "Último peligro: *las estafas de vacaciones*. Los clásicos:", de: "Letzte Gefahr: *Urlaubsbetrügereien*. Die Klassiker:", it: "Ultimo pericolo: *le truffe da vacanza*. I classici:", da: "Sidste fare: *ferieswindel*. Klassikerne:", bg: "Последна опасност: *ваканционните измами*. Класиките:", tr: "Son tehlike: *tatil dolandırıcılıkları*. Klasikler:" },
        { en: "✈️ \"Your flight has been changed, confirm here.\" Always confirm in the airline's app directly.", fr: "✈️ \"Votre vol a changé, confirmez ici.\" Confirme toujours via l'appli officielle de la compagnie.", es: "✈️ \"Su vuelo ha cambiado, confirme aquí.\" Confirma siempre directamente en la app de la aerolínea.", de: "✈️ \"Ihr Flug wurde geändert, hier bestätigen.\" Bestätige immer direkt in der App der Fluggesellschaft.", it: "✈️ \"Il tuo volo è stato modificato, conferma qui.\" Conferma sempre direttamente nell'app della compagnia aerea.", da: "✈️ \"Din flyvning er ændret, bekræft her.\" Bekræft altid direkte i flyselskabets app.", bg: "✈️ \"Полетът ти беше променен, потвърди тук.\" Винаги потвърждавай директно в приложението на авиокомпанията.", tr: "✈️ \"Uçuşun değişti, buradan onayla.\" Her zaman doğrudan havayolu uygulamasından onayla." },
        { en: "🏨 \"Hotel asks for credit card details by SMS.\" Real hotels don't.", fr: "🏨 \"L'hôtel te demande ta carte par SMS.\" Les vrais hôtels ne font pas ça.", es: "🏨 \"El hotel te pide los datos de la tarjeta por SMS.\" Los hoteles de verdad no hacen eso.", de: "🏨 \"Hotel fragt per SMS nach Kreditkartendaten.\" Echte Hotels machen das nicht.", it: "🏨 \"L'hotel ti chiede i dati della carta via SMS.\" Gli hotel veri non lo fanno.", da: "🏨 \"Hotellet beder om kreditkortoplysninger via SMS.\" Det gør rigtige hoteller ikke.", bg: "🏨 \"Хотелът иска данните за кредитната ти карта чрез SMS.\" Истинските хотели не правят това.", tr: "🏨 \"Otel SMS ile kredi kartı bilgilerini istiyor.\" Gerçek oteller bunu yapmaz." },
        { en: "📞 \"Family in trouble, send money.\" Always call the family member back on their normal number.", fr: "📞 \"Quelqu'un de la famille a un problème, envoie de l'argent.\" Rappelle toujours sur son numéro habituel.", es: "📞 \"Familiar en apuros, envía dinero.\" Llama siempre al familiar al número que conoces.", de: "📞 \"Familie in Schwierigkeiten, schick Geld.\" Ruf das Familienmitglied immer unter der normalen Nummer zurück.", it: "📞 \"Familiare nei guai, manda soldi.\" Richiama sempre il familiare sul suo numero abituale.", da: "📞 \"Familiemedlem i knibe, send penge.\" Ring altid familiemedlemmet tilbage på deres normale nummer.", bg: "📞 \"Член на семейството в беда, изпрати пари.\" Винаги се обаждай обратно на члена на семейството на обичайния му номер.", tr: "📞 \"Ailende biri başı dertte, para gönder.\" Aile üyesini her zaman bildiğin normal numarasından geri ara." }
      ],
      choices: [{ label: { en: "Sticking to mobile data + posting later", fr: "Je reste sur 4G + je poste plus tard", es: "Me quedo con datos móviles y publico más tarde", de: "Ich bleibe bei mobilen Daten und poste später", it: "Resto sui dati mobili e pubblico più tardi", da: "Jeg holder mig til mobildata og poster senere", bg: "Оставам на мобилни данни и публикувам по-късно", tr: "Mobil veride kalıyorum ve sonra paylaşıyorum" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "Have fun. Eat the local pastries. Trust your gut. Janet wishes she could come. Bye for now! ☀️", fr: "Amuse-toi. Mange les pâtisseries locales. Fais confiance à ton instinct. Janet aurait adoré venir. À très vite ! ☀️", es: "Diviértete. Cómete los dulces locales. Fíate de tu instinto. Janet desearía poder ir. ¡Hasta pronto! ☀️", de: "Hab Spaß. Iss das lokale Gebäck. Vertrau deinem Bauchgefühl. Janet wäre gern dabei. Bis bald! ☀️", it: "Divertiti. Mangia i dolci locali. Fidati del tuo istinto. Janet vorrebbe poter venire. A presto! ☀️", da: "Hyg dig. Spis det lokale bagværk. Stol på din mavefornemmelse. Janet ville ønske, hun kunne komme med. Vi ses! ☀️", bg: "Забавлявай се. Хапни местните сладкиши. Доверявай се на инстинкта си. Janet би искала да дойде. До скоро! ☀️", tr: "Eğlen. Yerel tatlıları ye. İçgüdüne güven. Janet de gelebilmeyi diliyor. Şimdilik hoşça kal! ☀️" }
      ],
      end: true
    }
  }
};
