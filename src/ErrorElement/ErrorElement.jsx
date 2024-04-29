import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="mt-[200px] space-y-2">
      <h1 className="text-5xl font-bold text-center">{error.status}</h1>
      <h1 className="text-4xl font-bold text-center">{error.statusText}</h1>
      <Link
        to="/"
        className="text-blue-600 underline text-lg text-center block"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorElement;
