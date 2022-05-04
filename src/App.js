import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";
import "./style/color.scss";
import Login from "./component/pages/login/Login";
import TextAreaComponent from "./component/atom/TextAreaComponent";
import ProtectedRoute from "./component/organism/ProtectedRoute";

function App() {
  return (
    <div>
      {/* <div className="w-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/*" />
            </Route>
          </Routes>

          {/* <LayoutComponent /> */}
      {/* <DetailsModal /> */}
      {/* </BrowserRouter>
      </div>  */}

      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
