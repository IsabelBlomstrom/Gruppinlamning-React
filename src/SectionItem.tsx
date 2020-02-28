import React from "react"

interface Props {
id: String
}

export default class SectionItem extends React.Component {
  constructor(props: Props) {
    super(props)
  }
  render() {

    const imageSrc = `../assets/${this.props.id}.png`
    return(
      <img src={imageSrc} alt="bild"/>
    )
  }
}