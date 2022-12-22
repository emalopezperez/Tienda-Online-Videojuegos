import { useState } from "react";
import Login from "../auth/Login"
import Register from "../auth/Register"

const Auth = () => {
  const [showLogin, setShowLogins] = useState(true);

  const showLoginForm = () => setShowLogins(true)
  const showRegisterForm = () => setShowLogins(false)

  return showLogin ? 
      <div>
        <Login
          showRegisterForm= {showRegisterForm}
        />
      </div> 
      :
      <div> 
        <Register
          showLoginForm={showLoginForm }
        />
      </div>;
};

export default Auth;
