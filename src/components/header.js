import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle, date }) => (
  <header className="header">
    <div>
      <h1>{siteTitle}</h1>
      <div className="date">Updated at {date}</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  date: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
