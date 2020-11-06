<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">background-jobs-redis</h1>
<p align="center">
  <b>Tarefas em background utilizando Node.js, Redis e Sentry</b></br>
  <sub>Este é um repositório com um pequeno projeto de Tarefas em background utilizando Node.js e Redis desenvolvido no Bootcamp de NodeJS da plataforma Digital Innovation One<a href='http://digitalinnovationone.one'>(DIO)</a>. Adicionalmente, foi implementado o monitoramento de erros (Exceptions) utilizando o Sentry.io;<sub>
</p>

<br />


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Para rodar a aplicação](#-para-rodar-a-aplicao)
	* [Instale as dependências:](#instale-as-dependncias)
	* [Instale e configure o Redis OU crie e suba um Docker assim:](#instale-e-configure-o-redis-ou-crie-e-suba-um-docker-assim)
	* [Preencha/Substitua as suas variáveis de ambiente no arquivo .env:](#preenchasubstitua-as-suas-variveis-de-ambiente-no-arquivo-env)
	* [Rode a thread da fila:](#rode-a-thread-da-fila)
	* [Rode a thread principal (Express):](#rode-a-thread-principal-express)
* [➤ Para utilizar o Sentry](#-para-utilizar-o-sentry)
	* [Crie uma conta gratuita no Sentry.io](#crie-uma-conta-gratuita-no-sentryio)
	* [Crie dois projetos no site e obtenha seus DSN](#crie-dois-projetos-no-site-e-obtenha-seus-dsn)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#para-rodar-a-aplicao)

## ➤ Para rodar a aplicação

### Instale as dependências:
<code>npm install</code>

### Instale e configure o Redis OU crie e suba um Docker assim:
<code>docker run --name redis -p 6379:6379 -d -t redis:alpine</code>

### Preencha/Substitua as suas variáveis de ambiente no arquivo .env:
<code>copie ou renomeie o arquivo .env.example para .env</code>

### Rode a thread da fila:
<code>npm run queue</code>

### Rode a thread principal (Express):
<code>npm start</code>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#para-utilizar-o-sentry)

## ➤ Para utilizar o Sentry

### Crie uma conta gratuita no Sentry.io
Acesse o site http://sentry.io e crie/acesse sua conta

### Crie dois projetos no site e obtenha seus DSN
- Crie um projeto para Express e preencha o DSN na váriavel SENTRY_SERVER_DSN do seu arquivo .env
- Crie um projeto para NodeJS e preencha o DSN na váriavel SENTRY_QUEUE_DSN do seu arquivo .env


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#contributors)

## ➤ Contributors
	

| [<img alt="João Trepichio" src="https://avatars1.githubusercontent.com/u/11396817?s=60&v=4" width="100">](https://trepichio.github.io) |
|:--------------------------------------------------:|
| [João Trepichio](https://trepichio.github.io)    |
| [trepichio@gmail.com](mailto:trepichio@gmail.com) |
| 🚀                                               |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).