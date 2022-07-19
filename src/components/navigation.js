import React from 'react';
import {Link} from 'gatsby';

import blog from '../assets/nav-blog.png';
import french79 from '../assets/french79-logo.png';
import {slugify} from '../utils/helpers';

const mainNavItems = [
  {url: '/blog', icon: blog, label: 'Writing'},
  // {url: '/me', icon: blog, label: 'About me'},
];

const socialNavItems = [
  {url: 'https://github.com/', icon: blog, label: 'GitHub'},
];

export const Navigation = ({theme, onUpdateTheme}) => {
  return (
    <section className="navigation">
      <div className="container">
        <nav>
          <Link to="/" className="item brand">
            <img src={french79} className="logo" alt="Gilbert A Haro" />
            <span>Gilbert A. Haro</span>
          </Link>
          {mainNavItems.map (item => (
            <div className="nav-item-outer">
              <img src={item.icon} alt={item.label} className="nav-image" />
              <Link
                to={item.url}
                key={item.label}
                activeClassName="active"
                className={`item ${slugify (item.label)}`}
              >
                <span>{item.label}</span>
              </Link>
            </div>
          ))}

          {socialNavItems.map (item => (
            <div className="nav-item-outer">
              <img src={item.icon} alt={item.label} className="nav-image" />
              <a
                href={item.url}
                key={item.label}
                className={`desktop-only item ${slugify (item.label)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                {/* <ExternalLinkIcon /> */}
              </a>
            </div>
          ))}
        </nav>
        {/* <button className="theme-toggle" onClick={onUpdateTheme}>
          <img src={blog} alt="Theme" />{' '}
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button> */}
      </div>
    </section>
  );
};

// export default Navigation;
