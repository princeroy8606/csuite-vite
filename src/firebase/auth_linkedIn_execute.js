import { OAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";

const provider = new OAuthProvider("oidc.linkedin");
const auth = getAuth();

export const signinLinkedIn = async () => {
  const res = await signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
