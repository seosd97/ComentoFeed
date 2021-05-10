import React from 'react';
import Card from './Card';

const ArticleCard = () => (
  <Card className="highlight-card-border">
    <section className="card-content">
      <h1>title</h1>
      <div className="content-desc">description</div>
    </section>
    <section className="card-footer">
      created_at
    </section>
  </Card>
);

export default ArticleCard;
