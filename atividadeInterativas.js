import atividades from "./atividades.json" assert { type: "json" };
const inputBusca = document.getElementById("busca");

function montarGridAtividades(arrayAtividades) {
  const divAtividades = document.getElementById("atividades");
  divAtividades.innerHTML = "";
  arrayAtividades.forEach((atividade) => {
    const newAnchor = document.createElement("a");
    newAnchor.href = "#";
    [
      "block",
      "max-w-sm",
      "p-6",
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "shadow",
      "hover:bg-gray-100",
      "dark:bg-gray-800",
      "dark:border-gray-700",
      "dark:hover:bg-gray-700",
    ].forEach((className) => newAnchor.classList.add(className));
    newAnchor.innerHTML = `
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${atividade.nome}</h5>
       <p class="font-normal text-gray-700 dark:text-gray-400">${atividade.descricao}</p>
    `;
    divAtividades.appendChild(newAnchor);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  montarGridAtividades(atividades);
});

function filtraAtividade(nomeAtividade) {
  if (nomeAtividade == "") {
    montarGridAtividades(atividades);
  } else {
    const atividadesFiltradas = atividades.filter((atividadeInfo) =>
      atividadeInfo.nome.toLowerCase().includes(nomeAtividade.toLowerCase())
    );
    if (atividadesFiltradas.length > 0) {
      montarGridAtividades(atividadesFiltradas);
    } else {
      const divAtividades = document.getElementById("atividades");
      divAtividades.innerHTML = "";
    }
  }
}

inputBusca.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    filtraAtividade(event.target.value);
  }
});
