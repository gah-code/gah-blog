import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';

import french79 from '../assets/french79-logo.png';
import {Navigation} from './Navigation';

import '../styles/style.css';
// import '../styles/new-moon.css';

// const Layout = ({pageTitle, children}) => {
const Layout = ({children}) => {
  // const [theme, setTheme] = useState ('dark');

  // const onUpdateTheme = () => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   window.localStorage.setItem ('theme', newTheme);
  //   setTheme (newTheme);
  // };

  // useEffect (() => {
  //   const savedTheme = window.localStorage.getItem ('theme');

  //   if (savedTheme) {
  //     setTheme (savedTheme);
  //   }
  // }, []);

  return (
    <div>
      {/* <Helmet>
        <link rel="shortcut icon" type="image/png" href={french79} />
        {theme === 'dark' &&
          <link rel="stylesheet" type="text/css" href="/dark-moon.css" />}
      </Helmet> */}

      <div className="layout" id="layout">
        <Navigation />
        <main>
          {children}
        </main>

      </div>
    </div>
  );
};

// export default Layout;
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
