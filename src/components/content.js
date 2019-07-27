import PropTypes from "prop-types"
import React from "react"
import "./content.css"
const Content = ({ topic, text }) => (
  <div>
    <h2>{topic}</h2>
    <p>{text}</p>
  </div>
)

Content.propTypes = {
  topic: PropTypes.string,
  text: PropTypes.string,
}

Content.defaultProps = {
  content: ``,
}

export default Content
