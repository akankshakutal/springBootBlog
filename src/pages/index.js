import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allDataJson {
          edges {
            node {
              title
              date
              content {
                text
                topic
                diagramPath
                subtopics {
                  text
                  topic
                  codeSnippet
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data}></Layout>}
  />
)

export default IndexPage
