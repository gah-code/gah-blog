import React, { useState } from 'react';
import { Link } from 'gatsby';

import logo from '../assets/french79-logo.png';
import blog from '../assets/nav-blog.png';
import github from '../assets/nav-github.png';

function slugify(string) {
  return (
    string &&
    `${string}`
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  );
}

const mainNavItems = [
  { url: '/about', icon: blog, label: 'About me' },
  { url: '/projects', icon: blog, label: 'Projects' },
];

const socialNavItems = [
  { url: 'https://github.com/gah-code', icon: github, label: 'GitHub' },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <section className='navigation'>
      <div className='container'>
        <nav>
          <Link to='/' className='item brand'>
            <img src={logo} className='logo' alt='' />
            <span>Gilbert A Haro</span>
          </Link>

          {mainNavItems.map((item) => (
            <div className='nav-item-outer'>
              <img src={item.icon} alt={item.label} className='nav-image' />
              <Link
                to={item.url}
                key={item.label}
                activeClassName='active'
                className={`item ${slugify(item.label)}`}
              >
                <span>{item.label}</span>
              </Link>
            </div>
          ))}

          {socialNavItems.map((item) => (
            <div className='nav-item-outer'>
              <img src={item.icon} alt={item.label} className='nav-image' />
              <a
                href={item.url}
                key={item.label}
                className={`desktop-only item ${slugify(item.label)}`}
                target='_blank'
                rel='noreferrer'
              >
                <span>{item.label}</span>
                {/* <ExternalLinkIcon /> */}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
