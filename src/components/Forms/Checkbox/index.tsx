import { ChangeEvent, ComponentPropsWithoutRef } from 'react';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value?: string | number;
  checked?: boolean;
}

export default function Checkbox(props: CheckboxProps & Omit<CheckboxProps, keyof ComponentPropsWithoutRef<'input'>>) {
  const { onChange, value, checked, type = 'checkbox', ...rest } = props;
  return <input type={type} onChange={onChange} value={value} checked={checked} {...rest} />;
}
