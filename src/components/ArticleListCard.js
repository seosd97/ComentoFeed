import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.scss';
import Card from './Card';
import moment from 'moment';

const ArticleListCard = ({ article = {} }) => {
  return (
    <Card>
      <section className="card-header">
      <span className="header-text">category</span>
        <span className="header-text ml-end">{article.id}</span>
      </section>
      <ul className="card-content-info">
        <li className="highlight">{article.user_id}</li>
        <li>{`created_at(${moment(article.created_at).format('YYYY-MM-DD')})`}</li>
      </ul>
      <section className="card-content">
        <h1 className="elipse-text">{article.title}</h1>
        <div className="elipse-text content-desc">{article.contents}</div>
      </section>
    </Card>
  );
};

ArticleListCard.propTypes = {
  article: PropTypes.object,
}

export default ArticleListCard;
