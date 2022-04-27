import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PiChart from "../../molicules/Pi-ChartComponent";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper sx={{ width: " 540px", height: "317px" }} elevation={10}>
        hsgfddddddddddddddddddddddddddddddddddddddddddddddddddjahgdfjhdfgjdhgdjhgdfjhdfgdjhgdjfhgdfjhdgfjhdgdfjhgfjhdfgdfdfjgdf
        djfhdkjfhdkfhjdfkhdfkjdhfkjdfh fkjdbfkjdfhjdgdjhgf
        dfhkjdhfkjdgfkjdfgdkjgdf dfjhgdfkgdfkjdfkjdfhkjdfhdjkfhjkhf
        ddfjhdgfjhdfgdjfdgfjhdfgdjhgdfjhgdf dhfmjdhfkjfhkjfdkjfhdjfh
        df,mdnf,mdgkdhgkjghkgjjkghgkj dgbmdgbkjgkjgfjghgkjhg
      </Paper>
    </Box>
  );
}
