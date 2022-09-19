import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { mq } from '../GlobalStyle';

const RowItemStyled = styled.div<ItemProps>(props => {
  const getItemStyleObj = (targetBp: ItemColType | boolean, targetGutter: GutterType) => {
    if (targetBp !== undefined) {
      if (targetBp === true) return { flexGrow: 1, minWidth: 0 };
      if (targetBp >= 1 && targetBp <= 12) {
        if (targetGutter !== undefined && targetGutter !== 0) {
          return {
            flexGrow: 0,
            flexBasis: `calc((100% * (${targetBp} / 12)) - (${targetGutter * 8}px / 2))`,
            width: `calc((100% * (${targetBp} / 12)) - (${targetGutter * 8}px / 2))`,
            maxWidth: `calc((100% * (${targetBp} / 12)) - (${targetGutter * 8}px / 2))`,
            minWidth: 0,
          };
        }
        return {
          flexGrow: 0,
          flexBasis: `calc(100% * (${targetBp} / 12))`,
          width: `calc(100% * (${targetBp} / 12))`,
          maxWidth: `calc(100% * (${targetBp} / 12))`,
          minWidth: 0,
        };
      }
    }
  };

  return {
    [mq[0]]: getItemStyleObj(props.xs!, props.gutter!),
    [mq[1]]: getItemStyleObj(props.sm!, props.gutter!),
    [mq[2]]: getItemStyleObj(props.md!, props.gutter!),
    [mq[3]]: getItemStyleObj(props.lg!, props.gutter!),
  };
});

type ItemColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GutterType = 0 | 1 | 2 | 3 | 4 | 5;

interface ItemProps {
  children?: ReactNode;
  xs?: boolean | ItemColType;
  sm?: boolean | ItemColType;
  md?: boolean | ItemColType;
  lg?: boolean | ItemColType;
  gutter?: GutterType;
}

export default function RowItem({ children, xs = false, sm = false, md = false, lg = false, gutter = 0 }: ItemProps) {
  return (
    <RowItemStyled xs={xs} sm={sm} md={md} lg={lg} gutter={gutter}>
      {children}
    </RowItemStyled>
  );
}
