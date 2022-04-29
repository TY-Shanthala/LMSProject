import React from "react";
import { Input, AutoComplete } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SimpleDropdown() {
  const options = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];
  return (
    <div>
      <AutoComplete
        suffixIcon={<KeyboardArrowDownIcon />}
        style={{
          zIndex: 7,
          width: "100%",
        }}
        options={options}
        // placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
}

export default SimpleDropdown;
