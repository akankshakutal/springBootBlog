import PropTypes from "prop-types"
import React from "react"
import "./content.css"
import SubTopic from "./subTopic"
import Figure from "./figure"

const Content = ({ content }) => {
  let subtopics
  const diagram = content.diagramPath ? (
    <Figure figurePath={content.diagramPath}></Figure>
  ) : null
  if (content.subtopics) {
    subtopics = content.subtopics.map(subtopic => {
      return <SubTopic content={subtopic}></SubTopic>
    })
  }
  return (
    <div>
      <h2>{content.topic}</h2>
      <pre>{content.text}</pre>
      <div>{diagram}</div>
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
