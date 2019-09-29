// @flow
import React from 'react';

import cancel from '../../../svg/assets/cancel.svg';
import arrowRight from '../../../svg/assets/arrow-point-to-right.svg';
import './icons.scss';

const glyphs = {
  cancel,
  arrowRight
};

type Props = {
  className?: string,
  width?: number,
  height?: number,
  white?: boolean,
  blue?: boolean,
  red?: boolean,
  green?: boolean,
  glyph: string
};

function Icon(props: Props) {
  const {
    glyph,
    className = '',
    width = 24,
    height = 24,
    white = false,
    blue = false,
    red = false,
    green = false
  } = props;

  let computedClassName = `icon ${className}`;
  if (white) computedClassName += ' icon--white';
  if (blue) computedClassName += ' icon--blue';
  if (red) computedClassName += ' icon--red';
  if (green) computedClassName += ' icon--green';

  return (
    <svg className={computedClassName} width={width} height={height}>
      <use xlinkHref={glyphs[glyph]} />
    </svg>
  );
}

export default Icon;
