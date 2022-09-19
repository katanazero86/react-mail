import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const MenuWrapStyled = styled.div<Partial<MenuProps>>`
  position: fixed;
  z-index: 9999;
  left: 8px;
  right: 8px;
  top: 16px;
  bottom: 16px;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;

const MenuStyled = styled.ul<{ top: number; left: number }>`
  list-style: none;
  margin: 0px;
  padding: 8px 0px;
  position: relative;
  outline: 0px;
  height: fit-content;
  max-height: 250px;
  overflow: auto;
  width: 175px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

interface MenuProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose(): void;
  children: ReactNode;
}

export default function Menu({ isOpen, anchorEl, onClose, children }: MenuProps) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const updatePosition = () => {
    const top = getOffsetTop(anchorEl!);
    const left = getOffsetLeft(anchorEl!);
    setTop(top);
    setLeft(left < 0 ? 0 : left);
  };
  useEffect(() => {
    if (isOpen) {
      if (anchorEl) {
        updatePosition();
        window.addEventListener('resize', updatePosition);
      }
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('resize', updatePosition);
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <MenuWrapStyled isOpen={isOpen} onClick={handleClick}>
      <MenuStyled top={top} left={left}>
        {children}
      </MenuStyled>
    </MenuWrapStyled>
  );
}

const getOffsetTop = (anchorEl: HTMLElement) => {
  const { top, height } = anchorEl.getBoundingClientRect();
  return top + height;
};

const getOffsetLeft = (anchorEl: HTMLElement) => {
  const { left } = anchorEl.getBoundingClientRect();
  if (window.innerWidth < 175 + left) {
    // 넘어감
    return left - (175 + left - window.innerWidth) - 30;
  } else {
    return left;
  }
};
