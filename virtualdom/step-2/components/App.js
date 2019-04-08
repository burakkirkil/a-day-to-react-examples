import { createElement } from '../lib.js'
import Winner from './Winner.js'

const App = props => {
  const { hands } = props

  return createElement(
    'div',
    { class: 'App' },
    createElement('h1', null, 'Rock Paper Scissors'),
    createElement(
      'ul',
      null,
      ...['🧔🏻', '🤖'].map(item =>
        createElement('li', null, item),
      ),
    ),
    createElement(
      'ul',
      null,
      ...hands.map(item => createElement('li', null, item)),
    ),
    Winner(props),
  )
}

export default App
