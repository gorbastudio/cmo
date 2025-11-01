const CMO_DATA = {
  services: [
    {
      id: "medicina-general",
      icon: "🩺",
      title: "Medicina General",
      description: "Consultas integrales, seguimiento de patologías crónicas y certificados médicos.",
      cta: "Agendar",
    },
    {
      id: "ginecologia",
      icon: "👩‍⚕️",
      title: "Ginecología",
      description: "Controles preventivos, citologías en capa fina, ultrasonido obstétrico y biopsias.",
      cta: "Agendar",
    },
    {
      id: "urologia",
      icon: "💧",
      title: "Urología",
      description: "Diagnóstico y tratamiento de afecciones urinarias con ultrasonido especializado.",
      cta: "Agendar",
    },
    {
      id: "dermatologia",
      icon: "🌿",
      title: "Dermatología",
      description: "Detección de lesiones cutáneas, dermatoscopía y procedimientos ambulatorios.",
      cta: "Agendar",
    },
    {
      id: "radiologia",
      icon: "🖥️",
      title: "Radiología",
      description: "Rayos X digital, radiografía panorámica y apoyo diagnóstico para especialistas.",
      cta: "Agendar",
    },
    {
      id: "terapia-lenguaje",
      icon: "🗣️",
      title: "Terapia de Lenguaje",
      description: "Evaluación y rehabilitación de comunicación, deglución y habilidades cognitivas.",
      cta: "Agendar",
    },
    {
      id: "laboratorio",
      icon: "🧪",
      title: "Laboratorio Clínico",
      description: "Exámenes de rutina y pruebas especializadas con resultados confiables y rápidos.",
      cta: "Agendar",
    },
    {
      id: "diana-barahona",
      name: "Dra. Diana Carolina Barahona",
      specialty: "Dirección Técnica de Laboratorio",
      schedule: "Lunes a sábado · 7:00 a.m. - 3:00 p.m.",
      format: "Presencial",
      photo: "https://i.pravatar.cc/160?img=21",
    },
  ],
  specialists: [
    {
      id: "marianela-salas",
      name: "Dra. Marianela Salas",
      specialty: "Ginecología y Obstetricia",
      schedule: "Martes y jueves · 2:00 p.m. - 6:00 p.m.",
      format: "Presencial / Virtual",
      photo: "https://i.pravatar.cc/160?img=47",
    },
    {
      id: "johnny-rodriguez",
      name: "Dr. Jhonny Rodríguez",
      specialty: "Urología",
      schedule: "Sábados · 8:00 a.m. - 12:00 m.d.",
      format: "Presencial",
      photo: "https://i.pravatar.cc/160?img=12",
    },
    {
      id: "karla-coto",
      name: "Dra. Karla Coto Vásquez",
      specialty: "Terapia de Lenguaje",
      schedule: "Miércoles y viernes · 9:00 a.m. - 4:00 p.m.",
      format: "Presencial / Domicilio",
      photo: "https://i.pravatar.cc/160?img=58",
    },
    {
      id: "andres-campos",
      name: "Dr. Andrés Campos",
      specialty: "Medicina General",
      schedule: "Lunes a domingo · 24/7",
      format: "Presencial / Virtual",
      photo: "https://i.pravatar.cc/160?img=33",
    },
  ],
  labTests: [
    "Hemograma completo",
    "Perfil tiroideo (TSH, T3, T4)",
    "Panel de alergias",
    "PCR y marcadores tumorales",
    "Cultivos (uro, copro, hongos)",
    "Pruebas prenupciales",
  ],
  labPanels: [
    {
      id: "checkup-basico",
      title: "Check-up básico",
      description: "Incluye hemograma, perfil lipídico, glicemia y función renal con entrega el mismo día.",
      tests: ["Hemograma", "Perfil lipídico", "Creatinina", "Glucosa en ayunas"],
    },
    {
      id: "control-diabetes",
      title: "Control de diabetes",
      description: "Monitoreo integral con hemoglobina glicosilada y evaluación renal.",
      tests: ["Hemoglobina glicosilada", "Glucosa", "Microalbuminuria", "Perfil renal"],
    },
    {
      id: "perfil-prenatal",
      title: "Perfil prenatal",
      description: "Tamizaje prenatal con grupo sanguíneo, VDRL y pruebas infecciosas.",
      tests: ["Grupo sanguíneo/Rh", "VDRL", "Hepatitis B", "Hemograma"],
    },
  ],
  laboratoryServices: [
    {
      title: "Toma de muestra a domicilio",
      description: "Disponible para personas adultas mayores o con movilidad reducida en Zarcero y comunidades cercanas.",
    },
    {
      title: "Campañas empresariales",
      description: "Tamizajes ocupacionales y campañas de salud in-house con reportes consolidados.",
    },
    {
      title: "Resultados digitales",
      description: "Entrega de resultados por correo seguro y plataforma interna para especialistas.",
    },
  ],
  news: [
    {
      id: "campana-vacunacion",
      category: "campañas",
      title: "Jornada de vacunación contra influenza",
      excerpt: "Del 4 al 9 de noviembre, vacunas a precio especial para población de riesgo.",
      date: "2025-11-01",
      link: "#",
      featured: true,
    },
    {
      id: "agenda-ginecologia",
      category: "especialidades",
      title: "Nuevos horarios en ginecología",
      excerpt: "La Dra. Marianela Salas habilita citas virtuales los miércoles en la tarde.",
      date: "2025-10-22",
      link: "#",
    },
    {
      id: "aviso-feriado",
      category: "avisos",
      title: "Horario especial feriado",
      excerpt: "El 15 de noviembre el laboratorio atenderá hasta las 11:00 a.m.",
      date: "2025-10-18",
      link: "#",
    },
    {
      id: "charla-diabetes",
      category: "campañas",
      title: "Charla gratuita sobre diabetes",
      excerpt: "Expertos en nutrición y medicina general brindarán recomendaciones prácticas.",
      date: "2025-09-30",
      link: "#",
      featured: true,
    },
  ],
  testimonials: [
    {
      quote: "Recibí atención inmediata para una emergencia y el seguimiento fue impecable.",
      author: "Laura G. · Paciente de Medicina General",
    },
    {
      quote: "La ginecóloga resolvió todas mis dudas y pude agendar desde mi celular.",
      author: "María José R. · Paciente de Ginecología",
    },
    {
      quote: "Los resultados de laboratorio estuvieron listos antes del mediodía, excelente servicio.",
      author: "Carlos M. · Paciente de Laboratorio",
    },
  ],
  serviceDetails: {
    "medicina-general": {
      eyebrow: "Atención primaria 24/7",
      title: "Medicina General",
      summary:
        "Consultas integrales para cada etapa de la vida, control de padecimientos crónicos y orientación preventiva para toda la familia.",
      stats: [
        { label: "Cobertura", value: "24/7" },
        { label: "Consultas mensuales", value: "250+" },
        { label: "Modalidades", value: "Presencial · Virtual" },
      ],
      highlights: [
        {
          title: "Urgencias leves y seguimiento",
          description:
            "Atención inmediata de síntomas agudos, estabilización y coordinación con especialistas cuando es necesario.",
        },
        {
          title: "Control de enfermedades crónicas",
          description:
            "Planes personalizados para hipertensión, diabetes, asma y otras condiciones de largo plazo.",
        },
        {
          title: "Certificaciones y dictámenes",
          description: "Dictamen de licencia, certificados laborales, escolares y apto físico actualizado.",
        },
      ],
      procedures: [
        "Chequeo integral y seguimiento de tratamientos",
        "Nebulizaciones y aplicación de medicamentos",
        "Electrocardiogramas y monitoreo de signos vitales",
        "Coordinación de referencias con especialistas internos",
      ],
      specialists: ["andres-campos"],
      faqs: [
        {
          question: "¿Debo agendar cita para emergencias leves?",
          answer:
            "Podés acercarte 24/7. Para agilizar tu atención, recomendamos reservar y detallar tus síntomas en el formulario.",
        },
        {
          question: "¿Atienden consultas virtuales?",
          answer:
            "Sí, realizamos valoraciones virtuales cuando la condición lo permite y coordinamos exámenes complementarios si se requieren.",
        },
      ],
    },
    ginecologia: {
      eyebrow: "Salud femenina integral",
      title: "Clínica de Ginecología y Obstetricia",
      summary:
        "Diagnóstico oportuno, prevención y acompañamiento durante cada etapa de la vida reproductiva con tecnología avanzada.",
      stats: [
        { label: "Citologías al año", value: "900+" },
        { label: "Ultrasonidos", value: "Trimestral" },
        { label: "Atención", value: "Presencial · Virtual" },
      ],
      highlights: [
        {
          title: "Controles preventivos",
          description:
            "Papanicolaou en monocapa, colposcopía y evaluación integral de salud reproductiva.",
        },
        {
          title: "Diagnóstico por imagen",
          description:
            "Ultrasonido transvaginal, obstétrico y pélvico con reportes entregados el mismo día.",
        },
        {
          title: "Procedimientos ambulatorios",
          description: "Biopsias dirigidas, colocación de DIU y alternativas anticonceptivas personalizadas.",
        },
      ],
      procedures: [
        "Evaluación anual integral",
        "Seguimiento de embarazo y planificación familiar",
        "Atención de patología cervical",
        "Educación para vida saludable y climaterio",
      ],
      specialists: ["marianela-salas"],
      faqs: [
        {
          question: "¿Cuánto dura la cita de control?",
          answer:
            "La valoración completa dura entre 30 y 40 minutos, dependiendo de los estudios requeridos.",
        },
        {
          question: "¿Realizan pruebas prenatales de laboratorio?",
          answer:
            "Sí, coordinamos exámenes con el laboratorio interno y entregamos resultados digitales y físicos.",
        },
      ],
    },
    urologia: {
      eyebrow: "Salud urinaria integral",
      title: "Clínica de Urología",
      summary:
        "Diagnóstico y tratamiento de patologías del sistema urinario masculino y femenino con enfoque preventivo.",
      stats: [
        { label: "Procedimientos mensuales", value: "60+" },
        { label: "Área", value: "Adultos y adolescentes" },
      ],
      highlights: [
        {
          title: "Ultrasonido urológico",
          description: "Estudios renales, vesicales y prostáticos con interpretación inmediata.",
        },
        {
          title: "Cirugías ambulatorias",
          description: "Vasectomía, corrección de fimosis y procedimientos mínimamente invasivos.",
        },
        {
          title: "Prevención masculina",
          description: "Tamizaje prostático, valoración de fertilidad y manejo de disfunción eréctil.",
        },
      ],
      procedures: [
        "Estudios urodinámicos básicos",
        "Manejo integral de infecciones urinarias recurrentes",
        "Tratamiento de litiasis",
      ],
      specialists: ["johnny-rodriguez"],
      faqs: [
        {
          question: "¿Atienden urgencias urológicas?",
          answer:
            "Sí, disponemos de atención prioritaria para dolor agudo, retención urinaria y trauma leve.",
        },
        {
          question: "¿Qué debo llevar a la consulta?",
          answer: "Exámenes previos, medicamentos actuales y antecedentes médicos relevantes.",
        },
      ],
    },
    dermatologia: {
      eyebrow: "Salud de tu piel",
      title: "Clínica de Dermatología",
      summary:
        "Prevención, diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas con tecnología especializada.",
      stats: [
        { label: "Chequeos de lunares", value: "Mensuales" },
        { label: "Procedimientos", value: "Dermatoscopía · Crioterapia" },
      ],
      highlights: [
        {
          title: "Dermatoscopía",
          description: "Evaluación de lesiones pigmentadas para detección temprana de cáncer de piel.",
        },
        {
          title: "Procedimientos ambulatorios",
          description: "Extracción de quistes, biopsias, láser para lesiones benignas y tratamientos estéticos selectivos.",
        },
        {
          title: "Dermatitis y alergias",
          description: "Planes personalizados para dermatitis atópica, psoriasis y acné resistente.",
        },
      ],
      procedures: [
        "Chequeo anual de lunares",
        "Tratamiento integral de acné",
        "Control de enfermedades autoinmunes cutáneas",
      ],
      specialists: [],
      faqs: [
        {
          question: "¿Realizan pruebas de alergia cutánea?",
          answer: "Coordinamos pruebas epicutáneas con nuestro laboratorio según valoración médica.",
        },
      ],
    },
    radiologia: {
      eyebrow: "Diagnóstico por imagen",
      title: "Unidad de Radiología",
      summary:
        "Tecnología digital para obtener imágenes precisas que respaldan las decisiones clínicas de todo nuestro equipo.",
      stats: [
        { label: "Estudios diarios", value: "40+" },
        { label: "Modalidades", value: "Rayos X · Panorámica · Ultrasonido" },
      ],
      highlights: [
        {
          title: "Rayos X digital",
          description: "Imágenes de alta definición con reducción de dosis y entrega electrónica.",
        },
        {
          title: "Radiografía panorámica",
          description: "Diagnóstico odontológico y ortodóntico con interpretación de especialistas.",
        },
        {
          title: "Ultrasonidos",
          description: "Estudios abdominales, renales, partes blandas y obstétricos complementarios a especialistas.",
        },
      ],
      procedures: [
        "Rayos X de extremidades y tórax",
        "Ultrasonido obstétrico y ginecológico",
        "Ultrasonido de partes blandas",
      ],
      specialists: [],
      faqs: [
        {
          question: "¿Necesito orden médica?",
          answer:
            "Sí, solicitamos referencia médica para garantizar la indicación adecuada y reportes alineados al tratamiento.",
        },
        {
          question: "¿Cuál es el tiempo de entrega de resultados?",
          answer: "Entre 1 y 2 horas para estudios estándar; se envían digitales y se entregan impresos si se requieren.",
        },
      ],
    },
    "terapia-lenguaje": {
      eyebrow: "Comunicación efectiva",
      title: "Clínica de Terapia del Lenguaje",
      summary:
        "Evaluación y rehabilitación de trastornos del habla, lenguaje y deglución para niños, adolescentes y adultos.",
      stats: [
        { label: "Sesiones semanales", value: "35+" },
        { label: "Modalidades", value: "Consultorio · Domicilio" },
      ],
      highlights: [
        {
          title: "Desarrollo infantil",
          description: "Intervención temprana para retrasos del lenguaje, trastornos fonológicos y TEA.",
        },
        {
          title: "Rehabilitación deglutoria",
          description: "Entrenamiento en deglución segura para pacientes neurológicos o post quirúrgicos.",
        },
        {
          title: "Comunicación funcional",
          description: "Técnicas para mejorar articulación, fluidez y voz en público.",
        },
      ],
      procedures: [
        "Evaluación inicial integral",
        "Planes terapéuticos personalizados",
        "Sesiones de seguimiento con indicadores de progreso",
      ],
      specialists: ["karla-coto"],
      faqs: [
        {
          question: "¿Ofrecen sesiones a domicilio?",
          answer: "Sí, disponibles en la zona de Zarcero previa coordinación.",
        },
        {
          question: "¿Cómo se mide el avance?",
          answer: "Utilizamos escalas estandarizadas y enviamos reportes periódicos a la familia o médico tratante.",
        },
      ],
    },
    laboratorio: {
      eyebrow: "Resultados confiables",
      title: "Laboratorio Clínico Monte Olivo",
      summary:
        "Exámenes de rutina y pruebas especializadas dirigidos por la Dra. Diana Carolina Barahona Jiménez, con entrega oportuna de resultados.",
      stats: [
        { label: "Horario", value: "L-V 7:00-15:00" },
        { label: "Sábados", value: "7:00-12:00" },
        { label: "Urgencias", value: "Sí" },
      ],
      highlights: [
        {
          title: "Paneles completos",
          description: "Hemogramas, perfiles tiroideos, marcadores tumorales y paneles de alergias.",
        },
        {
          title: "Diagnóstico molecular",
          description: "PCR, cultivos y pruebas para infecciones respiratorias y gastrointestinales.",
        },
        {
          title: "Atención empresarial",
          description: "Tamizajes ocupacionales y campañas de salud in-house.",
        },
      ],
      procedures: [
        "Recolección domiciliar para personas adultas mayores",
        "Entrega digital y física de resultados",
        "Coordinación con especialistas para interpretación conjunta",
      ],
      preparation: [
        "Presentarse con ayuno de 8 a 12 horas según examen.",
        "Informar medicamentos o suplementos antes de la extracción.",
        "Para pruebas de orina, traer muestra fresca o solicitar recipiente esterilizado en laboratorio.",
      ],
      faqs: [
        {
          question: "¿Cuánto tardan los resultados?",
          answer: "Los exámenes de rutina están listos el mismo día; pruebas especiales se entregan en 24-48 horas.",
        },
        {
          question: "¿Ofrecen toma de muestra a domicilio?",
          answer: "Sí, con cita previa y según disponibilidad en Zarcero y alrededores.",
        },
      ],
    },
  },
  banner: {
    text: "Promoción de check-up ejecutivo con descuentos durante noviembre. ¡Agenda tu paquete integral!",
    active: true,
  },
  serviceMap: {
    "andres-campos": "medicina-general",
    "marianela-salas": "ginecologia",
    "johnny-rodriguez": "urologia",
    "karla-coto": "terapia-lenguaje",
    "diana-barahona": "laboratorio",
  },
  specialistAvailability: [
    {
      specialistId: "andres-campos",
      specialty: "Medicina General",
      day: "Lunes a viernes",
      start: "24 horas",
      end: "",
    },
    {
      specialistId: "marianela-salas",
      specialty: "Ginecología",
      day: "Miércoles",
      start: "2:00 p.m.",
      end: "6:00 p.m.",
    },
    {
      specialistId: "johnny-rodriguez",
      specialty: "Urología",
      day: "Sábado",
      start: "8:00 a.m.",
      end: "12:00 m.d.",
    },
  ],
  contact: {
    address: "Frente al EBAIS de Laguna, Zarcero, Alajuela.",
    phones: ["2463-5005", "2463-5006"],
    whatsapp: "8838-2301",
    emergencies: "6071-1273",
    email: "clinicemonteolivo@gmail.com",
    hours: {
      medical: "Consultas médicas: Lunes a domingo 24/7",
      lab: "Laboratorio: Lunes a viernes 7:00 a.m. – 3:00 p.m., sábados 7:00 a.m. – 12:00 m.d.",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.399144223665!2d-84.394!3d10.226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa09f61f479cb89%3A0x6c4f91adced1fcf7!2sCl%C3%ADnica%20Monte%20Olivo!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr",
  },
  booking: {
    channels: [
      {
        id: "online",
        name: "Agenda en línea",
        description: "Seleccioná especialidad, profesional y horario disponible.",
      },
      {
        id: "whatsapp",
        name: "WhatsApp 8838-2301",
        description: "Confirmación rápida con nuestro equipo administrativo.",
      },
      {
        id: "telefono",
        name: "Línea telefónica 2463-5005",
        description: "Atención personalizada y coordinación de emergencias leves.",
      },
    ],
    steps: [
      {
        title: "Elegí tu especialidad",
        description: "Seleccioná el área o procedimiento que necesitás para mostrar horarios disponibles.",
      },
      {
        title: "Seleccioná el profesional",
        description: "Podés filtrar por modalidad presencial o virtual según disponibilidad.",
      },
      {
        title: "Confirma tus datos",
        description: "Recibirás confirmación por WhatsApp o correo dentro de las siguientes 2 horas hábiles.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo cambio una cita?",
        answer: "Podés reprogramar escribiendo al WhatsApp 8838-2301 o respondiendo al correo de confirmación.",
      },
      {
        question: "¿Requieren adelantos?",
        answer: "Solo ciertos procedimientos especializados requieren depósito. Te lo confirmaremos durante la agenda.",
      },
    ],
  },
}
