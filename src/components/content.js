import PropTypes from "prop-types"
import React from "react"
import "./content.css"
import SubTopic from "./subTopic"

const Content = ({ content }) => {
  let subtopics = content.subtopics.map(subtopic => {
    return <SubTopic content={subtopic}></SubTopic>
  })
  return (
    <div>
      <h2>{content.topic}</h2>
      <pre>{content.text}</pre>
      {subtopics}
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
