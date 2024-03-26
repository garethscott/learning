import { type ComponentPropsWithoutRef } from 'react';

// type ButtonProps = {
//   element: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   element: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// Below uses a Type Predicates, not assigning a element property and using
// but using a the isAnchorProps funtction to test for attributes within the
// element type
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  // if (props.element === 'anchor') {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
