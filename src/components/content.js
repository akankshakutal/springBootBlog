import PropTypes from "prop-types"
import React from "react"
import "./content.css"
const Content = ({ content }) => {
  return (
    <div>
      <h2>{content.topic}</h2>
      <pre>{content.text}</pre>
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
