import * as React from 'react';
import {Link, graphql} from 'gatsby';
import Helmet from 'react-helmet';

import config from '../../utils/config';

import Layout from '../../components/Layout';

// import {blogHeading} from '../main.module.css';

export default function Blog({data}) {
  const title = 'Writing';
  const description = 'Notes & tutorials';
  return (
    <Layout>
      <div className="container">
        <Helmet title={`${title} | ${config.siteTitle}`} />

        <h1>Blogs</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nulla.
        </p>

        <header className="hero">
          <h1>{title}</h1>
        </header>
      </div>
    </Layout>
  );
}

Blog.Layout = Layout;
// export default BlogPage;
