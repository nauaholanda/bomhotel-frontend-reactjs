<h1 align="center" >
  <img height="100" src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/logo_orange.png" />
</h1>

<h1 align="center">Bom Hotel - Front-end</h1>
<p align="center">Aplicação single page feita com ReactJS e Primereact.</p>
<p align="center">Observação: Essa aplicação utiliza Contexts para compartilhar informações entre páginas, ou seja, cuidado com o F5.</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=ReactJS&message=v.17.0.2&color=blue&style=flat&logo=" />
  <img src="https://img.shields.io/static/v1?label=Primereact&message=v.6.6.0&color=blue&style=flat&logo=" />
  <img src="https://img.shields.io/static/v1?label=npm&message=v.8.11.0&color=blue&style=flat&logo=" />
</p>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#telas-disponíveis">Telas disponíveis</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#pré-requisitos">Pré-requisitos</a> • 
 <a href="#autor">Autor</a>
</p>

<h2>Features</h2>
<ul>
  <li>Cadastro de usuário e Login</li>
  <li>Cadastro, exclusão, atualização, pesquisa e reserva de acomodações</li>
</ul>

<h2>Telas Disponíveis</h2>
<h3>Home</h3>
<p>Exibe um carrossel animado com 3 imagens e uma seção de novidade, onde exibe as 5 últimas acomodações adicionadas ao sistema.</p>
<p>Pode ser acessada ao clicar na logo do menu.</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/home_page.png" />
</p>

<h3>Login</h3>
<p>Exibe um formulário onde o usuário pode preencher com nome de usuário e senha para acessar o sistema, além de ter a possibilidade de acessar a tela de cadastro de usuário ou voltar para tela anterior. </p>
<p>Pode ser acessada ao clicar na opção de "Fazer Login" no menu.</p>
<p>(Observação: para acessar o sistema como administrador basta preencher os dois campos com "admin" e clicar em "Fazer Login")</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/login_page.jpeg" />
</p>

<h3>Cadastro de usuário</h3>
<p>Exibe um formulário onde o usuário pode preencher com nome, nome de usuário e senha para crair uma conta no sistema, além de ter a possibilidade de acessar a tela de login ou voltar para tela anterior.</p>
<p>Pode ser acessada ao clicar no link ao final da tela de login.</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/registration_page.jpeg" />
</p>

<h3>Pesquisa de acomodações</h3>
<p>Exibe, inicialmente, todas as acomodações cadastradas no sistema e permite pesquisa-las por País, Estado, Cidade e quantidade de pessoas que acomoda.</p>
<p>Pode ser acessada ao clicar na opção de "Acomodações" no menu.</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/search_accommodation_page.jpeg" />
</p>


<h3>Detalhes de uma acomodação</h3>
<p>Exibe todas as informações de uma acomodação, permite que usuários Clientes façam reservas e/ou que o Administrador realize edições ou exclua a acomodação do sistema.</p>
<p>Pode ser acessada ao clicar em "Ver Detalhes" em um card de acomodação.</p>
<p align="center">
  Tela para Administrador
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/accommodation_details_admin.jpeg" />
  Tela para Cliente
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/accommodation_details_customer.jpeg" />
</p>

<h3>Criação de acomodação</h3>
<p>Exibe um formulário vazio para queo usuário Administrador possa cadastrar uma nova acomodação no sistema.</p>
<p>Pode ser acessada apenas pelo usuário Administrador, ao clicar na opção "Nova acomodação" no menu.</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/new_accommodation_page.jpeg" />
</p>

<h3>Reservas do usuário</h3>
<p>Exibe todas as reservas feitas pelo usuário logado.</p>
<p>Pode ser acessada apenas por usuários Clientes, ao clicar na opção "Minhas reservas" no menu.</p>
<p align="center">
  <img src="https://github.com/nauaholanda/bomhotel-frontend-reactjs/blob/main/src/images/readme/my_bookings_page.jpeg" />
</p>

<h2>Tecnologias</h2>
<ul>
  <li><a href="https://reactjs.org/">ReactJS</a></li>
  <li><a href="https://www.primefaces.org/primereact/">Primereact</a></li>
  <li><a href="https://www.javascript.com/">JavaScript</a></li>
</ul>

<h2>Pré-requisitos</h2>
<p>Para instalar e executar a aplicação serão necessárias duas ferramentas: <a href="https://git-scm.com/">Git</a> e <a href="https://nodejs.org/en/">Node.js</a>.</p>

<h4>Passo a passo para instalação e execução:</h4>

```bash
# Clone este repositório
$ git clone <https://github.com/nauaholanda/bomhotel-frontend-reactjs>

# Acesse a pasta do projeto no terminal/cmd
$ cd bomhotel-frontend-reactjs

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

<p>Observação: para pleno funcionamento será necessário iniciar o back-end da aplicação, disponível neste link: https://github.com/nauaholanda/bomhotel-backend-springboot</p>
<h2>Autor</h2>

<p> Feito com carinho e empenho por Nauã Holanda. </p>
<p> Contatos: 
  <a href="https://www.linkedin.com/in/nauaholanda/"><img src="https://img.shields.io/badge/-Nauã-blue?style=flat-square&logo=Linkedin&logoColor=white" /> </a> 
  <img src="https://img.shields.io/badge/-naua.holanda@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:naua.holanda@gmail.com" />
</p>
