import React from 'react';
import Article1 from './Article1';
// Import other article components as needed

export default function Article({ articleId }) {
  // Map articleId to the appropriate component
  const articles = {
    1: Article1,
    // 2: Article2,
    // 3: Article3,
  };

  const ArticleComponent = articles[articleId];

  if (!ArticleComponent) {
    return <div>Article not found</div>;
  }

  return (   
        <ArticleComponent />
  );
}

export async function getServerSideProps(context) {
  const { articleId } = context.params;
  return {
    props: {
      articleId,
    },
  };
}