import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GravityFormForm from "gatsby-gravityforms-component"

const IndexPage = () => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query {
        allGfForm {
          edges {
            node {
              formId
              slug
              apiURL
              descriptionPlacement
              formFields {
                id
                label
                description
                descriptionPlacement
                type
                choices
                content
                errorMessage
                inputMaskValue
                isRequired
                visibility
                cssClass
                placeholder
                size
                defaultValue
                maxLength
              }
              button {
                text
              }
              confirmations {
                message
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <GravityFormForm
          id={2}
          formData={allGfForm}
          presetValues={{ input_1: "special_value" }}
          lambda={"http://localhost:9000/sendGfFormData"}
        />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
