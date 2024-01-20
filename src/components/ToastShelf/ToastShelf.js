import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import Toast from '../Toast/Toast';

const ToastShelf = ({ toastStack }) => {
  return (
    <ol className={styles.wrapper}>
      {toastStack.map((toast, i) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.selectedVariant} message={toast.message} />
      </li>
      ))}
    </ol>
  );
};

export default ToastShelf;
