// import { useRef } from 'react';
import Form from './components/Form.tsx';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
  // Passing ref into input for forwardRef function
  // const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
