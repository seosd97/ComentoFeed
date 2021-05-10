import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import moment from 'moment';

const ArticleCard = ({ article }) => (
  <Card className="highlight-card-border">
    <section className="card-content">
      <h1>{article.title}</h1>
      <div className="content-desc">{article.contents}</div>
    </section>
    <section className="card-footer">{`created_at(${moment(article.created_at).format('YYYY-MM-DD')})`}</section>
  </Card>
);

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
