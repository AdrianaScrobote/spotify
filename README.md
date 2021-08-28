# Spotify

Foi criada uma API backend, com endpoints que consomem dados da API do Spotify.

### Como rodar localmente?

1. Faça o clone deste projeto no seu computador.
2. Certifique-se de ter o npm instalado em sua máquina (comando: npm -v).
3. Garanta que o Node está instalado em sua máquina (comando node -v)
4. No diretório principal do projeto clonado em sua máquina, execute o comando para instalar as dependências do projeto: npm i
5. Execute o comando para iniciar o servidor localmente (irá utilizar a porta 3333):
   npm run start-dev
6. Após o servidor estar rodando, pode-se fazer requisições no endereço:
   http://localhost:3333/

### Informações importantes sobre a API:

- A API tem uma documentação técnica disponível no link: http://localhost:3333/docs/
- Para consultar exemplos de requests e responses pode ser usada a documentação técnica informada. No link da documentação, também é possível testar requisições.

### Endpoints criados:

- Método: post. Endpoint: /spotify/authorize
  Descrição: realiza a autenticação da API com o Spotify.

---

- Método: get. Endpoint: /spotify/search?type=type&search=search
  Descrição: retorna dados da busca realizada.

---

- Método: get. Endpoint: /spotify/artist/:id
  Descrição: retorna dados de um artista.

---

- Método: get. Endpoint: /spotify/artist-albums/:id
  Descrição: retorna dados de albums de um artista.

---

### Como rodar os testes?

Para executar os testes unitários é necessário executar o comando:
npm run test

#END
