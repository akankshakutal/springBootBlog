import React from "react"

import "./layout.css"
import Header from "./header"
import Content from "./content"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let content = data.allDataJson.edges[0].node.content
  let contentElement = content.map(data => {
    return <Content content={data}></Content>
  })

  return (
    <div>
      <Header siteTitle={title} date={date} />
      <div className="main-container">{contentElement}</div>
    </div>
  )
}
export default Layout
