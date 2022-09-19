import { ReactNode } from 'react';
import styled from '@emotion/styled';

const MenuItemStyled = styled.li`
  padding: 6px 16px;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 400;
`;

interface MenuItemProps {
  children: ReactNode;
}

export default function MenuItem({ children }: MenuItemProps) {
  return <MenuItemStyled>{children}</MenuItemStyled>;
}
