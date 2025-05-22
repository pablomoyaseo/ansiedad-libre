
import React from "react"
import { Link, useStaticQuery , graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      

        <StaticImage
          alt="Imagen de prueba"
          src="../images/prueba.jpg"
        />
      </Layout>
    </main>
  )
}


export const Head = () => <Seo title ="Home Page SEO"/>

export default IndexPage