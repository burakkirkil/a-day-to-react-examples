import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      followers: null,
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/burakkirkil')
      .then(res => res.json())
      .then(user => {
        this.setState({
          user,
        })
      })

    fetch(
      'https://api.github.com/users/burakkirkil/followers',
    )
      .then(res => res.json())
      .then(followers => {
        this.setState({
          followers,
        })
      })
  }

  render() {
    const { user, followers } = this.state

    return (
      <React.Fragment>
        <div>
          <h1>github.com/{user && user.login}</h1>
          {user && (
            <img src={user.avatar_url + '&s=50'} alt="" />
          )}
        </div>

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
      </React.Fragment>
    )
  }
}

export default App
