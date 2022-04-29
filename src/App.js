import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ModalComponent from "./component/atom/ModalComponent";
import LayoutComponent from "./component/organism/LayoutComponent";
import Login from "./component/pages/login/Login";

function App() {
  return (
    <div>
      {/* <ModalComponent /> */}
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
