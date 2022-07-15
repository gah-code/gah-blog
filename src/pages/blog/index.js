import * as React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../../components/layout';

import {blogHeading} from '../main.module.css';

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map (node => (
        <article key={node.id}>
          <h2 className={blogHeading}>
            <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;