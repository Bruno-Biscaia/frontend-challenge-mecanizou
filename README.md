# Desafio Técnico – Catálogo Mecanizou

Este repositório contém a solução para o Desafio Front-End da Mecanizou, desenvolvido com base em um technical specification que propunha a criação de um mini-catálogo de produtos com autenticação, listagem e detalhamento, com uso de Tailwind, testes automatizados e boas práticas de desenvolvimento utilizando Next.js + TypeScript.

O objetivo principal era simular uma aplicação de catálogo protegida por login, com suporte a dark mode, testes automatizados, e integração com CI/CD, atendendo critérios técnicos definidos no spec.

- 🔗 **Deploy:** https://frontend-challenge-mecanizou.vercel.app/
- 📄 **Spec:** A especificação técnica completa foi fornecida pela equipe da Mecanizou e orientou todas as decisões tomadas ao longo do projeto.

**Nota:** Este catálogo utiliza uma marca e logo fictícia apenas para fins didáticos, pois o desafio não especificava nenhuma identidade visual de empresa.

---

## 1. Instruções de Setup e Execução

Siga estes passos para colocar o projeto rodando localmente e executar todos os checks:

1.1 **Clonar o repositório**:
```bash
git clone https://github.com/Bruno-Biscaia/frontend-challenge-mecanizou.git
cd frontend-challenge-mecanizou
```

1.2 **Instalar dependências**: É recomendado usar Node.js v18+ e npm v9+.
```bash
npm install
```

1.3 **Executar em modo de desenvolvimento**
```bash
npm run dev
```
Acesse a aplicação em http://localhost:3000/.

1.4 **Build de produção & start**:
```bash
npm run build
npm start
```

1.5 **Testes unitários (Jest)**:
```bash
npm test
```

1.6 **Testes E2E:**
Primeiro, instale os browsers (apenas uma vez)
```bash
npx playwright install
```
Depois, execute os testes:
```bash
npm run e2e
```

1.7 **Lint e formatação**
```bash
npm run lint
npm run check:format
```
Para auto-formatar todos os arquivos:
```bash
npm run format
```

---

## ❓ 2. Dúvidas Levantadas

Antes e durante o desenvolvimento da aplicação, surgiram algumas incertezas na implementação, pois certos pontos da especificação não estavam totalmente claros. Cada ponto possui sua respectiva solução e tratativa descrita no item 3 (Escolhas Técnicas).

### 2.1 Rotas & Dados

- **Estrutura do cookie auth**: Foi mencionado o uso de um cookie de autenticação, mas sem definição sobre conteúdo, expiração ou segurança. Ficou aberto se bastava apenas criar o cookie ou se ele deveria seguir alguma estrutura.
- **Cadastro de usuário**: Não ficou claro se deveria existir uma etapa de cadastro ou se o login seria feito apenas diretamente com credenciais fixas.
- **Dados dos produtos**: O products.json deveria simular uma API real (com paginação e atualização), ou servir apenas como mock estático para visualização?
- **Página de detalhe (/produtos/[id])**: A escolha entre SSR e SSG foi deixada livre, sem critérios objetivos (ex: atualização de dados, volume de acessos).
- **Tela inicial (“/”)**: A ausência de uma rota explícita para a home levantou dúvida sobre a necessidade de uma tela pública inicial ou se o fluxo deveria ir direto para /produtos passando pela autenticação no /login.
- **Conteúdo da listagem e do detalhe**: Não foram especificados os campos obrigatórios (ex: nome, imagem, preço, descrição), o que abre margem para decisões subjetivas de apresentação.
- **Idioma das rotas**: O uso misto descrito na spec de /login (inglês) e /produtos (português) gerou incerteza sobre o idioma padrão para URLs, variáveis e interface.

### 2.2 Autenticação

- **Fluxo de validação**: O desafio não deixa claro se a autenticação deveria validar ativamente usuário/senha antes de gerar o cookie, ou se bastava simular o login com qualquer valor submetido.
- **Simulação ou fluxo real**: Não está claro se o login deveria simular um backend real (com validação, expiração, logout controlado), ou apenas funcionar como uma porta de entrada fictícia protegida por um cookie.

### 2.3 UI com Tailwind CSS

- **Menu hambúrguer**: Foi mencionado o uso de menu responsivo em telas menores, mas não foi especificado o que deveria estar presente nele (links, logout, tema, etc.).
- **Modo escuro**: O desafio exige suporte a dark mode com persistência, mas não define a abordagem esperada (Tailwind, next-themes, CSS puro).
- **Paleta de cores**: As cores de tema claro e escuro não foram definidas, o que deixou a decisão visual totalmente aberta.

### 2.4 Componentização & Arquitetura

- **Estrutura de pastas**: Não há orientação sobre a organização do projeto, se seria por domínio, atomic design, ou estrutura mais simples.
- **Roteamento no Next.js**: Foi exigido o uso do Next.js, mas não especificado se deveria ser com Pages Router ou App Router, ou outro modelo.

### 2.5 Testes

- **Cobertura esperada**: A spec solicita três testes mínimos (render, interação, snapshot), mas não menciona expectativa de cobertura percentual ou uso de testes de integração/E2E mais avançados.

### 2.6 Qualidade de Código

- **ESLint + Prettier**: Foi pedido o uso de ESLint e Prettier com integração em CI, mas sem indicar quais regras, extensões ou padrões deveriam ser seguidos (Airbnb, Standard, custom?).

---

## ⚙️ 3. Escolhas Técnicas

As decisões abaixo foram tomadas com base na proposta do desafio, na análise de comportamento do Next.js em tempo de execução, na minha experiência prática em projetos anteriores, e em boas práticas voltadas à segurança, performance e patterns de código.

### 3.1 Rotas & Dados

- **Estrutura do cookie auth**: O cookie auth foi utilizado como uma flag de autenticação simples (auth=true), com expiração de 1 dia, controlada pelo cliente via js-cookie. Ele não possui payload estruturado nem criptografia, criado apenas para fins de simulação.
- **Fluxo de login**: Implementei um formulário, sem campos obrigatórios ou regex de validação e verificação básica antes de autenticar. O cookie é setado apenas após handleSubmit.
- **Página inicial (/)**: Criei uma rota “/” acessível tanto para usuários autenticados quanto não autenticados. Trata-se de uma home básica que serve como ponto de entrada genérico da aplicação, sem necessidade de redirecionamento imediato.
- **Página de erro 404**: Adicionei uma página padrão personalizada para rotas inexistentes.
- **Lista de produtos (/produtos)**: Mesmo sendo carregados via JSON local, converti essa página para SSR. Além de todo ganho em performance, isso evita que usuários não autenticados acessem o conteúdo via navegação interna do Next, que ignora o middleware em rotas estáticas.
- **Detalhe do produto (/produtos/[id])**: Também converti para SSR pelo mesmo motivo acima.
- **Campos exibidos**: Os produtos incluem nome, imagem, preço e descrição na listagem e detalhes. Foi uma escolha prática, considerando o escopo e o layout escolhido.
- **Idioma das rotas**: Mantive /produtos e /login, respeitando o que foi proposto na spec, mesmo com a mistura de idiomas. No código, optei por seguir a maioria dos textos em inglês.

### 3.2 Autenticação

- **Validação de credenciais**: O login aceita qualquer valor de usuário e senha (sem validações adicionais), e simplesmente seta o cookie auth após handleSubmit.
- **Proteção de rotas com middleware**: Implementei um middleware.ts para bloquear o acesso a rotas privadas quando o usuário não está autenticado. Identifiquei um problema que, com SSG, a navegação via "Link" contorna o middleware, pois o conteúdo já está pré-gerado e entregue.
  - **Solução adotada**: Converti as páginas protegidas de SSG para SSR, garantindo que, em cada request, o servidor cheque o cookie auth sem comprometer a performance. 
- **Logout**: O botão de logout remove o cookie e redireciona para a tela de login. O estado da aplicação é atualizado imediatamente.

### 3.3 UI com Tailwind CSS

- **Layout e identidade visual**: Usei um design clean e responsivo baseado na UI do Tailwind.
- **Modo escuro**: Utilizei `darkMode: 'class'` do Tailwind. O estado do tema é controlado por um hook (`useTheme`), persistido via `localStorage`, e aplicado no `<html>` para evitar problemas de hidratação.
- **Toggle de tema**: O botão para alternar entre tema claro e escuro está disponível em todas as telas, dentro do menu Navbar (desktop e mobile).
- **Menu hambúrguer**: O layout responsivo inclui um menu colapsado com as principais opções: Home, Catálogo, Login/Logout e toggle de tema.

### 3.4 Componentização & Arquitetura

- **Estrutura de pastas**:
  - `components/`: componentes reutilizáveis
  - `hooks/`: hooks customizados com lógica de estado e regras
  - `pages/`: rotas da aplicação (Pages Router)
  - `utils/`: funções auxiliares
  - `data/`: mock de produtos (`products.json`)
- **Atomic Design**: Adotei o Atomic Design como metodologia de componentização. Com isso, subdividi `components/` em:
  - `atoms/`: elementos básicos (ex: botão, input, tipografias)
  - `molecules/`: combinações de átomos criando componentes mais estruturados
  - `organisms/`: estruturas mais complexas compostas por átomos e moléculas
  - `layout/`: componentes estruturais reutilizados em múltiplas páginas
- **Hooks customizados**: `useAuth`, `useTheme` e `useProducts` para isolar lógica de autenticação, tema e dados.
- **Roteamento**: Utilizei o Pages Router para definir as rotas, aproveitando recursos para SSR.

### 3.5 Testes

- **Unitários (Jest)**: Escrevi testes para componentes principais cobrindo renderização, interação e snapshot.
- **E2E (Playwright)**: Automatizei o fluxo completo: login, produtos e logout.
- **Cobertura**: A cobertura atinge os níveis esperados para um desafio técnico.

### 3.6 Qualidade de Código

- **ESLint + Prettier**: Configurados com regras Standard para React + TypeScript, executados localmente e no CI.
- **CI (GitHub Actions)**: Workflow que valida lint, formatação, testes unitários e E2E (Standard) a cada push e pull request na branch `master`.
- **Commits e branches**: Estratégia de commits atômicos e branches temáticas para facilitar revisão.
- **Otimizações de performance**: Usei `<Image>` do Next para otimizar imagens e aproveitei o pré-carregamento automático de rotas.

---

## 🚀 4. Próximos Passos para Produção

### 4.1 Performance

- **Importações dinâmicas com `next/dynamic`**: Carregar componentes menos frequentes sob demanda.
- **Compressão e cache de ativos**: Habilitar e configurar `Cache-Control`.
- **CDN**: Aproveitar a CDN integrada do Vercel para conteúdo estático.
- **Incremental Static Regeneration (ISR)**: Aplicar `revalidate` para regenerar dados periodicamente.

### 4.2 Acessibilidade

- **ARIA e semântica HTML**: Adicionar `aria-label`, `aria-expanded`, `role`, e utilizar `<nav>`, `<main>`, `<footer>`.
- **Foco e navegação por teclado**: Assegurar foco visível e ordem de tabulação lógica.

### 4.3 Internacionalização (i18n)

- **Configuração do Next i18n**: Adicionar suporte a múltiplos idiomas via `next.config.js`.
- **Strings externas**: Extrair textos para arquivos JSON e usar `next-translate` ou `react-intl`.
- **Persistência de idioma**: Detectar idioma do navegador e permitir troca manual.

### 4.4 Segurança & Autenticação

- **Melhoria no cookie de auth**: Adicionar flags `HttpOnly`, `Secure` e `SameSite=Strict`.
- **Login real com JWT**: Implementar autenticação real com NextAuth.js, Auth0 ou JWT customizado.
- **Proteção de rotas e dados**: Criar middleware SSR/API que verifique token antes de liberar dados.

### 4.5 Testes Ampliados

- **Fluxos reais**: Cobrir cenários como login → busca → detalhamento → logout; filtros e ordenação.
- **Storybook + Chromatic**: Documentar componentes e integrar regressão visual.
- **Limites de cobertura no CI**: Definir mínimos (ex: 80% statements, 70% branches).

### 4.6 Infraestrutura & Deploy

- **Dockerização**: Se julgarmo necessário adicionar adicionarmos o Docker
- **Pipeline CI/CD**: Build automatizado, testes e deploy canário na Vercel.

### 4.7 Funcionalidades Avançadas

- **Busca**: Campo de pesquisa com debounce e filtro em tempo real.
- **Filtros**: Faixa de preço e categorias.
- **Ordenação**: Ordenar por nome (A-Z), preço (↑↓) ou mais recentes.
- **Favoritar produtos**: Botão para favoritar e armazenar no `localStorage` ou API futura.

## 🙌 Considerações Finais

Obrigado pela oportunidade e por conferir este repositório! 🎉

Sinta-se à vontade para:

- Abrir issues caso encontre bugs ou tenha sugestões;
- Enviar pull requests para melhorias ou novas funcionalidades;
- Entrar em contato para dúvidas ou colaborações.

Fique à vontade para explorar, testar e contribuir. 😊

Atenciosamente,

Bruno Biscaia
