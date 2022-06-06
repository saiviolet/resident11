import './Header.scss';
import { Link } from 'react-router-dom';
import { menuItems, manager, mediaWidth} from '../../services/constans';

import React, { useEffect, useState } from 'react';

function Menu() {
  const menu = menuItems.map( ({name, link, id}) => {
    return (
      <li key={id}>
      <Link to={link}>{name}</Link>
    </li>
    )
  });

  return (
    <nav className="navbar">
        {/* <className="navbar indented-block"> */}
        <ul>
          {menu}
        </ul>
        <div className="navbar__menu-icon">
          <div className="icon icon_style_inst"></div>
          <div className="icon icon_style_facebook"></div>
        </div>
        <p className="navbar__menu-title">Ваш персональный помощник в покупке участка: </p>
        <span className="navbar__menu-subtitle">{manager}</span>
      </nav>
  )
}



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const onMenuClick = () => {
    setMenuOpen(!menuOpen)
  };

  const resizeHandler = () => {
    const windowWidth = window.innerWidth;
    setWindowSize(windowWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);


  return (
    <>
    <header>
    <div className="header indented-block">
      <ul className="header__desktop-icons">
        <li className="icon icon_style_inst"></li>
        <li className="icon icon_style_facebook"></li>
      </ul>
      <div className="header__logo"></div>
      <ul className="header__icons">
        <li className="icon icon_style_phone"></li>
        <li className="icon icon_style_menu" onClick={onMenuClick}></li>
      </ul>
    </div>
    </header>
    { menuOpen || windowSize >= mediaWidth.m ? <Menu /> : ''}
  </>
  )
}

export default Header
