import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new OAuthProvider("microsoft.com");

export const signinMicrosoft = async () => {
  const res = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      return { result, credential };
    })
    .catch((error) => {
      return error;
    });
  return res;
};
