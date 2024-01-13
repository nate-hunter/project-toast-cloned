import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

/** Acceptance Criteria:
 * [X] The “Message” textarea should be driven by React state
 * [X] Using the data in the VARIANT_OPTIONS array, render 4 radio buttons within the “Variant” row.
 *      They should all be part of the same group (so that only one can be selected at a time).
 *      They should also be driven by React state.
 * [X] There should be no key warnings in the console.
 */

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('notice');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
