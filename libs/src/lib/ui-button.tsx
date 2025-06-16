import styles from './ui-button.module.css';
import React from 'react';

export interface UiButtonProps {
  text: string;
}

export function UiButton({ text }: UiButtonProps) {
  return (
    <button className={styles['fancy-button']}>
      {text}
    </button>
  );
}

export default UiButton;
