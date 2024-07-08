import React, { useState } from 'react';
import NameCross from '@/components/namecross';
import Header from '@/components/header';

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
      <div className='name'>
        { name && <h3>{ name }</h3> }
      </div>
    </div>
  </div>
};

export default Home;
