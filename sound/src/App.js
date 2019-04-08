import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const context = new AudioContext()

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
    }
  }

  componentDidMount() {
    const { frequency, letter } = this.props

    document.addEventListener('keydown', e => {
      if (e.key === letter) {
        this.handlePlay()
      }
    })

    document.addEventListener('keyup', e => {
      if (e.key === letter) {
        this.handleStop()
      }
    })
  }

  handlePlay() {

    this.oscillator = context.createOscillator()
    this.gainNode = context.createGain()
    this.oscillator.connect(this.gainNode)
    this.oscillator.frequency.value = this.props.frequency
    this.gainNode.connect(context.destination)
    this.oscillator.start()
    this.gainNode.gain.linearRampToValueAtTime(
      .2,
      context.currentTime + .2,
    )
    this.gainNode.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + 1.2,
    )

    this.setState({ isPlaying: true })
  }

  handleStop() {
    this.setState({ isPlaying: false })
  }

  render() {
    const { frequency, letter } = this.props
    const { isPlaying } = this.state

    const className = `tone ${isPlaying && 'hover'}`

    return (
      <div
        className={className}
        onMouseOver={this.handlePlay.bind(this)}
        onMouseOut={this.handleStop.bind(this)}
      >
        {`${frequency} - ${letter}`}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Note frequency={246} letter="q" />
          <Note frequency={260} letter="a" />
          <Note frequency={277} letter="w" />
          <Note frequency={293} letter="s" />
          <Note frequency={311} letter="e" />
          <Note frequency={329} letter="d" />
          <Note frequency={349} letter="f" />
          <Note frequency={370} letter="t" />
          <Note frequency={392} letter="g" />
          <Note frequency={415} letter="y" />
          <Note frequency={440} letter="h" />
          <Note frequency={466} letter="u" />
          <Note frequency={493} letter="j" />
          <Note frequency={520} letter="k" />
          <Note frequency={1972} letter="l" />
        </header>
      </div>
    )
  }
}

export default App
