# 📚 PredMed - Sistema de Gestão de Pacientes, Triagem e Diagnóstico de Covid-19 🏥

Este projeto foi desenvolvido no contexto da disciplina _Front-End Design Engineering_, pertencente ao curso de Tecnologia em Análise e Desenvolvimento de Sistemas da **FIAP** (Faculdade de Informática e Administração Paulista). O principal objetivo foi aplicar conceitos práticos de desenvolvimento front-end com Next.js para criar uma solução moderna para gestão de pacientes e processos de triagem, com foco especial no diagnóstico e acompanhamento de casos de Covid-19.

---

&nbsp;

## 🧩 Sobre o Negócio

O PredMed é um sistema de gestão médica dedicado ao diagnóstico e acompanhamento de pacientes com suspeita ou confirmação de Covid-19. Tem como objetivo:

- Gerenciar cadastros de pacientes
- Facilitar processos de triagem
- Auxiliar no diagnóstico de Covid-19
- Acompanhar histórico médico dos pacientes
- Otimizar fluxos de trabalho em ambientes clínicos

## 💡 Oportunidade Identificada

No ambiente de saúde, o gerenciamento eficiente de pacientes e o processo de triagem são tarefas críticas que impactam diretamente a qualidade do atendimento. Nossa solução visa otimizar esse processo, permitindo:

- Cadastro rápido e eficiente de pacientes
- Processo de triagem estruturado
- Visualização de dados importantes do paciente
- Interface amigável e responsiva

---

&nbsp;

## 🧩 Tecnologias Utilizadas

🌐 **FRONTEND**

- **NEXTJS** — Framework React para SSR e geração estática
  - TypeScript — Tipagem estática para JavaScript
  - React Hooks — Gerenciamento de estado e ciclo de vida
  - Tailwind CSS — Framework CSS utilitário
  - Next Image — Otimização de imagens
  - Fetch API — Comunicação com backend

🛠️ **Ferramentas de Desenvolvimento**

- **VS Code** — Ambiente de desenvolvimento
- **Git/GitHub** — Controle de versão e hospedagem do projeto

🖥️ **BACKEND**

- **QUARKUS** — Framework Java para criação de aplicações modernas
  - Java — Linguagem de programação orientada a objetos
  - JWT — Autenticação e segurança via tokens

🗄️ **Banco de Dados**

- **OracleSQL** — Sistema de gerenciamento de banco de dados relacional

---

&nbsp;

## 📱 Funcionalidades Principais

- **Autenticação de usuários** — Sistema seguro de login
- **Gestão de pacientes** — Cadastro, visualização e edição
- **Processo de triagem** — Fluxo estruturado para triagem de pacientes

---

&nbsp;

## 🔌 API Endpoints (Backend)

### Autenticação

- **POST /api/login** — Autenticação de usuários com JWT

### Pacientes

- **GET /api/pacientes** — Listar todos os pacientes
- **GET /api/pacientes/{id}** — Buscar paciente por ID
- **POST /api/pacientes** — Cadastrar novo paciente
- **PUT /api/pacientes/{id}** — Atualizar dados do paciente
- **DELETE /api/pacientes/{id}** — Excluir paciente

### Triagem

- **GET /api/triagem/paciente/{id}** — Listar triagens de um paciente
- **POST /api/triagem/{pacienteId}** — Criar nova triagem para paciente
- **POST /api/diagnostico/{triagemId}** — Gerar diagnóstico para triagem

---

&nbsp;

## 🧪 Estrutura do Projeto

- `/src/app` — Páginas da aplicação
  - `/home` — Dashboard principal
  - `/paciente` — Gestão de pacientes
  - `/paciente/[id]` — Detalhes do paciente
  - `/paciente/[id]/triagem` — Triagem do paciente
  - `/paciente/cadastrar` — Cadastro de paciente
- `/src/components` — Componentes reutilizáveis
  - `/auth` — Componentes de autenticação
  - `/common` — Componentes comuns (Header, Footer)
  - `/pacient` — Componentes relacionados ao paciente
  - `/triage` — Componentes relacionados à triagem
- `/src/services` — Serviços de API
- `/src/types` — Interfaces TypeScript
- `/public` — Ativos estáticos

---

&nbsp;

## ⚠️ Importante

#### Credenciais de login

```
Email: jonas@gmail.com
Senha: senha123
```

#### Vídeo de demonstração

```
https://youtu.be/j8gSRUX502E?si=sb_lp42tqqc0jOEw
```

#### Projeto em produção

```
https://predmed-nextjs.vercel.app
```

#### Repositório GitHub

```
https://github.com/FIAP-1TDSPS-2024/predmed-nextjs
```

### Repositório com Deploy na Vercel

```
https://github.com/wendellnd/predmed-nextjs
```

- Obs: Na conta Hobby da Vercel só podemos fazer deploy em repositórios na conta do usuário. Fizemos um fork do repositório na conta do @wendellnd para configurar o deploy.

---

&nbsp;

## 🚀 Inicializando o Projeto

### Inicializando banco de dados

1. Conecte no seu banco de dados `OracleSQL`

2. Acesse a pasta `./server/banco_de_dados`

3. Execute os scripts do arquivo `init.sql`

### Inicializando API Python

1. Acesse o diretório `./server/python`

2. Instale as dependências

```
pip install -r requirements.txt
```

3. Execute o arquivo `server.py`

```
python server.py
```

4. O projeto será executado na porta 5000 - [http://localhost:5000](http://localhost:5000)

### Inicializando API Java

1. Acesse o diretório `./server/java`

2. Instale as dependências

```
mvn dependency:install
```

3. Atualize as credenciais do banco de dados OracleSQL no arquivo `./src/main/resources/application.properties`

```
quarkus.datasource.username=seu_usuario
quarkus.datasource.password=sua_senha
```

4. Configure a chave privada JWT como variável de ambiente:

- Obs: A chave privada está no caminho `./server/java/src/main/resources/META-INF/resources/privateKey.pem`

**Windows (PowerShell)**:

```powershell
$env:JWT_PRIVATE_KEY = cat "C:\caminho\para\sua\chave.key" -Raw
```

**macOS/Linux (Bash/ZSH)**:

```bash
export JWT_PRIVATE_KEY=$(cat "/caminho/para/sua/chave.key")
```

5. Inicialize o projeto

```
./mvnw quarkus:dev
```

6. O projeto será executado na porta 8080 - [http://localhost:8080](http://localhost:8080)

### Inicializando Next.js

1. Volte para o diretório raiz do projeto

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

---

&nbsp;

## 🧑‍💻 Desenvolvedores

- Daniel Santana Corrêa Batista (RM: 559622)
- Jonas de Jesus Campos de Oliveira (RM: 561144)
- Wendell Nascimento Dourado (RM: 559336)
