import { Global } from '@emotion/react';

const breakpoints = [0, 600, 900, 1200]; // xs, sm, md, lg
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default function GlobalStyle() {
  return (
    <Global
      styles={{
        'html, body': {
          margin: 0,
          padding: 0,
          height: '100%',
        },
        'h1, h2, h3, h4, h5, h6, p': {
          margin: 0,
          padding: 0,
        },
        '*': {
          boxSizing: 'border-box',
        },
      }}
    />
  );
}
