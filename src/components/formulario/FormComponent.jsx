import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, userName, email, password, onInputChange } =
    useForm(initialForm);

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(formState);
  };

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
