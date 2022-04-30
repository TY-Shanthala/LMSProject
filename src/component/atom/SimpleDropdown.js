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
        dropdownStyle={{ zindex: "5000px", opacity: 5 }}
        suffixIcon={<KeyboardArrowDownIcon />}
        style={{
          width: "100%",
        }}
        options={options}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
}

export default SimpleDropdown;
