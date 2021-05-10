import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.scss';
import Card from './Card';

const ArticleCard = () => {
  return (
    <Card>
      <section className="card-header">
        <span className="header-text">category</span>
        <span className="header-text ml-end">id</span>
      </section>
      <ul className="card-content-info">
        <li className="highlight">userid</li>
        <li>created_at</li>
      </ul>
      <section className="card-content">
        <h1 className="elipse-text">title </h1>
        <div className="content-desc elipse-text">description</div>
      </section>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({}),
  type: PropTypes.string,
}

export default ArticleCard;
