import { SignInForm } from "../../components/SignInForm/SignInForm.component";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm.component";
import "./authentication.styles.scss";

export default function SignInPage() {
  return (
    <div className="authentication-container ">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
