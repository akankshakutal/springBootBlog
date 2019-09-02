import PropTypes from "prop-types"
import React from "react"
import "./codeSnippet.css"

const CodeSnippet = ({ code }) => {
  let data
  if (code) {
    data = <pre className="codeSnippet">{code}</pre>
  }
  return (
    <div>
      <pre>Example:</pre>
      {data}
    </div>
  )
}

CodeSnippet.propTypes = {
  code: PropTypes.string,
}

export default CodeSnippet
