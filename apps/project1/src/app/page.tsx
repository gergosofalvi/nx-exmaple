import React from 'react';
import { UiButton } from '@nx-exmaple/ui-button';
import { LocalButton } from './local-button/local-button';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <h1>Project 1</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <UiButton text="Shared Button" />
        <LocalButton text="Local Green Button" />
      </div>
    </div>
  );
}
