import { useRoutes } from "react-router-dom";
import Batch from "../pages/batch/Batch";
import Mentor from "../pages/mentor/Mentor";
import Request from "../pages/request/Request";

const RouterComponent = () => {
  const routesObj = [
    {
      // element: <Batch />,
      element: <div>hskhdkj</div>,
      path: "/batch",
    },
    {
      element: <Mentor />,
      path: "/mentor",
    },
    {
      element: <Request />,
      path: "/request",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default RouterComponent;
