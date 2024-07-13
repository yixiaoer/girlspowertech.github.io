import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from '@/components/articles';
import Envelope from '@/components/envelope';
import Layout from '@/components/layout';

const ArticleList: React.FC = () => {
  const navigate = useNavigate();

  const List = () => (
    <div
      className="article-list"
    >
      { articles.map((article, idx) => (
        <Envelope
          key={ idx }
          { ...article }
          onClick={ () => navigate(`/articles/${ article.id }`) }
        />
      )) }
    </div>
  );

  return <Layout content={ <List /> } />;
};
export default ArticleList;
