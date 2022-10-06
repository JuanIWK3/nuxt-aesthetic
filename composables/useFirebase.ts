import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

export const googleSignIn = () => {
  const auth = getAuth();
  return signInWithPopup(auth, new GoogleAuthProvider());
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://vue-fire-auth-d4f4f.web.app/",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "vuefireauth.page.link",
};

export const sendSignLink = async (email: string) => {
  const auth = getAuth();
  const $router = useRouter();

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    alert("Email sent");
    localStorage.setItem("emailForSignIn", email);
    $router.push("/login/email-confirmation");
  } catch (error) {
    alert(error.message);
    error;
  }
};
