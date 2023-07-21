import { SignInForm } from "../../components/SignInForm/SignInForm.component";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";

export default function SignInPage() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
