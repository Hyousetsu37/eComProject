import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../FormInput/FormInput.component";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import { ButtonContainer } from "./SignInForm.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

export function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGooglePopupUser = async () => {
    await signInWithGooglePopup();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
    return;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function resetFields() {
    setFormFields(defaultFormFields);
  }

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGooglePopupUser}
          >
            Google Sign in
          </Button>
        </ButtonContainer>
      </form>
    </div>
  );
}
