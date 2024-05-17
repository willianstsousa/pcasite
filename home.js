import livros from "./livros.json" assert { type: "json" };

function montaTabelaLivros(arrayLivros) {
  const tbodyLivros = document.getElementById("tbodyLivros");
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

document.addEventListener("DOMContentLoaded", function () {
  montaTabelaLivros(livros);
});
