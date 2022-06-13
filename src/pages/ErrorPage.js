import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useInterval } from "usehooks-ts";

import "./ErrorPage.css";
function ErrorPage() {
  const [counter, setCounter] = useState(5);

  useInterval(
    () => {
      setCounter(counter - 1);
    },
    counter ? 1000 : null
  );

  return (
    <div className="errorpage">
      {counter ? "" : <Navigate to={"/home"} replace="true"></Navigate>}
      <div className="err_container">
        <div className="err_title">
          <h1>Oops! The Page doesn't Exist.</h1>
        </div>
        <div className="err_redirec">
          <h6> Redirecting to Home page in {counter}</h6>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
