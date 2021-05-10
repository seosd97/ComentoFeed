import React from 'react';
import Card from '../components/Card';

const Article = () => {
  return (
    <div id="content-root">
      <main>
        <Card className="highlight-card-border">
          <section className="card-content">
            <h1>title</h1>
            <div className="content-desc">description</div>
          </section>
          <section className="card-footer">
            created_at
          </section>
        </Card>
        <section className="comment-list-root">
          <h2>답변 <span>12345</span></h2>
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
        </section>
      </main>
    </div>
  );
};

export default Article;
