import React from 'react';
import './StandartButton.scss';

function StandartButton({children, link}) {
  return (
  <a className="button" href={link} data-text={children}>{children}</a>
  )
}

export default StandartButton