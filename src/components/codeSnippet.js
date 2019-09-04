import PropTypes from "prop-types"
import React from "react"
import "./codeSnippet.css"

const CodeSnippet = ({ code }) => {
  let data
  if (code) {
    data = (
      <div>
        <pre>Example:</pre>
        <pre className="codeSnippet">{code}</pre>
      </div>
    )
  }
  return <div>{data}</div>
}

CodeSnippet.propTypes = {
  code: PropTypes.string,
}

export default CodeSnippet
