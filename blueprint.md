{{ template:title }}
{{ template:description }}
{{ template:toc }}

## Para rodar a aplicação

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

{{ template:contributors }}
{{ template:license }}