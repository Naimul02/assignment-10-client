import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Loading from "../component/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  return <div></div>;
};

export default PrivateRoute;
