import React from "react";
import "./LoadingError.css";

export const LoadingError = () =>
  <div className="loading-error">
    <h2 className="loading-error__text">Error while fetching data.</h2>
    <h2 className="loading-error__text">Please try again.</h2>
  </div>;
