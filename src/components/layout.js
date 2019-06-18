import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = () => {
  let updatedDate = new Date()
  let date = updatedDate.getDate()
  let month = updatedDate.getMonth()
  let year = updatedDate.getFullYear()
  let fullDate = year + " - " + month + " -  " + date
  return <Header siteTitle="Spring Boot" date={fullDate} />
}

export default Layout
