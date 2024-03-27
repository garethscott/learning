import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type ElementType,
} from 'react';

// This is a polymophic component, a conponent that doesnt know what
// it will be containing
// Below the greneric <T> is place holder for the incoming type that is
// working with ContainerPropsType, and the 'extends ElementType' lets
// TS know that the generic type will be a type of ElementType
// Look at lesson 54 and 55

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
