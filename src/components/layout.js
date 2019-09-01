import React from "react"

import "./layout.css"
import Header from "./header"
import Content from "./content"
import Diagram from "./diagram"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let content = data.allDataJson.edges[0].node.content

  return (
    <div>
      <Header siteTitle={title} date={date} />
      <div className="main-container">
        <Content content={content[0]}></Content>
        <Diagram></Diagram>
        <Content content={content[1]}></Content>
      </div>
    </div>
  )
}
export default Layout
