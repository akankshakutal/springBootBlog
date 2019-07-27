import React from "react"
import Layout from "../components/layout"

const IndexPage = ({ data }) => <Layout data={data}></Layout>

export const query = graphql`
  query main {
    allDataJson {
      edges {
        node {
          title
          date
          content {
            topic
            text
          }
        }
      }
    }
  }
`

export default IndexPage
