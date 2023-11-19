import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useEffect, useRef } from "react";

export const FormComponent = () => {

  const focusRef = useRef()
  console.log(focusRef);

  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, userName, email, password, onInputChange } = useForm(initialForm);

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(()=>{
    focusRef.current.focus()
  },[])

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="User Name"
          name="userName"
          value={userName}
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          ref={focusRef}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
