import PropTypes from "prop-types"
import React from "react"
import "./subTopic.css"

const SubTopic = ({ content }) => {
  return (
    <div className="container">
      <h3>{content.topic}</h3>
      <pre>{content.text}</pre>
    </div>
  )
}

SubTopic.propTypes = {
  content: PropTypes.object,
}

SubTopic.defaultProps = {
  content: {},
}

export default SubTopic
