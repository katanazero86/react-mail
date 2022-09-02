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
        'span.icon-hover': {
          cursor: 'pointer',
          position: 'relative',
          margin: '0 6px',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            display: 'block',
            opacity: 0,
            position: 'absolute',
            transitionDuration: '0.15s',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            bottom: '-6px',
            left: '-6px',
            right: '-6px',
            top: '-6px',
            background: 'none',
            borderRadius: '50%',
            transform: 'scale(0)',
            transitionProperty: 'transform, opacity',
          },
          '&:hover::before': {
            backgroundColor: 'rgba(32, 33, 36, 0.059)',
            border: 'none',
            boxShadow: 'none',
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        '.divider-bottom': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
        '.divider-top': {
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        },
        '.divider-y': {
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    />
  );
}
