import React, { useState } from 'react'

const useFetcher = ({ url }) => {
  const [data, setData] = useState(null)

  fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })

  return data
}

const App = () => {
  const user = useFetcher({
    url: 'https://api.github.com/users/burakkirkil',
  })

  const followers = useFetcher({
    url:
      'https://api.github.com/users/burakkirkil/followers',
  })

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

export default App
