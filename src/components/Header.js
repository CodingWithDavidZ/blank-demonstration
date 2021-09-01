import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navigation'>
      <Link className='navLinks' to='/home'>
        Home
      </Link>
      <Link className='navLinks' to='/blank'>
        Normal blank
      </Link>
      <Link className='navLinks' to='/saferblank'>
        Safer blank
      </Link>
      <Link className='navLinks' to='/badblank'>
        Bad blank
      </Link>
    </div>
  );
}

export default Header;
