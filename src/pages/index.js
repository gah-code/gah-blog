import React from 'react';
import Layout from '../components/layout';

import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <h5 className='logo'>Coding things ...</h5>
            </Link>
            <button>Btn</button>
          </div>
          {/* <Link to='/about'>
              <p>about</p>
            </Link>
            <Link to='/'>
              <p>projects</p>
            </Link> */}
        </div>
      </nav>
      <main className='page'>
        <header>
          <div className='text-box'>
            <h2 className='home-heading'>Hi, I'm Gilbert</h2>
            {/* <h2 className='home-heading title'>Title Here</h2> */}
            <p className='description'>
              I'm a Web Developer, who creates open-source projects. I like
              photography, yoga and burritos. Lorem ipsum dolor sit, amet
            </p>
            <br />
          </div>
        </header>
        <h2>Body</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit debitis
          quasi totam facilis. Ea, rem. Reiciendis, recusandae incidunt.
          Voluptatibus modi cumque velit consectetur dolores amet dicta veniam?
          Amet, beatae quisquam! Veniam provident nam alias earum nemo. Mollitia
          accusamus velit unde.
        </p>
      </main>
    </Layout>
  );
}
