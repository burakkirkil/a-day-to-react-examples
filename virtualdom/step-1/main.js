const createElement = (
  nodeName,
  attributes,
  ...children
) => {
  const element = document.createElement(nodeName)

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(
        document.createTextNode(child)
      )
    } else {
      element.appendChild(child)
    }
  })

  return element
}

const App = time => {
  return createElement(
    'h1',
    { style: 'color: tomato' },
    `Elapsed Time = ${time}s`,
  )
}

let tick = 0
setInterval(() => {
  document.body.innerHTML = ''
  document.body.appendChild(App(tick))

  console.clear()
  console.log(App(tick))

  tick++
}, 1000)


