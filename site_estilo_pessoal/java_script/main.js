document.addEventListener("DOMContentLoaded", () => {
  const folhas = document.querySelectorAll(".folha");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
      } else {
        entry.target.classList.remove("visivel");
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });

  folhas.forEach(folha => observer.observe(folha));
});




// Faz a página rolar suavemente até a explicação do teste
document.addEventListener("DOMContentLoaded", () => {
  const botaoIniciar = document.querySelector("#botao-iniciar");
  const explicacao = document.querySelector(".caixa-frase");

  if (botaoIniciar && explicacao) {
    botaoIniciar.addEventListener("click", () => {
      explicacao.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const btnFinalizar = document.getElementById("botao-ver-resultado"); // botão para ver o resultado
  const divResultado = document.getElementById("resultado"); // onde o resultado será mostrado

  // objeto que guarda as pontuações de cada estilo
  const estilos = {
    classico: 0,
    "clean-girl": 0,
    romantico: 0,
    rocker: 0,
    boho: 0
  };


  const imagensEstilos = {
    "classico": [
      "fotos/classico/classico_carrossel1mini.jpg",
      "fotos/classico/classico_carrossel2mini.jpg",
      "fotos/classico/classico_carrossel3mini.jpg",
      "fotos/classico/classico_carrossel4mini.jpg",
      "fotos/classico/classico_carrossel5mini.jpg",
      "fotos/classico/classico_carrossel6mini.jpg",
      "fotos/classico/classico_carrossel7mini.jpg",
      "fotos/classico/classico_carrossel8mini.jpg"
    ],
    "clean-girl": [
      "fotos/clean_girl/clean_carrossel1mini.jpg",
      "fotos/clean_girl/clean_carrossel2mini.jpg",
      "fotos/clean_girl/clean_carrossel3mini.jpg",
      "fotos/clean_girl/clean_carrossel4mini.jpg",
      "fotos/clean_girl/clean_carrossel5mini.jpg",
      "fotos/clean_girl/clean_carrossel6mini.jpg",
      "fotos/clean_girl/clean_carrossel7mini.jpg",
      "fotos/clean_girl/clean_carrossel8mini.jpg"
    ],
    "romantico": [
      "fotos/romantico/romantico_carrossel1mini.jpg",
      "fotos/romantico/romantico_carrossel2mini.jpg",
      "fotos/romantico/romantico_carrossel3mini.jpg",
      "fotos/romantico/romantico_carrossel4mini.jpg",
      "fotos/romantico/romantico_carrossel5mini.jpg",
      "fotos/romantico/romantico_carrossel6mini.jpg",
      "fotos/romantico/romantico_carrossel7mini.jpg",
      "fotos/romantico/romantico_carrossel8mini.jpg"
    ],
    "rocker": [
      "fotos/rocker/rocker_carrossel1mini.jpg",
      "fotos/rocker/rocker_carrossel2mini.jpg",
      "fotos/rocker/rocker_carrossel3mini.jpg",
      "fotos/rocker/rocker_carrossel4mini.jpg",
      "fotos/rocker/rocker_carrossel5mini.jpg",
      "fotos/rocker/rocker_carrossel6mini.jpg",
      "fotos/rocker/rocker_carrossel7mini.jpg",
      "fotos/rocker/rocker_carrossel8mini.jpg"
    ],
    "boho": [
      "fotos/boho/boho_carrossel1mini.jpg",
      "fotos/boho/boho_carrossel2mini.jpg",
      "fotos/boho/boho_carrossel3mini.jpg",
      "fotos/boho/boho_carrossel4mini.jpg",
      "fotos/boho/boho_carrossel5mini.jpg",
      "fotos/boho/boho_carrossel6mini.jpg",
      "fotos/boho/boho_carrossel7mini.jpg",
      "fotos/boho/boho_carrossel8mini.jpg"
    ]
  };

  const descricoesEstilos = {
    classico: "O estilo clássico é marcado pela elegância atemporal e pela sofisticação discreta. Suas peças têm cortes retos, tecidos de qualidade e cores neutras, como branco, preto, bege, marinho e cinza. É um visual que transmite confiança e profissionalismo, ideal para quem gosta de aparência sempre arrumada e refinada. Alfaiataria, camisas bem estruturadas, calças de corte reto e blazers são itens essenciais. Acessórios são discretos, valorizando a harmonia e o equilíbrio do look. O clássico nunca sai de moda, pois aposta na simplicidade e no bom gosto.",
    ["clean-girl"]: "O estilo clean girl valoriza a estética minimalista, com um visual leve, natural e elegante. As roupas têm tons neutros e suaves — como bege, off-white, marrom claro e cinza — e tecidos confortáveis, como linho e algodão. As peças são simples, porém bem cortadas, transmitindo uma imagem de cuidado e frescor. A maquiagem é natural, o cabelo geralmente polido e os acessórios delicados. É um estilo que busca o equilíbrio entre praticidade e sofisticação, transmitindo uma sensação de leveza e autocuidado.",
    romantico: "O estilo romântico é delicado, feminino e cheio de suavidade. Roupas leves, tecidos fluidos e estampas florais são suas principais marcas. As cores pastel, como rosa, lavanda e azul-claro, dominam o visual, transmitindo doçura e leveza. Babados, laços e rendas estão sempre presentes, criando uma aparência sonhadora e graciosa. Os acessórios são sutis e os sapatos geralmente mais delicados, como sapatilhas e sandálias finas. Esse estilo representa o lado sensível e encantador da moda, ideal para quem gosta de transmitir ternura e charme.",
    rocker: "O estilo rocker é ousado, autêntico e cheio de atitude. Inspirado na cultura do rock, ele combina couro, jeans, camisetas de bandas, tachinhas e coturnos. As cores predominantes são o preto, o cinza e o vermelho, criando um visual marcante e rebelde. Peças rasgadas, jaquetas e botas são indispensáveis. Acessórios metálicos, correntes e maquiagem mais forte reforçam a personalidade do look. O estilo rocker traduz liberdade e confiança, sendo perfeito para quem gosta de se destacar e expressar força através da moda.",
    boho: "O estilo boho (abreviação de bohemian) mistura influências hippies, étnicas e vintage, criando um visual livre e artístico. As peças são soltas, confortáveis e cheias de personalidade. Tecidos naturais, franjas, bordados e estampas tribais ou florais são comuns. As cores são terrosas, como marrom, mostarda e verde-oliva. Acessórios grandes, colares longos e chapéus complementam o visual. O boho transmite uma vibe descontraída e espiritual, perfeita para quem valoriza autenticidade, liberdade e conexão com a natureza."
  };

  btnFinalizar.addEventListener("click", () => {
    // zera os contadores antes de contar de novo
    for (let estilo in estilos) {
      estilos[estilo] = 0;
    }

    // seleciona todas as respostas marcadas
    const respostas = document.querySelectorAll("input[type='radio']:checked");
    const totalPerguntas = document.querySelectorAll("fieldset").length;

    // conta pontos de cada estilo
    respostas.forEach(resposta => {
      const valor = resposta.value;
      if (valor.includes("classico")) estilos.classico++;
      else if (valor.includes("clean-girl")) estilos["clean-girl"]++;
      else if (valor.includes("romantico")) estilos.romantico++;
      else if (valor.includes("rocker")) estilos.rocker++;
      else if (valor.includes("boho")) estilos.boho++;
    });

    const nomesFormatados = {
      "classico": "Clássico",
      "clean-girl": "Clean Girl",
      "romantico": "Romântico",
      "rocker": "Rocker",
      "boho": "Boho"
    };

    // verifica se todas as perguntas foram respondidas
    if (respostas.length < totalPerguntas) {
      divResultado.classList.add('visivel');
      divResultado.innerHTML =
        "⚠️ Ops! Você precisa responder todas as perguntas antes de ver o resultado.";
      divResultado.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // verifica se ninguém marcou nada (caso extremo)
    const maiorPontuacao = Math.max(...Object.values(estilos));
    if (maiorPontuacao === 0) {
      divResultado.classList.add('visivel');
      divResultado.innerHTML =
        "⚠️ Ops! Você precisa responder todas as perguntas antes de ver o resultado.";
      divResultado.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const vencedores = Object.keys(estilos).filter(
      (estilo) => estilos[estilo] === maiorPontuacao
    );

    // cria uma nova lista com os nomes formatados
    const vencedoresFormatados = vencedores.map(estilo => nomesFormatados[estilo] || estilo);

    divResultado.classList.add("visivel", "resultado-tela-cheia");
    divResultado.innerHTML = "";

    let htmlResultado = "";
    // cabeçalho
    if (vencedores.length === 1) {
      htmlResultado += `<h2>Seu estilo predominante é: <strong>${vencedoresFormatados[0].toUpperCase()}</strong></h2>`;
    } else {
      htmlResultado += `<h2>Empate! Seus estilos predominantes são:</h2>`;
      htmlResultado += `<p><strong>${vencedoresFormatados.map(e => e.toUpperCase()).join(", ")}</strong></p>`;
    }

    divResultado.innerHTML = htmlResultado;

    // mostra o carrossel + descrição para cada vencedor
    vencedores.forEach(estilo => {
      const container = document.createElement("div");
      container.classList.add("carrossel-container");

      const carrossel = document.createElement("div");
      carrossel.classList.add("carrossel")

      // adiciona imagens do estilo vencedor
      imagensEstilos[estilo].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Estilo ${estilo}`;
        carrossel.appendChild(img);
      });

      // duplica as imagens pra loop infinito suave
      carrossel.innerHTML += carrossel.innerHTML;
      container.appendChild(carrossel);
      divResultado.appendChild(container);

      // reinicia animação
      carrossel.style.animation = "none";
      void carrossel.offsetWidth;
      carrossel.style.animation = "deslizar 20s linear infinite";

      // Descrição do estilo
      const descricao = document.createElement("p");
      descricao.classList.add("descricao-estilo");
      descricao.textContent = descricoesEstilos[estilo];
      divResultado.appendChild(descricao);

    });

    // placar
    const placar = document.createElement("div");
    // transforma o objeto em array e ordena do maior para o menor
    const estilosOrdenados = Object.entries(estilos).sort((a, b) => b[1] - a[1]);


    let htmlPlacar = `
    <hr>
    <h3>Placar geral</h3>
    <ul class="placar-lista">
  `;

    estilosOrdenados.forEach(([nome, pontos]) => {
      const nomeCorreto = nomesFormatados[nome] || nome;
      htmlPlacar += `<li>${nomeCorreto}: ${pontos} ponto(s)</li>`;
    });

    htmlPlacar += `</ul>`;
    placar.innerHTML = htmlPlacar;
    divResultado.appendChild(placar);

    divResultado.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
