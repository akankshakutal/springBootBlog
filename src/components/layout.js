import React from "react"

import Header from "./header"
import Image from "./image"
import "./layout.css"

const Layout = () => {
  let updatedDate = new Date()
  let date = updatedDate.getDate()
  let month = updatedDate.getMonth()
  let year = updatedDate.getFullYear()
  let fullDate = year + " - " + month + " -  " + date
  return (
    <div>
      <Header siteTitle="Spring Boot" date={fullDate} />
      <Image></Image>
    </div>
  )
}

export default Layout
