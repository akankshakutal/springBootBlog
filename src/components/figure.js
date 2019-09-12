import PropTypes from "prop-types"
import React from "react"
import "./figure.css"

const Figure = ({ figurePath }) => (
  <div className="figureContainer">
    <img src={figurePath} alt="springAOP" className="figure"></img>
    <h4 className="label">AOP</h4>
  </div>
)

Figure.propTypes = {
  figurePath: PropTypes.string,
}

export default Figure
