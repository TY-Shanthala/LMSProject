import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";
import "./style/color.scss";
import Login from "./component/pages/login/Login";
import TextAreaComponent from "./component/atom/TextAreaComponent";
import EmployeeLayout from "./component/pages/employee/EmployeeLayout";

function App() {
  return (
    <div>
      {/* <div className="m-5" style={{ width: "30%" }}> */}
      <BrowserRouter>
        <EmployeeLayout />
      </BrowserRouter>
      {/* </div> */}
      {/* <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
