import React from 'react'
import './Title.scss';

function Title({main, children}) {

  const text = main 
  ? (<h1 className="titleMain">{children}</h1>) 
  : (<h2 className="title">{children}</h2>);
  return text;
}

export default Title