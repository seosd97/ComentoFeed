import React from 'react';
import { Link } from 'react-router-dom';
import ArticleListCard from './ArticleListCard';

const ArticleFeed = () => {
  return (
    <div className="article-feed">
      <Link to="/0">
        <ArticleListCard />
      </Link>
    </div>
  )
};

export default ArticleFeed;
