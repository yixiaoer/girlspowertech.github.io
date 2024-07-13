import React, {useState} from 'react';
import NameCross from '@/components/namecross';
import Member from '@/components/member';
import Layout from '@/components/layout';

const Home = () => {
  const [name, setName] = useState<string>('');

  return (
    <Layout
      content={
        <>
          <NameCross onSelect={setName} />
          <Member name={name} />
        </>
      }
    />
  );
};

export default Home;
