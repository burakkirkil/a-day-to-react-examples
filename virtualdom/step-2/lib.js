// Create virtual node
export function createElement(nodeName, attributes, ...children) {
  return {
    nodeName,
    attributes,
    children,
  }
}

// Inject created DOM elements to page
let currentApp
export function render(component, root) {
  // debug
  console.clear()
  console.log(component)
  console.log(convertToDOM(component))
  // debug

  const newApp = convertToDOM(component)
  currentApp
    ? root.replaceChild(newApp, currentApp)
    : root.appendChild(newApp)

  currentApp = newApp
}

// Create real DOM elements from virtual nodes
function convertToDOM(virtualNode) {
  let element

  const { nodeName, attributes, children } = virtualNode

  if (typeof virtualNode === 'string')
    return document.createTextNode(virtualNode)

  element = document.createElement(nodeName)

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  ;(children || []).forEach(child => {
    element.appendChild(convertToDOM(child))
  })

  return element
}
