import type { Dictionary } from "@/dictionaries/types";

const quy: Dictionary = {
  meta: {
    siteName: "Centro Quiropráctico Conteña",
    description:
      "Ayacucho llaqtapi quiropráctica hinallataq kurku hampiy. Yachayniykiwan kutimuy kuyunapaq.",
    titles: {
      home: "Centro Quiropráctico Conteña | Ayacucho quiropráctico",
      services: "Yanapakuykuna",
      service: "Yanapakuy",
      firstVisit: "Ñawpaq watukuy",
      specialist: "Hampiq",
      stories: "Willakuykuna",
      center: "Centro",
      contact: "Rimanakuy",
      privacy: "Sapanchasqa willakuy",
      terms: "Kamachiykuna",
    },
  },
  nav: {
    home: "Qallariy",
    services: "Yanapakuykuna",
    firstVisit: "Ñawpaq watukuy",
    specialist: "Hampiq",
    stories: "Willakuykuna",
    center: "Centro",
    book: "Cita mañakuy",
    openMenu: "Menuta kichay",
    closeMenu: "Menuta wichqay",
  },
  hero: {
    eyebrow: "Allin kawsay, kuyuspa · Ayacucho",
    line1: "Kutimuy kuyunapaq.",
    emphasis: "Kutimuy qamman.",
    subtitle:
      "Quiropráctica hinallataq kurku rehabilitacion. Qamllapaq, uyariq hampi.",
    cta: "Huk consulta qallariy",
    scroll: "Urayman suchuy, riqsinaykupaq",
    place: "Conteña / Ayacucho, Perú",
  },
  intro: {
    label: "01 / Imayna cuidayku",
    title: "Allin kawsay huk sasilla kaqwan qallarin: uyariyku.",
    body: "Centro Quiropráctico Conteñapi quiropráctica hinallataq kurku rehabilitacionta huñunchik, qampa kuyunaykita hinaspa allin kawsayniykita yanapanapaq.",
  },
  servicesHome: {
    label: "02 / Imata ruwayku",
    title: "Qamman hina cuiday.",
    lead: "Tawa yanapakuykuna kuyunaykita yanapanapaq. Maskasqaykiman aswan hina kaqta akllay.",
    all: "Lliw yanapakuykunata qhaway",
  },
  servicesPage: {
    label: "Hampi",
    title: "Sapa kurku, hukniray cuiday.",
    lead: "Kaykunaqa centropa willasqan especialidadkunan. Chiqap hampiqa consultapi akllakun.",
  },
  service: {
    "ajuste-quiropractico": {
      name: "Ajuste quiropráctico",
      kicker: "Columna hinallataq kuyuy",
      summary:
        "Columna hinaspa wasa nanaypaq hampi, lumbalgia, ciática hinallataq cervicalgia hina.",
      forWhom:
        "Wasa, kunka icha columna nanaymanta tapukuq runapaq, ima hampi allinchus yachanapaq.",
      expect:
        "Ñawpaq watukuyqa qhipaman watukuymanta hukniraymi: ñawpaqta casoykita yachayku, chaymanta plan acordasqata qatichiyku.",
    },
    "terapia-fisica": {
      name: "Terapia física hinallataq rehabilitación",
      kicker: "Kutichiq hampi",
      summary:
        "Lisiy qhipaman kuyuy kutichinapaq yanapakuy, articulacion nanaykunapaqpas, hombro nanay ima.",
      forWhom:
        "Lisiy, esguince, fractura icha articulacion nanay qhipaman kuyuy munaq runapaq.",
      expect:
        "Evaluacionmi plantam churan. Mana llapan runakunaqa kaq ritmollapi, kaq sesionkunallapichu purinku.",
    },
    "tratamientos-especializados": {
      name: "Tratamiento especializado",
      kicker: "Sapa runapaq hampi",
      summary:
        "Nervio hinallataq articulacion unquykunamanta tapukuy: parálisis facial, artrosis, túnel carpiano ima.",
      forWhom:
        "Huk nervio icha articulacion unquymanta yuyaychasqa tapukuq runapaq.",
      expect:
        "Hampiqmi nillanqa kay centropa hampinchus icha huk profesionalman apachinachus.",
    },
    "bienestar-prevencion": {
      name: "Allin kawsay hinallataq prevención",
      kicker: "Sapa punchaw cuiday",
      summary:
        "Masaje hinallataq aycha tensay, contractura cuiday, allin kawsayniykipaq.",
      forWhom:
        "Aycha tensayta pisichiy munaq, sapa punchaw kuyuyta cuiday munaq runapaq.",
      expect:
        "Sesion qallarinampaq ñawpaqta ima kasqanta willayku. Mana nanay sayaq kaptinqa, evaluacionta mana rantinchu.",
    },
  },
  serviceLabels: {
    forWhom: "Pipaq",
    expect: "Imata suyay",
    duration: "Hayka tiempo",
    includes: "Imata apamun",
    followUp: "Qhipaman qatiy",
    consultValue: "Tiempotapas chanintapas WhatsApp pi tapukuy.",
    ask: "Kay yanapakuymanta tapukuy",
    initial: "Ñawpaq evaluacion",
    initialBody:
      "Ñawpaq hampiqa imarayku hamusqaykita uyariy, imayna kuyusqaykita qhaway, qhipaman imata ruwanata willay.",
    follow: "Qhipaman qatiy",
    followBody:
      "Qhipaman watukuykunaqa acordasqa plantam qatin. Imayna kasqaykita qhawaspa, necesitachkan chayqa, hampita tikrayku.",
    featured: "Aswan tapukusqa",
  },
  firstVisit: {
    label: "Ñawpaq watukuy",
    title: "Ñawpaq consultayki, mana apurayllawan.",
    lead: "Cita mañay ñawpaq, achka runakuna imachus kananta yachayta munanku. Centro kayhinam qallarin.",
    steps: [
      {
        title: "Evaluacion",
        body: "Imarayku hamusqaykita rimayku, imayna kuyusqaykitapas qhawayku.",
      },
      {
        title: "Plan",
        body: "Ima hampi allinchus, qhipaman imata ruwanata willayku.",
      },
      {
        title: "Qatiy",
        body: "Imayna purisqaykita yanapayku, necesitachkan chayqa plantam qamwan tikrayku.",
      },
    ],
    includedTitle: "Imata suyayta atinki",
    included: [
      "Imachus pasan, ima ruwayta kutichiyta munasqaykita willanaykipaq tiempo.",
      "Hampi qallarinampaq ñawpaqta willay.",
      "Qhipaman ruwanapaq plan, mana resultadopa promesachu.",
    ],
    faqTitle: "Sapa kuti tapukuykuna",
    faqs: [
      {
        q: "Pi hampiwanchik?",
        a: "Quiropráctico hinallataq fisioterapeuta Conteña. Huk runa yanapan chayqa, ima ruwasqantam willasunki.",
      },
      {
        q: "¿Nanachun?",
        a: "Sapa runa hukniraytam sientin. Hampiqqa qallarinampaq ñawpaqta willan. Kay webqa mana nanaynintachu prometen.",
      },
      {
        q: "¿Imata apamunay?",
        a: "Allin pachakuna. Ñawpaq willayniyki kaptinqa, apamuy.",
      },
      {
        q: "¿Hayka tiempo, hayka chanin?",
        a: "Tiempotapas chanintapas WhatsApp pi confirman. Kunankamaqa manaraq preciokunata webpi churaykuchu.",
      },
    ],
    cta: "Ñawpaq consultata mañakuy",
  },
  specialist: {
    label: "Cuidaypa runa lado",
    title: "Runakuna runakunata cuidanku.",
    role: "Quiropráctico hinallataq fisioterapeuta Conteña",
    body: "Centro Quiropráctico Conteñaqa Ayacuchopi musculoesquelético saludpa referente hina presentakun, integral hinallataq personalizado hampiwan. Huntasqa suti, yachay wasi hinallataq registro profesionalqa centro confirman chayllam willasqa kanqa.",
    who: "Pi qamta hampiwan",
    bullets: [
      "Atención quiropráctica",
      "Terapia física hinallataq rehabilitación",
      "Personalizado hampi hinallataq qatiy",
    ],
    cta: "Allin kawsayniykimanta rimaykusun",
    alt: "Centro Quiropráctico Conteñapa hampiqnin",
  },
  stories: {
    label: "Paykuna quiquin willakuy",
    title: "Paykuna willasunki.",
    lead: "Centropa lluqsisqan willakuykuna. Sapa experienciaqa sapallanmi; mana huk runapa resultadonta willanchu.",
    note: "Uyarinaykipaq reproduciy. Huk videollam huk kutipi purin.",
    play: "Kay runapa willakuyninta uyariy",
    prev: "Ñawpaq willakuy",
    next: "Qhipa willakuy",
    pause: "Sayachiy",
    items: {
      alejandra: {
        name: "Alejandra",
        title: "Gushtasqanman kutiyta munachkan",
        quote:
          "Kurkuy nanarqan, kunanqa allin, tranquilu kachkani. Turiykunata, paniykunata, wawakunatapas hamunankupaq recomendani. Doctorqa anchatam yanapan; minutukunallapi allichawarqan, mana nanachiwarqanchu.",
      },
      becker: {
        name: "Becker",
        title: "Payqa experiencianmanta hinam nillan",
        quote:
          "Ancha allin llamkaymi, nanaykuna huk ratuqlla lluqsimurqan. Mana nanaychu karqan, ancha aguantay atina, aswanqa resultadoqa ratullam. Wasa uray nanaywan haykurqani, kunanqa manaña sientinichu.",
      },
      sonia: {
        name: "Sonia",
        title: "Allin sentikunaypaq huk ratu",
        quote:
          "Ancha millay situacionpi hamurqani, llapan kurkuy nanarqan, llakisqa purirqani, kunanqa recuperasqa kachkani. Kay iskay sesionkunapi ancha allin, relajasqa, tranquilu kachkani. Ama iskayyaychu hamuy.",
      },
    },
  },
  center: {
    label: "Conteña ukupi",
    title: "Allin makikunapi.",
    lead: "Ayacucho localpi cuidayta qhaway. Chayananpaq referenciaqa punku 4.",
    captions: {
      care: "Cerca atención",
      move: "Kuyuy hinallataq kutichiy",
      time: "Qamta cuidanaykipaq tiempo",
    },
    accessTitle: "Imayna chayana",
    access:
      "Las Américas Mz. I Lt. 13, punku 4 chimpanpi, Ayacucho. Ñawpaq kutiyki kaptinqa, cita confirmanayki ratu punku 4 referenciata mañakuy.",
  },
  contact: {
    label: "Sispaykim kachkayku",
    title: "Qhipa puriyki. Kaypi kachkayku.",
    visit: "Watukamuwayku",
    hoursTitle: "Atención horario",
    talk: "Rimaykusun",
    directions: "Imayna chayana",
    videoCaption: "Centrota hinallataq maypi kasqanta reqsiy",
    formTitle: "Qillqamuwayku",
    name: "Suti",
    phone: "Teléfono",
    reason: "Imarayku",
    message: "Willakuy",
    send: "Kachay hinaspa WhatsApp pi qatiy",
    sending: "Kachachkan…",
    other: "Huk imarayku",
    success:
      "Listu. WhatsAppta kichayku willakuyniykiwan, centro cita confirmananpaq.",
    error: "Formulariota mana kachayta atirqanichu. WhatsApp pi directo qillqamuwayku.",
    openWhatsapp: "WhatsAppta kichay",
    faqTitle: "Hamunayki ñawpaq",
    faqs: [
      {
        q: "¿Ñawpaq watukuypi imata pasan?",
        a: "Imarayku hamusqaykita uyariyku, imayna kuyusqaykita qhawayku, qhipaman imata ruwanata willayku.",
      },
      {
        q: "¿Cancelayta icha tikrayta atinichu?",
        a: "Arí. Al menos 24 hora ñawpaqta mañakuy, centropa kamachiynin hina.",
      },
    ],
    hours: [
      { days: "Lunesmanta vierneskama", time: "9:00–13:00 / 15:00–19:00" },
      { days: "Sábado", time: "9:00–13:00" },
      { days: "Domingo", time: "Wichqasqa" },
    ],
    closed: "Wichqasqa",
  },
  footer: {
    blurb:
      "Ayacuchopi quiropráctica hinallataq kurku rehabilitación. Saludniyki hinallataq allin kawsayniykiqa centropa ñawpaqninmi.",
    quick: "Tinkikuna",
    contact: "Rimanakuy",
    rights: "Centro Quiropráctico Conteña.",
    developedBy: "Ruwaqnin",
    privacy: "Sapanchasqa",
    terms: "Kamachiykuna",
  },
  legal: {
    updated: "Centropa qhipa kunanchaynin: abril 2026.",
    privacyIntro:
      "Kay pataqa centropa willasqan política resuminta, kay sitipa formularioman hina.",
    termsIntro:
      "Kay sitita llamkachispa, cita mañakuspa, kay kamachiykunata aceptanki. Centro lluqsichirqan.",
    privacy: [
      {
        heading: "Kamachiy",
        paragraphs: [
          "Centro Quiropráctico Conteñaqa sapanchasqa datokunata Perú Ley N.° 29733, Ley de Protección de Datos Personales, hina waqaychan.",
        ],
      },
      {
        heading: "Webpi mañasqayku datokuna",
        paragraphs: [
          "Kay sitipa formulariunqa suti, teléfono, imarayku, huk willakuylatam mañan. Mana DNI ni historia clínicata mañanchu.",
          "WhatsApp icha localpi cita mañanki chayqa, centroqa willasqan datokunatapas mañanman: suti, DNI, celular, imarayku, horario.",
        ],
      },
      {
        heading: "Imapaq",
        paragraphs: [
          "Chay datokunaqa cita churanapaq, hampimanta rimaykunapaq.",
          "Centroqa nillanmi, sapa kuti, fiesta promocionkunata kachanman. Sayachinaykita mañakuyta atinki.",
        ],
      },
      {
        heading: "Maypi waqaychay",
        paragraphs: [
          "Centroqa nillanmi hampi datokunata sapalla hoja de cálculopi waqaychasqan, personalnillan qhawan.",
        ],
      },
      {
        heading: "Derecho ARCO",
        paragraphs: [
          "Datoykita qhawayta, allichayta, chinkachiyta icha harkayta munaspa, carloscontena@gmail.com man qillqay.",
        ],
      },
    ],
    terms: [
      {
        heading: "Hatun willakuy",
        paragraphs: [
          "Centropa yanapakuykunaqa kurku rehabilitación hinallataq quiropráctico allin kawsaypaq. Kay webpa willakuyninqa yachachinallapaq; mana presencial evaluacionta rantinchu.",
        ],
      },
      {
        heading: "Cita hinallataq cancelacion",
        paragraphs: [
          "Cancelayta icha tikrayta necesitanki chayqa, acordasqa horamanta al menos 24 hora ñawpaqta ruway.",
        ],
      },
      {
        heading: "Kutichiy",
        paragraphs: [
          "Centro reserva cobran, 24 hora mana avisaspa cancelanki chayqa, chay reservapa 50 % kutichinanta nillan.",
          "Ña ruwasqa tratamientopa kutichiyninqa, centro nisqan hina, profesional evaluacion tratamiento dañachisqanta tarin chayllam. Mana suyasqa resultadota mana tarisqaykiraykullachu kutichiy kan.",
        ],
      },
      {
        heading: "Mana responsabilidad",
        paragraphs: [
          "Llapan quiropráctico tratamientopaqqa ñawpaq evaluacion necesitakun. Emergencia médica kaptinqa, aswan sispa salud centro man riy.",
        ],
      },
    ],
  },
  common: {
    whatsappLabel: "WhatsApp pi rimay",
    individual: "Sapa experienciaqa sapallanmi.",
  },
  notFound: {
    title: "Chay patata mana tarirqanichu.",
    body: "Tinki mana kanchu icha tikrakun. Qallariyman kutiy.",
    cta: "Qallariyman riy",
  },
  whatsapp: {
    general: "Allillanchu, cita mañakunapaq willayta munani.",
    service: "Allillanchu, {service} manta willayta munani.",
    firstVisit: "Allillanchu, ñawpaq consultata mañakuyta munani.",
    form: "Allillanchu, ñuqa {name} kani. Teléfono: {phone}. Imarayku: {reason}. {message}",
  },
};

export default quy;
