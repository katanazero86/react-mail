import { ComponentPropsWithoutRef, ReactNode, MouseEvent } from 'react';
import styled from '@emotion/styled';

const ButtonStyled = styled.button<Partial<ButtonProps>>`
  border: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  letter-spacing: -0.2px;
  font-weight: 500;

  ${props => props.rounded && `border-radius: 10px;`};
  ${props => props.wFull && `width: 100%`};

  ${props => {
    if (!props.outline) {
      if (props.variant === 'primary') {
        return `
        border: 1px solid #0a8fdc;
        background-color: #0a8fdc;
        color: #ffffff;
      `;
      }
      if (props.variant === 'secondary') {
        return `
        border: 1px solid #d81b60;
        background-color: #d81b60;
        color: #ffffff;
      `;
      }
    } else {
      if (props.variant === 'primary') {
        return `
        border: 1px solid #0a8fdc;
        color: #0a8fdc;
        &:hover {
          background-color : rgba(10, 143, 220, 0.04);
        }
      `;
      }
      if (props.variant === 'secondary') {
        return `
        border: 1px solid #d81b60;
        color: #d81b60;
        &:hover {
          background-color : rgba(216, 27, 96, 0.04);
        }
      `;
      }
    }
  }};
`;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  wFull?: boolean;
  rounded?: boolean;
  outline?: boolean;
  variant?: 'primary' | 'secondary';
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
}

export default function Button(props: ButtonProps & Omit<ButtonProps, keyof ComponentPropsWithoutRef<'button'>>) {
  const { children, wFull, rounded, outline, variant = 'primary', onClick, ...rest } = props;
  return (
    <ButtonStyled {...rest} variant={variant} wFull={wFull} rounded={rounded} outline={outline} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
