import { type FormEvent, type ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'>;

export default function Form(props: FormProps) {
  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const data = Object.fromEntries(formData);
  // }

  return <form {...props}>{props.children}</form>;
}
