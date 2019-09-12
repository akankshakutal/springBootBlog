import React from "react"

import "./layout.css"
import Header from "./header"
import Content from "./content"
import Figure from "./figure"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let content = data.allDataJson.edges[0].node.content
  console.log(content[0].diagramPath)
  return (
    <div>
      <Header siteTitle={title} date={date} />
      <div className="main-container">
        <Content content={content[0]}></Content>
        <Figure figurePath={content[0].diagramPath}></Figure>
        <Content content={content[1]}></Content>
        <Content content={content[2]}></Content>
        <Figure figurePath={content[2].diagramPath}></Figure>
        <Content content={content[3]}></Content>
        <Content content={content[4]}></Content>
        <Content content={content[5]}></Content>
      </div>
    </div>
  )
}
export default Layout
