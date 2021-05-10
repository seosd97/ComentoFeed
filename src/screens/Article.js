import React from 'react';
import ArticleCard from '../components/ArticleCard';
import CommentCard from '../components/CommentCard';

const Article = () => {
  return (
    <div id="content-root">
      <main id="article-main">
        <ArticleCard />
        <section className="comment-list-root">
          <h2>답변 <span>12345</span></h2>
          <CommentCard />
        </section>
      </main>
    </div>
  );
};

export default Article;
