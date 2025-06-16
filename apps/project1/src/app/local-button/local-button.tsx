import React from 'react';
import styles from './local-button.module.css';

export interface LocalButtonProps {
  text: string;
}

export function LocalButton({ text }: LocalButtonProps) {
  return (
    <button className={styles['local-button']}>
      {text}
    </button>
  );
}

export default LocalButton; 