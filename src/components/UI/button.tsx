import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'ghost';
}

export const Button = ({
  variant = 'solid',
  children,
  className,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
