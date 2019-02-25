import React, { Component } from 'react'
import Slider from './components/Slider'
import ColorPreview from './components/ColorPreview'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hue: 0,
      saturation: 50,
      lightness: 50,
      color: 'pink',
      remColors: []
    }
  }

  changeHue = e => {
    console.log(e.target)
    this.setState({ hue: e.target.value })
  }
  changeSaturation = e => {
    this.setState({ saturation: e.target.value })
  }
  changeLightness = e => {
    this.setState({ lightness: e.target.value })
  }

  rememberColor = () => {
    let color = this.state.remColors.concat(
      `hsl(${this.state.hue},${this.state.saturation}%, ${
        this.state.lightness
      }%)`
    )
    this.setState({ remColors: color })
  }
  render() {
    return (
      <>
        <Slider
          changeFunction={this.changeHue}
          colorAttributeValue={this.state.hue}
          name="hue"
          min={0}
          max={100}
        />
        <Slider
          changeFunction={this.changeSaturation}
          colorAttributeValue={this.state.saturation}
          name="saturation"
          min={0}
          max={100}
        />
        <Slider
          changeFunction={this.changeLightness}
          colorAttributeValue={this.state.lightness}
          name="lightness"
          min={0}
          max={100}
        />
        <ColorPreview
          hue={this.state.hue}
          saturation={this.state.saturation}
          lightness={this.state.lightness}
        />
        <p>{this.state.remColors}</p>
        <button onClick={this.rememberColor}>remember color</button>
      </>
    )
  }
}
