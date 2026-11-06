# Forma — Arquitetura & interiores

Site de apresentação de um escritório fictício de arquitetura, com layout responsivo e interações desenvolvidas em **HTML, CSS e JavaScript puro**.

**[Ver site](https://felipe-landgraf.github.io/forma-arquitetura/)** · [Baixar o projeto](https://github.com/Felipe-Landgraf/forma-arquitetura/archive/refs/heads/main.zip) · [Meu perfil](https://github.com/Felipe-Landgraf)

![Página inicial do Forma Arquitetura](docs/previa.jpg)

## Sobre o projeto

Projeto de portfólio voltado à construção de interfaces, organização de conteúdo e manipulação do DOM. A identidade visual combina tons neutros, tipografia serifada e fotografias de ambientes em quatro páginas: início, projetos, estúdio e contato.

O site funciona sem instalação, sem dependências e sem chamadas de API. As imagens e os arquivos de estilo e comportamento ficam no próprio repositório.

## Funcionalidades

- Layout adaptado para celular, tablet e computador.
- Menu de navegação móvel.
- Galeria com filtros por categoria e janela de detalhes de cada projeto.
- Perguntas frequentes com elementos nativos do HTML.
- Formulário com validação de campos, e-mail e tamanho mínimo da mensagem.
- Navegação por teclado, indicação de foco e textos alternativos nas imagens.
- Respeito à preferência de redução de movimento do navegador.

## Tecnologias e decisões

| Tecnologia | Aplicação |
| --- | --- |
| HTML | Estrutura semântica, formulários, `dialog` e `details` |
| CSS | Grid, Flexbox, variáveis e adaptação para telas menores |
| JavaScript | Eventos, filtros, abertura de detalhes e validação |

O mesmo arquivo CSS atende às quatro páginas. O JavaScript verifica os elementos presentes antes de adicionar as interações. O projeto usa fontes do sistema e não depende de Bootstrap, frameworks ou bibliotecas externas.

## Abrir localmente

1. Baixe e extraia o ZIP do projeto.
2. Abra `index.html` no navegador.

No **VS Code**, abra a pasta que contém `index.html`, entre em **Run and Debug**, selecione **Abrir site no Chrome** ou **Abrir site no Edge** e pressione **F5**. O navegador escolhido precisa estar instalado; não é necessário instalar extensões ou executar comandos. Depois de alterar e salvar o código, atualize a página.

## Estrutura

```text
.vscode/launch.json    Abertura pelo VS Code
index.html             Página inicial
projetos.html          Galeria de projetos
estudio.html           Apresentação e perguntas frequentes
contato.html           Formulário demonstrativo
estilo.css             Estilos compartilhados
script.js              Interações das páginas
imagens/               Fotografias e ícone
docs/                  Prévia do site
CREDITOS.md            Origem das imagens
```

## Limites da demonstração

O escritório e os conceitos apresentados são fictícios. O formulário demonstra validação no navegador: **não envia mensagens nem armazena dados**.

As fotografias são ilustrativas e não representam obras de autoria do Forma. Consulte as fontes e a licença em [CREDITOS.md](CREDITOS.md).

---

Projeto de portfólio de **[Felipe Landgraf](https://github.com/Felipe-Landgraf)**, estudante de Desenvolvimento de Sistemas no **COTIL–Unicamp**.
