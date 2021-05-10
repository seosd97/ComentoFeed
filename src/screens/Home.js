import React from 'react';
import ArticleFeed from '../components/ArticleFeed';
import HomeSideBar from '../components/HomeSideBar';

const Home = () => {
  return (
    <div id="content-root">
      <HomeSideBar />
      <main>
        <ArticleFeed />
      </main>
    </div>
  );
};

export default Home;
