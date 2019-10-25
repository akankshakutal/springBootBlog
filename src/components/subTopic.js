import PropTypes from "prop-types"
import React from "react"
import "./subTopic.css"
import CodeSnippet from "./codeSnippet"

const SubTopic = ({ content }) => {
  let subtopics
  if (content.subtopics) {
    subtopics = content.subtopics.map(subtopic => {
      return <SubTopic content={subtopic}></SubTopic>
    })
  }
  return (
    <div className="container">
      <h4>{content.topic}</h4>
      <pre>{content.text}</pre>
      <CodeSnippet code={content.codeSnippet}></CodeSnippet>
      {subtopics}
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
