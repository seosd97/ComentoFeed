import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import moment from 'moment';

const CommentCard = ({ comment = {} }) => (
  <Card>
    <section className="card-header">
      <span className="header-text">{comment.user.name}</span>
    </section>
    <section className="card-content">
      <section className="content-desc">{comment.contents}</section>
    </section>
    <section className="card-footer">{`created_at(${moment(comment.created_at).format('YYYY-MM-DD')})`}</section>
  </Card>
);

CommentCard.propTypes = {
  comment: PropTypes.object,
};

export default CommentCard;
