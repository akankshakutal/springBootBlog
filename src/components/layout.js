import React from "react"

import "./layout.css"
import Page from "./Page"

const Layout = ({ data }) => {
  return <Page data={data.allDataJson.edges[0]}></Page>
}
export default Layout
