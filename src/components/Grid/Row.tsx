import { ReactNode } from 'react';
import styled from '@emotion/styled';

const RowStyled = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;
  gap: ${props => props.rowGap !== undefined && props.rowGap * 8}px
    ${props => props.columnGap !== undefined && props.columnGap * 8}px;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

interface RowProps {
  children?: ReactNode;
  rowGap?: 0 | 1 | 2 | 3 | 4 | 5;
  columnGap?: 0 | 1 | 2 | 3 | 4 | 5;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

export default function Row({ children, rowGap = 0, columnGap = 0, justifyContent, alignItems }: RowProps) {
  return (
    <RowStyled rowGap={rowGap} columnGap={columnGap} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </RowStyled>
  );
}
