import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 600px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1200px)',
  },
});
