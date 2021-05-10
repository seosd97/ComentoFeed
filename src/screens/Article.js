import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getView } from '../api';
import ArticleCard from '../components/ArticleCard';
import CommentCard from '../components/CommentCard';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(async () => {
    const { data } = await getView(id);
    setArticle(data);
  }, []);

  return (
    <div id="content-root">
      <main id="article-main">
        {
          article != null && (
            <React.Fragment>
              <ArticleCard
                article={article}
              />
                <section className="comment-list-root">
                  <h2>답변 <span>{article.reply.length}</span></h2>
                  {
                    article.reply.map(reply => (
                      <CommentCard
                        key={reply.id}
                        comment={reply}
                      />
                    ))
                  }
                </section>
            </React.Fragment>
          )
        }
      </main>
    </div>
  );
};

export default Article;
