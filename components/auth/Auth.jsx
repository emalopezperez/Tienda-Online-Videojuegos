import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Auth = ({ setSowModal }) => {
  const [showLogin, setShowLogins] = useState(true);

  const showLoginForm = () => setShowLogins(true);
  const showRegisterForm = () => setShowLogins(false);

  return showLogin ? (
    <div>
      <Login showRegisterForm={showRegisterForm} setSowModal={setSowModal} />
    </div>
  ) : (
    <div>
      <Register showLoginForm={showLoginForm} />
    </div>
  );
};

export default Auth;
