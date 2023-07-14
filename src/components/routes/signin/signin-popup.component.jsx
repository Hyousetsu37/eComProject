import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import { Button } from "../../Button/Button.component";
import { SignUpForm } from "../../SignUpForm/SignUpForm.component";

export default function SignIn() {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGooglePopupUser}>
        Sign in with Google Popup
      </Button>

      <SignUpForm />
    </>
  );
}
