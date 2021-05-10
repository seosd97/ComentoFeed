import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArticleListCard from './ArticleListCard';
import SponserCard from './SponserCard';

const ArticleFeed = ({ articles = [], ads = [] }) => (
  <div className="article-feed">
    {
      articles.map((article, index) => (
          <React.Fragment key={`content_${index}`}>
            <Link to={`/${article.id}`}>
              <ArticleListCard
                article={article}
              />
            </Link>
            {
              ((index + 1) % 3) === 0 && (
                <SponserCard
                  ad={ads[((index + 1) / 3) - 1]}
                />
              )
            }
          </React.Fragment>
        )
      )
    }
  </div>
);

ArticleFeed.propTypes = {
  articles: PropTypes.array,
  ads: PropTypes.array,
}

export default ArticleFeed;
