import * as React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
// import Navigation from '../components/Navigation';
import {SEO} from '../components/SEO';
// import { Heading } from '../components/Heading';
import Hero from '../components/Hero';

import config from '../utils/config';
// import { slugify } from '../utils/helpers';

export default function IndexPage({data}) {
  return (
    <div>
      {/* <Layout /> */}
      {/* <Helmet title={config.siteTitle} />
      <SEO /> */}

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hi, I'm Gilbert" index>
            <p className="hero-description small width">
              I'm a Web Developer, who creates open-source projects. I like
              photography, yoga and burritos. <br />
              <br />
              This is where I code things 👾
            </p>
          </Hero>
        </div>
      </div>
    </div>
  );
}

// export default IndexPage;
IndexPage.Layout = Layout;
// Index.Layout = Layout;
