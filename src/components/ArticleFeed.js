import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

const ArticleFeed = () => {
  return (
    <div className="article-feed">
      <Link to="/0">
        <ArticleCard />
      </Link>
    </div>
  )
};

export default ArticleFeed;
