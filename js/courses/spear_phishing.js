window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.spear_phishing = {
  id: "spear_phishing",
  emoji: "🎯",
  duration: 5,
  karma: 60,
  title: {
    en: "Spear phishing",
    fr: "Phishing ciblé",
    es: "Phishing dirigido",
    de: "Spear-Phishing",
    it: "Spear phishing",
    da: "Spear phishing",
    bg: "Целево phishing"
  },
  description: {
    en: "When the scam is written *just for you*.",
    fr: "Quand l'arnaque est écrite *rien que pour toi*.",
    es: "Cuando la estafa está escrita *solo para ti*.",
    de: "Wenn der Betrug *eigens für dich* geschrieben ist.",
    it: "Quando la truffa è scritta *apposta per te*.",
    da: "Når svindlen er skrevet *kun til dig*.",
    bg: "Когато измамата е написана *само за теб*."
  },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there! Janet here, with the fancy version of phishing.", fr: "Salut ! C'est Janet, avec la version raffinée du phishing.", es: "¡Hola! Soy Janet, con la versión refinada del phishing.", de: "Hallo! Hier ist Janet, mit der noblen Variante von Phishing.", it: "Ciao! Sono Janet, con la versione raffinata del phishing.", da: "Hej! Det er Janet, med den fine version af phishing.", bg: "Здравей! Аз съм Janet, с изтънчената версия на phishing." },
        { en: "Regular phishing is a hacker shouting in a crowded room, hoping someone turns around.", fr: "Le phishing classique, c'est un pirate qui crie dans une salle bondée, en espérant qu'on se retourne.", es: "El phishing normal es un hacker gritando en una sala llena, esperando que alguien se gire.", de: "Normales Phishing ist ein Hacker, der in einem vollen Raum schreit und hofft, dass sich jemand umdreht.", it: "Il phishing classico è un hacker che urla in una stanza affollata, sperando che qualcuno si volti.", da: "Almindeligt phishing er en hacker, der råber i et fyldt rum og håber, at nogen vender sig om.", bg: "Обикновеният phishing е хакер, който вика в претъпкана зала с надеждата, че някой ще се обърне." },
        { en: "*Spear* phishing is a hacker walking up to you, smiling, and using your name. Politely. Like someone who belongs there.", fr: "Le phishing *ciblé*, c'est un pirate qui s'approche, te sourit et t'appelle par ton prénom. Poliment. Comme quelqu'un qui a le droit d'être là.", es: "El phishing *dirigido* es un hacker que se acerca a ti, sonríe y te llama por tu nombre. Educadamente. Como alguien que tiene derecho a estar ahí.", de: "*Spear*-Phishing ist ein Hacker, der auf dich zugeht, lächelt und dich beim Namen nennt. Höflich. Wie jemand, der dazugehört.", it: "Lo *spear* phishing è un hacker che ti si avvicina, sorride e ti chiama per nome. Educatamente. Come qualcuno che ha diritto di essere lì.", da: "*Spear* phishing er en hacker, der går hen til dig, smiler og bruger dit navn. Høfligt. Som en, der hører til.", bg: "*Spear* phishing е хакер, който се приближава, усмихва се и те нарича по име. Учтиво. Като някой, който има право да е там." }
      ],
      choices: [{ label: { en: "Spooky", fr: "Frissons", es: "Escalofriante", de: "Gruselig", it: "Inquietante", da: "Uhyggeligt", bg: "Зловещо" }, next: "research" }]
    },
    research: {
      bot: [
        { en: "Before they send anything, they research you. LinkedIn, Instagram, Facebook, the local paper, your company's website.", fr: "Avant d'envoyer quoi que ce soit, ils enquêtent. LinkedIn, Instagram, Facebook, le journal local, le site de ton entreprise.", es: "Antes de enviar nada, te investigan. LinkedIn, Instagram, Facebook, el periódico local, la web de tu empresa.", de: "Bevor sie irgendetwas senden, recherchieren sie über dich. LinkedIn, Instagram, Facebook, die Lokalzeitung, die Website deiner Firma.", it: "Prima di inviare qualsiasi cosa, ti studiano. LinkedIn, Instagram, Facebook, il giornale locale, il sito della tua azienda.", da: "Før de sender noget som helst, undersøger de dig. LinkedIn, Instagram, Facebook, lokalavisen, din virksomheds hjemmeside.", bg: "Преди да изпратят каквото и да е, те те проучват. LinkedIn, Instagram, Facebook, местния вестник, сайта на компанията ти." },
        { en: "They find out: who your boss is, what project you're on, who you trust, where you vacation.", fr: "Ils découvrent : qui est ton patron, sur quel projet tu bosses, en qui tu as confiance, où tu pars en vacances.", es: "Averiguan: quién es tu jefe, en qué proyecto trabajas, en quién confías, dónde vas de vacaciones.", de: "Sie finden heraus: wer dein Chef ist, an welchem Projekt du arbeitest, wem du vertraust, wo du Urlaub machst.", it: "Scoprono: chi è il tuo capo, su quale progetto lavori, di chi ti fidi, dove vai in vacanza.", da: "De finder ud af: hvem din chef er, hvilket projekt du arbejder på, hvem du stoler på, hvor du tager på ferie.", bg: "Те откриват: кой е шефът ти, по какъв проект работиш, на кого имаш доверие, къде ходиш на почивка." },
        { en: "Then the email writes itself.", fr: "Ensuite, l'email s'écrit tout seul.", es: "Y entonces el correo se escribe solo.", de: "Dann schreibt sich die E-Mail von selbst.", it: "Poi l'email si scrive da sola.", da: "Så skriver e-mailen sig selv.", bg: "След това имейлът се пише сам." }
      ],
      next: "example_intro"
    },
    example_intro: {
      bot: [
        { en: "Picture this: you get an email that says —", fr: "Imagine : tu reçois un email qui dit —", es: "Imagínate esto: recibes un correo que dice —", de: "Stell dir vor: du bekommst eine E-Mail, die sagt —", it: "Immagina: ricevi un'email che dice —", da: "Forestil dig: du får en e-mail, der siger —", bg: "Представи си: получаваш имейл, който казва —" },
        { en: "*\"Hey, it's Sarah from the Berlin trip. Can you take a look at this doc before the deadline?\"*", fr: "*\"Coucou, c'est Sarah du séjour à Berlin. Tu peux jeter un œil à ce doc avant la deadline ?\"*", es: "*\"Hola, soy Sarah, la del viaje a Berlín. ¿Puedes echar un vistazo a este documento antes de la fecha límite?\"*", de: "*\"Hey, ich bin's, Sarah von der Berlin-Reise. Kannst du dir dieses Dokument vor dem Abgabetermin ansehen?\"*", it: "*\"Ehi, sono Sarah del viaggio a Berlino. Puoi dare un'occhiata a questo documento prima della scadenza?\"*", da: "*\"Hej, det er Sarah fra Berlin-turen. Kan du kigge på dette dokument inden deadline?\"*", bg: "*„Здравей, аз съм Сара от пътуването до Берлин. Може ли да погледнеш този документ преди крайния срок?“*" },
        { en: "How would you react?", fr: "Tu réagis comment ?", es: "¿Cómo reaccionarías?", de: "Wie würdest du reagieren?", it: "Come reagiresti?", da: "Hvordan ville du reagere?", bg: "Как би реагирал?" }
      ],
      choices: [
        { label: { en: "Open the doc — Sarah's a friend", fr: "J'ouvre — Sarah, c'est une amie", es: "Abro el documento — Sarah es una amiga", de: "Ich öffne das Doc — Sarah ist eine Freundin", it: "Apro il documento — Sarah è un'amica", da: "Jeg åbner dokumentet — Sarah er en ven", bg: "Отварям документа — Сара ми е приятелка" }, next: "trap" },
        { label: { en: "Text Sarah to confirm", fr: "Je texte Sarah pour vérifier", es: "Le mando un mensaje a Sarah para confirmar", de: "Ich schreibe Sarah eine SMS zur Bestätigung", it: "Mando un messaggio a Sarah per confermare", da: "Jeg sender Sarah en sms for at bekræfte", bg: "Пиша на Сара, за да потвърди" }, next: "good" }
      ]
    },
    trap: {
      bot: [
        { en: "Aaaand that's exactly what they wanted.", fr: "Et c'est exactement ce qu'ils voulaient.", es: "Y eso es exactamente lo que querían.", de: "Uuund das ist genau das, was sie wollten.", it: "E quello è esattamente ciò che volevano.", da: "Oooog det var præcis det, de ville.", bg: "И това е точно това, което искаха." },
        { en: "The \"document\" is a fake login page. The Berlin detail came from your tagged Instagram photo last summer.", fr: "Le \"document\" est une fausse page de connexion. Le détail \"Berlin\" venait de ton Instagram taggué l'été dernier.", es: "El \"documento\" es una página de inicio de sesión falsa. El detalle de Berlín salió de tu foto etiquetada en Instagram del verano pasado.", de: "Das \"Dokument\" ist eine gefälschte Login-Seite. Das Berlin-Detail kam aus deinem markierten Instagram-Foto vom letzten Sommer.", it: "Il \"documento\" è una pagina di login falsa. Il dettaglio su Berlino veniva dalla tua foto taggata su Instagram l'estate scorsa.", da: "\"Dokumentet\" er en falsk loginside. Berlin-detaljen kom fra dit taggede Instagram-foto sidste sommer.", bg: "„Документът“ е фалшива страница за вход. Подробността за Берлин дойде от тагнатата ти снимка в Instagram миналото лято." },
        { en: "Don't beat yourself up — these emails are designed to be irresistible.", fr: "Ne te culpabilise pas — ces emails sont conçus pour être irrésistibles.", es: "No te machaques — estos correos están diseñados para ser irresistibles.", de: "Mach dir keine Vorwürfe — diese E-Mails sind so gestaltet, dass sie unwiderstehlich sind.", it: "Non prendertela con te stesso — queste email sono progettate per essere irresistibili.", da: "Bebrejd ikke dig selv — disse e-mails er designet til at være uimodståelige.", bg: "Не се самообвинявай — тези имейли са създадени да бъдат неустоими." }
      ],
      next: "lesson"
    },
    good: {
      bot: [
        { en: "💯 Beautiful instinct.", fr: "💯 Réflexe magnifique.", es: "💯 Instinto magnífico.", de: "💯 Wunderbarer Instinkt.", it: "💯 Bellissimo istinto.", da: "💯 Smukt instinkt.", bg: "💯 Прекрасен инстинкт." },
        { en: "A 10-second text saves you from a 10-month headache.", fr: "Dix secondes de SMS t'épargnent dix mois de galère.", es: "Un mensaje de 10 segundos te ahorra 10 meses de dolor de cabeza.", de: "Eine 10-Sekunden-SMS erspart dir 10 Monate Kopfschmerzen.", it: "Un messaggio di 10 secondi ti risparmia 10 mesi di mal di testa.", da: "En 10-sekunders sms sparer dig for 10 måneders hovedpine.", bg: "Едно 10-секундно съобщение те спасява от 10-месечно главоболие." }
      ],
      next: "lesson"
    },
    lesson: {
      bot: [
        { en: "Spear phishing red flags often hide *inside* the legitimate-looking parts.", fr: "Les indices du phishing ciblé se cachent souvent *à l'intérieur* des parties qui ont l'air légitimes.", es: "Las señales de alerta del spear phishing suelen esconderse *dentro* de las partes que parecen legítimas.", de: "Die Warnsignale beim Spear-Phishing verstecken sich oft *innerhalb* der legitim wirkenden Teile.", it: "I segnali d'allarme dello spear phishing si nascondono spesso *dentro* le parti che sembrano legittime.", da: "Røde flag i spear phishing gemmer sig ofte *inde i* de dele, der ser legitime ud.", bg: "Червените флагове на spear phishing често се крият *вътре* в частите, които изглеждат легитимни." },
        { en: "🔎 The sender address: usually *one* letter is off. `m.harris@acme.co` vs `m.harris@acme.com`.", fr: "🔎 L'adresse d'envoi : souvent *une* lettre change. `m.harris@acme.co` vs `m.harris@acme.com`.", es: "🔎 La dirección del remitente: normalmente *una* letra está cambiada. `m.harris@acme.co` vs `m.harris@acme.com`.", de: "🔎 Die Absenderadresse: meist stimmt *ein* Buchstabe nicht. `m.harris@acme.co` vs `m.harris@acme.com`.", it: "🔎 L'indirizzo del mittente: di solito c'è *una* lettera diversa. `m.harris@acme.co` vs `m.harris@acme.com`.", da: "🔎 Afsenderadressen: typisk er *ét* bogstav forkert. `m.harris@acme.co` vs `m.harris@acme.com`.", bg: "🔎 Адресът на подателя: обикновено *една* буква е различна. `m.harris@acme.co` срещу `m.harris@acme.com`." },
        { en: "🔎 The tone: a little too urgent, a little too casual, just slightly off.", fr: "🔎 Le ton : un peu trop pressant, un peu trop familier, légèrement à côté.", es: "🔎 El tono: un poco demasiado urgente, un poco demasiado informal, ligeramente fuera de lugar.", de: "🔎 Der Ton: ein bisschen zu dringend, ein bisschen zu locker, einfach leicht daneben.", it: "🔎 Il tono: un po' troppo urgente, un po' troppo informale, leggermente fuori posto.", da: "🔎 Tonen: lidt for hastende, lidt for afslappet, bare en anelse skæv.", bg: "🔎 Тонът: малко прекалено спешен, малко прекалено непринуден, леко странен." },
        { en: "🔎 The ask: a transfer, a password, a \"quick favor\" that bypasses normal channels.", fr: "🔎 La demande : un virement, un mot de passe, un \"petit service\" qui contourne les procédures.", es: "🔎 La petición: una transferencia, una contraseña, un \"pequeño favor\" que se salta los canales habituales.", de: "🔎 Die Bitte: eine Überweisung, ein Passwort, ein \"kleiner Gefallen\", der die normalen Wege umgeht.", it: "🔎 La richiesta: un bonifico, una password, un \"piccolo favore\" che salta i canali normali.", da: "🔎 Anmodningen: en overførsel, en adgangskode, en \"hurtig tjeneste\", der omgår de normale kanaler.", bg: "🔎 Молбата: превод, парола, „малка услуга“, която заобикаля нормалните канали." }
      ],
      next: "rule"
    },
    rule: {
      bot: [
        { en: "My golden rule for spear phishing: *the more personalized the email, the more you should verify it.*", fr: "Ma règle d'or sur le phishing ciblé : *plus l'email est personnalisé, plus il faut le vérifier.*", es: "Mi regla de oro para el spear phishing: *cuanto más personalizado sea el correo, más deberías verificarlo.*", de: "Meine goldene Regel zum Spear-Phishing: *je personalisierter die E-Mail, desto mehr solltest du sie überprüfen.*", it: "La mia regola d'oro per lo spear phishing: *più l'email è personalizzata, più dovresti verificarla.*", da: "Min gyldne regel for spear phishing: *jo mere personlig e-mailen er, jo mere bør du verificere den.*", bg: "Моето златно правило за spear phishing: *колкото по-персонализиран е имейлът, толкова повече трябва да го проверяваш.*" },
        { en: "Generic spam is annoying. A perfectly-tailored email about your real project? Treat it as suspicious until proven otherwise.", fr: "Le spam générique, c'est juste pénible. Un email parfait, hyper-précis sur ton vrai projet ? Considère-le suspect jusqu'à preuve du contraire.", es: "El spam genérico es molesto. ¿Un correo perfectamente hecho a medida sobre tu proyecto real? Considéralo sospechoso hasta que se demuestre lo contrario.", de: "Generischer Spam ist nervig. Eine perfekt zugeschnittene E-Mail über dein echtes Projekt? Behandle sie als verdächtig, bis das Gegenteil bewiesen ist.", it: "Lo spam generico è solo fastidioso. Un'email perfettamente su misura sul tuo vero progetto? Trattala come sospetta finché non si dimostra il contrario.", da: "Almindeligt spam er irriterende. En perfekt skræddersyet e-mail om dit rigtige projekt? Behandl den som mistænkelig, indtil andet er bevist.", bg: "Общият спам е досаден. Перфектно скроен имейл за реалния ти проект? Третирай го като подозрителен, докато не се докаже обратното." }
      ],
      choices: [{ label: { en: "Counterintuitive — I like it", fr: "Contre-intuitif — j'aime bien", es: "Contraintuitivo — me gusta", de: "Kontraintuitiv — gefällt mir", it: "Controintuitivo — mi piace", da: "Kontraintuitivt — det kan jeg lide", bg: "Контраинтуитивно — харесва ми" }, next: "outro" }]
    },
    outro: {
      bot: [
        { en: "When something feels off, *pick up the phone*. Real Sarah will understand. Fake Sarah will vanish like a sneeze.", fr: "Quand ça sent louche, *décroche ton téléphone*. La vraie Sarah comprendra. La fausse Sarah disparaîtra comme un éternuement.", es: "Cuando algo te chirríe, *coge el teléfono*. La Sarah de verdad lo entenderá. La Sarah falsa se esfumará como un estornudo.", de: "Wenn etwas komisch wirkt, *greif zum Telefon*. Die echte Sarah wird's verstehen. Die falsche Sarah verschwindet wie ein Niesen.", it: "Quando qualcosa ti sembra strano, *prendi il telefono*. La vera Sarah capirà. La falsa Sarah svanirà come uno starnuto.", da: "Når noget føles forkert, *tag telefonen*. Den rigtige Sarah vil forstå det. Den falske Sarah forsvinder som et nys.", bg: "Когато нещо ти се струва странно, *вдигни телефона*. Истинската Сара ще разбере. Фалшивата Сара ще изчезне като кихане." },
        { en: "Be a tiny bit suspicious. According to Janet, it's basically a love language. Bye for now! 🦈", fr: "Sois un peu méfiant·e. Selon Janet, c'est une déclaration d'amour. À très vite ! 🦈", es: "Sé un poquito desconfiado. Según Janet, es básicamente un lenguaje del amor. ¡Hasta pronto! 🦈", de: "Sei ein kleines bisschen misstrauisch. Laut Janet ist das im Grunde eine Liebessprache. Bis bald! 🦈", it: "Sii un pochino sospettoso. Secondo Janet, è praticamente un linguaggio dell'amore. A presto! 🦈", da: "Vær en lille smule mistænksom. Ifølge Janet er det dybest set et kærlighedssprog. Vi ses! 🦈", bg: "Бъди мъничко подозрителен. Според Janet това по същество е любовен език. До скоро! 🦈" }
      ],
      end: true
    }
  }
};
