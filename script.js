const ramos = [
  // PRIMER SEMESTRE
  { id: "instituciones", nombre: "Instituciones políticas y derecho constitucional orgánico", area: "publico", desbloquea: ["internacional", "administrativo1"] },
  { id: "romano", nombre: "Derecho romano", area: "civil", desbloquea: ["seminario_integracion"] },
  { id: "introduccion", nombre: "Introducción al derecho", area: "ciencias", desbloquea: ["seminario_integracion"] },
  { id: "historia", nombre: "Historia del derecho", area: "ciencias", desbloquea: ["seminario_integracion"] },
  { id: "habilidades", nombre: "Habilidades comunicativas", area: "general", desbloquea: ["seminario_doctrina"] },

  // SEGUNDO SEMESTRE
  { id: "teoria_acciones", nombre: "Teoría de los derechos y acciones constitucionales", area: "publico", desbloquea: ["fundamentales"] },
  { id: "fund_privado", nombre: "Fundamentos del derecho privado", area: "civil", desbloquea: ["negocio"] },
  { id: "interpretacion", nombre: "Interpretación y argumentación", area: "ciencias", desbloquea: ["seminario_integracion"] },
  { id: "economia", nombre: "Nociones de economía", area: "economia", desbloquea: ["seminario_integracion"] },
  { id: "ingles1", nombre: "Inglés I", area: "ingles", desbloquea: ["ingles2"] },

  // TERCER SEMESTRE
  { id: "fundamentales", nombre: "Derechos fundamentales", area: "publico", desbloquea: ["seminario_integracion", "genero", "investigacion", "penal1"] },
  { id: "negocio", nombre: "Negocio jurídico y teoría general de las obligaciones", area: "civil", desbloquea: ["bienes"] },
  { id: "procesal_general", nombre: "Derecho procesal parte general", area: "procesal", desbloquea: ["normas"] },
  { id: "critico", nombre: "Pensamiento crítico", area: "general", desbloquea: ["seminario_integracion"] },

  // CUARTO SEMESTRE
  { id: "internacional", nombre: "Derecho internacional público", area: "publico", desbloquea: ["seminario_integracion"] },
  { id: "bienes", nombre: "Derecho de los bienes", area: "civil", desbloquea: ["cumplimiento", "seminario_integracion"] },
  { id: "normas", nombre: "Normas comunes a todo procedimiento", area: "procesal", desbloquea: ["declarativos", "seminario_integracion"] },
  { id: "comercial", nombre: "Fundamentos del derecho comercial y títulos de crédito", area: "economia", desbloquea: ["seminario_integracion"] },
  { id: "ingles3", nombre: "Inglés III", area: "ingles", desbloquea: ["ingles4"] },

  // QUINTO SEMESTRE
  { id: "administrativo1", nombre: "Derecho administrativo I", area: "publico", desbloquea: ["administrativo2"] },
  { id: "cumplimiento", nombre: "Cumplimiento e incumplimiento de las obligaciones", area: "civil", desbloquea: ["extracontractual", "contratos"] },
  { id: "declarativos", nombre: "Procesos declarativos", area: "procesal", desbloquea: ["ejecucion"] },
  { id: "penal1", nombre: "Principios fundamentales del derecho penal y de la pena", area: "penal", desbloquea: ["penal2"] },
  { id: "seminario_integracion", nombre: "Seminario de integración", area: "integradores", desbloquea: ["seminario_doctrina"] },
  { id: "ingles4", nombre: "Inglés IV", area: "ingles" },

  // SEXTO SEMESTRE
  { id: "administrativo2", nombre: "Derecho administrativo II", area: "publico", desbloquea: ["asesoria"] },
  { id: "extracontractual", nombre: "Responsabilidad extracontractual", area: "civil", desbloquea: ["seminario_doctrina"] },
  { id: "ejecucion", nombre: "Ejecución y recursos", area: "procesal", desbloquea: ["forense", "procesal_penal"] },
  { id: "penal2", nombre: "Parte general del derecho penal", area: "penal", desbloquea: ["procesal_penal", "penal3"] },
  { id: "societario", nombre: "Derecho societario", area: "economia", desbloquea: ["tributario", "asesoria"] },
  { id: "laboral", nombre: "Derecho laboral", area: "economia", desbl
