import React, {useCallback, useEffect, useRef, useState } from 'react';
import ArticleFeed from '../components/ArticleFeed';
import HomeSideBar from '../components/HomeSideBar';
import { getAds, getArticles, getCategory } from '../api';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);

  const observeRef = useRef(null);

  const observerHandler = useCallback(([{ isIntersecting }]) => {
    if (isIntersecting && articles.length > 0) {
      console.log("zxvc");
      setCurrentPage(currentPage + 1);
    }
  }, [articles]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshhold: 1,
    };

    const observer = new IntersectionObserver(observerHandler, option);
    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    // return observer.unobserve(observeRef.current);
  }, [observerHandler]);

  useEffect(async () => {
    const { category } = await getCategory();
    setCategories(category);
  }, []);

  useEffect(async () => {
    if (categories != null && categories.length > 0) {
      const { data: articlesData } = await getArticles(currentPage, 10, categories.map(c => c.id), 'asc');
      const { data: adsData } = await getAds(currentPage, 3);

      if (currentPage > 1) {
        setAds([...new Set([...ads, ...adsData])]);
      } else {
        setAds(adsData);
      }

      if (currentPage > 1) {
        setArticles([...new Set([...articles, ...articlesData])]);
      } else {
        setArticles(articlesData);
      }
    }
  }, [categories, currentPage]);

  return (
    <div id="content-root">
      <HomeSideBar />
      <main id="home-main">
        <ArticleFeed
          articles={articles}
          ads={ads}
        />
        <div style={{height: '10px'}} ref={observeRef}></div>
      </main>
    </div>
  );
};

export default Home;
