import { Box } from "@mui/system";
import React, { useState } from "react";
import InputComponent from "../../../atom/InputComponent";
import ModalComponent from "../../../molicules/ModalComponent";

function AdminMentorModel({ setOpenBatch, getTableData }) {
  const [defaultFormData, setDefaultFormData] = useState({
    mentorName: "",
    employeeId: "",
    email: "",
    skills: "",
  });

  console.log(defaultFormData.technologies, "defaultFormData.technologies");

  const modalValue = "add";
  // const handleSubmit = async () => {
  //   const payload = {
  //     batchName: defaultFormData.name,
  //     mentorName: defaultFormData.mentorName,
  //     techId: defaultFormData.technologies,
  //     startDate: defaultFormData.startDateString,
  //     endDate: defaultFormData.endDateString,
  //   };
  //   const { data, errRes } =
  //     modalValue === "add"
  //       ? await batchSubmit(payload)
  //       : await batchSubmit(payload);
  //   if (data) {
  //     await getTableData();
  //   } else if (errRes) {
  //     console.log(errRes.message);
  //   } else {
  //     console.log("Something went wrong");
  //   }
  // };

  return (
    <div>
      <ModalComponent
        // onSubmitBtnClick={handleSubmit}
        submitBtnText="Create"
        modalWidth={"450px"}
        modalTitle={"Add new batch"}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenBatch(false)}
      >
        <Box className="p-5 pt-4 overflowY-scroll h-550">
          <p className="mb-0 txt-gray">Mentor Name</p>
          <div className="mb-4">
            <InputComponent
              value={defaultFormData.mentorName}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  mentorName: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0 txt-gray">Employee ID </p>
            {/* <SimpleDropdown /> */}
            <InputComponent
              value={defaultFormData.employeeId}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  employeeId: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0 txt-gray">E-mail ID </p>
            {/* <SimpleDropdown /> */}
            <InputComponent
              value={defaultFormData.email}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-0">
            <p className="mb-0 txt-gray">Skills</p>
            {/* <MultipleSelectCheckmarks modalWidth="100%" /> */}
            <InputComponent
              value={defaultFormData.skills}
              onChange={(e) => {
                let array = [];
                array.push(e.target.value);
                setDefaultFormData({
                  ...defaultFormData,
                  skills: array,
                });
              }}
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default AdminMentorModel;
