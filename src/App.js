import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";

function App() {
  return (
    <div>
      {/* <div className="m-5" style={{ width: "30%" }}>
        <SimpleDropdown />
      </div> */}
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
