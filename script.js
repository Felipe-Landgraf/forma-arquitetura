document.body.classList.add("com-js");

const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");

function fecharMenu() {
  navegacao.classList.remove("aberta");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.textContent = "Menu +";
}

if (botaoMenu && navegacao) {
  botaoMenu.hidden = false;

  botaoMenu.addEventListener("click", function () {
    const aberto = navegacao.classList.toggle("aberta");
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.textContent = aberto ? "Fechar −" : "Menu +";
  });

  navegacao.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && navegacao.classList.contains("aberta")) {
      fecharMenu();
      botaoMenu.focus();
    }
  });
}

const filtros = document.querySelectorAll(".filtro");
const projetos = document.querySelectorAll(".cartao-projeto");
const contador = document.querySelector(".contador");

filtros.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const categoria = botao.dataset.filtro;
    let quantidade = 0;

    filtros.forEach(function (filtro) {
      filtro.classList.remove("ativo");
      filtro.setAttribute("aria-pressed", "false");
    });

    botao.classList.add("ativo");
    botao.setAttribute("aria-pressed", "true");

    projetos.forEach(function (projeto) {
      const mostrar = categoria === "todos" || projeto.dataset.categoria === categoria;
      projeto.hidden = !mostrar;

      if (mostrar) {
        quantidade++;
      }
    });

    contador.textContent = quantidade === 1 ? "1 projeto" : quantidade + " projetos";
  });
});

filtros.forEach(function (botao) {
  if (botao.dataset.filtro === window.location.hash.substring(1)) {
    botao.click();
  }
});

const janelaProjeto = document.querySelector(".janela-projeto");
const botoesDetalhes = document.querySelectorAll(".detalhes-projeto");

if (janelaProjeto) {
  const imagemJanela = janelaProjeto.querySelector(".imagem-janela");
  const tituloJanela = janelaProjeto.querySelector("h2");
  const categoriaJanela = janelaProjeto.querySelector(".etiqueta");
  const descricaoJanela = janelaProjeto.querySelector(".descricao-projeto");
  const botaoFechar = janelaProjeto.querySelector(".fechar-janela");

  botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const projeto = botao.closest(".cartao-projeto");
      const imagem = projeto.querySelector("img");

      imagemJanela.src = imagem.src;
      imagemJanela.alt = imagem.alt;
      tituloJanela.textContent = projeto.querySelector("h3").textContent;
      categoriaJanela.textContent = projeto.querySelector(".tipo-projeto").textContent;
      descricaoJanela.textContent = projeto.dataset.descricao;

      janelaProjeto.showModal();
      document.body.classList.add("modal-aberto");
    });
  });

  botaoFechar.addEventListener("click", function () {
    janelaProjeto.close();
  });

  janelaProjeto.addEventListener("click", function (evento) {
    if (evento.target === janelaProjeto) {
      janelaProjeto.close();
    }
  });

  janelaProjeto.addEventListener("close", function () {
    document.body.classList.remove("modal-aberto");
  });
}

const formulario = document.querySelector(".formulario");

if (formulario) {
  const resposta = document.querySelector(".resposta-formulario");
  const campoNome = formulario.querySelector("#nome");
  const campoMensagem = formulario.querySelector("#mensagem");
  formulario.querySelector("button[type='submit']").disabled = false;

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();

    if (nome.length < 2) {
      campoNome.setCustomValidity("Escreva um nome com pelo menos duas letras.");
      campoNome.reportValidity();
      return;
    }

    if (campoMensagem.value.trim().length < 20) {
      campoMensagem.setCustomValidity("Conte sua ideia usando pelo menos 20 caracteres, sem contar os espaços nas pontas.");
      campoMensagem.reportValidity();
      return;
    }
    resposta.textContent = nome + ", sua demonstração foi concluída. Nenhuma mensagem foi enviada e seus dados não foram armazenados.";
    resposta.hidden = false;
    resposta.focus();
  });

  formulario.addEventListener("input", function () {
    campoNome.setCustomValidity("");
    campoMensagem.setCustomValidity("");
    resposta.hidden = true;
  });
}
