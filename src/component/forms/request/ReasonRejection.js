import React from "react";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ReasonRejection({ setReject, reject }) {
  return (
    <div>
      <ModalComponent
        open={reject}
        onCloseIconClick={() => {
          setReject(false);
        }}
        modalTitle="Reason for Rejection"
        modalWidth={400}
        showPreviousBtn={false}
      >
        <div className="p-2 px-5" style={{ width: " 100% " }}>
          <p className="mb-0">Reason</p>
          <TextAreaComponent placeholder="" />
        </div>
      </ModalComponent>
    </div>
  );
}

export default ReasonRejection;
