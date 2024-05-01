import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      firstButtonRef.current?.focus(); // Focus the first button or input ref
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) onClose(); // Close on escape key
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button ref={firstButtonRef} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
