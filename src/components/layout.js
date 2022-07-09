import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Navigation from './navigation';

import {container, heading, siteTitle} from './layout.module.css';

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery (graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={heading}>{data.site.siteMetadata.title}</header>
      <Navigation />
      <main>
        <h1 className={siteTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
