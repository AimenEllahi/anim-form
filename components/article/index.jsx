import React from 'react';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
//import Article6 from './Article6';
// Import other article components as needed

export default function Article({ articleId }) {
  // Map articleId to the appropriate component
  const articles = {
    1: Article1,
    2: Article2,
    3: Article3,
    4: Article4,
    5: Article5,
    //6: Article6,
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