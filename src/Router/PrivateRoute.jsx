import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Loading from "../component/Loading/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
