// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../modules/icons/icons.jsx';
import Modal from '../../modules/modal/modal.jsx';

import './index.screen.scss';

const IndexScreen = () => {
  return (
    <div>
      <h1>IndexScreen</h1>
      <Icon glyph="cancel" width={40} height={40} green className="icon-close" />
      <Icon glyph="arrowRight" width={40} height={40} blue className="icon-close" />
      <Link to="/artists">artists</Link>
      <Modal isOpen />
    </div>
  );
};

export default IndexScreen;
