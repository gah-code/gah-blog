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
              {/* <img src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-0.3.5&s=dc82336ad3e3873b0a81e9389d346916&auto=format&fit=crop&w=1952&q=80" alt="Pizza" class="pizza__img"> */}
            </div>
            <div class='card__content'>
              <div class='card__title'>
                <h1 class='card__heading'>Project Workflow</h1>
                <div class='card__tag card__tag--1'>#components</div>
                <div class='card__tag card__tag--2'>#UI/UX</div>
              </div>
              <p class='card__description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                quis itaque.
              </p>
              <div class='card__details'>
                <p class='card__detail'>
                  <span class='emoji'>🍕</span> Brain food
                </p>
                <p class='card__detail'>
                  <span class='emoji'></span>30 min
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
