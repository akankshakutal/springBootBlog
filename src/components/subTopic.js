import PropTypes from "prop-types"
import React from "react"
import "./subTopic.css"
import CodeSnippet from "./codeSnippet"

const SubTopic = ({ content }) => {
  return (
    <div className="container">
      <h4>{content.topic}</h4>
      <pre>{content.text}</pre>
      <CodeSnippet code={content.codeSnippet}></CodeSnippet>
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
