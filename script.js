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
  { id: "laboral", nombre: "Derecho laboral", area: "economia", desbloquea: ["seminario_doctrina"] },

  // SÉPTIMO SEMESTRE
  { id: "tributario", nombre: "Derecho tributario", area: "economia", desbloquea: ["seminario_doctrina"] },
  { id: "contratos", nombre: "Contratos", area: "civil", desbloquea: ["familia", "forense", "seminario_doctrina", "negociacion"] },
  { id: "procesal_penal", nombre: "Derecho procesal penal", area: "procesal", desbloquea: ["seminario_doctrina", "litigacion"] },
  { id: "penal3", nombre: "Parte especial del derecho penal", area: "penal", desbloquea: ["seminario_doctrina", "genero"] },
  { id: "tecnologia", nombre: "Derecho, innovación y tecnología", area: "economia", desbloquea: ["seminario_doctrina"] },
  { id: "asesoria", nombre: "Destrezas de asesoría legal", area: "clinica", desbloquea: ["seminario_doctrina", "litigacion", "negociacion", "forense"] },

  // OCTAVO SEMESTRE
  { id: "etica", nombre: "Ética profesional", area: "ciencias", desbloquea: ["consultorio1"] },
  { id: "familia", nombre: "Derecho de familia", area: "civil", desbloquea: ["sucesorio", "genero", "consultorio1"] },
  { id: "forense", nombre: "Redacción forense", area: "clinica", desbloquea: ["electivo1", "consultorio1"] },
  { id: "negociacion", nombre: "Negociación y mediación", area: "clinica", desbloquea: ["electivo1", "consultorio1"] },
  { id: "litigacion", nombre: "Litigación oral", area: "clinica", desbloquea: ["consultorio1"] },
  { id: "seminario_doctrina", nombre: "Seminario de doctrina y jurisprudencia", area: "integradores", desbloquea: ["graduacion", "investigacion", "consultorio1"] },

  // NOVENO SEMESTRE
  { id: "electivo1", nombre: "Electivo I", area: "electivo", desbloquea: ["electivo2", "electivo3", "electivo4", "consultorio2", "graduacion"] },
  { id: "sucesorio", nombre: "Derecho sucesorio", area: "civil", desbloquea: ["graduacion"] },
  { id: "investigacion", nombre: "Seminario de investigación", area: "ciencias", desbloquea: ["consultorio2", "graduacion"] },
  { id: "genero", nombre: "Derecho, género e inclusión", area: "ciencias", desbloquea: ["consultorio2", "graduacion"] },
  { id: "consultorio1", nombre: "Consultorio jurídico I", area: "clinica", desbloquea: ["consultorio2", "graduacion"] },

  // DÉCIMO SEMESTRE
  { id: "electivo2", nombre: "Electivo II", area: "electivo" },
  { id: "electivo3", nombre: "Electivo III", area: "electivo" },
  { id: "electivo4", nombre: "Electivo IV", area: "electivo" },
  { id: "consultorio2", nombre: "Consultorio jurídico II", area: "integradores" },
  { id: "graduacion", nombre: "Actividad final de graduación", area: "final" }
];

const malla = document.getElementById("malla");
const estado = {};

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo", ramo.area);
  div.textContent = ramo.nombre;
  div.id = ramo.id;

  div.addEventListener("click", () => {
    if (!div.classList.contains("activo")) {
      div.classList.add("activo");
      estado[ramo.id] = true;

      ramo.desbloquea?.forEach(id => {
        const desbloqueado = document.getElementById(id);
        if (desbloqueado) desbloqueado.classList.add("activo");
      });
    }
  });

  malla.appendChild(div);
}

ramos.forEach(ramo => crearRamo(ramo));
