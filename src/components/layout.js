import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ data }) => {
  let date = data.allDataJson.edges[0].node.date
  let title = data.allDataJson.edges[0].node.title

  return (
    <div>
      <Header siteTitle={title} date={date} />
    </div>
  )
}
export default Layout
