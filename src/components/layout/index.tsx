import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/header';
import Nav from '@/components/nav';

type layoutProps = {
  header?: React.ReactNode;
  content: React.ReactNode;
  aside?: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ header, content, aside }) => {
  const navigate = useNavigate();
  return (
    <>
      { header || <Header /> }
      <main>
        <article>
          { content }
        </article>
        <aside>
          { aside || <Nav /> }
        </aside>
      </main>
    </>
  );
};

export default Layout;
