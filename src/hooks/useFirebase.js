import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const toggleLogIn = (e) => {
    setIsLogin(e.target.checked);
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => {
      setIsLoading(false);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("password must contain 2 upper case");
      return;
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters long");
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
      setError("");
    });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      setError("");
      console.log(user);
    });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    isLogin,
    error,
    handleRegistration,
    handlePasswordChange,
    handleEmailChange,
    toggleLogIn,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
