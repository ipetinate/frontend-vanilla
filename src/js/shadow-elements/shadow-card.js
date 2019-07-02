const cardContainer = document.createElement('div').classList.add('card-container')
const card = document.createElement('div').classList.add('container')

const shadowRoot = header.attachShadow({ mode: 'open'})

shadowRoot.appendChild(card.clondeNode(true))

