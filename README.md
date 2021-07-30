[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">

  <h3 align="center">Warren Transactions</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pre-requisitos">Pré Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
      <li><a href="#observation">Observações</a></li>
      <ul>
        <li><a href="#Melhor forma para futuras implementações">Melhorias para futuras implementações</a></li>
      </ul>
    <li><a href="#Contato">Contato</a></li>
  </ol>
</details>

<!-- SOBRE O PROJETO -->
## Sobre o projeto

O projeto foi criado com o intúito de melhor uma visualização de transações. Os dados vem de uma API fictícia criada pela Warren Brasil.
Optei por não fazer um layout tão apelativo visualmente e dei mais foco a funcionalidades e lógicas.

- É possível filtrar transações pelo nome e seu status.
- Possui a versão em Português-BR e Inglês com suas respectivas coversões de moedas.
- Possui layout responsivo, tanto para mobile quanto para desktop.

<!-- CONSTRUIDO COM -->
### Construído com

- [Angular](https://angular.io/)
- [Less](https://lesscss.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Mock](https://mockapi.io/)
- [Cypress](https://www.cypress.io/)
- [Angular-Toastr](https://www.npmjs.com/package/angular-toastr)

<!-- COMEÇANDO -->
## Começando

<!-- PRE REQUISITOS -->
### Pre Requisitos

- npm
  ```sh
  npm install npm@latest -g
  ```
<!-- INSTALAÇÃO -->
### Instalação

1. Clone o repósitorio na sua máquina
   ```sh
   git clone https://github.com/HenriquePetrelli/transactions.git
   ```
2. Instalar pacotes NPM
   ```sh
   npm install
   ```

<!-- Uso -->
## Uso

- Rodando o projeto localmente
  ```sh
  ng serve
  ```
- Rodando o testes de ponta a ponta

  ```sh
  npm run cypress:open

  ```

- Acessar Projeto em Produção
  [Netlify](https://transactions-warren.netlify.app/)

  <!-- OBSERVAÇÃO -->
## Observação
* Projeto onde tive primeiro contato com teste de ponta a ponta (e2e), fiz uso do framework Cypress, que possui uma documentação bem organizada e que me ajudou muito no desenvolvimento.
* Optei por incluir no projeto 2 idiomas, pois a api da Warren Brasil retorna dados com diferentes idiomas no mesmo Json.
* Apesar de não ser a forma mais correta para uma futura implementação, optei por incluir uma rotas de Mock que criei com as informações traduzidas de acordo com a linguagem passada por parâmetro.

### Melhorias para futuras implementações
* Criar um enpoint, que chamado passando o parâmetro do idioma selecionado pelo usuário em tela, retornará um Json com as informações tanto de transações como labels, formulários, entre outros elementos usados em tela. Para que com isso seja possível a construção de uma aplicação 100% dinâmica se baseando no idioma.

<!-- CONTATO -->
## Contato

Henrique Petrelli - henriquepetrelli96@gmail.com

Link do Projeto: [https://github.com/HenriquePetrelli/transactions](https://github.com/HenriquePetrelli/transactions)

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/henrique-petrelli/
