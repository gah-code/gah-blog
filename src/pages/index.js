import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <header>
          <div>
            <h2 className='home-heading'>Hi, I'm Gilbert</h2>
            {/* <h2 className='home-heading title'>Title Here</h2> */}
            <p className='description'>
              I'm a Web Developer, who creates open-source projects. I like
              photography, yoga and burritos.
            </p>
            <br />
          </div>
        </header>
        <section className='post'>
          <h2>Latest Posts</h2>
          <p>Coming Soon</p>

          <figure class='card'>
            <div class='card__hero'>
              <img
                src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                alt='Pizza'
                className='card__img'
              />
            </div>
            <div class='card__content'>
              <div class='card__title'>
                <h1 class='card__heading'>Project Workflow</h1>
                <div class='card__tag card__tag--1'>#components</div>
                <div class='card__tag card__tag--2'>#UI</div>
              </div>
              <p class='card__description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                quis itaque.
              </p>
              <div class='card__details'>
                <p class='card__detail'>
                  <span class='emoji'>💻</span> Web Dev
                </p>
                <p class='card__detail'>
                  <span class='emoji'>⏳</span>20 min read
                </p>
                {/* <p class='card__detail'>
                  <span class='emoji'></span>4.7 / 5
                </p> */}
              </div>
            </div>
            <div class='card__price'></div>
          </figure>
        </section>
      </main>
    </Layout>
  );
}
