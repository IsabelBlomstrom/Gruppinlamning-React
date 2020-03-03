import React, { CSSProperties } from "react"
import SectionItem from "./SectionItem"
import { AppEvent } from "./App"

interface Props {
  events: AppEvent[]
}

export default class MainContens extends React.Component<Props> {
  render() {
    return(
      <div style={mainStyle}>
        {this.props.events.map((event)=> <SectionItem event={event}/>)}
      </div>
    )
  }
}

const mainStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}