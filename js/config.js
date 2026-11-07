/* =====================================================================
   WATANABESTUDIO — ARQUIVO CENTRAL DE CONFIGURAÇÃO
   =====================================================================
   Tudo o que você pode querer mudar no site está AQUI.
   Salve o arquivo e atualize a página — pronto. Nenhum outro arquivo
   precisa ser tocado para trocar preços, textos, telefone ou fotos.

   Dicas:
   - Preços são NÚMEROS (sem "R$", sem aspas). Ex.: 1300 ou 1300.50
   - "aPartirDe: true" mostra "A partir de" antes do preço.
   - Para esconder um serviço, apague o bloco { ... } dele.
   - Cuidado para não apagar vírgulas, aspas ou chaves.
   ===================================================================== */

window.SITE_CONFIG = {

  /* ---------- EMPRESA ---------- */
  empresa: {
    nome: "WatanabeStudio",
    // Caminho da logo oficial (PNG com fundo transparente).
    // Deixe "" para usar um letreiro cromado automático no lugar.
    logo: "assets/logo.png",
    // Favicon / ícone da aba do navegador
    favicon: "assets/favicon.png",
    slogan: "Detalhamento automotivo com assinatura.",
    // Endereço do site publicado (usado no Google). Ajuste quando tiver o domínio.
    urlSite: "https://watanabestudio.com.br/",
    // Textos que aparecem no Google
    seoTitulo: "WatanabeStudio | Estética e Detalhamento Automotivo em Suzano - SP",
    seoDescricao:
      "Estúdio de detalhamento automotivo em Suzano - SP. Vitrificação, polimento, cristalização, higienização e limpeza técnica para carros e motos. Agende pelo WhatsApp."
  },

  /* ---------- WHATSAPP ---------- */
  whatsapp: {
    // Somente números: 55 + DDD + número
    numero: "5511930507027",
    // Como o número aparece escrito no site
    numeroExibicao: "+55 11 93050-7027",
    // Mensagem dos botões gerais
    mensagemPadrao:
      "Olá! Conheci o WatanabeStudio pelo site e gostaria de solicitar um orçamento. Tenho interesse em conhecer os serviços disponíveis.",
    // Mensagem quando o cliente escolhe um serviço. {servico} e {categoria} são preenchidos sozinhos.
    mensagemServico:
      "Olá! Conheci o WatanabeStudio pelo site e gostaria de agendar/solicitar orçamento do serviço: {servico} ({categoria}). Pode me passar mais informações e horários disponíveis?"
  },

  /* ---------- ENDEREÇO ---------- */
  endereco: {
    rua: "Miguel Lopes de Oliveira, nº 329",
    bairro: "Vila Colorado",
    cidade: "Suzano",
    uf: "SP",
    // Texto usado pelo Google Maps para localizar o estúdio (mapa e rota).
    // Se o pino ficar errado, acrescente o CEP aqui.
    buscaMapa: "Rua Miguel Lopes de Oliveira, 329, Vila Colorado, Suzano - SP"
  },

  /* ---------- TEXTOS DO SITE ---------- */
  textos: {
    hero: {
      etiqueta: "Estética & Detalhamento Automotivo",
      titulo: "Seu carro merece assinatura.",
      subtitulo:
        "Acabamento de vitrine, proteção de longa duração e atenção a cada detalhe. Aqui o seu veículo é tratado como obra de arte.",
      botaoPrincipal: "Agendar pelo WhatsApp",
      botaoSecundario: "Ver serviços",
      // Foto de fundo do topo. Troque o arquivo por outro ou use "" para uma ilustração.
      imagemFundo: "assets/img/hero/capa.webp"
    },
    faixa: ["Detalhamento", "Vitrificação", "Polimento", "Cristalização", "Higienização", "Carros & Motos"],
    sobre: {
      titulo: "Mais que lavagem. Detalhamento.",
      paragrafos: [
        "O WatanabeStudio é um estúdio de estética automotiva em Suzano - SP, criado para quem enxerga o veículo como extensão de estilo e personalidade.",
        "Cada serviço é executado com método, produtos adequados e cuidado artesanal — do brilho profundo da pintura à proteção que dura anos."
      ],
      diferenciais: [
        { titulo: "Acabamento premium", texto: "Brilho profundo, textura uniforme e atenção até nos cantos que ninguém vê." },
        { titulo: "Proteção que dura", texto: "Vitrificações de 1, 3 e 5 anos para blindar a pintura contra o dia a dia." },
        { titulo: "Carros e motos", texto: "Processos pensados para cada tipo de veículo, sem improviso." },
        { titulo: "Atendimento direto", texto: "Você fala com o estúdio pelo WhatsApp, sem burocracia." }
      ]
    },
    servicos: {
      titulo: "Serviços",
      subtitulo: "Escolha o serviço e agende direto pelo WhatsApp. Os valores podem variar conforme o porte e a condição do veículo."
    },
    galeria: {
      titulo: "Resultados",
      subtitulo: "Alguns trabalhos do estúdio. Toque na foto para ampliar."
    },
    agendar: {
      titulo: "Bora deixar o seu no ponto?",
      texto: "Escolha o serviço, toque no botão e a conversa já abre no WhatsApp com tudo preenchido.",
      rotuloSelect: "Qual serviço você procura?",
      opcaoPadrao: "Orçamento geral / ainda não sei"
    },
    localizacao: {
      titulo: "Onde estamos",
      subtitulo: "Venha conhecer o estúdio. Atendimento mediante agendamento pelo WhatsApp."
    },
    rodape: {
      direitos: "Todos os direitos reservados."
    }
  },

  /* ---------- SERVIÇOS ---------- */
  servicos: {

    carros: {
      titulo: "Carros",
      icone: "carro", // "carro" ou "moto"
      observacao:
        "A higienização possui preço variável, dependendo das condições e características do veículo.",
      itens: [
        { nome: "Detalhada", descricao: "Lavagem detalhada de dentro para fora, com acabamento caprichado em todo o veículo.", preco: 120 },
        { nome: "Detalhada com cristalização", descricao: "Detalhada completa com cristalização da pintura para realçar brilho e dar proteção.", preco: 250 },
        { nome: "Higienização", descricao: "Limpeza profunda do interior para remover sujeira, manchas e odores.", preco: 520, aPartirDe: true },
        { nome: "Vitrificação 1 ano", descricao: "Camada protetora de alta dureza sobre a pintura, com brilho intenso e proteção por 1 ano.", preco: 1300 },
        { nome: "Vitrificação 3 anos", descricao: "Proteção cerâmica de longa duração para a pintura, com brilho profundo por 3 anos.", preco: 1700, destaque: true },
        { nome: "Vitrificação 5 anos", descricao: "O nível máximo de proteção e brilho para a pintura, com durabilidade de até 5 anos.", preco: 2300 },
        { nome: "Descontaminação e cristalização de vidros", descricao: "Remoção de resíduos incrustados nos vidros e aplicação de proteção para melhor visibilidade.", preco: 150 },
        { nome: "Limpeza de motor", descricao: "Limpeza técnica do cofre do motor, deixando tudo limpo e bem apresentado.", preco: 180 },
        { nome: "Limpeza de chassi", descricao: "Limpeza da parte inferior do veículo, removendo barro, graxa e resíduos acumulados.", preco: 350 }
      ]
    },

    motos: {
      titulo: "Motos",
      icone: "moto",
      observacao:
        "O preço da detalhada com polimento depende do modelo e das condições da motocicleta.",
      itens: [
        { nome: "Detalhada", descricao: "Lavagem detalhada da moto inteira, com atenção a cada peça, carenagem e acabamento.", preco: 130 },
        { nome: "Detalhada + polimento", descricao: "Detalhada completa somada ao polimento para recuperar o brilho da pintura.", preco: 300, aPartirDe: true },
        { nome: "Vitrificação 1 ano", descricao: "Proteção de alto brilho para a pintura da moto por 1 ano.", preco: 600 },
        { nome: "Vitrificação 3 anos", descricao: "Proteção cerâmica de longa duração, com brilho profundo por 3 anos.", preco: 900, destaque: true },
        { nome: "Vitrificação 5 anos", descricao: "Máxima proteção e durabilidade para a pintura da sua moto, por até 5 anos.", preco: 1300 }
      ]
    }
  },

  /* ---------- GALERIA ----------
     Para ADICIONAR uma foto: copie a foto para assets/img/galeria/ e acrescente
     uma linha nova abaixo (copie uma existente e mude os dados).
       src       -> caminho da foto
       categoria -> uma das categorias listadas em galeriaCategorias
       titulo    -> legenda
       foco      -> (opcional) parte da foto que deve aparecer no quadrado da galeria,
                    ex.: "50% 30%" (horizontal vertical). Sem isso, usa o centro.
     Categorias sem nenhuma foto ficam escondidas automaticamente.
     Dica: fotos em .webp ou .jpg com até ~1400px (use squoosh.app para reduzir). */
  galeriaCategorias: [
    { id: "todos", nome: "Todos" },
    { id: "carros", nome: "Carros" },
    { id: "interior", nome: "Interior" },
    { id: "detalhes", nome: "Rodas e motor" },
    { id: "motos", nome: "Motos" },
    { id: "polimento", nome: "Polimento" },
    { id: "vitrificacao", nome: "Vitrificação" }
  ],
  galeria: [
    { src: "assets/img/galeria/hb20-prata-detalhada.webp", categoria: "carros", titulo: "Detalhada completa", foco: "50% 55%" },
    { src: "assets/img/galeria/pulse-detalhada.webp", categoria: "carros", titulo: "Lavagem detalhada + descontaminação de vidros", foco: "55% 55%" },
    { src: "assets/img/galeria/post-hb20-prata.webp", categoria: "carros", titulo: "Detalhamento com a assinatura Watanabe", foco: "50% 65%" },
    { src: "assets/img/galeria/pajero-detalhada-1.webp", categoria: "carros", titulo: "Lavagem detalhada — Pajero Dakar", foco: "40% 50%" },
    { src: "assets/img/galeria/roda-espuma.webp", categoria: "detalhes", titulo: "Limpeza de rodas na lavagem detalhada" },
    { src: "assets/img/galeria/peugeot-208.webp", categoria: "carros", titulo: "Detalhada, higienização, vidros e cristalização de pintura", foco: "50% 60%" },
    { src: "assets/img/galeria/limpeza-motor.webp", categoria: "detalhes", titulo: "Limpeza de motor", foco: "40% 50%" },
    { src: "assets/img/galeria/traseira-prata.webp", categoria: "carros", titulo: "Acabamento e brilho" },
    { src: "assets/img/galeria/hb20-branco-detalhada.webp", categoria: "carros", titulo: "Lavagem detalhada", foco: "55% 60%" },
    { src: "assets/img/galeria/interior-volante.webp", categoria: "interior", titulo: "Interior limpo e cuidado", foco: "50% 50%" },
    { src: "assets/img/galeria/pajero-detalhada-2.webp", categoria: "carros", titulo: "Pajero Dakar — resultado final", foco: "40% 50%" },
    { src: "assets/img/galeria/post-roda.webp", categoria: "detalhes", titulo: "Roda e pintura após a detalhada", foco: "60% 65%" },
    { src: "assets/img/galeria/preto-acabamento.webp", categoria: "carros", titulo: "Pintura preta com acabamento profundo", foco: "55% 55%" },
    { src: "assets/img/galeria/interior-onix.webp", categoria: "interior", titulo: "Painel e interior" },
    { src: "assets/img/galeria/frente-azul.webp", categoria: "carros", titulo: "Brilho e reflexo na pintura", foco: "50% 55%" },
    { src: "assets/img/galeria/hb20-prata-roda.webp", categoria: "detalhes", titulo: "Detalhe de roda e pintura", foco: "55% 60%" }
  ]
};
