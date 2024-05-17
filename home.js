import livros from "./livros.json" assert { type: "json" };
const inputBusca = document.getElementById("busca");

function montaTabelaLivros(arrayLivros) {
  const tbodyLivros = document.getElementById("tbodyLivros");
  tbodyLivros.innerHTML = "";
  arrayLivros.forEach((livro) => {
    const newTr = document.createElement("tr");
    [
      "bg-white",
      "border-b",
      "dark:bg-gray-800",
      "dark:border-gray-700",
    ].forEach((className) => {
      newTr.classList.add(className);
    });

    newTr.innerHTML = `
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${livro.titulo}
        </th>
        <td class="px-6 py-4">
            ${livro.disciplina}
        </td>
        <td class="px-6 py-4">
            ${livro.nivel}
        </td>
        <td class="px-6 py-4">
            ${livro.tema}
        </td>
        `;
    tbodyLivros.appendChild(newTr);
  });
}

function filtraLivro(nomeLivro) {
  if (nomeLivro == "") {
    montaTabelaLivros(livros);
  } else {
    const livrosFiltrados = livros.filter((livronfo) =>
      livronfo.titulo.toLowerCase().includes(nomeLivro.toLowerCase())
    );
    if (livrosFiltrados.length > 0) {
      montaTabelaLivros(livrosFiltrados);
    } else {
      const tbodyLivros = document.getElementById("tbodyLivros");
      tbodyLivros.innerHTML = "";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  montaTabelaLivros(livros);
});

inputBusca.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    filtraLivro(event.target.value);
  }
});
