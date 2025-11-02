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
  ],
  specialists: [
    {
      id: "marianela-salas",
      name: "Dra. Marianela Salas",
      specialty: "Ginecología y Obstetricia",
      schedule: "Martes y jueves · 2:00 p.m. - 6:00 p.m.",
      format: "Presencial / Virtual",
      photo: "https://i.pravatar.cc/160?img=47",
      bio:
        "Acompaña controles preventivos, planificación familiar y seguimiento obstétrico con énfasis en educación para la salud y prevención temprana.",
      focuses: ["Controles ginecológicos", "Planificación familiar", "Ultrasonido obstétrico"],
      contact: {
        phone: "2463-5005",
        whatsapp: "8838-2301",
        email: "citas@clinicemonteolivo.com",
        profileUrl: "contacto.html#formulario",
      },
      languages: ["Español"],
    },
    {
      id: "johnny-rodriguez",
      name: "Dr. Jhonny Rodríguez",
      specialty: "Urología",
      schedule: "Sábados · 8:00 a.m. - 12:00 m.d.",
      format: "Presencial",
      photo: "https://i.pravatar.cc/160?img=12",
      bio:
        "Realiza diagnósticos y procedimientos urológicos ambulatorios, con enfoque en prevención masculina y tratamientos mínimamente invasivos.",
      focuses: ["Tamizaje prostático", "Cirugías ambulatorias", "Manejo de litiasis"],
      contact: {
        phone: "2463-5005",
        whatsapp: "8838-2301",
        email: "citas@clinicemonteolivo.com",
        profileUrl: "contacto.html#formulario",
      },
      languages: ["Español"],
    },
    {
      id: "karla-coto",
      name: "Dra. Karla Coto Vásquez",
      specialty: "Terapia de Lenguaje",
      schedule: "Miércoles y viernes · 9:00 a.m. - 4:00 p.m.",
      format: "Presencial / Domicilio",
      photo: "https://i.pravatar.cc/160?img=58",
      bio:
        "Diseña planes terapéuticos personalizados para trastornos del habla, lenguaje y deglución en población infantil y adulta.",
      focuses: ["Intervención temprana", "Rehabilitación deglutoria", "Comunicación funcional"],
      contact: {
        phone: "2463-5005",
        whatsapp: "8838-2301",
        email: "citas@clinicemonteolivo.com",
        profileUrl: "contacto.html#formulario",
      },
      languages: ["Español"],
    },
    {
      id: "andres-campos",
      name: "Dr. Andrés Campos",
      specialty: "Medicina General",
      schedule: "Lunes a domingo · 24/7",
      format: "Presencial / Virtual",
      photo: "https://i.pravatar.cc/160?img=33",
      bio:
        "Coordina la atención primaria 24/7, estabiliza urgencias leves y canaliza al paciente con especialistas o laboratorio interno según necesidad.",
      focuses: ["Urgencias leves", "Control de enfermedades crónicas", "Certificados médicos"],
      contact: {
        phone: "2463-5005",
        whatsapp: "8838-2301",
        email: "citas@clinicemonteolivo.com",
        profileUrl: "contacto.html#formulario",
      },
      languages: ["Español"],
    },
    {
      id: "diana-barahona",
      name: "Dra. Diana Carolina Barahona",
      specialty: "Dirección Técnica de Laboratorio",
      schedule: "Lunes a sábado · 7:00 a.m. - 3:00 p.m.",
      format: "Presencial",
      photo: "https://i.pravatar.cc/160?img=21",
      bio:
        "Microbióloga y Química Clínica responsable del Laboratorio Monte Olivo. Supervisa la calidad de resultados y coordina campañas empresariales y atención a emergencias, según la rotulación oficial del laboratorio (fotografía proporcionada).",
      focuses: ["Diagnóstico clínico", "Paneles especializados", "Campañas empresariales"],
      contact: {
        phone: "2463-5006",
        whatsapp: "8980-6406",
        email: "laboratoriomonteolivo@gmail.com",
        profileUrl:
          "https://www.facebook.com/ClinicaMonteOlivo/?locale=es_LA",
      },
      languages: ["Español"],
      sources: [
        {
          label: "Cartelería Laboratorio Monte Olivo (fotografía)",
          url: null,
        },
        {
          label: "Facebook Clínica Monte Olivo",
          url: "https://www.facebook.com/ClinicaMonteOlivo/?locale=es_LA",
        },
      ],
    },
    {
      id: "lucia-solano",
      name: "Lic. Lucía Solano Blanco",
      specialty: "Psicología Clínica",
      schedule: "Agenda previa · Coordinación telefónica",
      format: "Presencial",
      photo: "https://i.pravatar.cc/160?img=66",
      bio:
        "Psicóloga colegiada que atiende en Clínica Monteolivo, Zarcero. Información verificada en Psychology Today (perfil Clinica Monteolivo).",
      focuses: [],
      contact: {
        phone: "8964-1345",
        whatsapp: "8964-1345",
        email: null,
        profileUrl:
          "https://www.psychologytoday.com/cr/psicologos/clinica-monteolivo-zarcero-al/1294493",
      },
      languages: ["Español"],
      sources: [
        {
          label: "Psychology Today",
          url: "https://www.psychologytoday.com/cr/psicologos/clinica-monteolivo-zarcero-al/1294493",
        },
      ],
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
      preparation: [
        "Traé resultados de laboratorio recientes y la lista de medicamentos que utilizás a diario.",
        "Si presentaste síntomas agudos, registrá su duración, intensidad y desencadenantes para comentarlos durante la consulta.",
        "Llegá 15 minutos antes para toma de signos vitales y actualización de historial clínico.",
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
        {
          question: "¿Realizan chequeos preventivos empresariales?",
          answer:
            "Sí, coordinamos jornadas de valoración en sitio o en la clínica con informes consolidados para empresas de la zona.",
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
      preparation: [
        "Agendá tu control anual fuera de la menstruación para obtener una citología adecuada.",
        "Evitá duchas vaginales, óvulos o cremas intravaginales 48 horas antes de la cita.",
        "Traé registros de ciclos, embarazos previos y estudios complementarios para completar el historial.",
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
        {
          question: "¿Puedo agendar consejería de anticoncepción?",
          answer:
            "Sí, ofrecemos sesiones especializadas para elegir el método adecuado, incluyendo opciones hormonales, DIU y planificación natural.",
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
        {
          title: "Rehabilitación pélvica",
          description: "Plan de ejercicios y biofeedback para fortalecer el piso pélvico y prevenir incontinencia.",
        },
      ],
      procedures: [
        "Estudios urodinámicos básicos y avanzados",
        "Cistoscopia flexible y biopsias prostáticas guiadas",
        "Manejo integral de infecciones urinarias recurrentes",
        "Tratamiento de litiasis y seguimiento post quirúrgico",
        "Programas de vigilancia prostática y salud masculina",
      ],
      preparation: [
        "Consumí suficiente agua previo a los ultrasonidos para lograr una vejiga moderadamente llena.",
        "Traé resultados previos (PSA, urocultivo, imágenes) impresos o en formato digital.",
        "Evitá cafeína y alcohol 24 horas antes de estudios urodinámicos para obtener mediciones fiables.",
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
        {
          question: "¿Brindan orientación sobre salud sexual masculina?",
          answer:
            "Sí, abordamos disfunción eréctil, eyaculación precoz y planificación familiar desde un enfoque integral.",
        },
        {
          question: "¿Cuál es el tiempo de recuperación tras un procedimiento ambulatorio?",
          answer:
            "La mayoría de intervenciones mínimamente invasivas permiten retomar actividades ligeras en 24-48 horas; entregamos indicaciones personalizadas por escrito.",
        },
      ],
      sources: [
        {
          label: "Mayo Clinic - Urología",
          url: "https://www.mayoclinic.org/es/departments-centers/urology/sections/overview/ovc-20336015",
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
        {
          title: "Dermocosmética clínica",
          description: "Protocolos de rejuvenecimiento, manejo de manchas y cicatrices con peelings médicos y luz pulsada.",
        },
      ],
      procedures: [
        "Chequeo anual de lunares",
        "Tratamiento integral de acné",
        "Control de enfermedades autoinmunes cutáneas",
        "Terapia fotodinámica y crioterapia para lesiones premalignas",
      ],
      preparation: [
        "Asistí sin maquillaje ni productos tópicos para evaluar la piel con precisión.",
        "Aplicá protector solar diariamente y evitá cabinas de bronceado siete días antes del control.",
        "Suspendé exfoliantes químicos o retinoides al menos cinco días antes de procedimientos con láser o peeling.",
      ],
      specialists: ["diana-barahona"],
      faqs: [
        {
          question: "¿Realizan pruebas de alergia cutánea?",
          answer: "Coordinamos pruebas epicutáneas con nuestro laboratorio según valoración médica.",
        },
        {
          question: "¿Atienden a pacientes pediátricos?",
          answer: "Sí, contamos con protocolos seguros para dermatitis atópica, verrugas y alergias en población infantil.",
        },
        {
          question: "¿Qué cuidados posprocedimiento debo seguir?",
          answer: "Entregamos guías personalizadas, que incluyen uso de frío local, fotoprotección estricta y seguimiento para revisar la evolución.",
        },
      ],
      sources: [
        {
          label: "Quirónsalud - Dermatología",
          url: "https://www.quironsalud.com/hospital-la-luz/es/cartera-servicios/dermatologia",
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
        {
          title: "Informes integrados",
          description: "Resultados digitales enlazados al expediente clínico para decisiones rápidas del equipo médico.",
        },
      ],
      procedures: [
        "Rayos X de extremidades y tórax",
        "Ultrasonido obstétrico y ginecológico",
        "Ultrasonido de partes blandas",
        "Densitometría ósea y control de implantología según disponibilidad",
      ],
      preparation: [
        "Presentate 15 minutos antes para completar consentimiento y retirar objetos metálicos.",
        "Para ultrasonido abdominal, mantené ayuno de 6 horas salvo indicación contraria.",
        "Llevá estudios o placas previas para comparar evolución y reducir radiación innecesaria.",
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
        {
          question: "¿Puedo realizar estudios durante el embarazo?",
          answer: "Evaluamos cada caso con el médico tratante; priorizamos ultrasonido y diferimos estudios con radiación cuando no son urgentes.",
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
      preparation: [
        "Compartí reportes escolares, médicos o terapéuticos previos para contextualizar los objetivos.",
        "Practiquen en casa los ejercicios recomendados y registren avances o dificultades para revisarlos en sesión.",
        "Para sesiones a domicilio, preparen un espacio tranquilo, iluminado y libre de distracciones.",
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
        {
          question: "¿Atienden a adultos tras eventos neurológicos?",
          answer: "Sí, desarrollamos programas de rehabilitación del habla y deglución para personas que han sufrido ACV o traumatismos.",
        },
      ],
    },
    laboratorio: {
      eyebrow: "Resultados confiables",
      title: "Laboratorio Clínico Monte Olivo",
      summary:
        "Exámenes de rutina y pruebas especializadas dirigidos por la Dra. Diana Carolina Barahona Jiménez (Microbióloga y Química Clínica). Horario según rotulación oficial: L-V 7:00 a.m. – 3:00 p.m., sábados 7:00 a.m. – 12:00 m.d.",
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
        {
          title: "Toma pediátrica",
          description: "Personal capacitado y material adaptado para disminuir el estrés en niños y adolescentes.",
        },
      ],
      procedures: [
        "Recolección domiciliar para personas adultas mayores",
        "Entrega digital y física de resultados",
        "Coordinación con especialistas para interpretación conjunta",
        "Control de calidad interno y participación en programas externos de aseguramiento",
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
        {
          question: "¿Aceptan órdenes de médicos externos?",
          answer: "Sí, procesamos órdenes de profesionales externos y enviamos el reporte digital a ambos, paciente y médico tratante.",
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
    {
      specialistId: "lucia-solano",
      specialty: "Psicología Clínica",
      day: "Lunes a viernes",
      start: "8:00 a.m.",
      end: "5:00 p.m.",
    },
  ],
  contact: {
    address: "Frente al EBAIS de Laguna, Zarcero, Alajuela.",
    phones: ["2463-5005", "2463-5006"],
    whatsapp: "8838-2301",
    emergencies: "6071-1273",
    email: "clinicemonteolivo@gmail.com",
    coordinates: "10.209111817370834, -84.4040622495673",
    hours: {
      medical: "Consultas médicas: Lunes a domingo 24/7",
      lab: "Laboratorio: Lunes a viernes 7:00 a.m. – 3:00 p.m., sábados 7:00 a.m. – 12:00 m.d.",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.426653996862!2d-84.4040622495673!3d10.209111817370834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa05d7e0b277269%3A0xf7b669db22fb37db!2sCl%C3%ADnica%20Monteolivo!5e1!3m2!1ses-419!2scr!4v1762031626536!5m2!1ses-419!2scr",
    social: {
      instagram: "https://www.instagram.com/clinica_monteolivo/?hl=es-la",
      facebook: "https://www.facebook.com/ClinicaMonteOlivo/?locale=es_LA",
      emmaPay: "https://emmapay.com/costa-rica/emma-comercios/clinica-monte-olivo/",
      psychologyToday: "https://www.psychologytoday.com/cr/psicologos/clinica-monteolivo-zarcero-al/1294493",
      directMap: "https://directmap.ws/alajuela/1855",
      instagramFollowers: "≈1.955",
      facebookLikes: "≈2.868",
      facebookTalkingAbout: "≈11",
      facebookCheckins: "≈22",
    },
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
  dashboard: {
    kpis: [
      { id: "appointments-today", label: "Citas de hoy", value: 42, trend: "+8%" },
      { id: "pending-confirmation", label: "Pendientes por confirmar", value: 9, trend: "-3" },
      { id: "satisfaction", label: "Satisfacción pacientes", value: "4.8/5", trend: "+0.1" },
      { id: "response-time", label: "Tiempo medio respuesta", value: "18 min", trend: "-6 min" },
    ],
    upcoming: [
      {
        id: "apt-001",
        patient: "María Fernanda López",
        time: "08:30",
        specialty: "Ginecología",
        professionalId: "marianela-salas",
        channel: "WhatsApp",
        status: "Confirmada",
      },
      {
        id: "apt-002",
        patient: "José Miguel Arrieta",
        time: "09:00",
        specialty: "Medicina General",
        professionalId: "andres-campos",
        channel: "Llamada telefónica",
        status: "En sala",
      },
      {
        id: "apt-003",
        patient: "Laura Calvo Rojas",
        time: "09:30",
        specialty: "Laboratorio Clínico",
        professionalId: "diana-barahona",
        channel: "Reserva en línea",
        status: "Pendiente confirmación",
      },
      {
        id: "apt-004",
        patient: "Carlos Montero",
        time: "10:15",
        specialty: "Psicología Clínica",
        professionalId: "lucia-solano",
        channel: "Reserva en línea",
        status: "Confirmada",
      },
    ],
    teamNotes: [
      {
        specialistId: "marianela-salas",
        today: "2 cupos",
        note: "Ultrasonido obstétrico programado a las 11:00, bloquear 30 minutos previos.",
      },
      {
        specialistId: "andres-campos",
        today: "Sin cupos",
        note: "Guardia 24/7: priorizar emergencias leves y tele-consultas agendadas.",
      },
      {
        specialistId: "diana-barahona",
        today: "6 muestras programadas",
        note: "Enviar reportes empresariales antes de las 4:00 p.m.",
      },
      {
        specialistId: "lucia-solano",
        today: "1 cupo virtual",
        note: "Recordar envío de consentimiento informado digital.",
      },
    ],
    alerts: [
      {
        id: "alert-urgent",
        type: "warning",
        message: "Paciente con dolor abdominal reportó retraso, priorizar valoración al llegar (cita 10:45).",
      },
      {
        id: "alert-lab",
        type: "info",
        message: "Campaña empresarial de laboratorio inicia mañana; revisar inventario de reactivos.",
      },
    ],
  },
  account: {
    profile: {
      name: "Carolina Mora",
      role: "Coordinadora de Operaciones",
      memberSince: "Desde 2022",
      avatar: "https://i.pravatar.cc/200?img=45",
      location: "Laguna de Zarcero, Alajuela",
    },
    stats: [
      { id: "appointments-managed", label: "Citas gestionadas este mes", value: 312 },
      { id: "satisfaction-score", label: "Puntuación de servicio", value: "4.9/5" },
      { id: "response-sla", label: "SLA de respuesta", value: "15 min" },
    ],
    preferences: [
      "Notificaciones críticas por WhatsApp",
      "Resumen diario vía correo electrónico",
      "Modo oscuro habilitado en apps móviles",
    ],
    shortcuts: [
      { label: "Ver agenda de hoy", href: "dashboard.html#dashboard-upcoming-title" },
      { label: "Gestionar especialistas", href: "especialistas.html" },
      { label: "Solicitudes de contacto", href: "contacto.html#contact-form" },
    ],
    recentActivity: [
      {
        id: "activity-001",
        description: "Confirmó 5 citas pendientes para laboratorio",
        timestamp: "01 nov 2025 · 15:45",
      },
      {
        id: "activity-002",
        description: "Actualizó disponibilidad de la Dra. Marianela Salas",
        timestamp: "01 nov 2025 · 14:20",
      },
      {
        id: "activity-003",
        description: "Agregó nota de seguimiento para paciente Carlos Montero",
        timestamp: "01 nov 2025 · 11:35",
      },
    ],
    summary: {
      title: "Resumen de cuenta",
      description: "Revisa tus estadísticas y preferencias en una sola página.",
      stats: [
        { id: "total-appointments", label: "Citas gestionadas", value: 312 },
        { id: "total-specialists", label: "Especialistas gestionados", value: 5 },
      ],
    },
  },
};

export default CMO_DATA;
