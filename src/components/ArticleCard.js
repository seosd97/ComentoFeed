import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.scss';

const ArticleCard = () => {
  return (
    <article className="article-card">
      <section className="article-header">
        <span className="header-text">category</span>
        <span className="header-text ml-end">id</span>
      </section>
      <ul className="article-info">
        <li className="highlight">userid</li>
        <li>created_at</li>
      </ul>
      <section className="article-preview">
        <h1 className="elipse-text">title </h1>
        <div className="article-desc elipse-text">description</div>
      </section>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({}),
}

export default ArticleCard;
