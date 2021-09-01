import { useHistory } from "react-router";
import React, { useEffect } from "react";

const SignIn = ({ setAuth, auth }) => {
  const history = useHistory();
  console.log({ auth });
  //useEffect(() => {
  // window.onpopstate = () => {
  //   console.log(
  //     "useEffect SignIn",
  //     history.location.state?.from === "fromSignUp"
  //   );
  //   if (history.location.state?.from === "fromSignUp") {
  //     history.push({
  //       pathname: "/signup",
  //       state: { from: "fromSignIn" }
  //     });
  //   } else {
  //     setAuth(false);
  //   }
  // };
  // }, [setAuth, history]);
  return (
    <div>
      <div>Hello plaese sign up first!</div>

      <button
        onClick={() => {
          history.push("/signup", { from: "fromSignIn" });
        }}
      >
        SIGN UP
      </button>
    </div>
  );
};

export default SignIn;
