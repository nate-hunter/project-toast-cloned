import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

/** Acceptance Criteria:
 * [ ] Instead of live-editing a single Toast instance, the
 *        playground should be used to push new toast messages
 *        onto a stack, rendered inside ToastShelf and shown in
 *        the corner of the page.
 * [ ] When “Pop Toast!” is clicked, the message/variant form
 *        controls should be reset to their default state (message
 *        should be an empty string, variant should be "notice").
 * [ ] Clicking the “×” button inside the toast should remove that
 *        specific toast (but leave the rest untouched).
 * [ ] A proper <form> tag should be used in the ToastPlayground. The
 *        toast should be created when submitting the form.
 * [ ] There should be no key warnings in the console! Keys should be
 *        unique, and you should not use the index.
 */

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const DEFAULT_TOAST = {
  message: '',
  variant: VARIANT_OPTIONS[0],
};

function ToastPlayground() {
  const [toast, setToast] = useState(DEFAULT_TOAST);
  const [toastStack, setToastStack] = useState([]);

  const handleSubmitToast = (e) => {
    e.preventDefault();

    const newToast = {
      id: crypto.randomUUID(),
      message: toast.message,
      variant: toast.variant,
    };
    const updatedToastStack = [...toastStack, newToast];
    setToastStack(updatedToastStack);
    setToast(DEFAULT_TOAST);
  };

  const closeToast = (toastId) => {
    const filteredToasts = toastStack.filter((toast) => toastId !== toast.id);
    setToastStack(filteredToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastStack={toastStack} closeToast={closeToast} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmitToast}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              name="message"
              className={styles.messageInput}
              value={toast.message}
              onChange={(e) => setToast({ ...toast, message: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          {VARIANT_OPTIONS.map((variant) => {
            const id = `variant-${variant}`;
            return (
              <div key={id} className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <label htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === toast.variant}
                    onChange={() => setToast({ ...toast, variant })}
                  />
                  {variant}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
