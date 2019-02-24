import React, { Component } from 'react'

class Slider extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section>
        <input
          type="range"
          name="volume"
          value={this.props.colorAttributeValue}
          onChange={this.props.changeFunction}
          min={this.props.min}
          max={this.props.max}
        />
        <label>{this.props.name}</label>
      </section>
    )
  }
}

export default Slider
