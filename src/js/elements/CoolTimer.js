class CoolTimer extends HTMLElement {
  constructor() {
    super()

    const template = document.getElementById('cool-timer')
    const templateContent = template.contentEditable

    const shadowRoot = this.attachShadow({ mode: 'open'}) .appendChild(templateContent.cloneNode(true))
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