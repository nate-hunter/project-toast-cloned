import React from 'react';

import styles from './ToastShelf.module.css';

import Toast from '../Toast/Toast';

const ToastShelf = ({ toastStack, closeToast }) => {
  return (
    <ol className={styles.wrapper}>
      {toastStack.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast toast={toast} closeToast={closeToast} />
        </li>
      ))}
    </ol>
  );
};

export default ToastShelf;
