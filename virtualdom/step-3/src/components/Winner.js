import React from 'react'

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

  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default Winner
