import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && <p>{ error.data }</p>}
      <NavLink to="/"><button>Go Back to Home Page</button></NavLink>
    </div>
  );
};