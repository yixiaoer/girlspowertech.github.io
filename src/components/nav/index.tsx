
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import "./style.scss"

const NavItems = [
  { name: 'Home', path: '/' },
  // { name: 'About', path: '/about' },
  { name: 'Article', path: '/articles' }
]

const RItems = NavItems.slice().reverse();

const Nav: React.FC = () => {
  const loc = useLocation();
  const activeItem = RItems.find(item => loc.pathname.startsWith(item.path));
  return (
    <nav>
      { NavItems.map(item => (
        <Link key={ item.name } to={ item.path } className={ item === activeItem ? 'active' : '' }>
          { item.name }
        </Link>
      )) }
    </nav>
  );
}

export default Nav;
