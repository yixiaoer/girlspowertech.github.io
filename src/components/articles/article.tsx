import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useArticle from '@/hooks/useArticle';
import './style.scss';

interface ArticleProps {
  filename: string;
}

const Article: React.FC<ArticleProps> = ({ filename }) => {
  const content = useArticle(filename);

  return (
    <div className="article">
      <ReactMarkdown remarkPlugins={ [remarkGfm] }>
        { content }
      </ReactMarkdown>
    </div>
  );
};

export default Article;
