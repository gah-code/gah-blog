import * as React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

import {heroDescription, profileImg} from './main.module.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="Hi, I'm Gilbert">
      <p className={heroDescription}>
        I'm a Web Developer, who creates open-source projects. I like photography, working out and burritos.
        {' '}
        <br />
        <br />
        This is my digtial Playground
      </p>
      <StaticImage
        className={profileImg}
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../../images/profile.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
