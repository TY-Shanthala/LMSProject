import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ModalComponent from "./component/atom/ModalComponent";
import LayoutComponent from "./component/organism/LayoutComponent";

function App() {
  return (
    <div>
      {/* <ModalComponent /> */}
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
