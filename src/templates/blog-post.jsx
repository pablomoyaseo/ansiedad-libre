import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const BlogPost = ( {data}) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <h1>{frontmatter.title}</h1>
      <div>{body}</div>
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />


export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;



export default BlogPost