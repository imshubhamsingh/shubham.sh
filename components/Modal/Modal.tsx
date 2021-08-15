import * as React from 'react';
import styles from './Modal.module.css';

interface IModal {
  children: React.ReactNode;
  bodyRef: React.RefObject<HTMLDivElement>;
}

function Modal({ children, bodyRef }: IModal) {
  React.useEffect(() => {
    console.log(bodyRef);
    if (bodyRef?.current)
      bodyRef.current.style.setProperty('filter', 'blur(5px)');
  }, [bodyRef]);
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </>
  );
}

export default Modal;
