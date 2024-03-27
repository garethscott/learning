import { forwardRef, type ComponentPropsWithoutRef } from 'react';

// Below we make use the ComponetsPropsWithoutRefs, this is
// use to spread all the types of input into the componets so a
// type prop can be passed, notice in this example the ref is
// passed from outside the component and the ref prop would not be
// allowed to be be passed, so ComponentPropsWithoutRef allows
// you to use all the attributes of the type of element in this
// case, the iput element

// Look at lesson 57

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

// Below is a example of using the forwardRef function in TS with React

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
