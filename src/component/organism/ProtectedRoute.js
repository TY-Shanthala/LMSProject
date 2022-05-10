import { Navigate } from "react-router-dom";
import LayoutComponent from "./LayoutComponent";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // decreption should be done
  console.log(role);
  if (!user) {
    return <Navigate to="/" replace />;
  } else if (role === "admin") {
    return <LayoutComponent />;
  } else {
    return <p>page not found</p>;
  }
};

export default ProtectedRoute;
