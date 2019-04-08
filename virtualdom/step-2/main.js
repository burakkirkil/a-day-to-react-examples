import App from './components/App.js'
import { render, createElement } from './lib.js'

const emojis = ['✊', '📄', '✂️']
const game = { hands: [] }

render(App(game), document.getElementById('root'))

document.addEventListener('keydown', () => {
  game.hands = [
    emojis[Math.floor(Math.random() * emojis.length)],
    emojis[Math.floor(Math.random() * emojis.length)],
  ]

  render(App(game), document.getElementById('root'))
})
