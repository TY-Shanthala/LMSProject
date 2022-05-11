import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

function MultiSelectDropdown({
  value = [],
  label = "",
  onChange = () => {},
  options = [],
}) {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(options);
  }, [options]);

  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        onChange={onChange}
        optionLabelProp="label"
        dropdownStyle={{ zIndex: 100000 }}
        value={value}
      >
        {state.map((val) => {
          return (
            <Option value={val.tech} label={val.tech} title={val.tech}>
              <div className="demo-option-label-item">{val.value}</div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default MultiSelectDropdown;
