import { ReactNode } from 'react';
import styled from '@emotion/styled';

const MenuItemStyled = styled.li`
  padding: 6px 16px;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.5px;

  &:hover {
    font-weight: 500;
  }
`;

interface MenuItemProps {
  onClick(): void;
  children: ReactNode;
}

export default function MenuItem({ onClick, children }: MenuItemProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return <MenuItemStyled onClick={handleClick}>{children}</MenuItemStyled>;
}
