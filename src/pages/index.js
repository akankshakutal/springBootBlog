import React from "react"
import Layout from "../components/layout"

const IndexPage = ({ data }) => <Layout data={data}></Layout>

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          title
          date
        }
      }
    }
  }
`

export default IndexPage
