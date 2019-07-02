class CoolTimer extends HTMLElement {
  constructor() {
    super()

    const template = document.createElement('div').id('cool-timer')

    const shadowRoot = template.attachShadow({ mode: 'open'})
    
    shadowRoot.appendChild(template.cloneNode(true))
  }

  connectedCallback() {
    const timerDisplay = this.shadowRoot.getElementById('timer')
    //
    let elapsedSeconds = 0

    this.timer = setInterval(() => {
      elapsedSeconds++
      timerDisplay.innerHTML = elapsedSeconds
    }, 1000)
  }

  disconnectedCallback () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}

customElements.define('cool-timer', CoolTimer)