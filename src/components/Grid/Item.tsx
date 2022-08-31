import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { mq } from '../GlobalStyle';

const ItemStyled = styled.div<ItemProps>`
  ${mq[0]} {
    ${props => {
      if (props.xs === true) return `flex-grow : 1`;
      if (props.xs !== undefined) {
        if (props.xs >= 1 && props.xs <= 12) {
          if (props.gutter !== 0 && props.gutter !== undefined) {
            return `flex-grow: 0; 
            flex-basis: calc((100% * (${props.xs} / 12)) - (${(props.gutter * 8) / 2}px));
            width: calc((100% * (${props.xs} / 12)) - (${(props.gutter * 8) / 2}px)); 
            max-width: calc((100% * (${props.xs} / 12)) - (${(props.gutter * 8) / 2}px));`;
          }
          return `flex-grow: 0; flex-basis: calc(100% * (${props.xs} / 12)); width: calc(100% * (${props.xs} / 12)); maxWidth: calc(100% * (${props.xs} / 12));`;
        }
      }
      return ``;
    }}
  }
  ${mq[1]} {
    ${props => {
      if (props.sm === true) return `flex-grow : 1`;
      if (props.sm !== undefined) {
        if (props.sm >= 1 && props.sm <= 12) {
          if (props.gutter !== 0 && props.gutter !== undefined) {
            return `flex-grow: 0; 
            flex-basis: calc((100% * (${props.sm} / 12)) - (${(props.gutter * 8) / 2}px));
            width: calc((100% * (${props.sm} / 12)) - (${(props.gutter * 8) / 2}px)); 
            max-width: calc((100% * (${props.sm} / 12)) - (${(props.gutter * 8) / 2}px));`;
          }
          return `flex-grow: 0; flex-basis: calc(100% * (${props.sm} / 12)); width: calc(100% * (${props.sm} / 12)); maxWidth: calc(100% * (${props.sm} / 12));`;
        }
      }

      return ``;
    }}
  }
  ${mq[2]} {
    ${props => {
      if (props.md === true) return `flex-grow : 1`;
      if (props.md !== undefined) {
        if (props.md >= 1 && props.md <= 12) {
          if (props.gutter !== 0 && props.gutter !== undefined) {
            return `flex-grow: 0; 
            flex-basis: calc((100% * (${props.md} / 12)) - (${(props.gutter * 8) / 2}px));
            width: calc((100% * (${props.md} / 12)) - (${(props.gutter * 8) / 2}px)); 
            max-width: calc((100% * (${props.md} / 12)) - (${(props.gutter * 8) / 2}px));`;
          }
          return `flex-grow: 0; flex-basis: calc(100% * (${props.md} / 12)); width: calc(100% * (${props.md} / 12)); maxWidth: calc(100% * (${props.md} / 12));`;
        }
      }

      return ``;
    }}
  }
  ${mq[3]} {
    ${props => {
      if (props.lg === true) return `flex-grow : 1`;
      if (props.lg !== undefined) {
        if (props.lg >= 1 && props.lg <= 12) {
          if (props.gutter !== 0 && props.gutter !== undefined) {
            return `flex-grow: 0; 
            flex-basis: calc((100% * (${props.lg} / 12)) - (${(props.gutter * 8) / 2}px));
            width: calc((100% * (${props.lg} / 12)) - (${(props.gutter * 8) / 2}px)); 
            max-width: calc((100% * (${props.lg} / 12)) - (${(props.gutter * 8) / 2}px));`;
          }
          return `flex-grow: 0; flex-basis: calc(100% * (${props.lg} / 12)); width: calc(100% * (${props.lg} / 12)); maxWidth: calc(100% * (${props.lg} / 12));`;
        }
      }

      return ``;
    }}
  }
`;

type ItemCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ItemProps {
  children?: ReactNode;
  xs?: boolean | ItemCol;
  sm?: boolean | ItemCol;
  md?: boolean | ItemCol;
  lg?: boolean | ItemCol;
  gutter?: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function Item({ children, xs = false, sm = false, md = false, lg = false, gutter = 0 }: ItemProps) {
  return (
    <ItemStyled xs={xs} sm={sm} md={md} lg={lg} gutter={gutter}>
      {children}
    </ItemStyled>
  );
}
