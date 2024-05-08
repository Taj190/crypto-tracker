import React from 'react';
import TemporaryDrawer from './drawer';
import './style.css';
import Button from '../button';
import { Link } from 'react-router-dom';
import Switch from './switchTheme';

function Header() {
  return (
    <div className='navbar' >
      <h1 className='logo'>
        CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <>
        <div className='links'>
          <Switch />
          <Link to="/">
            <p className='link'>Home</p>
          </Link>

          <Link to="/compare">
            <p className='link'>Compare</p>
          </Link>

          <Link to="/watchlist">
            <p className='link'>WatchList</p>
          </Link>

          <Link to="/dashboard">
            <Button text={'Dashboard'}
              onClick={() => console.log('clicked')}
            />
          </Link>
        </div>
      </>
      <div className='mobile-drawer'>
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;
