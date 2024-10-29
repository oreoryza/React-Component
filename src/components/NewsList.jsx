import React from "react";

function NewsList({ news, onSelect }) {
  return (
    <div className="news-list">
      <div className="news-list-container">
        {news.map((article) => {
          return (
            <div
              onClick={() => onSelect(article.key)}
              className="news-card"
              key={article.key}
            >
              <img src={article.thumb} alt={article.title} />
              <div className="news-detail">
                <h2>{article.title}</h2>
                <p>{article.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsList;
