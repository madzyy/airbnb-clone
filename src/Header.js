import { Avatar } from '@material-ui/core'
import { ExpandMore, Language, Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'

function Header() {
  return (
    <div className='header'>
      <Link to = '/'>
        <img
            className='header__icon'
            src={logo}
            alt=''
            />

      </Link>

          <div className='header__center'>
            <input type='text' />
            <Search />
          </div>

          <div className='header__right'>
            <p>Become a host</p>
            <Language />
            <ExpandMore />
            <Avatar />

          </div>
    </div>
  )
}

export default Header