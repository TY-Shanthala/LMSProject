import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimpleDropdown from "../../../atom/SimpleDropdown";
import InputComponent from "../../../atom/InputComponent";
import { IconButton, Paper } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "antd/dist/antd.css";
import { Input, Select, Space, Cascader } from "antd";
import { SettingOutlined } from "@ant-design/icons";

function Contact() {
  const [active, setActive] = React.useState(false);
  const [defaultFormData, setDefaultFormData] = React.useState([
    {
      contactType: "",
      contactNumber: "",
    },
  ]);
  const handleAddClick = () => {
    setActive(true);
    setDefaultFormData([
      ...defaultFormData,
      {
        contactType: "",
        contactNumber: "",
      },
    ]);
  };
  const handleChange = (name, i, e) => {
    let tempFromData = [...defaultFormData];
    tempFromData[i].name = e.target.value;
    setDefaultFormData(tempFromData);
  };
  const handleDeleteClick = (i) => {
    const tempFormData = [...defaultFormData];
    tempFormData.splice(i, 1);
    setDefaultFormData(tempFormData);
  };
  return (
    <div className="m-5">
      {defaultFormData.map((item, i, row) => (
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
          >
            {active && (
              <Typography style={{ color: "#086288" }}>
                {defaultFormData.educationType}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-1 m-2 ">
              <div className="m-3 row d-felx justify-contect-center">
                <div className="col-5">
                  <p className="mb-0">Contact Type</p>
                  <SimpleDropdown />
                </div>
                <div className="col-5">
                  <p className="mb-0"> Contact Number</p>
                  <Input
                    addonBefore={
                      <Cascader placeholder="cascader" style={{ width: 150 }} />
                    }
                    defaultValue="mysite"
                  />
                </div>
              </div>

              <div className="row align-item-right">
                {row.length === i + 1 ? (
                  <IconButton
                    className="col-12"
                    size="small"
                    onClick={handleAddClick}
                  >
                    <AddCircleOutlineIcon color="primary" />{" "}
                    <spam style={{ color: "blue" }}>Add</spam>
                  </IconButton>
                ) : (
                  <IconButton
                    className="col-12"
                    size="small"
                    onClick={() => handleDeleteClick(i)}
                  >
                    <DeleteIcon color="primary" />{" "}
                    <spam style={{ color: "blue" }}>Delete</spam>
                  </IconButton>
                )}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Contact;
