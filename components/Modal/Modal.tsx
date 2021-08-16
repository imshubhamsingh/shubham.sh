import * as React from 'react';
import styles from './Modal.module.css';

interface IModal {
  children: React.ReactNode;
  bodyRef?: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

function Modal({ children, bodyRef, onClose }: IModal) {
  React.useEffect(() => {
    const ref = bodyRef?.current;
    if (ref) ref.style.setProperty('filter', 'blur(5px)');
    return () => {
      ref?.style.setProperty('filter', '');
    };
  }, [bodyRef]);

  function close() {
    onClose?.();
  }
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {children}
        <i className="icon-close" onClick={close} />
      </div>
    </>
  );
}

export default Modal;
