window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.company_documents = {
  id: "company_documents",
  emoji: "📜",
  duration: 3,
  karma: 30,
  title: {
    en: "Security ground rules",
    fr: "Les règles de base",
    es: "Reglas básicas de seguridad",
    de: "Sicherheitsgrundlagen",
    it: "Regole di base sulla sicurezza",
    da: "Sikkerhedens grundregler",
    bg: "Основни правила за сигурност",
    tr: "Güvenliğin temel kuralları"
  },
  description: {
    en: "Three habits that quietly keep you safer online — every single day.",
    fr: "Trois habitudes qui te protègent au quotidien, sans en avoir l'air.",
    es: "Tres hábitos que te mantienen más seguro en línea, sin que te des cuenta — cada día.",
    de: "Drei Gewohnheiten, die dich online jeden Tag unauffällig sicherer machen.",
    it: "Tre abitudini che ti rendono più sicuro online — ogni giorno, senza farti notare.",
    da: "Tre vaner, der stille og roligt holder dig sikrere online — hver eneste dag.",
    bg: "Три навика, които тихо те правят по-сигурен онлайн — всеки ден.",
    tr: "Seni her gün sessizce daha güvende tutan üç alışkanlık."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! I'm Janet.", fr: "Salut ! C'est Janet !", es: "¡Hola! Soy Janet.", de: "Hallo! Ich bin Janet.", it: "Ciao! Sono Janet.", da: "Hej! Jeg er Janet.", bg: "Здравей! Аз съм Janet.", tr: "Merhaba! Ben Janet." },
        { en: "I'm your friendly information assistant. I know things. So many things. Honestly, all of them.", fr: "Je suis ton assistante d'information préférée. Je sais des choses. Plein de choses. Honnêtement, toutes les choses.", es: "Soy tu amable asistente de información. Sé cosas. Muchísimas cosas. Sinceramente, todas.", de: "Ich bin deine freundliche Informationsassistentin. Ich weiß Dinge. So viele Dinge. Ehrlich gesagt, alle.", it: "Sono la tua simpatica assistente di informazioni. So delle cose. Tantissime cose. Onestamente, tutte.", da: "Jeg er din venlige informationsassistent. Jeg ved ting. Så mange ting. Helt ærligt, dem alle.", bg: "Аз съм твоят дружелюбен информационен асистент. Знам неща. Толкова много неща. Честно казано — всички.", tr: "Ben senin sevimli bilgi asistanınım. Bir sürü şey biliyorum. Çok şey. Açıkçası, hepsini." },
        { en: "But today, I'm only going to share my favorite three. Ground rules. The kind that keep you safer every single day without even noticing.", fr: "Mais aujourd'hui, j'ai sélectionné mes trois préférées. Les règles de base. Celles qui te protègent tous les jours, sans que tu t'en aperçoives.", es: "Pero hoy solo voy a compartir mis tres favoritas. Reglas básicas. De las que te mantienen más seguro cada día sin que te enteres.", de: "Aber heute teile ich nur meine drei Lieblinge. Grundregeln. Die Sorte, die dich jeden Tag unbemerkt sicherer machen.", it: "Ma oggi ti svelo solo le mie tre preferite. Regole di base. Quelle che ti tengono più al sicuro ogni giorno senza che te ne accorga.", da: "Men i dag deler jeg kun mine tre favoritter. Grundregler. Den slags, der gør dig sikrere hver eneste dag, uden at du opdager det.", bg: "Но днес ще споделя само трите ми любими. Основни правила. От тези, които те пазят по-сигурен всеки ден, без да забелязваш.", tr: "Ama bugün sadece en sevdiğim üç tanesini paylaşacağım. Temel kurallar. Hani şu fark etmeden her gün seni daha güvende tutanlardan." }
      ],
      choices: [{ label: { en: "Ooh, exciting!", fr: "Vas-y, je t'écoute !", es: "¡Oh, qué emocionante!", de: "Oh, spannend!", it: "Oh, che emozione!", da: "Ooh, spændende!", bg: "Уха, вълнуващо!", tr: "Oo, heyecanlı!" }, next: "rule1" }]
    },
    rule1: {
      bot: [
        { en: "Rule one: *security is a habit, not an event.*", fr: "Règle numéro un : *la sécurité, c'est une habitude, pas un événement.*", es: "Regla uno: *la seguridad es un hábito, no un evento.*", de: "Regel eins: *Sicherheit ist eine Gewohnheit, kein Ereignis.*", it: "Regola uno: *la sicurezza è un'abitudine, non un evento.*", da: "Regel ét: *sikkerhed er en vane, ikke en begivenhed.*", bg: "Правило едно: *сигурността е навик, а не събитие.*", tr: "Birinci kural: *güvenlik bir alışkanlıktır, bir etkinlik değil.*" },
        { en: "Nobody gets hacked because they failed a quiz. They get hacked on a Tuesday at 4:51 PM when they're tired.", fr: "Personne ne se fait pirater parce qu'il a raté un QCM. On se fait pirater un mardi à 16h51, quand on est fatigué.", es: "Nadie es hackeado por suspender un test. Te hackean un martes a las 16:51 cuando estás cansado.", de: "Niemand wird gehackt, weil er ein Quiz nicht bestanden hat. Man wird an einem Dienstag um 16:51 Uhr gehackt, wenn man müde ist.", it: "Nessuno viene hackerato perché ha sbagliato un quiz. Vieni hackerato un martedì alle 16:51 quando sei stanco.", da: "Ingen bliver hacket, fordi de dumpede en quiz. De bliver hacket en tirsdag kl. 16:51, når de er trætte.", bg: "Никой не бива хакнат, защото е скъсал тест. Хакват те във вторник в 16:51, когато си изморен.", tr: "Kimse bir testi geçemediği için hacklenmez. İnsanlar salı günü 16:51'de, yorgunken hacklenir." },
        { en: "Tiny daily habits beat one big training session, every time.", fr: "Les petites habitudes quotidiennes battent toutes les grandes formations, à chaque fois.", es: "Los pequeños hábitos diarios le ganan a una gran sesión de formación, siempre.", de: "Kleine tägliche Gewohnheiten schlagen eine große Schulung jedes Mal.", it: "Le piccole abitudini quotidiane battono una grande sessione di formazione, ogni volta.", da: "Små daglige vaner slår én stor træningssession hver gang.", bg: "Малките ежедневни навици бият всяко голямо обучение, всеки път.", tr: "Küçük günlük alışkanlıklar, kocaman bir eğitim seansını her seferinde yener." }
      ],
      choices: [{ label: { en: "Got it", fr: "Compris", es: "Entendido", de: "Verstanden", it: "Capito", da: "Forstået", bg: "Разбрах", tr: "Anladım" }, next: "rule2" }]
    },
    rule2: {
      bot: [
        { en: "Rule two: *if something feels off, it probably is.*", fr: "Règle numéro deux : *si quelque chose te semble bizarre, c'est probablement le cas.*", es: "Regla dos: *si algo te huele raro, probablemente lo sea.*", de: "Regel zwei: *wenn sich etwas komisch anfühlt, ist es das wahrscheinlich auch.*", it: "Regola due: *se qualcosa ti sembra strano, probabilmente lo è.*", da: "Regel to: *hvis noget føles forkert, er det sandsynligvis det.*", bg: "Правило две: *ако нещо ти се струва странно, вероятно е така.*", tr: "İkinci kural: *bir şey sana tuhaf geliyorsa, muhtemelen tuhaftır.*" },
        { en: "Your gut is a surprisingly good security sensor.", fr: "Ton intuition est un excellent capteur de sécurité.", es: "Tu intuición es un sensor de seguridad sorprendentemente bueno.", de: "Dein Bauchgefühl ist ein erstaunlich guter Sicherheitssensor.", it: "Il tuo istinto è un sensore di sicurezza sorprendentemente buono.", da: "Din mavefornemmelse er en overraskende god sikkerhedssensor.", bg: "Интуицията ти е изненадващо добър сензор за сигурност.", tr: "İçgüdün, şaşırtıcı derecede iyi bir güvenlik sensörüdür." },
        { en: "An odd email, a weird tone from a friend, a button you didn't expect — pause before you click.", fr: "Un email étrange, un ami qui écrit bizarrement, un bouton qui sort de nulle part — fais une pause avant de cliquer.", es: "Un correo raro, un tono extraño en un amigo, un botón que no esperabas — haz una pausa antes de pulsar.", de: "Eine seltsame E-Mail, ein komischer Ton von einem Freund, ein unerwarteter Button — kurz innehalten, bevor du klickst.", it: "Un'email strana, un tono insolito da parte di un amico, un pulsante che non ti aspettavi — fermati prima di cliccare.", da: "En mærkelig e-mail, en sær tone fra en ven, en knap du ikke forventede — gør pause, før du klikker.", bg: "Странен имейл, необичаен тон от приятел, неочакван бутон — направи пауза преди да кликнеш.", tr: "Tuhaf bir e-posta, bir arkadaşının garip tonu, beklemediğin bir buton — tıklamadan önce dur." }
      ],
      choices: [{ label: { en: "Makes sense", fr: "Logique", es: "Tiene sentido", de: "Macht Sinn", it: "Ha senso", da: "Giver mening", bg: "Логично", tr: "Mantıklı" }, next: "rule3" }]
    },
    rule3: {
      bot: [
        { en: "Rule three: *use a second channel to double-check.*", fr: "Règle numéro trois : *vérifie sur un deuxième canal.*", es: "Regla tres: *usa un segundo canal para verificar.*", de: "Regel drei: *Nutze einen zweiten Kanal zur Überprüfung.*", it: "Regola tre: *usa un secondo canale per ricontrollare.*", da: "Regel tre: *brug en anden kanal til at dobbelttjekke.*", bg: "Правило три: *използвай втори канал, за да провериш.*", tr: "Üçüncü kural: *iki kez kontrol etmek için ikinci bir kanal kullan.*" },
        { en: "Got a weird email from your bank? Don't click — open the bank's app directly.", fr: "Un email louche de ta banque ? Ne clique pas — ouvre l'appli directement.", es: "¿Correo raro de tu banco? No pulses — abre la app del banco directamente.", de: "Komische E-Mail von deiner Bank? Nicht klicken — öffne die Bank-App direkt.", it: "Email strana dalla tua banca? Non cliccare — apri direttamente l'app della banca.", da: "Mærkelig e-mail fra din bank? Klik ikke — åbn bankens app direkte.", bg: "Странен имейл от банката ти? Не кликай — отвори приложението на банката директно.", tr: "Bankandan tuhaf bir e-posta mı geldi? Tıklama — bankanın uygulamasını doğrudan aç." },
        { en: "Got a weird text from a friend asking for money? Call them.", fr: "Un SMS suspect d'un ami qui te demande de l'argent ? Appelle-le.", es: "¿SMS raro de un amigo pidiéndote dinero? Llámalo.", de: "Komische SMS von einem Freund, der nach Geld fragt? Ruf ihn an.", it: "SMS strano da un amico che chiede soldi? Chiamalo.", da: "Mærkelig sms fra en ven, der beder om penge? Ring til dem.", bg: "Странен SMS от приятел, който иска пари? Звънни му.", tr: "Para isteyen bir arkadaşından tuhaf bir mesaj mı geldi? Onu ara." },
        { en: "Two channels is the single best defense against almost every scam I know — and I know a *lot*.", fr: "Deux canaux, c'est la meilleure défense contre presque toutes les arnaques que je connais — et j'en connais *beaucoup*.", es: "Dos canales son la mejor defensa contra casi todas las estafas que conozco — y conozco *muchas*.", de: "Zwei Kanäle sind die beste Verteidigung gegen fast jeden Betrug, den ich kenne — und ich kenne *viele*.", it: "Due canali sono la migliore difesa contro quasi tutte le truffe che conosco — e ne conosco *parecchie*.", da: "To kanaler er det absolut bedste forsvar mod næsten enhver svindel, jeg kender — og jeg kender *mange*.", bg: "Два канала са най-добрата защита срещу почти всяка измама, която знам — а знам *много*.", tr: "İki kanal, bildiğim neredeyse her dolandırıcılığa karşı tek başına en iyi savunmadır — ve *bir sürü* biliyorum." }
      ],
      choices: [{ label: { en: "Locked in", fr: "C'est noté", es: "Apuntado", de: "Eingeprägt", it: "Fissato", da: "Det sidder fast", bg: "Запомнено", tr: "Aklımda" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "That's it. Three habits. According to my database, you are now ahead of approximately 4.2 billion humans.", fr: "Voilà. Trois habitudes. Selon ma base de données, tu viens de dépasser environ 4,2 milliards d'humains.", es: "Eso es todo. Tres hábitos. Según mi base de datos, ahora vas por delante de aproximadamente 4.200 millones de humanos.", de: "Das war's. Drei Gewohnheiten. Laut meiner Datenbank liegst du jetzt vor rund 4,2 Milliarden Menschen.", it: "Ecco fatto. Tre abitudini. Secondo il mio database, ora sei avanti rispetto a circa 4,2 miliardi di umani.", da: "Det var det. Tre vaner. Ifølge min database er du nu foran cirka 4,2 milliarder mennesker.", bg: "Това е. Три навика. Според базата ми данни, сега си пред приблизително 4,2 милиарда хора.", tr: "İşte bu kadar. Üç alışkanlık. Veri tabanıma göre, artık yaklaşık 4,2 milyar insanın önündesin." },
        { en: "I will be right here whenever you're ready for the next one. Bye for now! ✨", fr: "Je suis là dès que tu es prêt·e pour le suivant. À très vite ! ✨", es: "Estaré aquí cuando estés listo para el siguiente. ¡Hasta pronto! ✨", de: "Ich bin direkt hier, wann immer du bereit für den nächsten bist. Bis bald! ✨", it: "Sarò qui non appena sarai pronto per il prossimo. A presto! ✨", da: "Jeg står lige her, når du er klar til den næste. Hej så længe! ✨", bg: "Ще съм точно тук, когато си готов за следващото. До скоро! ✨", tr: "Bir sonrakine hazır olduğunda tam burada olacağım. Şimdilik hoşça kal! ✨" }
      ],
      end: true
    }
  }
};
