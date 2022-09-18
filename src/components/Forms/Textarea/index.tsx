import { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';

const TextareaStyled = styled.textarea<TextareaProps>`
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  resize: ${props => (props.resize ? 'both' : 'none')};
  width: ${props => (props.wFull ? '100%' : 'auto')};
  outline: none;
`;

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  rows?: number;
  cols?: number;
  resize?: boolean;
  wFull?: boolean;
  onChange?(e: ChangeEvent<HTMLTextAreaElement>): void;
}

export default function Textarea(
  props: TextareaProps & Omit<TextareaProps, keyof ComponentPropsWithoutRef<'textarea'>>
) {
  const { onChange = () => null, resize = false, wFull = false, rows = 1, cols = 1, ...rest } = props;
  return <TextareaStyled resize={resize} wFull={wFull} rows={rows} cols={cols} {...rest} onChange={onChange} />;
}
