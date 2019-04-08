import { createElement } from '../lib.js'

const compare = players => {
  if (players[0] === players[1]) return ['', '']
  if (players[0] === '✊')
    return players[1] === '✂️' ? ['🏆', ''] : ['', '🏆']
  if (players[0] === '📄')
    return players[1] === '✊' ? ['🏆', ''] : ['', '🏆']
  if (players[0] === '✂️')
    return players[1] === '✊' ? ['', '🏆'] : ['🏆', '']
  return ['', '']
}

const Winner = props => {
  const { hands } = props
  const results = compare(hands)

  return createElement(
    'ul',
    null,
    ...results.map(item => createElement('li', null, item))
  )
}

export default Winner
