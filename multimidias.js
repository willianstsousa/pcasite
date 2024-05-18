import videos from "./multimidias.json" assert { type: "json" };
const inputBusca = document.getElementById("busca");

function montarGridVideos(arrayAtividades) {
  const divVideos = document.getElementById("videos");
  arrayAtividades.forEach((videoInfo) => {
    const newIframe = document.createElement("iframe");
    newIframe.width = 560;
    newIframe.height = 315;
    newIframe.src = videoInfo.iframe;
    newIframe.frameBorder = 0;
    newIframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    newIframe.referrerPolicy = "strict-origin-when-cross-origin";
    newIframe.allowFullscreen = true;
    divVideos.appendChild(newIframe);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  montarGridVideos(videos);
});

function filtraAtividade(nomeAtividade) {
  if (nomeAtividade == "") {
    montarGridVideos(atividades);
  } else {
    const atividadesFiltradas = atividades.filter((atividadeInfo) =>
      atividadeInfo.nome.toLowerCase().includes(nomeAtividade.toLowerCase())
    );
    if (atividadesFiltradas.length > 0) {
      montarGridVideos(atividadesFiltradas);
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

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/S9uPNppGsGo?si=-H0LzwjLdPnbUVas"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
