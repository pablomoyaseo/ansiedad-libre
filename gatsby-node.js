const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 1. Consulta para obtener los slugs de los posts MDX
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // 2. Crear una página por cada slug
  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`, // Ruta de la página (ej: /blog/mi-post)
      component: path.resolve("./src/templates/blog-post.jsx"), // Plantilla a usar
      context: {
        slug: node.frontmatter.slug, // Variable para la consulta GraphQL
      },
    });
  });
};