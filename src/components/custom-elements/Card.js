// ES6 Class
class MeuCard extends HTMLElement {
  constructor() {
    super();

    var src = ''
    var title = ''
    var subtitle = ''
    var description = ''
    var buttonTitle = ''

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    //this._shadowRoot.innerHTML = '<img src="./src/img/logo.svg" width="100px">';

    this._shadowRoot.innerHTML = `
    <style type="text/css">
    @font-face {
      font-family: "Play", sans-serif;
      src: url("../fonts/Play-Regular.ttf");
    }
    .card {
      background-color: white;
      padding-bottom: 1px;
      border-radius: 10px;
      max-height: 350px;
      max-width: 500px;
      margin: 15px;
    }
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card-image img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: 100%;
      width: 100%;
    }
    
    .card-title {
      font-family: "Play", sans-serif;
      font-size: 20px;
      margin: 10px;
    }
    
    .card-subtitle {
      font-family: "Play", sans-serif;
      font-size: 15px;
      margin: 10px;
    }
    
    .card-description {
      font-family: "Play", sans-serif;
      font-size: 10px;
      margin: 10px;
    }
    
    .card-actions {
      font-family: "Play", sans-serif;
      font-size: 25px;
      margin: 10px; 
    }
    .card-button {
      margin: 10px;
    }
      
    .card-button button {
      background-color: #4caf50;
      display: inline-block;
      text-decoration: none;
      text-align: center;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 15px;
      cursor: pointer;
      color: white;
      border: none;
    }
    .card-button .green {
      background-color: white;
      color: black;
      border: 2px solid #4caf50;
    }
    .card-button .green:hover {
      background-color: #4caf50;
      color: white;
    }
    </style>

    <div class="card-container flex-container-center">
      <div class="card">
        <div class="card-image">
          <img src="./src/img/js.gif" alt="Imagem dinamica">
        </div>
        <div class="card-title">JavaScript</div>
        <div class="card-description">
          <p>Conheca um pouco mais sobre o JavaScript, uma linguagem de script super poderosa, simples, com diversos
            objetivos e que vai te fazer repensar sobre a web.</p>
        </div>
        <div class="card-button">
          <button class="green"> Acessar</button>
        </div>
      </div>
    </div>
    `;
  };

  src(val) {
    return this.src = val
  }
}

export default customElements.define('meu-card', MeuCard)