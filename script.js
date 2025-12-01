

import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyCOuFKZH8XvabRmakA22NbK50EhlaxbKDw";

const Icons = {
    Sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    Moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    Download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    LinkedIn: (props = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${props.width || 24}" height="${props.height || 24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    WhatsApp: (props = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${props.width || 24}" height="${props.height || 24}" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.94A10.02 10.02 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.95L2 22l5.05-1.28c1.51.81 3.18 1.28 4.95 1.28 5.52 0 10-4.48 10-10a9.99 9.99 0 0 0-3.05-7.06zM12 20.5c-1.5 0-2.93-.39-4.2-1.09l-.3-.18-3.12.8.8-3.04-.2-.32A8.49 8.49 0 0 1 3.5 12C3.5 7.3 7.3 3.5 12 3.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/><path d="M16.56 14.99c-.14-.07-.83-.41-1-.48-.15-.07-.26-.07-.37.07-.11.14-.37.48-.45.58-.09.1-.18.11-.33.04-.15-.07-.63-.23-1.2-.74-.44-.4-.74-.89-.83-1.04-.09-.15-.01-.23.07-.31.06-.07.14-.18.21-.25.07-.07.09-.11.14-.18.04-.07.02-.14-.01-.21-.04-.07-.37-.88-.51-1.21-.13-.32-.27-.28-.37-.28-.1 0-.21-.02-.33-.02-.11 0-.28.04-.42.21-.15.17-.57.56-.57 1.37 0 .81.58 1.59.66 1.71.09.11 1.14 1.75 2.79 2.45.39.17.69.27.93.35.24.08.45.07.62.04.19-.03.57-.23.65-.45.08-.22.08-.41.06-.45-.02-.04-.14-.09-.28-.16z"/></svg>`,
    GitHub: (props = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${props.width || 24}" height="${props.height || 24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    Briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    GraduationCap: (props = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${props.width || 24}" height="${props.height || 24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    Award: (props = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${props.width || 24}" height="${props.height || 24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    Code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    Target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12"cy="12" r="2"/></svg>',
    HeartHand: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3"/></svg>',
    Mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    ChevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    Zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    UserCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
    MessageCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    BrainCircuit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.001A3 3 0 0 0 12 5zm0 0a3 3 0 1 0 5.997.001A3 3 0 0 0 12 5zm0 0a3 3 0 1 0-5.997.001A3 3 0 0 0 12 5zm0 0a3 3 0 1 0 5.997.001A3 3 0 0 0 12 5z"/><path d="M12 8v4m0 0a3 3 0 1 0-5.997.001A3 3 0 0 0 12 12zm0 0a3 3 0 1 0 5.997.001A3 3 0 0 0 12 12z"/><path d="M12 15a3 3 0 1 0-5.997.001A3 3 0 0 0 12 15zm0 0a3 3 0 1 0 5.997.001A3 3 0 0 0 12 15z"/><path d="M12 18a3 3 0 1 0-5.997.001A3 3 0 0 0 12 18zm0 0a3 3 0 1 0 5.997.001A3 3 0 0 0 12 18z"/><path d="M20.3 7.7a3 3 0 1 0-2.6-2.6"/><path d="m18 12-.5.5"/><path d="M18 12a3 3 0 1 0-2.5 2.5"/><path d="m14.5 14.5-.5.5"/><path d="M14.5 14.5a3 3 0 1 0-2.5 2.5"/><path d="m9.5 19.5-.5.5"/><path d="M9.5 19.5a3 3 0 1 0-2.6-2.6"/><path d="M3.7 16.3a3 3 0 1 0 2.6 2.6"/><path d="M6 12l.5-.5"/><path d="M6 12a3 3 0 1 0 2.5-2.5"/><path d="m9.5 9.5.5-.5"/><path d="M9.5 9.5a3 3 0 1 0 2.5-2.5"/><path d="m14.5 4.5.5-.5"/><path d="M14.5 4.5a3 3 0 1 0 2.6 2.6"/></svg>',
    Server: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    Share2: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    Bot: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
    Send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    Close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    Sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M18 11.5V9.5a2 2 0 0 1 2-2h0"/><path d="M21 12.5h-2.5a2 2 0 0 0-2 2v0"/><path d="M18 12.5a2 2 0 0 1 2 2h0"/><path d="M21 9.5a2 2 0 0 0-2-2h0"/></svg>',
    Spinner: '<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>',
};

const PERSONAL_INFO = {
  name: "Lucas Thiago de Sousa Silveira",
  title: "Analista de Sistemas",
  location: "São Paulo/SP",
  impactStatement: "Transformando desafios em soluções com tecnologia, automação e foco em resultados.",
  about: "Profissional de TI com mais de 7 anos de experiência, focado em automação, inovação e na busca contínua por eficiência operacional. Tenho uma visão sistêmica para integrar diferentes plataformas e entregar soluções personalizadas, alinhadas às necessidades de cada cliente. Atuo com monitoramento proativo para antecipar falhas, garantindo a disponibilidade e segurança dos serviços, com compromisso com resultados, redução de custos e a entrega de valor através da tecnologia.",
  email: "lucas_adventista@hotmail.com",
  whatsapp: "https://wa.me/5515981284016",
  linkedin: "https://www.linkedin.com/in/lucas-thiago-368628160/",
  github: "https://github.com/lucasthiagosousa",
  cv_url: "Lucas%20Thiago%20de%20Sousa%20Silveira.pdf"
};

const SOFT_SKILLS = [
    { name: "Comunicação Clara", icon: Icons.MessageCircle },
    { name: "Proatividade e Autonomia", icon: Icons.Zap },
    { name: "Pensamento Crítico", icon: Icons.BrainCircuit },
    { name: "Colaboração em Equipe", icon: Icons.UserCheck },
    { name: "Organização e Gestão", icon: Icons.Briefcase },
    { name: "Adaptabilidade", icon: Icons.Zap },
    { name: "Foco no Cliente", icon: Icons.HeartHand },
    { name: "Resolução de Problemas", icon: Icons.Code }
];

const EXPERIENCES = [
     {
    company: "Alfa Computer",
    role: "Analista de Sistemas/Desemvolvedor Junior",
    period: "Outubro 2025 - Atual",
    responsibilities: [
     "Instalação, configuração e manutenção de sistemas corporativos, garantindo a operação contínua dos ambientes de TI.",
    "Desenvolvimento e criação de novos documentos técnicos, fluxos, rotinas e automações para otimização de processos internos.",
    "Criação e manutenção de scripts para automação de tarefas utilizando **PowerShell**, Bash e ferramentas complementares.",
    "Organização, padronização e gestão de ambientes de trabalho, servidores e estruturas de arquivos.",
    "Atendimento e suporte direto a clientes internos e externos, garantindo alta satisfação e cumprimento dos SLAs acordados.",
    "Administração e integração de soluções em nuvem utilizando **MultCloud**, **Dropbox**, **VSAX**, **SharePoint** e **Google Workspace**.",
    "Gestão e suporte das plataformas de comunicação e telefonia IP, com destaque para **3CX**.",
    "Monitoramento, manutenção e suporte de sistemas de segurança como **Bitdefender** e firewalls corporativos.",
    "Suporte e configuração de dispositivos, permissões e políticas de acesso em ambientes híbridos.",
    "Gerenciamento e estruturação da ferramenta **Milvus** para controle de ativos, inventário e documentação.",
    "Apoio na definição e acompanhamento de SLAs, métricas e indicadores de qualidade do atendimento.",
    "Desenvolvimento de aplicações **web** e **mobile**, desde prototipação até implementação, seguindo boas práticas de usabilidade.",
    "Criação de layouts, materiais visuais e interfaces utilizando conhecimentos em **design gráfico**.",
    "Colaboração com equipes internas para evolução de produtos, melhoria de processos e implementação de novos sistemas."
    ]
  },
  {
    company: "Elev Tecnologia",
    role: "Analista de Sistemas",
    period: "Mai 2024 - Outubro 2025",
    responsibilities: [
      "Recebimento, registro e categorização de chamados técnicos de clientes e usuários internos (**Jira**).",
      "Avaliação das necessidades dos clientes para oferecer soluções personalizadas.",
      "Monitoramento ativo de sistemas e ambientes em nuvem (**Google Cloud**, **Oracle Cloud**, **Flexus**, **Azure**, **Cirion**) com **Grafana** e **Zabbix**.",
      "Identificação e mitigação proativa de problemas, assegurando a continuidade dos serviços.",
      "Preparação e entrega de equipamentos para novos colaboradores (cadastro, inventário, configuração e acesso).",
      "Gestão de ativos de TI: inventário, compra, venda, substituição e cotações de equipamentos e serviços.",
      "Criação, liberação e manutenção de VPNs no firewall **Fortigate**.",
      "Administração de **Office 365**, contas de e-mail e permissões de usuários.",
      "Implementação de políticas de segurança da informação via **Bitdefender**.",
      "Suporte técnico em hardware, software e redes, com uso de scripts (**PowerShell** e **Bash**).",
      "Elaboração de relatórios periódicos de desempenho para clientes e diretoria.",
      "Participação em GMUDs e GMUDs emergenciais.",
      "Condução de treinamentos internos e desenvolvimento de projetos para facilitar o dia a dia da equipe.",
      "Manutenção preventiva e corretiva de notebooks, desktops e periféricos. Controle logístico de envio e recebimento de equipamentos para colaboradores remotos e presenciais",
      "Suporte técnico em campo e assistência pós-implantação."
    ]
  },
  {
    company: "Grupo Carrera",
    role: "Analista de infraestrutura de TI",
    period: "ago de 2023 - mai de 2024",
    responsibilities: [
      "Suporte ao Usuário em software e aplicativos, atendendo via chamado, e-mail e telefone.(**GLPI e WhatsApp Business**)",
      "Comunicação proativa sobre o status dos chamados e evolução do atendimento.",
      "Administração de **Office 365**, contas de e-mail e permissões de usuários.",
      "Responsável pelo suporte técnico e operacional de sistemas corporativos **NBS**, **Auto Avaliar**, **Fandi**, **Salesforce**, **Precificador** e **Vianuvem**",
      "Atendimento VIP para Supervisão, Gerência e Diretoria.",
      "Criação, liberação e manutenção de VPNs no firewall **Fortigate** e **Mikrotik**.",
      "Organização de tarefas, controle de informações e participação em reuniões de acompanhamento.",
      "Garantia da disponibilidade e performance dos sistemas, e levantamento das necessidades do negócio.",
      "Instalação de softwares e impressoras.",
      "Documentação de processos e procedimentos para clareza e acessibilidade.",
      "Gestão de equipamentos, incluindo entrega, organização de estoque e levantamento de recursos.",
      "Gestao e Organização dos Servidores **Windows/Linux**"
    ]
  },
  {
    company: "Grupo Carrera",
    role: "Estágio - Analista de suporte de sistemas",
    period: "ago de 2021 - ago de 2023",
    responsibilities: [
      "Recebimento e registro de chamados técnicos dos clientes.",
      "Avaliação das necessidades dos clientes para oferecer soluções personalizadas.",
      "Responsável pelo suporte técnico e operacional de sistemas corporativos  **NBS**, **Auto Avaliar**, **Fandi**, **Salesforce**, **Precificador** e **Vianuvem**",
      "Monitoramento de serviços e sistemas com ferramentas específicas.",
      "Suporte técnico inicial para problemas de hardware e software sob supervisão.",
      "Administração de **Office 365**, contas de e-mail e permissões de usuários.",
      "Criação, desativação de acessos e gerenciamento de contas de e-mail.",
      "Colaboração com equipes internas para resolver problemas técnicos.",
      "Elaboração de relatórios e documentação técnica.",
      "Suporte remoto ao usuário e atendimento VIP (Supervisão, Gerência e Diretoria).",
      "Conhecimento em **Windows/Linux**, protocolos de rede (**TCP/IP**, **DNS**, **DHCP**), scripting (**PowerShell**, **Bash**) e segurança da informação.",
    ]
  },
  {
    company: "Centro Universitário Adventista de São Paulo",
    role: "Assistente de Assessor de Educação a Distância",
    period: "jan de 2018 - jul de 2021",
    responsibilities: [
      "Atendimento personalizado a estudantes através do AVA, Sistema Acadêmico, e-mail e telefone.",
      "Acompanhamento da participação dos estudantes com ações pró-ativas de retenção.",
      "Apoio a programas de captação, conversão e retenção de estudantes.",
      "Mediação na resolução de dificuldades dos estudantes relacionadas à metodologia EAD.",
      "Gerenciamento do Ambiente Virtual de Aprendizagem (**AVA**) como apoio à educação presencial.",
      "Configuração, monitoramento e suporte a docentes e discentes do campus (graduação e pós-graduação).",
    ]
  },
  {
    company: "Centro Universitário Adventista de São Paulo",
    role: "Designer Gráfico",
    period: "jan de 2018 - jul de 2021",
    responsibilities: [
      "Desenvolvimento de materiais gráficos como banners, flyers e posts para redes sociais.",
      "Colaboração com a equipe de marketing e design para desenvolver conceitos criativos.",
      "Edição e tratamento de imagens para diversos canais de comunicação.",
      "Criação e manutenção da identidade visual da marca.",
      "Criação de conteúdo visual para campanhas digitais e preparação de arquivos para impressão.",
      "Pesquisa de tendências de design e inovação para aplicar nos projetos.",
      "Habilidades com **Adobe Photoshop**, **Canvas**, **Trello** e **Sony Vegas**.",
    ]
  },
  {
    company: "Faculdade Adventista do Paraná",
    role: "Treinador físico",
    period: "jan de 2017 - dez de 2017",
    responsibilities: [
        "Realização de avaliações físicas detalhadas para determinar o nível de condicionamento dos alunos.",
        "Criação de programas de treinamento personalizados, adaptados às necessidades individuais.",
        "Orientação e supervisão dos clientes durante os exercícios, garantindo a execução correta das técnicas.",
        "Fornecimento de suporte motivacional contínuo para manter os clientes focados.",
        "Monitoramento regular do progresso dos alunos e ajuste dos programas de treinamento.",
        "Educação dos clientes sobre práticas saudáveis, nutrição e bem-estar geral.",
        "Planejamento e condução de aulas de fitness em grupo.",
        "Desenvolvimento e aplicação de programas de treinamento físico personalizados para **PCDs**"
    ]
  }
];

const EDUCATIONS = [
  {
    institution: "UNASP",
    course: "Ciência da Computação",
    status: "Em andamento",
    icon: Icons.GraduationCap({ width: 48, height: 48 })
  },
  {
    institution: "UNASP",
    course: "Análise e Desenvolvimento de Sistemas",
    status: "Concluído",
    icon: Icons.GraduationCap({ width: 48, height: 48 })
  },
];

const CERTIFICATIONS = [
    { name: "Encantar o Cliente atraves do Atendimento", issuer: "Acelerador Atendimento · 2025", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Impulsionar sua carreira e buscar resultados mais expressivos para a empresa", issuer: "Acelerador Atendimento . 2025", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Sustentabilidade em Tecnologia da empresa ", issuer: "Microsoft · 2025", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Information Technology Fundamentals", issuer: "IBM · 2025", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Cybersecurity Awareness (CAPC)", issuer: "CertiProf · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Gestão Financeira de Empresas", issuer: "FIAP · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Gestão de Infraestrutura de TI", issuer: "FIAP · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "LGPD (Lei Geral de Proteção de Dados)", issuer: "Fundação Bradesco · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Letramento Digital", issuer: "Fundação Bradesco · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Cálculo Técnico", issuer: "Instituto Federal de Pernambuco · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Fundamentos da Sustentabilidade em Tecnologia", issuer: "Microsoft · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Trabalho com Computadores", issuer: "Microsoft · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Criar Aplicativos sem Servidor", issuer: "Microsoft Azure · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Criação de Site com HTML, CSS e JavaScript", issuer: "Softex · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Microsoft Office 365 (OneDrive, OneNote, Planner, Outlook)", issuer: "Fundação Bradesco · 2022", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Finanças Pessoais", issuer: "Bradesco · 2020", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Introdução à Linguagem HTML", issuer: "Udemy · 2020", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Atendimento ao Público", issuer: "Bradesco · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Introdução à Programação Orientada a Objetos (POO)", issuer: "Bradesco · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Microsoft PowerPoint 2013 Avançado", issuer: "Bradesco · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Segurança em Tecnologia da Informação", issuer: "Bradesco · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "#EuPossoProgramar minha página Web", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Academia Windows: Implantando Windows 10", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Fundamentos de Tecnologia em Libras", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Fundamentos de Rede", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Introdução ao Windows 10 para Profissionais de TI", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Introdução ao HTML5 com JavaScript e CSS3", issuer: "Microsoft · 2019", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Introdução a Redes de Computadores", issuer: "Bradesco · 2018", icon: Icons.Award({ width: 36, height: 36 }) },
    { name: "Calculo Técnico", issuer: "Instituto Federal - Rio Grande do Sul · 2024", icon: Icons.Award({ width: 36, height: 36 }) },
];

const SKILLS = [
  {
    title: "Suporte & Atendimento",
    skills: [
      { name: "Suporte Técnico N1, N2, N3", level: 95 },
      { name: "Suporte VIP", level: 90 },
      { name: "Documentação Técnica", level: 85 },
      { name: "Treinamento de Usuários", level: 85 }
    ]
  },
  {
    title: "Infraestrutura & Redes",
    skills: [
      { name: "Active Directory, DHCP, DNS", level: 90 },
      { name: "Firewall Fortigate & VPNs", level: 90 },
      { name: "Redes (LAN, WAN, VLAN)", level: 85 },
      { name: "Windows/Linux e Mac OS", level: 80 },
      { name: "Servidores Windows/Linux", level: 80 },
      { name: "Manutencao", level: 80 },
    ]
  },
  {
    title: "Cloud & Monitoramento",
    skills: [
      { name: "Zabbix & Grafana", level: 95 },
      { name: "Microsoft Azure", level: 75 },
      { name: "SharePoint", level: 75 },
      { name: "Google Cloud (GCP)", level: 70 },
      { name: "Oracle Cloud (OCI)", level: 65 },
      { name: "n8n (Automação de Workflow)", level: 70 },
    ]
  },
  {
    title: "Segurança da Informação",
    skills: [
        { name: "Bitdefender GravityZone", level: 85 },
        { name: "Políticas de Acesso (IAM)", level: 80 },
        { name: "Gestão de Mudanças (GMUD)", level: 88 },
        { name: "Backup e Disaster Recovery", level: 80 },
        { name: "Conceitos LGPD", level: 75 },
    ]
  },
  {
    title: "Sistemas & Ferramentas",
    skills: [
      { name: "Office 365 Admin Center", level: 95 },
      { name: "Jira / Service Desk", level: 90 },
      { name: "GLPI / Service Desk", level: 90 },
      { name: "PowerShell & Bash Scripting", level: 85 },
      { name: "CRM", level: 90 },
      { name: "VMware & Proxmox VE", level: 80 },
      { name: "Certificado SSL", level: 80 },
      { name: "SalesForce", level: 80 },
      { name: "NBS", level: 80 },
      { name: "Fandi", level: 80 },
      { name: "ViaNuvem", level: 80 },
    ]
  },
  {
    title: "Outros Conhecimentos",
    skills: [
      { name: "Gestão de Ativos de TI", level: 90 },
      { name: "Hardware e Periféricos", level: 95 },
      { name: "ITIL Foundation", level: 85 },
      { name: "HTML, CSS, JS ", level: 60 },
      { name: "Notion", level: 80 },
    ]
  }
];

const PROJECTS = [
    {
        title: "Automação de Processos Manuais",
        description: "Desenvolvimento de scripts em PowerShell, Phyton e Bash para automatizar tarefas repetitivas, como criação de usuários, verificação de backups e relatórios de sistema, reduzindo o tempo de execução em até 80%.",
        icon: Icons.Code,
    },
    {
        title: "Implantação e Manutenção de VPNs",
        description: "Configuração de VPNs Site-to-Site e Client-to-Site utilizando Fortigate, garantindo conectividade segura entre filiais e para colaboradores remotos. Gestão de políticas de segurança e monitoramento de tráfego.",
        icon: Icons.Briefcase,
    },
    {
        title: "Monitoramento Proativo com Zabbix/Grafana",
        description: "Criação e otimização de dashboards no Grafana, integrados ao Zabbix, para monitoramento em tempo real de infraestrutura on-premise e em nuvem, permitindo a identificação de problemas antes que afetem os usuários.",
        icon: Icons.Target,
    },
    {
        title: "Configuração e Suporte ao Outlook / Office 365",
        description: "Implantação e configuração de contas de e-mail no Outlook e Office 365, criação e padronização de assinaturas corporativas, gerenciamento de caixas compartilhadas e regras de fluxo. Suporte a usuários para resolução de problemas relacionados a envio/recebimento e integração com calendários e Teams.",
        icon: Icons.Mail,
    },
    {
        title: "Documentação Técnica e Base de Conhecimento",
        description: "Criação e manutenção de centrais de documentação e repositórios técnicos em Notion e SharePoint, incluindo manuais, procedimentos operacionais e tutoriais. Estruturação de base de conhecimento para equipes de TI e usuários finais, garantindo padronização, agilidade no suporte e transferência de conhecimento.",
        icon: Icons.Briefcase,
    },
    {
        title: "Levantamento de Ativos e Padronização de Equipamentos",
        description: "Inventário completo de ativos de TI, abrangendo hardware, softwares licenciados e recursos de rede. Padronização de equipamentos e políticas de domínio, garantindo maior controle, segurança e redução de custos. Planejamento de manutenção preventiva e corretiva, assegurando disponibilidade e ciclo de vida dos ativos.",
        icon: Icons.Server,
    },
];

const LINKEDIN_HIGHLIGHTS = [
    {
        title: "Hackathon Qualcomm Edge AI & Dell - Consquistando posição de Destaque com aplicação ao Vivo",
        description: "Em apenas 30 horas no Hackathon Qualcomm Edge AI, no Cubo Itaú, desenvolvemos o Argos AI: uma solução de inteligência artificial totalmente local sem necessidade de internet, rodando nos novos notebooks Dell com Snapdragon X Plus. O Argos AI detecta comportamentos maliciosos",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQG84y-tZzhYKA/feedshare-shrink_2048_1536/B4DZkIqu6wH4A4-/0/1756787044613?e=1762387200&v=beta&t=Xd4SCg-h0-H_s6viZR2WFs37BNQwztUtRS0i2D4clcY",
        postUrl: "https://www.linkedin.com/posts/lucas-thiago-368628160_hackathon-qualcommedgeai-dell-activity-7368498946219970560-O5K-",
    },
    {
        title: " Hackathon Visite São Paulo 2024 - Conquistando o 2° lugar da Competição",
        description: "O desafio do evento era instigante: “Como transformar os moradores de São Paulo em turistas na própria cidade, usando tecnologia? Nossa resposta foi um app de compartilhamento de fotos que recompensa os usuários com descontos em restaurantes locais, incentivando o turismo urbano e acessível.Tive a responsabilidade de estruturar o Project Model Canvas do grupo, aplicando ferramentas como Matriz GUT e Mapa de Empatia",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFLVOiwPS_tpg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729601551650?e=1762387200&v=beta&t=wmG88neWkLsmLeUQuoxa0u9eC-GarrRlZ9kgK_pAQZ0",
        postUrl: "https://www.linkedin.com/posts/lucas-thiago-368628160_inovaaexaeto-dev-saetopaulo-activity-7254474715182862338-7J2a",
    }
];

// =================================================================================
// SERVIÇO DA API GEMINI
// =================================================================================

let ai;
let chatSession;

function initializeGemini() {
    if (API_KEY && API_KEY !== "COLE_SUA_API_KEY_AQUI") {
        try {
            ai = new GoogleGenAI({ apiKey: API_KEY });
        } catch(error) {
            console.error("Failed to initialize GoogleGenAI. Check your API Key.", error);
            ai = null;
        }
    } else {
        console.warn("API_KEY not set. AI Features will be disabled.");
        ai = null;
    }
}

function generatePortfolioContext() {
  const experienceSummary = EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ');
  const skillsSummary = SKILLS.flatMap(category => category.skills.map(skill => skill.name)).join(', ');
  const projectsSummary = PROJECTS.map(p => p.title).join(', ');

  return `
    This is a context summary for an AI assistant on the portfolio website of Lucas Thiago de Sousa Silveira.
    
    Name: ${PERSONAL_INFO.name}
    Title: ${PERSONAL_INFO.title}
    About: ${PERSONAL_INFO.about}
    
    Key Experiences: ${experienceSummary}.
    Key Skills: ${skillsSummary}.
    Key Projects: ${projectsSummary}.
  `;
};

async function generateSummary() {
    try {
        if (!ai) return "O recurso de IA não está configurado. A chave da API está ausente.";
        
        const context = generatePortfolioContext();
        const prompt = `
            ${context}
            
            Based on all the information provided about Lucas Silveira, act as a professional IT recruiter.
            Write a concise and impactful "elevator pitch" (3-4 sentences) for a busy hiring manager.
            Highlight his key strengths (like automation, proactive monitoring, and cloud technologies) and how they align with a Systems Analyst or IT Infrastructure role.
            Use a professional but engaging tone. The response must be in Brazilian Portuguese.
            Do not use any markdown formatting, especially asterisks for bolding.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;

    } catch (error) {
        console.error("Error generating summary with Gemini:", error);
        return "Desculpe, não foi possível gerar o resumo no momento. Por favor, tente novamente mais tarde.";
    }
};

function createChatSession() {
    if (!chatSession && ai) {
        const chatbotSystemInstruction = `
            ${generatePortfolioContext()}
            
            Your role is to act as a helpful AI assistant for visitors of this portfolio. 
            Answer questions about Lucas's skills, experience, and projects based on the information provided.
            Be friendly, professional, and concise. If you don't know the answer, say that the information is not in your knowledge base.
            Keep your answers relatively short and conversational. The conversation is in Brazilian Portuguese.
            Do not use any markdown formatting, especially asterisks for bolding.
        `;
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: { systemInstruction: chatbotSystemInstruction },
        });
    }
    return chatSession;
}

async function sendMessageToBot(message) {
  try {
    if (!ai) return "Desculpe, o assistente de IA não está configurado corretamente.";
    
    const chat = createChatSession();
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Desculpe, encontrei um erro. Por favor, tente novamente mais tarde.";
  }
}


// =================================================================================
// ESTADO DA APLICAÇÃO
// =================================================================================

let appState = {
    theme: 'dark',
    isMenuOpen: false,
    activeExperienceFilter: 'All',
    terminalText: '',
    monitoredServices: [
        { id: 1, name: 'API Gateway', status: 'operational', latency: 45, cpu: 25 },
        { id: 2, name: 'Database Cluster', status: 'operational', latency: 60, cpu: 40 },
        { id: 3, name: 'Auth Service', status: 'operational', latency: 55, cpu: 30 },
        { id: 4, name: 'Cloud Storage', status: 'operational', latency: 80, cpu: 15 },
        { id: 5, name: 'VPN Concentrator', status: 'operational', latency: 30, cpu: 20 },
        { id: 6, name: 'Web Server Pool', status: 'operational', latency: 50, cpu: 35 },
    ],
    latencyHistory: {},
    cpuHistory: {},
    chatbot: {
        isOpen: false,
        isLoading: false,
        messages: [{ sender: 'bot', text: "Olá! Sou o assistente de IA do Lucas. Como posso te ajudar a saber mais sobre ele?" }]
    },
    about: {
        aiSummary: '',
        isLoadingSummary: false,
    }
};

// =================================================================================
// FUNÇÕES DE "COMPONENTE"
// =================================================================================

function SectionComponent({ id, title, icon, children }) {
  return `
    <section id="${id}" class="py-16 md:py-24 scroll-reveal">
      <div class="flex items-center mb-12">
        <span class="text-purple-600 dark:text-cyan-400">${icon}</span>
        <h2 class="text-3xl md:text-4xl font-bold ml-4 text-gray-900 dark:text-gray-100">${title}</h2>
        <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-6"></div>
      </div>
      ${children}
    </section>
  `;
}

function HeaderComponent({ theme, isMenuOpen }) {
    const navLinks = [
        { href: "#about", label: "Sobre" },
        { href: "#experience", label: "Experiência" },
        { href: "#skills", label: "Habilidades" },
        { href: "#projects", label: "Projetos" },
        { href: "#contact", label: "Contato" }
    ];
    return `
        <header class="bg-white/80 dark:bg-gray-900/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" class="text-xl sm:text-2xl font-bold text-purple-600 dark:text-cyan-400 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">
                    LTS.dev
                </a>
                <nav class="hidden md:flex items-center space-x-6">
                    ${navLinks.map(link => `
                        <a href="${link.href}" class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">
                            ${link.label}
                        </a>
                    `).join('')}
                </nav>
                <div class="md:hidden flex items-center">
                </div>
            </div>
            ${isMenuOpen ? `
                <div id="mobile-menu" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    ${navLinks.map(link => `
                         <a href="${link.href}" onclick="closeMenu()" class="block py-3 px-6 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-cyan-400">
                             ${link.label}
                         </a>
                    `).join('')}
                </div>
            ` : ''}
        </header>
    `;
}

function HomeComponent({ terminalText }) {
  return `
    <section id="home" class="min-h-screen flex flex-col justify-center items-center text-center py-12 md:py-20">
        <div class="max-w-4xl mx-auto">
            <div class="font-mono text-green-600 dark:text-green-400 bg-gray-100 dark:bg-black dark:bg-opacity-50 p-4 rounded-lg text-sm md:text-base mb-8 border border-gray-300 dark:border-gray-700">
              <p>&gt; ${terminalText}<span class="terminal-cursor">_</span></p>
            </div>

            <h1 class="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4">
                ${PERSONAL_INFO.name}
            </h1>
            <p class="text-xl md:text-2xl text-purple-600 dark:text-cyan-400 mb-6">
                ${PERSONAL_INFO.title}
            </p>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                ${PERSONAL_INFO.impactStatement}
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                    href="${PERSONAL_INFO.cv_url}" 
                    download 
                    class="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                >
                    ${Icons.Download}
                    <span class="ml-2">Baixar Currículo PDF</span>
                </a>
                <a 
                    href="${PERSONAL_INFO.linkedin}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                >
                    ${Icons.LinkedIn()}
                    <span class="ml-2">LinkedIn</span>
                </a>
                <a 
                    href="${PERSONAL_INFO.github}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                >
                    ${Icons.GitHub()}
                    <span class="ml-2">GitHub</span>
                </a>
                <a 
                    href="${PERSONAL_INFO.whatsapp}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                >
                    ${Icons.WhatsApp()}
                    <span class="ml-2">Contato Rápido</span>
                </a>
            </div>
        </div>
    </section>
  `;
}

function AboutComponent({ aiSummary, isLoadingSummary }) {
  const isAiDisabled = !ai;
  const content = `
    <div class="grid md:grid-cols-3 gap-12 items-center">
      <div class="md:col-span-2">
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              ${PERSONAL_INFO.about}
          </p>
           <div class="mt-8">
            <button
              onclick="handleGenerateSummary()"
              ${(isLoadingSummary || isAiDisabled) ? 'disabled' : ''}
              class="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              ${isLoadingSummary 
                ? `<span class="mr-2">${Icons.Spinner}</span>` 
                : `<span class="mr-2">${Icons.Sparkles}</span>`
              }
              ${isLoadingSummary ? 'Gerando...' : 'Gerar Resumo com IA para Recrutadores'}
            </button>
             ${isAiDisabled ? `<p class="text-xs text-gray-500 mt-2">Recurso de IA indisponível. Verifique a API Key.</p>` : ''}
          </div>

          ${aiSummary ? `
            <div class="mt-6 p-4 bg-purple-50 dark:bg-cyan-900/20 border border-purple-200 dark:border-cyan-800 rounded-lg">
                <h4 class="font-bold text-lg text-purple-800 dark:text-cyan-300 mb-2">Resumo Gerado por IA</h4>
                <p class="text-purple-900 dark:text-cyan-200">${aiSummary}</p>
            </div>
          ` : ''}
      </div>
      <div>
          <h3 class="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-6">Soft Skills</h3>
          <div class="flex flex-wrap gap-4">
              ${SOFT_SKILLS.map(skill => `
                  <div class="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 transition-transform transform hover:scale-110 hover:bg-purple-50 dark:hover:bg-cyan-900/50 cursor-default">
                      <span class="text-purple-600 dark:text-cyan-400 mr-2">${skill.icon}</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">${skill.name}</span>
                  </div>
              `).join('')}
          </div>
      </div>
    </div>
  `;
  return `
    <section id="about" class="pt-0 pb-16 md:pb-24 scroll-reveal">
      <div class="flex items-center mb-12">
        <span class="text-purple-600 dark:text-cyan-400">${Icons.UserCheck}</span>
        <h2 class="text-3xl md:text-4xl font-bold ml-4 text-gray-900 dark:text-gray-100">Sobre Mim</h2>
        <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-6"></div>
      </div>
      ${content}
    </section>
  `;
}

function ExperienceComponent({ activeFilter }) {
    const allTechs = Array.from(new Set(
        EXPERIENCES.flatMap(exp => 
            (exp.responsibilities.join(' ').match(/\*\*(.*?)\*\*/g) || []).map(m => m.replace(/\*\*/g, ''))
        )
    )).sort();

    const filters = ['All', 'Current', 'Past', ...allTechs];

    const filteredExperiences = EXPERIENCES.filter(exp => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Current') return exp.period.includes('Atual');
        if (activeFilter === 'Past') return !exp.period.includes('Atual');
        return exp.responsibilities.some(resp => resp.includes(`**${activeFilter}**`));
    });

    const content = `
      <div class="flex flex-wrap items-center gap-3 mb-10">
        <span class="font-semibold text-gray-600 dark:text-gray-400 mr-2">Filtrar por:</span>
        ${filters.map(filter => `
          <button
            onclick="setExperienceFilter('${filter}')"
            class="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 ${
              activeFilter === filter
                ? 'bg-purple-600 dark:bg-cyan-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }"
          >
            ${filter}
          </button>
        `).join('')}
      </div>

      <div class="relative border-l-2 border-purple-800 dark:border-cyan-700 pl-8 md:pl-10 space-y-12 md:space-y-16">
        ${filteredExperiences.length > 0 ? `
            <div class="absolute w-3 h-3 bg-purple-500 dark:bg-cyan-400 rounded-full -left-1.5 top-2.5 ring-8 ring-gray-50 dark:ring-[#0a0a1a]"></div>
            ${filteredExperiences.map(exp => `
              <div class="relative">
                 <div class="absolute w-3 h-3 bg-purple-500 dark:bg-cyan-400 rounded-full -left-[38px] md:-left-[46px] top-2 ring-8 ring-gray-50 dark:ring-[#0a0a1a]"></div>
                <div class="p-4 md:p-6 bg-white dark:bg-gray-900 dark:bg-opacity-50 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg hover:border-purple-600 dark:hover:border-cyan-500 transition-all">
                  <div class="flex justify-between items-start flex-col sm:flex-row">
                    <h3 class="text-2xl font-bold text-purple-600 dark:text-cyan-400">${exp.role}</h3>
                    <span class="bg-gray-100 dark:bg-gray-800 text-purple-700 dark:text-cyan-300 text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">${exp.period}</span>
                  </div>
                  <p class="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-4">${exp.company}</p>
                  <ul class="space-y-3">
                    ${exp.responsibilities.map(resp => `
                      <li class="flex items-start">
                        <span class="text-purple-600 dark:text-cyan-400 mr-3 mt-1">${Icons.ChevronRight}</span>
                        <span class="text-gray-700 dark:text-gray-300">
                          ${resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-700 dark:text-cyan-300 font-semibold">$1</strong>')}
                        </span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
        ` : `
          <div class="text-center py-10 px-6 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-lg border border-gray-200 dark:border-gray-800">
            <p class="text-lg text-gray-500 dark:text-gray-400">Nenhuma experiência encontrada para o filtro selecionado.</p>
          </div>
        `}
      </div>
    `;
    return SectionComponent({ id: "experience", title: "Experiência Profissional", icon: Icons.Briefcase, children: content });
}

function SkillsComponent() {
    const title = "Habilidades Técnicas";
    const icon = Icons.Code;
    const allSkills = SKILLS.flatMap(category => category.skills.map(skill => skill.name));
    const marqueeSkills = [...allSkills].sort(() => Math.random() - 0.5);
    const midPoint = Math.ceil(marqueeSkills.length / 2);
    const row1Skills = marqueeSkills.slice(0, midPoint);
    const row2Skills = marqueeSkills.slice(midPoint);

    const createSkillTagsMarquee = (skills) => 
        [...skills, ...skills].map((skill, index) => `
            <div class="scroll-reveal bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2 text-nowrap transition-transform transform hover:scale-110 hover:bg-purple-50 dark:hover:bg-cyan-900/50 cursor-default" style="transition-delay: ${index * 25}ms">
                <span class="text-sm font-medium text-purple-700 dark:text-cyan-400">${skill}</span>
            </div>
        `).join('');

    const content = `
        <div class="hidden md:block relative group w-full overflow-hidden bg-gray-100/50 dark:bg-gray-900/50 py-8 rounded-lg border border-gray-200 dark:border-gray-800 [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div class="space-y-4">
                <div class="flex items-center space-x-4 w-max animate-scroll-ltr group-hover:[animation-play-state:paused]">
                    ${createSkillTagsMarquee(row1Skills)}
                </div>
                <div class="flex items-center space-x-4 w-max animate-scroll-rtl group-hover:[animation-play-state:paused]">
                    ${createSkillTagsMarquee(row2Skills)}
                </div>
            </div>
        </div>
        <div class="block md:hidden">
            <div class="grid grid-cols-2 gap-3">
                ${allSkills.sort().map((skill, index) => `
                    <div class="scroll-reveal bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-center" style="transition-delay: ${index * 25}ms">
                        <span class="text-sm font-medium text-purple-700 dark:text-cyan-400">${skill}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return `
      <section id="skills" class="py-16 md:py-24 scroll-reveal">
        <div class="flex items-center mb-12">
          <span class="text-purple-600 dark:text-cyan-400">${icon}</span>
          <h2 class="text-3xl md:text-4xl font-bold ml-4 text-gray-900 dark:text-gray-100">${title}</h2>
          <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-6"></div>
        </div>
        ${content}
      </section>
    `;
}

function ProjectsComponent() {
    const title = "Projetos em Destaque";
    const icon = Icons.Target;
    const content = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${PROJECTS.map((project, index) => `
                <div class="scroll-reveal bg-white dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-start hover:border-purple-600/50 dark:hover:border-cyan-500/50 hover:shadow-purple-600/20 dark:hover:shadow-cyan-500/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300" style="transition-delay: ${index * 100}ms">
                    <div class="text-purple-600 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 p-3 rounded-full mb-4">
                        ${project.icon}
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-base">${project.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    return `
      <section id="projects" class="py-16 md:py-24 scroll-reveal">
        <div class="flex items-center mb-12">
          <span class="text-purple-600 dark:text-cyan-400">${icon}</span>
          <h2 class="text-3xl md:text-4xl font-bold ml-4 text-gray-900 dark:text-gray-100">${title}</h2>
          <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-6"></div>
        </div>
        ${content}
      </section>
    `;
}


function LinkedInHighlightsComponent() {
    const content = `
        <div class="grid md:grid-cols-2 gap-8">
            ${LINKEDIN_HIGHLIGHTS.map(highlight => `
                <div class="bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden group hover:border-purple-600/50 dark:hover:border-cyan-500/50 hover:shadow-purple-600/20 dark:hover:shadow-cyan-500/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <div class="w-full h-48 overflow-hidden">
                        <img 
                            src="${highlight.imageUrl}" 
                            alt="${highlight.title}" 
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                             onError="(e) => (e.currentTarget.src = 'https://picsum.photos/seed/highlight/600/300')"
                        />
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${highlight.title}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-base flex-grow mb-4">${highlight.description}</p>
                        <a 
                            href="${highlight.postUrl}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="mt-auto inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-purple-600 dark:hover:bg-cyan-500 text-purple-700 dark:text-cyan-400 hover:text-white dark:hover:text-white font-bold py-2 px-4 rounded-lg transition-all w-full sm:w-auto"
                        >
                            ${Icons.LinkedIn({width: 20, height: 20})}
                            <span class="ml-2">Ver no LinkedIn</span>
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    return SectionComponent({ id: "linkedin", title: "Destaques do LinkedIn", icon: Icons.Share2, children: content });
}


function EducationComponent() {
  const content = `
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      ${EDUCATIONS.map(edu => `
        <div class="bg-white dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 text-center flex flex-col items-center hover:-translate-y-2 transition-transform">
          <div class="text-purple-600 dark:text-cyan-400 mb-4">${edu.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">${edu.course}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-2">${edu.institution}</p>
          <span class="px-3 py-1 text-sm rounded-full ${edu.status === 'Concluído' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300'}">
            ${edu.status}
          </span>
        </div>
      `).join('')}
    </div>
  `;
  return SectionComponent({ id: "education", title: "Formação Acadêmica", icon: Icons.GraduationCap(), children: content });
}

function CertificationsComponent() {
    const content = `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            ${CERTIFICATIONS.map(cert => `
                <div class="bg-white dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div class="text-purple-600 dark:text-cyan-400 mb-3">
                        ${cert.icon}
                    </div>
                    <h4 class="font-bold text-gray-900 dark:text-white text-base leading-tight">${cert.name}</h4>
                    <p class="text-sm text-gray-500 mt-1">${cert.issuer}</p>
                </div>
            `).join('')}
        </div>
    `;
    return SectionComponent({ id: "certifications", title: "Certificações e Cursos", icon: Icons.Award(), children: content });
}

function MonitoringSimulatorComponent({ services, latencyHistory, cpuHistory }) {
    const statusConfig = {
      operational: { text: 'Operational', color: 'bg-green-500', textColor: 'text-green-300', borderColor: 'border-green-500' },
      degraded: { text: 'Degraded', color: 'bg-yellow-500', textColor: 'text-yellow-300', borderColor: 'border-yellow-500' },
      outage: { text: 'Outage', color: 'bg-red-500', textColor: 'text-red-300', borderColor: 'border-red-500' },
    };
    const serviceColors = ['#a855f7', '#34D399', '#FBBF24', '#F87171', '#A78BFA', '#FB923C'];

    const HistoryChart = ({ history, services: chartServices, title, unit, maxY }) => {
        const width = 500;
        const height = 200;
        const padding = 30;
        const dataPoints = history[chartServices[0]?.id]?.length || 0;
        const xStep = dataPoints > 1 ? (width - padding * 2) / (dataPoints - 1) : 0;

        const getPath = (data) => {
            if (!data || data.length < 2) return "";
            return data.map((point, i) => {
                const x = padding + i * xStep;
                const y = height - padding - (point / maxY) * (height - padding * 2);
                return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
            }).join(' ');
        };

        return `
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-4">${title}</h4>
                <svg viewBox="0 0 ${width} ${height}" class="w-full h-auto font-mono text-xs">
                    <g class="text-gray-400 dark:text-gray-600">
                        ${[...Array(5)].map((_, i) => `
                            <g>
                                <line x1="${padding}" y1="${height - padding - (i * (height - padding * 2)) / 4}" x2="${width - padding}" y2="${height - padding - (i * (height - padding * 2)) / 4}" stroke="currentColor" stroke-width="0.5" />
                                <text x="${padding - 8}" y="${height - padding - (i * (height - padding * 2)) / 4 + 3}" fill="currentColor" text-anchor="end">${(i * maxY) / 4}${unit}</text>
                            </g>
                        `).join('')}
                    </g>
                    <g class="text-gray-500 dark:text-gray-400">
                        <text x="${padding}" y="${height - 5}" fill="currentColor">90s atrás</text>
                        <text x="${width - padding}" y="${height - 5}" fill="currentColor" text-anchor="end">Agora</text>
                    </g>
                    ${chartServices.map((service, index) => `
                        <path
                            d="${getPath(history[service.id])}"
                            fill="none"
                            stroke="${serviceColors[index % serviceColors.length]}"
                            stroke-width="2"
                        />
                    `).join('')}
                </svg>
            </div>
        `;
    };

    const ChartLegend = ({ services: legendServices }) => `
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
            ${legendServices.map((service, index) => `
                <div class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${serviceColors[index % serviceColors.length]}"></div>
                    <span class="text-sm text-gray-600 dark:text-gray-400">${service.name}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    const content = `
      <div class="bg-white dark:bg-gray-900 dark:bg-opacity-70 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Dashboard de Infraestrutura</h3>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span class="text-green-600 dark:text-green-400 font-mono text-sm">Em Tempo Real</span>
          </div>
        </div>
        <div id="monitoring-services" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${services.map(service => `
                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border-l-4 transition-colors ${statusConfig[service.status].borderColor}">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold text-gray-800 dark:text-gray-200">${service.name}</p>
                        <div class="flex items-center px-2 py-1 rounded-full text-xs font-bold ${statusConfig[service.status].textColor} ${statusConfig[service.status].color.replace('bg-', 'bg-opacity-20')}">
                            <span class="w-2 h-2 rounded-full mr-1.5 ${statusConfig[service.status].color}"></span>
                            ${statusConfig[service.status].text}
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Latência: <span class="font-mono text-purple-700 dark:text-cyan-300">${service.latency.toFixed(0)}ms</span>
                        <span class="mx-2 text-gray-400 dark:text-gray-600">|</span>
                        CPU: <span class="font-mono text-purple-700 dark:text-cyan-300">${service.cpu.toFixed(0)}%</span>
                    </p>
                </div>
            `).join('')}
        </div>
        
        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
             <div class="grid lg:grid-cols-2 gap-8">
                ${HistoryChart({ history: latencyHistory, services: services, title: "Histórico de Latência (ms)", unit: "ms", maxY: 250 })}
                ${HistoryChart({ history: cpuHistory, services: services, title: "Histórico de Uso de CPU (%)", unit: "%", maxY: 100 })}
            </div>
            ${ChartLegend({ services: services })}
        </div>
      </div>
    `;
    return SectionComponent({ id: "simulator", title: "Simulador de Monitoramento", icon: Icons.Zap, children: content });
}

function ContactComponent() {
  const content = `
    <div class="grid md:grid-cols-2 gap-12">
        <div class="bg-white dark:bg-gray-900 dark:bg-opacity-50 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie uma mensagem</h3>
            <form onsubmit="handleContactSubmit(event)" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Seu Nome</label>
                    <input type="text" id="name" name="name" class="mt-1 block w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Assunto</label>
                    <input type="text" id="subject" name="subject" class="mt-1 block w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Mensagem</label>
                    <textarea id="message" name="message" rows="4" class="mt-1 block w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" required></textarea>
                </div>
                <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 transition-colors">
                    Enviar para ${PERSONAL_INFO.email}
                </button>
            </form>
        </div>
        <div class="space-y-6">
            <a href="${PERSONAL_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="flex items-center p-6 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-500 transition-colors">
                <div class="text-green-500">${Icons.WhatsApp({ width: 32, height: 32 })}</div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                    <p class="text-green-600 dark:text-green-400">Clique para iniciar uma conversa</p>
                </div>
            </a>
            <a href="${PERSONAL_INFO.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center p-6 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-colors">
                <div class="text-purple-500 dark:text-cyan-400">${Icons.LinkedIn({ width: 32, height: 32 })}</div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p class="text-purple-600 dark:text-cyan-400">Visite meu perfil profissional</p>
                </div>
            </a>
            <a href="${PERSONAL_INFO.github}" target="_blank" rel="noopener noreferrer" class="flex items-center p-6 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-500 transition-colors">
                <div class="text-gray-600 dark:text-gray-400">${Icons.GitHub({ width: 32, height: 32 })}</div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h4>
                    <p class="text-gray-600 dark:text-gray-400">Veja meus projetos e contribuições</p>
                </div>
            </a>
        </div>
    </div>
  `;
  return SectionComponent({ id: "contact", title: "Contato", icon: Icons.Mail, children: content });
}

function ChatbotComponent({ chatbotState }) {
  const { isOpen, messages, isLoading } = chatbotState;
  const isAiDisabled = !ai;
  
  if (isAiDisabled) {
      return '';
  }

  const chatbotWindow = isOpen ? `
    <div id="chatbot-window" class="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 z-50">
      <header class="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-t-lg">
        <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">Assistente de IA</h3>
        <button onclick="toggleChatbot()" class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
          ${Icons.Close}
        </button>
      </header>
      <main id="chatbot-messages" class="flex-1 p-4 overflow-y-auto space-y-4">
        ${messages.map(msg => `
          <div class="flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}">
            ${msg.sender === 'bot' ? `
              <div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-cyan-900 flex items-center justify-center text-purple-600 dark:text-cyan-400 flex-shrink-0">
                ${Icons.Bot}
              </div>` : ''}
            <div
              class="max-w-xs md:max-w-md lg:max-w-xs rounded-lg px-4 py-2 ${msg.sender === 'user'
                  ? 'bg-purple-600 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
                }"
            >
              ${msg.text}
            </div>
          </div>
        `).join('')}
        ${isLoading ? `
          <div class="flex items-end gap-2">
            <div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-cyan-900 flex items-center justify-center text-purple-600 dark:text-cyan-400 flex-shrink-0">
              ${Icons.Bot}
            </div>
            <div class="max-w-xs rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700">
              <div class="flex items-center justify-center space-x-1">
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>` : ''}
      </main>
      <form onsubmit="handleChatbotSubmit(event)" class="p-4 border-t dark:border-gray-700 flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
        <input
          type="text"
          id="chatbot-input"
          placeholder="Pergunte sobre mim..."
          class="flex-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300"
          ${isLoading ? 'disabled' : ''}
        />
        <button
          type="submit"
          class="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed"
          ${isLoading ? 'disabled' : ''}
          aria-label="Enviar mensagem"
        >
          ${Icons.Send}
        </button>
      </form>
    </div>` : '';

  return `
    <div id="chatbot-container">
        <button
            onclick="toggleChatbot()"
            class="fixed bottom-6 right-6 bg-purple-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 z-50"
            aria-label="Abrir assistente de IA"
        >
            ${isOpen ? Icons.Close : Icons.Bot}
        </button>
        ${chatbotWindow}
    </div>
  `;
}


function FooterComponent() {
  return `
    <footer class="bg-white dark:bg-gray-900 dark:bg-opacity-50 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div class="container mx-auto px-6 py-8 text-center text-gray-500">
            <p>&copy; ${new Date().getFullYear()} ${PERSONAL_INFO.name}. Todos os direitos reservados.</p>
            <div class="mt-4 flex justify-center space-x-6">
                <a href="#home" class="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">Início</a>
                <a href="#about" class="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">Sobre</a>
                <a href="#experience" class="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">Experiência</a>
                <a href="#contact" class="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">Contato</a>
            </div>
        </div>
    </footer>
  `;
}


const root = document.getElementById('root');

function renderApp() {
    if (!root) return;
    root.innerHTML = `
        ${HeaderComponent({ theme: appState.theme, isMenuOpen: appState.isMenuOpen })}
        <main class="container mx-auto px-6 pt-16">
            ${HomeComponent({ terminalText: appState.terminalText })}
            ${AboutComponent({ aiSummary: appState.about.aiSummary, isLoadingSummary: appState.about.isLoadingSummary })}
            ${ExperienceComponent({ activeFilter: appState.activeExperienceFilter })}
            ${SkillsComponent()}
            ${ProjectsComponent()}
            ${LinkedInHighlightsComponent()}
            ${EducationComponent()}
            ${CertificationsComponent()}
            ${MonitoringSimulatorComponent({ services: appState.monitoredServices, latencyHistory: appState.latencyHistory, cpuHistory: appState.cpuHistory })}
            ${ContactComponent()}
        </main>
        ${FooterComponent()}
        ${ChatbotComponent({ chatbotState: appState.chatbot })}
    `;
    initScrollReveal();
    scrollToChatbotBottom();
}

function renderHeader() {
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.outerHTML = HeaderComponent({ theme: appState.theme, isMenuOpen: appState.isMenuOpen });
    }
}

function renderExperienceSection() {
    let experienceElement = document.getElementById('experience');
    if (experienceElement) {
        experienceElement.outerHTML = ExperienceComponent({ activeFilter: appState.activeExperienceFilter });
        experienceElement = document.getElementById('experience');
        if (experienceElement) {
            initScrollRevealForElement(experienceElement);
        }
    }
}

function renderSimulatorSection() {
    let simulatorElement = document.getElementById('simulator');
    if (simulatorElement) {
        simulatorElement.outerHTML = MonitoringSimulatorComponent({ services: appState.monitoredServices, latencyHistory: appState.latencyHistory, cpuHistory: appState.cpuHistory });
        // Re-fetch the element from the DOM after replacement
        simulatorElement = document.getElementById('simulator');
        if (simulatorElement) {
            initScrollRevealForElement(simulatorElement);
        }
    }
}

function renderChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.innerHTML = ChatbotComponent({ chatbotState: appState.chatbot });
        scrollToChatbotBottom();
    }
}

function renderAboutSection() {
    let aboutElement = document.getElementById('about');
    if (aboutElement) {
        aboutElement.outerHTML = AboutComponent({ 
            aiSummary: appState.about.aiSummary, 
            isLoadingSummary: appState.about.isLoadingSummary 
        });
        aboutElement = document.getElementById('about');
        if (aboutElement) {
            initScrollRevealForElement(aboutElement);
        }
    }
}

function scrollToChatbotBottom() {
    const messagesEl = document.getElementById('chatbot-messages');
    if (messagesEl) {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }
}

// Funções globais para serem chamadas pelo HTML (onclick)
window.toggleTheme = () => {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', appState.theme);
    document.documentElement.classList.toggle('dark', appState.theme === 'dark');
    renderHeader();
};

window.toggleMenu = () => {
    appState.isMenuOpen = !appState.isMenuOpen;
    renderHeader();
};

window.closeMenu = () => {
    if (appState.isMenuOpen) {
        appState.isMenuOpen = false;
        renderHeader();
    }
};

window.setExperienceFilter = (filter) => {
    appState.activeExperienceFilter = filter;
    renderExperienceSection();
};

window.handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const body = `Nome: ${name}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

window.toggleChatbot = () => {
    appState.chatbot.isOpen = !appState.chatbot.isOpen;
    renderChatbot();
}

window.handleChatbotSubmit = async (event) => {
    event.preventDefault();
    const input = document.getElementById('chatbot-input');
    const userInput = input.value.trim();
    if (!userInput || appState.chatbot.isLoading) return;

    appState.chatbot.messages.push({ sender: 'user', text: userInput });
    appState.chatbot.isLoading = true;
    input.value = '';
    renderChatbot();

    const botResponse = await sendMessageToBot(userInput);
    appState.chatbot.messages.push({ sender: 'bot', text: botResponse });
    appState.chatbot.isLoading = false;
    renderChatbot();
}

window.handleGenerateSummary = async () => {
    appState.about.isLoadingSummary = true;
    appState.about.aiSummary = '';
    renderAboutSection();

    const summary = await generateSummary();
    appState.about.aiSummary = summary;
    appState.about.isLoadingSummary = false;
    renderAboutSection();
}

// Funções de inicialização
function initTheme() {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    appState.theme = storedTheme;
    document.documentElement.classList.toggle('dark', appState.theme === 'dark');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
}

function initScrollRevealForElement(element) {
    const revealElements = element.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        revealElements.forEach(el => observer.observe(el));
    } else if (element.classList.contains('scroll-reveal')) {
        observer.observe(element);
    }
}


function initTerminalAnimation() {
    const fullText = "Lucas, iniciando suporte avançado...";
    let index = 0;
    const interval = setInterval(() => {
        appState.terminalText = fullText.substring(0, index + 1);
        const terminalElement = document.querySelector('#home p');
        if (terminalElement) {
             terminalElement.innerHTML = `&gt; ${appState.terminalText}<span class="terminal-cursor">_</span>`;
        }
        index++;
        if (index > fullText.length) {
            clearInterval(interval);
        }
    }, 100);
}

function initMonitoringSimulator() {
    appState.monitoredServices.forEach(s => {
        appState.latencyHistory[s.id] = Array(30).fill(s.latency);
        appState.cpuHistory[s.id] = Array(30).fill(s.cpu);
    });

    setInterval(() => {
        appState.monitoredServices = appState.monitoredServices.map(service => {
            let { latency, cpu, status } = service;

            if (Math.random() < 0.08) {
                const event = Math.random();
                if (event < 0.7) status = 'operational';
                else if (event < 0.95) status = 'degraded';
                else status = 'outage';
            }

            if (status === 'operational') {
                latency += (Math.random() * 10 - 5);
                cpu += (Math.random() * 8 - 4);
            } else if (status === 'degraded') {
                latency += (15 + Math.random() * 20);
                cpu += (10 + Math.random() * 15);
            } else if (status === 'outage') {
                latency = 0;
                cpu = 0;
            }
            
            latency = Math.max(10, Math.min(250, latency));
            cpu = Math.max(5, Math.min(100, cpu));
            if (status === 'outage') { latency = 0; cpu = 0; }
            return { ...service, status, latency, cpu };
        });

        appState.monitoredServices.forEach(s => {
            appState.latencyHistory[s.id].push(s.latency);
            if (appState.latencyHistory[s.id].length > 30) appState.latencyHistory[s.id].shift();
            appState.cpuHistory[s.id].push(s.cpu);
            if (appState.cpuHistory[s.id].length > 30) appState.cpuHistory[s.id].shift();
        });
        
       renderSimulatorSection();
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initializeGemini();
    renderApp();
    initTerminalAnimation();
    initMonitoringSimulator();
});
