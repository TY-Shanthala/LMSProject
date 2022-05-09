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

function AddressDetails() {
  const [defaultFormData, setDefaultFormData] = React.useState([
    {
      addressType: "",
      doorNo: "",
      street: "",
      locality: "",
      city: "",
      state: "",
      pin: "",
      landMark: "",
    },
  ]);
  const handleAddClick = () => {
    setDefaultFormData([
      ...defaultFormData,
      {
        addressType: "",
        doorNo: "",
        street: "",
        locality: "",
        city: "",
        state: "",
        pin: "",
        landMark: "",
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
    <div>
      <div className="m-5">
        {defaultFormData.map((item, i, row) => (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            ></AccordionSummary>
            <AccordionDetails>
              <div className="p-1 m-2 ">
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">Address Type</p>
                    <InputComponent
                      value={defaultFormData.educationType}
                      onChange={(e) => {
                        handleChange("educationType", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Door No.</p>
                    <InputComponent
                      value={defaultFormData.yop}
                      onChange={(e) => {
                        handleChange("educationType", i, e);
                      }}
                    />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">Street</p>
                    <InputComponent
                      value={defaultFormData.percentage}
                      onChange={(e) => {
                        handleChange("yop", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Locality</p>
                    <SimpleDropdown
                      value={defaultFormData.univName}
                      onChange={(e) => {
                        handleChange("percentage", i, e);
                      }}
                    />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">City</p>
                    <InputComponent
                      value={defaultFormData.InstituteName}
                      onChange={(e) => {
                        handleChange("univName", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">State</p>
                    <SimpleDropdown />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">PIN Code</p>
                    <InputComponent
                      value={defaultFormData.InstituteName}
                      onChange={(e) => {
                        handleChange("univName", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Land Mark</p>
                    <SimpleDropdown />
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
    </div>
  );
}

export default AddressDetails;
