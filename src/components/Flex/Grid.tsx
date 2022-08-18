import * as React from 'react';
import { styled, css } from '../../stitches.configure';
import type * as Stitches from '@stitches/react';

const gridWidthStyle = {
  '1': {
    flexGrow: 0,
    flexBasis: '$gap',
    width: 'calc(100% * (1 / 12))',
    maxWidth: 'calc(100% * (1 / 12))',
  },
  '2': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (1 / 12))',
    width: 'calc(100% * (1 / 12))',
    maxWidth: 'calc(100% * (1 / 12))',
  },
  '3': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (2 / 12))',
    width: 'calc(100% * (2 / 12))',
    maxWidth: 'calc(100% * (2 / 12))',
  },
  '4': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (4 / 12))',
    width: 'calc(100% * (4 / 12))',
    maxWidth: 'calc(100% * (4 / 12))',
  },
  '5': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (5 / 12))',
    width: 'calc(100% * (5 / 12))',
    maxWidth: 'calc(100% * (5 / 12))',
  },
  '6': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (6 / 12))',
    width: 'calc(100% * (6 / 12))',
    maxWidth: 'calc(100% * (6 / 12))',
  },
  '7': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (7 / 12))',
    width: 'calc(100% * (7 / 12))',
    maxWidth: 'calc(100% * (7 / 12))',
  },
  '8': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (8 / 12))',
    width: 'calc(100% * (8 / 12))',
    maxWidth: 'calc(100% * (8 / 12))',
  },
  '9': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (9 / 12))',
    width: 'calc(100% * (9 / 12))',
    maxWidth: 'calc(100% * (9 / 12))',
  },
  '10': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (10 / 12))',
    width: 'calc(100% * (10 / 12))',
    maxWidth: 'calc(100% * (10 / 12))',
  },
  '11': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (11 / 12))',
    width: 'calc(100% * (11 / 12))',
    maxWidth: 'calc(100% * (11 / 12))',
  },
  '12': {
    flexGrow: 0,
    flexBasis: 'calc(100% * (12 / 12))',
    width: 'calc(100% * (12 / 12))',
    maxWidth: 'calc(100% * (12 / 12))',
  },
};

const GridStyled = styled('div', {
  variants: {
    container: {
      true: {
        display: 'flex',
      },
    },
    item: {
      true: {},
    },
    direction: {
      row: {
        flexFlow: 'row wrap',
      },
      column: {
        flexFlow: 'column wrap',
      },
    },
    gap: {
      '1': {
        gap: '8px',
      },
      '2': {
        gap: '16px',
      },
      '3': {
        gap: '24px',
      },
      '4': {
        gap: '32px',
      },
      '5': {
        gap: '40px',
      },
    },
    rowGap: {
      '1': {
        rowGap: '8px',
      },
      '2': {
        rowGap: '16px',
      },
      '3': {
        rowGap: '24px',
      },
      '4': {
        rowGap: '32px',
      },
      '5': {
        rowGap: '40px',
      },
    },
    columnGap: {
      '1': {
        columnGap: '8px',
      },
      '2': {
        columnGap: '16px',
      },
      '3': {
        columnGap: '24px',
      },
      '4': {
        columnGap: '32px',
      },
      '5': {
        columnGap: '40px',
      },
    },
    justifyContent: {
      'flex-start': {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
    },
    alignItems: {
      'flex-start': {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      'flex-end': {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    // xs: {
    //   true: {
    //     flexGrow: 1,
    //   },
    //   ...gridWidthStyle,
    // },
    // sm: {
    //   true: {
    //     flexGrow: 1,
    //   },
    //   ...gridWidthStyle,
    // },
    // md: {
    //   true: {
    //     flexGrow: 1,
    //   },
    //   ...gridWidthStyle,
    // },
    // lg: {
    //   true: {
    //     flexGrow: 1,
    //   },
    //   ...gridWidthStyle,
    // },
    bp: {
      true: {
        flexGrow: 1,
      },
      ...gridWidthStyle,
    },
  },
});

// gap 에 따라 width 계산을 해줘야하는데, 실패
interface GridProps {
  children?: React.ReactNode;
  gap?: 1 | 2 | 3 | 4 | 5;
  rowGap?: 1 | 2 | 3 | 4 | 5;
  columnGap?: 1 | 2 | 3 | 4 | 5;
  container?: boolean;
  item?: boolean;
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  xs?: boolean | number;
  sm?: boolean | number;
  md?: boolean | number;
  lg?: boolean | number;
}

export default function Grid({
  children,
  gap,
  rowGap,
  columnGap,
  container,
  item,
  direction = 'row',
  justifyContent,
  alignItems,
  xs,
  sm,
  md,
  lg,
}: GridProps) {
  return (
    <GridStyled
      container={container}
      item={item}
      direction={direction}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      bp={{
        '@xs': xs,
        '@sm': sm,
        '@md': md,
        '@lg': lg,
      }}
    >
      {children}
    </GridStyled>
  );
}
