import React, { Component, Fragment } from 'react'
import Winner from './Winner'

const emojis = ['✊', '📄', '✂️']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hands: [],
    }

    this.nextRound = this.nextRound.bind(this)
  }

  nextRound() {
    this.setState({
      hands: [
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
      ],
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.nextRound)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.nextRound)
  }

  render() {
    const { hands } = this.state

    return (
      <Fragment>
        <h1>Rock Paper Scissors</h1>
        <ul>
          {['🧔🏻', '🤖'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {hands.map((hand, index) => (
            <li key={index}>{hand}</li>
          ))}
        </ul>
        <Winner hands={hands} />
      </Fragment>
    )
  }
}

export default App
