import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '188',
    saturation: '26',
    lightness: '55',
    alpha: '1',
  }

  handleHueChange = event => {
    this.setState({ hue: event.target.value })
  }
  handleSaturationChange = event => {
    this.setState({ saturation: event.target.value })
  }
  handleLightnessChange = event => {
    this.setState({ lightness: event.target.value })
  }
  //  handleAlphaChange = event => {
  //   this.setState({ alpha: event.target.value })
  // }

  render() {
    return (
      <body2>
        <main>
          <section>
            <h1
              style={{
                color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            >
              Color Picker HSL
            </h1>
          </section>
          <section>
            <ul
              style={{
                color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            >
              <li>{this.state.hue}</li>
              <li>{this.state.saturation}</li>
              <li>{this.state.lightness}</li>
              <li>{this.state.alpha}</li>
            </ul>
            <ul>
              <li>
                <a
                  style={{
                    color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                  }}
                >
                  Hue
                </a>
                <input
                  type="range"
                  min="1"
                  max="360"
                  value={this.state.hue}
                  onChange={this.handleHueChange}
                ></input>
              </li>
              <li>
                <a
                  style={{
                    color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                  }}
                >
                  Saturation
                </a>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.saturation}
                  onChange={this.handleSaturationChange}
                ></input>
              </li>
              <li>
                <a
                  style={{
                    color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                  }}
                >
                  Lightness
                </a>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.lightness}
                  onChange={this.handleLightnessChange}
                ></input>
              </li>
              <li>
                <a
                  style={{
                    color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                  }}
                >
                  Alpha
                </a>
                <input
                  type="range"
                  min="0"
                  max="100"
                  // value={this.state.hue}
                  // onChange={this.handleHueChange}
                ></input>
              </li>
            </ul>
          </section>
          <section>
            <div2>
              <div3
                style={{
                  background: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                }}
              ></div3>
            </div2>
          </section>
        </main>
      </body2>
    )
  }
}

export default App
