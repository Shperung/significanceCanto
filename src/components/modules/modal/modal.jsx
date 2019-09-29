// @flow
import React, { useState, useEffect } from 'react';

import './modal.scss';

type Props = {
  className?: string,
  width?: number,
  isOpen?: boolean
};

function Modal(props: Props) {
  const { className = '', width = 450, isOpen = false } = props;

  // init isOpenState
  const [isOpenState, closeModal] = useState(isOpen);

  const handleCloseModal = () => {
    closeModal(false);
  };

  const handleEsc = event => {
    // close modal press key Esc
    if (typeof document.activeElement.value === 'undefined' && event.keyCode === 27) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isOpenState) {
      document.addEventListener('keydown', handleEsc);
    }
  });

  if (!isOpenState) return false;

  return (
    <div className={`modal-backdrop ${className}`}>
      <div className="modal" style={{ width }}>
        <button onClick={handleCloseModal}>close</button>
        modal
      </div>
    </div>
  );
}

export default Modal;
