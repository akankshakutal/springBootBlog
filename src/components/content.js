import PropTypes from "prop-types"
import React from "react"
import "./content.css"
const Content = ({ content }) => {
  console.log(content)

  return (
    <div>
      <h2>{content.topic}</h2>
      <p>{content.text}</p>
    </div>
  )
}

Content.propTypes = {
  content: PropTypes.object,
}

Content.defaultProps = {
  content: {},
}

export default Content
