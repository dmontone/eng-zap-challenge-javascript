
# Zap Challenge

Este é o desafio de código do Grupo ZAP desenvolvido por mim, [Denis Montone](http://github.com/dmontone). =)  
  
Foi feito em React, partindo do [Create React App](https://github.com/facebook/create-react-app). Para os estilos, utilizei o [Styled Components](https://styled-components.com/).  
Os testes são feitos usando o [Testing Library](https://testing-library.com/), especificamente o **/react** e o **/react-hooks**, além do **/extend-dom** para os métodos de assert. O build final pode ser feito em uma imagem [Docker](http://www.docker.com).  

### Ambiente de desenvolvimento

-  Para iniciar um ambiente de desenvolvimento é necessário ter o [Node](www.nodejs.org) instalado no seu ambiente.  
- Para instalar as dependências do projeto, rode o comando `npm i`  
- Então o comando `npm start` iniciará o processo de bundle do projeto. Ao fim, uma aba no seu navegador padrão será aberta no endereço e porta **http://localhost:3000**.  
*Se a porta estiver ocupada, o terminal irá perguntar se deseja usar a próxima porta disponível.*  
  
### Testes
Para rodar os testes sem relatórios de cobertura (indicado para processos de deploy), use o comando `npm run test:ci`  
Para rodar os testes com relatórios de cobertura (indicado para ambiente de desenvolvimento), use o comando `npm run test`  
  
### Deploy
Para o deploy uma imagem Docker é configurada pelo arquivo Dockerfile, na raiz do repositório. Para construir a imagem final são utilizadas duas imagens  (multi-stage), para o bundle dos arquivos a imagem é a **node:13-alpine** e para exposição dos artefatos a imagem é **nginx:stable-alpine**.  
Para criar a imagem, use o comando `npm run docker:build`. Este comando gerará uma imagem com a tag **zap:challenge**.  
Após a criação, a validação e testes da versão para deploy podem ser feitos rodando a imagem com o comando `docker:run`. Isso exporá o conteúdo da imagem para fora do Docker na porta `1337`, portanto visivel do seu navegador com o endereço **http://localhost:1337**.  