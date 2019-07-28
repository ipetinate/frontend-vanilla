class Login extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot.attachSadow({mode: 'open'})
    this.shadowRoot.innerHTML = `html here`
  }
}

customElements.define('x-login', Login)