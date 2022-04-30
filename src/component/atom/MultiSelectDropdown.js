import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

function MultiSelectDropdown({ value = "", label = "", onChange = () => {} }) {
  const options = [
    "JFSR",
    "JFSA",
    "React",
    "Angular",
    "Java + Spring Boot",
    "Node & Express JS",
  ];
  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: "100%", zIndex: "2000px" }}
        onChange={onChange}
        optionLabelProp="label"
      >
        {options.map((value) => {
          return (
            <Option value={value} label={label}>
              <div className="demo-option-label-item">{value}</div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default MultiSelectDropdown;
