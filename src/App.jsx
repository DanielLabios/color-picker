import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <body2>
        <main>
          <section>
            <h1>Color Picker HSL</h1>
          </section>
          <section>
            <ul>
              <li>HN</li>
              <li>SN</li>
              <li>LN</li>
              <li>AN</li>
            </ul>
            <ul>
              <li>
                <a>Hue</a>
                <input type="range" min="1" max="360"></input>
              </li>
              <li>
                <a>Saturation</a>
                <input type="range" min="0" max="100"></input>
              </li>
              <li>
                <a>Lightness</a>
                <input type="range" min="0" max="100"></input>
              </li>
              <li>
                <a>Alpha</a>
                <input type="range" min="0" max="100"></input>
              </li>
            </ul>
          </section>
          <section>
            <div2>
              <div3></div3>
            </div2>
          </section>
        </main>
      </body2>
    )
  }
}

export default App
