import React from "react"

import "./layout.css"
import Header from "./header"
import Content from "./content"
import Diagram from "./diagram"
import SubTopic from "./subTopic"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let content = data.allDataJson.edges[0].node.content
  console.log(content[1].subtopics[0])

  return (
    <div>
      <Header siteTitle={title} date={date} />
      <div className="main-container">
        <Content content={content[0]}></Content>
        <Content content={content[1]}></Content>
        <Diagram></Diagram>
        <SubTopic content={content[1].subtopics[0]}></SubTopic>
      </div>
    </div>
  )
}
export default Layout
