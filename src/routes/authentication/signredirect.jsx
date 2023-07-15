import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    async function getResultDataRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        // eslint-disable-next-line no-unused-vars
        await createUserDocumentFromAuth(response.user);
      }
    }

    getResultDataRedirect();
  }, []);

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </>
  );
}
