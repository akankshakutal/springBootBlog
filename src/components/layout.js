import React from "react"

import "./layout.css"
import Header from "./header"
import Content from "./content"
import Image from "./image"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title
  let content = data.allDataJson.edges[0].node.content
  console.log(content)

  return (
    <div>
      <Header siteTitle={title} date={date} />
      <Content content={content[0]}></Content>
      <Content content={content[1]}></Content>
      <Image></Image>
    </div>
  )
}
export default Layout
