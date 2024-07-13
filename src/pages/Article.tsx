import React from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '@/components/articles';
import Layout from '@/components/layout';

const ArticleWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const filepath = `./docs/${ id }.md`;

  return <Layout content={ <Article filename={ filepath! } /> } />;
};


export default ArticleWrapper;
