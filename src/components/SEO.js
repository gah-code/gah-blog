import React from 'react';
import Helmet from 'react-helmet';

import config from '../utils/config';

export const SEO = ({ postNode, postPath, postSEO, customDescription }) => {
  let title;
  let description;
  let image = config.siteLogo;
  let postURL;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postNode.excerpt;

    if (postMeta.thumbnail) {
      image = postMeta.thumbnail.childImageSharp.fixed.src;
    }

    postURL = `${config.siteUrl}${postPath}`;
  } else {
    title = config.siteTitle;
    description = customDescription || config.description;
  }
  return (
    <Helmet>
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      <meta property='og:url' content={postSEO ? postURL : config.siteUrl} />
      {postSEO && <meta property='og:type' content='article' />}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Helmet>
  );
};
