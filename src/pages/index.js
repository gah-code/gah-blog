import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <header>
          <div className='text-box'>
            <h2 className='home-heading'>Hi, I'm Gilbert</h2>
            {/* <h2 className='home-heading title'>Title Here</h2> */}
            <p className='description'>
              I'm a Web Developer, who creates open-source projects. I like
              photography, yoga and burritos.
            </p>
            <br />
          </div>
        </header>
        {/* <h2>Latest Posts</h2>
        <p>Coming Soon</p> */}
      </main>
    </Layout>
  );
}
