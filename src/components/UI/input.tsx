import React from 'react';
import styles from './input.module.css';
import clsx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ endIcon, className, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <input className={clsx(styles.input, className)} ref={ref} {...props} />
        {endIcon && <div className={styles.endIcon}>{endIcon} </div>}
      </div>
    );
  },
);
