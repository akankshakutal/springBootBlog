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
                diagramPath
                text
                topic
                subtopics {
                  codeSnippet
                  text
                  topic
                  subtopics {
                    codeSnippet
                    text
                    topic
                  }
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
