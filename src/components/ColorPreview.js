import React, { Component } from 'react'

class ColorPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section
        id="rectangle"
        style={{
          backgroundColor: `hsl(${this.props.hue},${this.props.saturation}%, ${
            this.props.lightness
          }%)`
        }}
      >
        hsl({this.props.hue},{this.props.saturation}%,
        {this.props.lightness}%)
      </section>
    )
  }
}

export default ColorPreview
