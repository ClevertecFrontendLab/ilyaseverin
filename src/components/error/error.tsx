import { useState } from 'react';
import styles from './error.module.css';
import { ReactComponent as ErrorIcon } from './img/WarningCircle.svg';

import { ReactComponent as CloseIcon } from './img/CloseIcon.svg';

export const Error: React.FC = () => {
  const [close, setClose] = useState(true);
  return (
    <div data-test-id='error' className={close ? styles.errorWrapper : styles.none}>
      <div className={styles.left}>
        <div className={styles.leftImage}>
          <ErrorIcon />
        </div>
        <div className={styles.text}>Что-то пошло не так. Обновите страницу через некоторое время.</div>
      </div>

      <div className={styles.right}>
        <div role='presentation' className={styles.rightImage} onClick={() => setClose(false)}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};
