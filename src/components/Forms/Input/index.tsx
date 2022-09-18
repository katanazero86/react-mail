import { KeyboardEvent, ChangeEvent, ComponentPropsWithRef } from 'react';
import styled from '@emotion/styled';

const InputStyled = styled.input<InputProps>`
  border: none;
  background-color: rgb(246, 249, 254);
  color: #111827;
  border-radius: ${props => (props.rounded ? '30px' : 0)};
  width: ${props => (props.wFull ? '100%' : '200px')};
  height: 40px;
  box-sizing: border-box;
  padding: 8px 20px;

  &:focus {
    outline: none;
  }
`;

interface InputProps extends ComponentPropsWithRef<'input'> {
  onKeyDown?(e: KeyboardEvent<HTMLInputElement>): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  rounded?: boolean;
  wFull?: boolean;
}

export default function Input(props: InputProps & Omit<InputProps, keyof ComponentPropsWithRef<'input'>>) {
  const { onKeyDown = () => null, onChange = () => null, rounded = false, wFull = false, ...rest } = props;

  return <InputStyled {...rest} rounded={rounded} wFull={wFull} onKeyDown={onKeyDown} onChange={onChange} />;
}
