import PropTypes from "prop-types"
import React from "react"
import "./subTopic.css"

const SubTopic = ({ content }) => {
  return (
    <div className="container">
      <h4>{content.topic}</h4>
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
