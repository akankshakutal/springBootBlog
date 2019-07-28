import React from "react"
import Layout from "../components/layout"

const IndexPage = ({ data }) => <Layout data={data}></Layout>

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          title
          date
          content {
            text
            topic
            subtopics {
              text
              topic
            }
          }
        }
      }
    }
  }
`

export default IndexPage
