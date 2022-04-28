// import React, { PureComponent } from "react";
// import { Doughnut, arc } from "react-chartjs-2";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

// const listItemStyle = {
//   color: "#333",
//   listStyle: "none",
//   textAlign: "left",
//   display: "flex",
//   flexDirection: "row",
//   margin: "8px",
// };

// export default class DoughnutDemo extends PureComponent {
//   state = {
//     legend: [],
//   };

//   componentDidMount() {
//     const component = this.doughnut;
//     // console.log('component', component)
//     this.setState({ legend: component.chartInstance.legend.legendItems });

//     console.log(component.chartInstance.legend.legendItems);
//   }

//   render() {
//     const { legend } = this.state;
//     return (
//       <div>
//         <h2>Doughnut Chart with custom legend example</h2>
//         <Doughnut
//           ref={(ref) => (this.doughnut = ref)}
//           data={data}
//           options={{
//             legend: {
//               display: false,
//             },
//           }}
//         />
//         <ul className="mt-8">
          
//           {legend.length &&
//             legend.map((item) => {
//               return (
//                 <li key={item.text} style={listItemStyle}>
//                   <div
//                     style={{
//                       marginRight: "8px",
//                       width: "20px",
//                       height: "20px",
//                       backgroundColor: item.fillStyle,
//                     }}
//                   />
//                   {item.text}
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//     );
//   }
// }



