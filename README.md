# 🌳💻 API TecSustentável - EcoTecnologia

Nesse mini projeto fui desafiado a desenvolver uma API RESTful que tive-se utilidade e que consegui-se solucionar um problema a minha escolha, utilizando os conhecimentos passados em aula.

Desenvolvimento de uma API com três rotas GET com funcionalidades diferentes, com uma organização utilizando a arquitetura MVC( Model View e Controller ), boas práticas com JavaScript, desenvolvimento de banco de dados mocado, utilização de bibliotecas nodemon e express.

## Problematização
Apesar de te um enorme potencial, enfrenta diversos desafios para sua ampla adoção e desenvolvimento pleno. Alguns deles são a Falta de Conscientização e Educação, Falta de Compreensão do Potencial e Informalidade.

## Solução Encontrada
Pensando nisso, resolvi desenvolver essa api que consegui:
- listar inovações e seus setores
- mostrar startups sustentáveis e seus sites
- e exibi como podemos apoia com pequenas atitudes

Assim conseguindo divulgar mais sobre as vantagens e benefícios da utilização da tecnologia mais voltada na natureza, pensando tanto no curto prazo como para as próximas gerações.

## 📤 Last Update
Versão 1.0 | Versão Estável.

## 🧰 Tecnologias Utilizadas
- Node.js
- Express.js
- JavaScript
- Arquitetura MVC
- Nodemon

## 🔧 Configuração de Instalação e Execução

### Pré-requisitos
- Node.js (Versão 20 ou superior)
- npm (gerenciador de pacotes do Node.js)

## 🚀 Passos a Passo para Instalação

1. Clone o repositorio
```
https://github.com/JeronimoSantos/Mini-Projeto-04.git
```
2. Entre no dirétorio do projeto
```
cd src/
```
3. Instale as dependências
```
npm install ou npm i
```
4. Inicie o servidor
```
node server.js
```

## ➡ Endpoints da API

### Lista de Inovações Sustentáveis
- **Endpoint** `/inovacoes/inovacoesSustentaveis`
- **Método HTTP** GET
- **Descrição** Exibi uma lista com todas as inovaçoes da API.

### Parâmetros de Requisição
- `nome` Nome da Inovação Sustentável.
- `descrição` Explica mais detalhes sobre a Inovação.
- `benéficios` Explica das vantagens.

### Exemplo de Resposta
```
{
    "nome": "Telhado Verde",
    "descricao": "Sistema de vegetação sobre telhados para isolamento térmico e redução de CO₂.",
    "beneficio": "Reduz o calor urbano e melhora a qualidade do ar."
}
```
#

### Exibir Startups e Sites Sustentáveis
- **Endpoint** `/startups/startupsEcologicas`
- **Método HTTP** GET
- **Descrição** Exibir startups e sites com suas áreas de atuação.

### Parâmetros de Requisição
- `nome` Nome da Startup.
- `atuacao` Segmento da Startup.
- `site` Defini o site da Startup.

### Exemplo de Resposta
```
{
    "nome": "Re-ciclo",
    "atuacao": "Logística reversa e coleta de recicláveis por app.",
    "site": "https://www.reciclo.com"
}
```
#

### Formas de Apoiar 
- **Endpoint** `/comoAjudar/apoio`
- **Método HTTP** GET
- **Descrição** Mostra formas de ajudar com pequenas atitudes.

### Parâmetros de Requisição
- `acao` Exibi formas de apoiar.
- `plataforma` Onde podemos mostrar ou ir.

### Exemplo de Resposta
```
{
    "acao": "Compartilhar informações sobre ecotecnologias nas redes.",
    "plataforma": "Instagram, Twitter, LinkedIn"
}
```
