function navegar(area) {
  alert(`Você clicou em: ${area}`);
}

const horarioAulas = {
  segunda: [
    { hora: "13:00 - 09:00", disciplina: "Matemática" },
    { hora: "10:00 - 11:00", disciplina: "Português" },
  ],
  terca: [
    { hora: "09:00 - 10:00", disciplina: "História" },
    { hora: "11:00 - 12:00", disciplina: "Inglês" },
  ],
  quarta: [
    { hora: "13:00 - 14:45", disciplina: "TIC" },
    { hora: "14:50 - 16:25", disciplina: "TIC" },
    { hora: "16:35 - 18:05", disciplina: "TIC" },
   
  ],
  quinta: [
    { hora: "09:00 - 10:00", disciplina: "Educação Física" },
    { hora: "11:00 - 12:00", disciplina: "Arte" },
  ],
  sexta: [
    { hora: "08:00 - 09:00", disciplina: "Biologia" },
    { hora: "10:00 - 11:00", disciplina: "Geografia" },
  ],
};

const nomesDias = [
  "domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"
];

const nomesDiasExibicao = {
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
  sabado: "Sábado",
  domingo: "Domingo"
};

function carregarAulasDoDia() {
  const hoje = new Date();
  const diaSemana = nomesDias[hoje.getDay()];
  const aulas = horarioAulas[diaSemana] || [];
  const container = document.getElementById("aulas");

  if (aulas.length > 0) {
    container.innerHTML = `<h3>${nomesDiasExibicao[diaSemana]}</h3>`;
    aulas.forEach(aula => {
      container.innerHTML += `
        <div class="aula">
          <strong>${aula.hora}</strong>: ${aula.disciplina}
        </div>
      `;
    });
  } else {
    container.innerHTML = `
      <h3>${nomesDiasExibicao[diaSemana]}</h3>
      <p>Não há aulas agendadas para hoje.</p>
    `;
  }
}

window.onload = carregarAulasDoDia;
