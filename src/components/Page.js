import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Header from "./header"
import Content from "./content"

const Page = ({ data }) => {
  let date = data.node.date
  let title = data.node.title
  let content = data.node.content
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

Page.propTypes = {
  data: PropTypes.array,
}

Page.defaultProps = {
  data: [],
}

export default Page
