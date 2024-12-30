import React from "react";
import Article from "@/components/article";

export default function ArticlePage({ params }) {
  const id = params.id; // Access the dynamic ID from the URL

  // Check if `id` is available before rendering
  if (!id) {
    return <div>Loading...</div>;
  }

  return <Article articleId={id} />;
}