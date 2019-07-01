# Projeto Frontend [stack default vanilla]

> Informacoes do Projeto

- Gerenciador de Pacotes
  - Este projeto utiliza YArn como gerenciador padrão de projetos, ao invés de NPM. Certifique-se de ter o Yarn instalado caso queira utilizá-lo, senão prossiga normalmente utilizando o NPM.
- SASS/SCSS e Gulp
  - Optei por utilizar SASS no projeto com a extensão `.scss`, e o Gulp para fazer o `watch` e pre-processamento dos arquivos `.scss` para `.css`

---

> Tecnologias
> 
- Linguagens
  - HTML5
  - SASS e CSS
  - JavaScript
  
- Bibliotecas
  - Gulp
  - Gulp-sass
  - Node-sass
  - MDI - Material Design Icons

- Fontes
  - Play (sans-serif) - Google Fonts (local)

---

> Comandos/Rotinas

- Após clonar o repositório, rode o comando abaixo para restaurar os pacotes das dependências (será criada a pasta `node_modules` na raiz do repositório)

```bash
yarn install
```

- Certifique-se de ter o `gulp-cli` e `gulp` instalado globalmente antes de prosseguir

```bash
yarn global add gulp-cli gulp

npm install -g gulp-cli gulp
```

- Para que o Gulp possa fazer o `watch` dos arquivos SASS, abra um terminal na raiz do repositorio (se estiver no code, abra um terminal pressionando `CTRL+'`), e rode o seguinte comando:

```bash
gulp
```
  - A partir deste momento você poderá fazer alteracoes e criar arquivos SASS (`.scss`) tranquilamente que o Gulp irá identifica-los e fazer o processamento para CSS quando o arquivo for salvo.

- Para instalar novos dependencias utilize o comando (o primeiro para dependencias locais, o segundo para globais, e o terceiro para globais caso seja Linux):

```bash
yarn add nome_da_dependencia
npm install nome_da_dependencia

yarn global add nome_da_dependencia
npm install -g nome_da_dependencia

sudo yarn add nome_da_dependencia
sudo npm install -g nome_da_dependencia
```
