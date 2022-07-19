import React from 'react';
// import french79 from '../assets/french79-logo.png';
import {Navigation} from './Navigation';

import '../styles/style.css';
// import '../styles/new-moon.css';

// const Layout = ({pageTitle, children}) => {
// NOTE: Export as component
export const Layout = ({children, pageTitle}) => {
  return (
    <div>

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

// export default Layout;
