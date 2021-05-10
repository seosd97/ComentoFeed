import React from 'react';
import Card from './Card';

const CommentCard = () => (
  <Card>
    <section className="card-header">
      <span className="header-text">replyusername</span>
    </section>
    <section className="card-content">
      <section className="content-desc">description</section>
    </section>
    <section className="card-footer">
      created_at
    </section>
  </Card>
);

export default CommentCard;
