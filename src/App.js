// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import ModalComponent from "./component/atom/ModalComponent";
// import LayoutComponent from "./component/organism/LayoutComponent";

// function App() {
//   return (
//     <div>
//       {/* <ModalComponent /> */}
//       <BrowserRouter>
//         <LayoutComponent />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { ChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
class App extends React.Component {
  render() {
    return <ChartComponent />;
  }
}
export default App;
