import React, { Component, Fragment } from 'react'
import Winner from './Winner'

const emojis = ['✊', '📄', '✂️']

class App extends Component {
  nextRound() {
    // https://reactjs.org/docs/react-component.html#setstate
    this.setState({
      hands: [
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
      ],
    })
  }

  /********************************************************
   * MOUNTING

   * constructor()
   * static getDerivedStateFromProps()
   * render()
   * componentDidMount()

     Legacy Methods

   * UNSAFE_componentWillMount

   *******************************************************/

  // https://reactjs.org/docs/react-component.html#constructor
  constructor(props) {
    console.log('constructor')
    super(props)

    this.state = {
      hands: [],
    }

    this.nextRound = this.nextRound.bind(this)
  }

  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    console.log('componentDidMount')
    document.addEventListener('keydown', this.nextRound)
  }

  // https://reactjs.org/docs/react-component.html#unsafe_componentwillmount
  // UNSAFE_componentWillMount() {}

  /********************************************************
   * UNMOUNTING
   *******************************************************/

  // https://reactjs.org/docs/react-component.html#componentwillunmount
  componentWillUnmount() {
    console.log('componentWillUnmount')
    document.removeEventListener('keydown', this.nextRound)
  }

  /********************************************************
   * UPDATING

   * constructor()
   * static getDerivedStateFromProps()
   * render()
   * componentDidMount()

     Legacy Methods

   * UNSAFE_componentWillUpdate()
   * UNSAFE_componentWillReceiveProps()

   *******************************************************/

  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)
    return null
  }

  // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'getSnapshotBeforeUpdate',
      prevProps,
      prevState,
    )
    return null
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componentDidUpdate',
      prevProps,
      prevState,
      snapshot,
    )
  }

  // https://reactjs.org/docs/react-component.html#shouldcomponentupdate
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('getDerivedStateFromError', nextProps, nextState)
    return true
  }

  // https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate
  // UNSAFE_componentWillUpdate(nextProps, nextState) {}

  // https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
  // UNSAFE_componentWillReceiveProps(nextProps) {}

  /********************************************************
   * ERROR BOUNDARIES
   *******************************************************/

  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror
  static getDerivedStateFromError(error) {
    // console.log('getDerivedStateFromError', error)
  }

  componentDidCatch(error, info) {
    // console.log('componentDidCatch', error, info)
  }

  // https://reactjs.org/docs/react-component.html#render
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

// https://reactjs.org/docs/react-component.html#defaultprops
App.defaultProps = {}

// https://reactjs.org/docs/react-component.html#displayname
App.displayName = 'FancyApp'

export default App
