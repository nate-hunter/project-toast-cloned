import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

/** Acceptance Criteria:
 * [x] The toast component should show the message entered in the textarea,
 *        essentially acting as a “live preview”.
 * [X] The toast's styling should be affected by the “variant” selected:
 *        [X] The colors can be set by specifying the appropriate class on the
 *            top-level <div>. By default, it's set to `styles.notice`,
 *            but you'll want to dynamically select the class
 *            based on the variant
 *              (eg. for a success toast, you'll want to apply `styles.success`).
 *        [X] The icon can be selected from the ICONS_BY_VARIANT object. Feel free to
 *            re-organize things however you wish!
 * [X] The toast should be hidden by default, but can be shown
 *        by clicking the "Pop Toast!” button.
 * [X] The toast can be hidden by clicking the “×” button within the toast.
 */

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('notice');
  const [isToastPopped, setIsToastPopped] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastPopped && (
        <Toast message={message} variant={selectedVariant} closeToast={setIsToastPopped} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
                    checked={variant === selectedVariant}
                    onChange={() => setSelectedVariant(variant)}
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
            <Button onClick={() => setIsToastPopped(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
