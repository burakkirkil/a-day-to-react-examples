import React, { Component } from 'react'

// High Order Component
const withFetch = url => Wrapped => {
  return class Wrapper extends Component {
    constructor(props) {
      super(props)

      this.state = {
        data: null,
      }
    }

    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            data,
          })
        })
    }

    render() {
      return <Wrapped {...this.state} />
    }
  }
}

const User = props => {
  const { data: user } = props
  return (
    <div>
      <h1>github.com/{user && user.login}</h1>
      {user && (
        <img src={user.avatar_url + '&s=50'} alt="" />
      )}
    </div>
  )
}

const Followers = props => {
  const { data: followers } = props
  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers &&
          followers.map(follower => (
            <li key={follower.id}>
              <img
                src={follower.avatar_url + '&s=50'}
                alt=""
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

const WrappedUser = withFetch(
  'https://api.github.com/users/burakkirkil',
)(User)

const WrappedFollowers = withFetch(
  'https://api.github.com/users/burakkirkil/followers',
)(Followers)

const App = () => {
  return (
    <React.Fragment>
      <WrappedUser />
      <WrappedFollowers />
    </React.Fragment>
  )
}

export default App
