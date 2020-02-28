import React from "react"
import SectionItem from "./SectionItem"
import { AppEvent } from "./App"

interface Props {
  events: AppEvent[]
}

export default class MainContens extends React.Component<Props> {
  render() {
    return(
      <div>
        {this.props.events.map((event)=> <SectionItem event={event}/>)}
      </div>
    )
  }
}