import React, { Component } from 'react'

class Fetcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
        })
      })
  }

  render() {
    return this.props.children(this.state)
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Fetcher url="https://api.github.com/users/burakkirkil">
        {({ data: user }) => {
          return (
            <div>
              <h1>github.com/{user && user.login}</h1>
              {user && (
                <img
                  src={user.avatar_url + '&s=50'}
                  alt=""
                />
              )}
            </div>
          )
        }}
      </Fetcher>

      <Fetcher url="https://api.github.com/users/burakkirkil/followers">
        {({ data: followers }) => {
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
        }}
      </Fetcher>
    </React.Fragment>
  )
}

export default App
