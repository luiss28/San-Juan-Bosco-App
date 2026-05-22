import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';
import InputField from '../components/InputField';

export default function RegistrationPage() {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const password2Field = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const username = usernameField.current.value;
    const email = emailField.current.value;
    const password = passwordField.current.value;
    const password2 = password2Field.current.value;

    let errors ={};

    if (!username) errors.username = "Username required";
    if (!email) errors.email = "Email required";
    if (!password) errors.password = "Password required";

    if (password !== password2) {
        errors.password2 = "Passwords must match";
    }

    if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
    }

    setFormErrors({});

    const response = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        if (data.message.includes("username")) {
            setFormErrors({ username: data.message });
        } else if (data.message.includes("Email")) {
            setFormErrors({ email: data.message });
        } else {
            setFormErrors({ username: data.message || "Registration failed"});
        }
        return;
    }

    window.location.href = "/login";

  };

  return (
    <Body>
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username" label="Username"
          error={formErrors.username} fieldRef={usernameField} />
        <InputField
          name="email" label="Email address"
          error={formErrors.email} fieldRef={emailField} />
        <InputField
          name="password" label="Password" type="password"
          error={formErrors.password} fieldRef={passwordField} />
        <InputField
          name="password2" label="Password again" type="password"
          error={formErrors.password2} fieldRef={password2Field} />
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Body>
  );
}