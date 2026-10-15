import type { Dictionary } from "@/dictionaries/types";

const es: Dictionary = {
  meta: {
    siteName: "Centro Quiropráctico Conteña",
    description:
      "Quiropráctica y rehabilitación física en Ayacucho. Atención cercana para volver a moverte.",
    titles: {
      home: "Centro Quiropráctico Conteña | Quiropráctico en Ayacucho",
      services: "Servicios",
      service: "Servicio",
      firstVisit: "Primera visita",
      specialist: "Especialista",
      stories: "Testimonios",
      center: "El centro",
      contact: "Contacto",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
    },
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    firstVisit: "Primera visita",
    specialist: "Especialista",
    stories: "Historias",
    center: "El centro",
    book: "Agenda tu cita",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Tu bienestar, en movimiento · Ayacucho",
    line1: "Vuelve a moverte.",
    emphasis: "Vuelve a ti.",
    subtitle:
      "Quiropráctica y rehabilitación física. Una atención cercana, pensada para ti.",
    cta: "Comienza con una consulta",
    scroll: "Desliza para conocernos",
    place: "Conteña / Ayacucho, Perú",
  },
  intro: {
    label: "01 / Nuestra manera de cuidar",
    title: "El bienestar empieza con algo sencillo: escucharte.",
    body: "En Centro Quiropráctico Conteña combinamos atención quiropráctica y rehabilitación física con un enfoque personalizado para acompañar tu movilidad y bienestar.",
  },
  servicesHome: {
    label: "02 / Qué hacemos",
    title: "Cuidado que se adapta a ti.",
    lead: "Cuatro maneras de acompañar tu movimiento. Elige la que más se parece a lo que buscas.",
    all: "Ver todos los servicios",
  },
  servicesPage: {
    label: "Atención",
    title: "Cada cuerpo, un cuidado diferente.",
    lead: "Estas son las especialidades publicadas del centro. La atención concreta se define en la consulta.",
  },
  service: {
    "ajuste-quiropractico": {
      name: "Ajuste quiropráctico",
      kicker: "Columna y movilidad",
      summary:
        "Atención enfocada en la columna vertebral y las molestias de espalda, como lumbalgia, ciática y cervicalgia.",
      forWhom:
        "Para quien consulta por molestias de espalda, cuello o columna y quiere saber qué atención le corresponde.",
      expect:
        "La primera vez se distingue del seguimiento: primero se conoce tu caso y después se continúa el plan acordado.",
    },
    "terapia-fisica": {
      name: "Terapia física y rehabilitación",
      kicker: "Recuperación funcional",
      summary:
        "Acompañamiento para recuperar movilidad después de lesiones y atender molestias articulares, incluido el hombro doloroso.",
      forWhom:
        "Para quien quiere recuperar movimiento después de una lesión, un esguince, una fractura o una molestia articular.",
      expect:
        "La evaluación define el plan. No todas las personas siguen el mismo ritmo ni las mismas sesiones.",
    },
    "tratamientos-especializados": {
      name: "Tratamientos especializados",
      kicker: "Atención personalizada",
      summary:
        "Consulta por afecciones de nervios y articulaciones, entre ellas parálisis facial, artrosis y síndrome del túnel carpiano.",
      forWhom:
        "Para quien busca orientación sobre una afección específica de nervios o articulaciones.",
      expect:
        "El especialista indica si la atención del centro corresponde o si hace falta derivar a otro profesional.",
    },
    "bienestar-prevencion": {
      name: "Bienestar y prevención",
      kicker: "Cuidado cotidiano",
      summary:
        "Masajes y atención de tensiones musculares y contracturas, como parte del cuidado de tu bienestar.",
      forWhom:
        "Para quien quiere aliviar tensión muscular y cuidar el movimiento en el día a día.",
      expect:
        "Se explica qué incluye la sesión antes de empezarla. No sustituye una evaluación cuando hay dolor persistente.",
    },
  },
  serviceLabels: {
    forWhom: "Para quién",
    expect: "Qué esperar",
    duration: "Duración",
    includes: "Qué incluye",
    followUp: "Seguimiento",
    consultValue: "Consulta el valor y la duración por WhatsApp.",
    ask: "Consultar por este servicio",
    initial: "Evaluación inicial",
    initialBody:
      "La primera atención sirve para escuchar tu motivo de consulta, revisar cómo te mueves y explicarte los siguientes pasos.",
    follow: "Seguimiento",
    followBody:
      "Las visitas posteriores continúan el plan acordado. Se revisa cómo vas y se ajusta la atención si hace falta.",
    featured: "La más consultada",
  },
  firstVisit: {
    label: "Primera visita",
    title: "Tu primera consulta, sin apuros.",
    lead: "Antes de reservar, mucha gente quiere saber qué va a pasar. Así empieza la atención en el centro.",
    steps: [
      {
        title: "Evaluación",
        body: "Conversamos sobre tu motivo de consulta y revisamos cómo te mueves.",
      },
      {
        title: "Plan",
        body: "Te explicamos qué atención corresponde y cuáles son los siguientes pasos.",
      },
      {
        title: "Seguimiento",
        body: "Acompañamos la evolución y revisamos el plan contigo cuando hace falta.",
      },
    ],
    includedTitle: "Qué puedes esperar",
    included: [
      "Tiempo para contar qué te ocurre y qué actividad quieres recuperar.",
      "Una explicación de la atención antes de empezarla.",
      "Un plan de siguientes pasos, no una promesa de resultado.",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Quién me atiende?",
        a: "El quiropráctico y fisioterapeuta Conteña. Si participa otra persona del centro, te explican su función.",
      },
      {
        q: "¿Duele?",
        a: "Cada persona lo vive distinto. El especialista explica la atención antes de empezarla. Esta web no promete que sea indolora.",
      },
      {
        q: "¿Qué debo llevar?",
        a: "Ropa cómoda. Si tienes indicaciones previas, tráelas a la consulta.",
      },
      {
        q: "¿Cuánto dura y cuánto cuesta?",
        a: "La duración y el valor se confirman por WhatsApp. Todavía no publicamos precios en la web.",
      },
    ],
    cta: "Agendar la primera consulta",
  },
  specialist: {
    label: "El lado humano del cuidado",
    title: "Personas que cuidan personas.",
    role: "Quiropráctico y fisioterapeuta Conteña",
    body: "El Centro Quiropráctico Conteña se presenta como un referente de la salud musculoesquelética en Ayacucho, con un tratamiento integral y personalizado. El nombre completo, la institución de formación y los registros profesionales se publicarán cuando el centro los confirme.",
    who: "Quién te atiende",
    bullets: [
      "Atención quiropráctica",
      "Terapia física y rehabilitación",
      "Atención personalizada y seguimiento",
    ],
    cta: "Conversemos sobre tu bienestar",
    alt: "Especialista del Centro Quiropráctico Conteña",
  },
  stories: {
    label: "Historias en primera persona",
    title: "Ellos te lo cuentan.",
    lead: "Testimonios publicados por el centro. Cada experiencia es individual y no anticipa el resultado de otra persona.",
    note: "Pulsa reproducir para escuchar. Solo se reproduce un video a la vez.",
    play: "Reproducir testimonio de",
    prev: "Testimonio anterior",
    next: "Testimonio siguiente",
    pause: "Pausar",
    items: {
      alejandra: {
        name: "Alejandra",
        title: "Lista para volver a lo que le gusta",
        quote:
          "Mi cuerpo dolía, pero ahora me siento bien y con tranquilidad. Recomiendo a todos mis hermanos, hermanas y niños que vengan. El doctor ayuda bastante, me arregló en unos minutitos y no me hizo doler nada.",
      },
      becker: {
        name: "Becker",
        title: "Así describe su experiencia",
        quote:
          "Es un trabajo muy eficiente porque se me han quitado los dolores de un momento a otro. Aparte de ello, no ha sido doloroso, es sumamente tolerable y, sobre todo, el resultado es inmediato. Entré con dolor en la espalda baja que ahora ya no lo siento.",
      },
      sonia: {
        name: "Sonia",
        title: "Un momento para sentirse mejor",
        quote:
          "Vine en una situación muy mal, me dolía todo el cuerpo, andaba angustiada, pero ahora me siento recuperada. En estas dos sesiones que voy llevando, me siento súper bien, súper relajada y tranquila. No duden en venir.",
      },
    },
  },
  center: {
    label: "Dentro de Conteña",
    title: "En buenas manos.",
    lead: "Un vistazo al cuidado en el local de Ayacucho. La referencia para llegar es la puerta 4.",
    captions: {
      care: "Atención cercana",
      move: "Movimiento y recuperación",
      time: "Tiempo para cuidarte",
    },
    accessTitle: "Cómo llegar",
    access:
      "Las Américas Mz. I Lt. 13, frente a la puerta 4, Ayacucho. Si vienes por primera vez, pide la referencia de la puerta 4 al confirmar tu cita.",
  },
  contact: {
    label: "Estamos cerca de ti",
    title: "Tu próximo paso. Estamos aquí.",
    visit: "Visítanos",
    hoursTitle: "Horario de atención",
    talk: "Hablemos",
    directions: "Cómo llegar",
    videoCaption: "Conoce el centro y su ubicación",
    formTitle: "Escríbenos",
    name: "Nombre",
    phone: "Teléfono",
    reason: "Motivo",
    message: "Mensaje",
    send: "Enviar y continuar por WhatsApp",
    sending: "Enviando…",
    other: "Otro motivo",
    success: "Listo. Te abrimos WhatsApp con tu mensaje para que la cita quede confirmada con el centro.",
    error: "No pudimos enviar el formulario. Puedes escribirnos directo por WhatsApp.",
    openWhatsapp: "Abrir WhatsApp",
    faqTitle: "Antes de venir",
    faqs: [
      {
        q: "¿Qué pasa en la primera visita?",
        a: "Escuchamos tu motivo, revisamos cómo te mueves y te explicamos los siguientes pasos.",
      },
      {
        q: "¿Puedo cancelar o reprogramar?",
        a: "Sí. Pide el cambio con al menos 24 horas de anticipación, como indican los términos del centro.",
      },
    ],
    hours: [
      { days: "Lunes a viernes", time: "9:00–13:00 / 15:00–19:00" },
      { days: "Sábados", time: "9:00–13:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
    closed: "Cerrado",
  },
  footer: {
    blurb:
      "Quiropráctica y rehabilitación física en Ayacucho. Tu salud y bienestar son la prioridad del centro.",
    quick: "Enlaces",
    contact: "Contacto",
    rights: "Centro Quiropráctico Conteña.",
    developedBy: "Desarrollado por",
    privacy: "Privacidad",
    terms: "Términos",
  },
  legal: {
    updated: "Última actualización publicada por el centro: abril de 2026.",
    privacyIntro:
      "Esta página resume la política publicada por el centro y la adapta al formulario de este sitio.",
    termsIntro:
      "Al usar este sitio y solicitar una cita aceptas estas condiciones, tomadas de las publicadas por el centro.",
    privacy: [
      {
        heading: "Marco legal",
        paragraphs: [
          "El Centro Quiropráctico Conteña protege los datos personales de acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú.",
        ],
      },
      {
        heading: "Datos que pedimos en la web",
        paragraphs: [
          "El formulario de este sitio pide solo nombre, teléfono, motivo de consulta y un mensaje. No solicita DNI ni historia clínica.",
          "Cuando agendas por WhatsApp o en el local, el centro puede pedir además los datos que ya publica: nombres y apellidos, DNI, celular, motivo de consulta y horario.",
        ],
      },
      {
        heading: "Uso",
        paragraphs: [
          "Esos datos se usan para agendar citas y contactarte sobre la atención.",
          "El centro también indica que puede enviar, de forma ocasional, promociones por festividades. Puedes pedir que dejen de enviártelas.",
        ],
      },
      {
        heading: "Almacenamiento",
        paragraphs: [
          "El centro indica que guarda los datos de atención en una hoja de cálculo privada, de acceso exclusivo para su personal.",
        ],
      },
      {
        heading: "Derechos ARCO",
        paragraphs: [
          "Para acceder, rectificar, cancelar u oponerte al uso de tus datos, escribe a carloscontena@gmail.com.",
        ],
      },
    ],
    terms: [
      {
        heading: "Información general",
        paragraphs: [
          "Los servicios del centro están orientados a la rehabilitación física y el bienestar quiropráctico. La información de esta web es informativa y no sustituye una evaluación presencial.",
        ],
      },
      {
        heading: "Citas y cancelaciones",
        paragraphs: [
          "Si necesitas cancelar o reprogramar, hazlo con al menos 24 horas de anticipación al horario acordado.",
        ],
      },
      {
        heading: "Reembolsos",
        paragraphs: [
          "Si el centro cobra una reserva y cancelas sin las 24 horas de anticipación, indica que solo reembolsaría el 50 % de esa reserva.",
          "Las devoluciones por tratamientos ya realizados, según el centro, solo aplican si una evaluación profesional determina que el tratamiento resultó contraproducente. No hay reembolso solo porque no se alcanzó todo el resultado esperado.",
        ],
      },
      {
        heading: "Exención",
        paragraphs: [
          "Todo tratamiento quiropráctico requiere evaluación previa. Si tienes una emergencia médica, acude al centro de salud más cercano.",
        ],
      },
    ],
  },
  common: {
    whatsappLabel: "Contactar por WhatsApp",
    individual: "Cada experiencia es individual.",
  },
  notFound: {
    title: "No encontramos esa página.",
    body: "El enlace no existe o cambió. Vuelve al inicio para seguir.",
    cta: "Ir al inicio",
  },
  whatsapp: {
    general: "Hola, deseo información para agendar una cita.",
    service: "Hola, deseo información sobre {service}.",
    firstVisit: "Hola, deseo agendar una primera consulta.",
    form: "Hola, soy {name}. Teléfono: {phone}. Motivo: {reason}. {message}",
  },
};

export default es;
