export const company = {
  name: "Alvor Soluções Energéticas",
  legalName: "ALVOR Soluções Energéticas LTDA",
  shortName: "Alvor Energia",
  tagline: "Eficiência energética e rentabilidade com energia fotovoltaica.",
  headline: "Energia solar de ponta a ponta, do projeto à operação",
  subheadline:
    "Experiência nacional e internacional em sistemas fotovoltaicos — com equipe executiva formada por profissionais de grandes corporações.",
  description:
    "Empresa especializada em energia fotovoltaica, oferecendo eficiência energética e rentabilidade. Desenvolvemos desde o projeto e instalação até a operação e manutenção de sistemas solares, com conhecimentos técnicos e legais para garantir a melhor qualidade.",
  leader: "Luís Carlos de Oliveira",
  leaderRole: "Diretor — Engenheiro",
  location: {
    city: "Belo Horizonte",
    state: "MG",
    address: "Rua Emídio Beruto, 27, Betânia",
    zip: "30570-050",
    full: "Belo Horizonte — MG",
  },
  contact: {
    phones: [
      { label: "Comercial", value: "(31) 3327-4857", link: "+553133274857" },
      { label: "WhatsApp", value: "(31) 97306-5264", link: "+5531973065264" },
      { label: "Atendimento", value: "(24) 99225-6574", link: "+5524992256574" },
    ],
    email: "alvorenergia@gmail.com",
    website: "https://www.alvorenergia.com.br",
  },
  social: {
    instagram: "https://www.instagram.com/alvorenergia/",
    linkedin: "https://www.linkedin.com/in/luiscarlosoliveira",
  },
  about:
    "A ALVOR Soluções Energéticas é uma empresa com foco em energia fotovoltaica, oferecendo eficiência energética e rentabilidade para seus clientes. Com experiência nacional e internacional, detém conhecimentos técnicos e legais para desenvolver desde o projeto e instalação até a operação e manutenção de sistemas solares fotovoltaicos.",
  teamHighlight:
    "Corpo executivo formado por profissionais que ocuparam posições gerenciais e de diretoria em grandes corporações, com pós-graduação e MBA nas melhores instituições do Brasil e dos EUA.",
} as const;

export const segments = [
  {
    id: "residential",
    title: "Residencial",
    description:
      "Sistemas dimensionados para casas e condomínios, com geração desde o primeiro dia e acompanhamento técnico contínuo.",
  },
  {
    id: "commercial",
    title: "Comercial",
    description:
      "Projetos para estabelecimentos comerciais que buscam reduzir custos operacionais e previsibilidade energética.",
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Soluções de maior porte com engenharia completa, homologação junto à concessionária e operação assistida.",
  },
  {
    id: "rural",
    title: "Rural",
    description:
      "Autonomia energética para propriedades rurais, irrigação e operações no campo com suporte especializado.",
  },
] as const;

export const processSteps = [
  {
    phase: "Projeto",
    items: [
      "Parecer de acesso com a concessionária",
      "Projeto elétrico",
      "Projeto mecânico",
    ],
    duration: "20 dias úteis após contrato",
  },
  {
    phase: "Instalação",
    items: [
      "Estrutura metálica",
      "Instalação das placas solares",
      "Estrutura elétrica e inversores",
    ],
    duration: "20 dias úteis após material",
  },
  {
    phase: "Operação",
    items: [
      "Geração de energia desde o 1º dia",
      "Vistoria e monitoramento de geração",
      "Manutenção preventiva e corretiva",
    ],
    duration: "Acompanhamento contínuo",
  },
] as const;

export const guarantees = [
  {
    title: "Módulos fotovoltaicos",
    detail: "25 anos de garantia de desempenho e 10 anos contra defeitos de fabricação.",
    brand: "TCL ou similar",
  },
  {
    title: "Inversores",
    detail: "10 anos de garantia de fábrica em equipamentos homologados.",
    brand: "AUXSOL ou similar",
  },
  {
    title: "Instalação Alvor",
    detail: "90 dias de garantia — reparos por falha de montagem sem ônus ao cliente.",
    brand: "ALVOR",
  },
] as const;

export const differentiators = [
  {
    title: "Sistema On-Grid inteligente",
    description:
      "Sem baterias: o excedente injeta créditos na rede, compensáveis em até 60 meses conforme normas da ANEEL.",
  },
  {
    title: "Engenharia completa",
    description:
      "Do parecer de acesso à homologação na concessionária, com projetos elétrico e mecânico integrados.",
  },
  {
    title: "Rentabilidade comprovada",
    description:
      "Foco em eficiência energética e redução da dependência da concessionária, com energia 100% renovável.",
  },
  {
    title: "Operação assistida",
    description:
      "Monitoramento, vistorias e manutenção preventiva e corretiva após a energização do sistema.",
  },
] as const;

export const heroStats = [
  { value: "25+", label: "Anos de garantia nos módulos" },
  { value: "60", label: "Meses para compensar créditos" },
  { value: "90", label: "Dias de garantia da instalação" },
  { value: "BR +", label: "Experiência nacional e internacional" },
] as const;

export const projects = [
  {
    title: "Engenharia de instalação",
    location: "Brasil",
    description:
      "Projetos elétricos e mecânicos com estrutura metálica, placas solares e inversores dimensionados por especialistas.",
    image: "/images/projects/instalacao-full.jpg",
  },
  {
    title: "Geração desde o 1º dia",
    location: "On-Grid",
    description:
      "Sistemas fotovoltaicos conectados à rede, com injeção de excedente e créditos de energia para compensação futura.",
    image: "/images/projects/instalacao.jpg",
  },
  {
    title: "Eficiência tarifária",
    location: "Consultoria Alvor",
    description:
      "Orientação técnica sobre bandeiras tarifárias e como a geração própria reduz a dependência da concessionária.",
    image: "/images/projects/infografico-bandeiras.png",
  },
] as const;

export const logo = {
  full: "/images/logo-alvor.jpg",
  alt: "Alvor Soluções Energéticas — logo",
} as const;

export const heroImage = "/images/projects/instalacao-full.jpg";
