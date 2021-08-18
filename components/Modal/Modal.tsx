import * as React from 'react';
import classNames from 'classnames';
import styles from './Modal.module.css';
import useContainedFocus from '~/hooks/useContainedFocus';
import useOutsideClick from '~/hooks/useClickOutside';

interface IModal {
  children: React.ReactNode;
  bodyRef?: React.RefObject<HTMLDivElement>;
  onClose?: () => void;
}

function Modal({ children, bodyRef, onClose }: IModal) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ref = bodyRef?.current;
    document.body.classList.add('no-scroll');
    if (ref) ref.style.setProperty('filter', 'blur(5px)');
    return () => {
      document.body.classList.remove('no-scroll');
      ref?.style.setProperty('filter', '');
    };
  }, [bodyRef]);

  useContainedFocus(modalRef);

  useOutsideClick(modalRef, () => {
    onClose?.();
  });

  const listenKeyboard = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        onClose?.();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    if (onClose) {
      window.addEventListener('keydown', listenKeyboard, true);
    }
    return () => {
      window.removeEventListener('keydown', listenKeyboard, true);
    };
  }, [listenKeyboard, onClose]);

  function close() {
    onClose?.();
  }
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.content} ref={modalRef}>
        <button
          className={classNames(
            styles.close,
            'text-12',
            'pointer',
            'flex-center',
            'custom-focus',
          )}
          onClick={close}
        >
          <i className="icon-close" />
        </button>
        <div className={styles.contentInfo}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
