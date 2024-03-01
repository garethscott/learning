import { type ComponentPropsWithoutRef } from 'react';

// Below we make use the ComponetsPropsWithoutRefs, this is
// use to spread all the types of input into the componets so a
// type prop can be passed, noticed a ref prop would not be
// allowed to be be passed

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
