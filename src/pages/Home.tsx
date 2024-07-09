import React, { useState } from 'react';
import NameCross from '@/components/namecross';
import Header from '@/components/header';
import Member from '@/components/member';

const Home = () => {
  const [name, setName] = useState<string>('');
  return <div>
    <Header />
    <div className='content'>
      <div className='cross'>
        <NameCross onSelect={ (name) => {
          console.log(name);
          setName(name);
        } } />
      </div>
     <Member name={ name } />
    </div>
  </div>
};

export default Home;
