import React from "react"

import Header from "./header"
import "./layout.css"
import Content from "./content"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let topic = data.allDataJson.edges[0].node.content.topic
  let text = data.allDataJson.edges[0].node.content.text

  return (
    <div>
      <Header siteTitle={title} date={date} />
      <Content topic={topic} text={text}></Content>
    </div>
  )
}
export default Layout
