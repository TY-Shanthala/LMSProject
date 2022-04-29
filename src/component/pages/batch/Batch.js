import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "../../atom/ButtonComponent";
import { Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";
import BatchModal from "../../forms/BatchModal";
import { batchGetAll } from "../../../services/util/batch/BatchServices";
// import batchGetAll from "../../../services/util/batch/BatchServices";
import CONSTANTS from "../../constents/Index";

function Batch() {
  const [openBatch, setOpenBatch] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const { data, errRes } = await batchGetAll();
    setBatchData(data.data);
    let arrayOfRows = [];
    data && console.log(data);
    data.data.map((item, index) => {
      console.log(data);
      arrayOfRows.push({
        col1: index + 1,
        col2: item.number,
        col3: item.batchName,
        col4: item.mentor.mentorName,
        // col5: null,
        col6: item.startDate,
        col7: item.endDate,
        col8: item.status,
      });
    });
    setRows(arrayOfRows);
  };

  return (
    <div>
      <Toolbar
        sx={{
          p: 0,
        }}
        className="row"
      >
        <Box className="col-6">
          <Typography color={"#FAA81D"}>Batch list</Typography>
        </Box>
        <Box className="col-4 d-flex">
          <Input
            size="default"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Box>
        <Box className="col-2">
          <ButtonComponent
            label="New Batch"
            muiProps="orange"
            fullwidth
            size="small"
            onClick={() => {
              setOpenBatch(true);
            }}
            showIcon={true}
            iconOrintation="start"
            iconName="add"
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        {console.log(CONSTANTS.BATCH_HEADER, "CONSTANTS.BATCH_HEADER")}
        <TableComponent tablerow={rows} headCells={CONSTANTS.BATCH_HEADER} />
      </div>
      {openBatch && (
        <BatchModal
          getTableData={getTableData}
          openBatch={openBatch}
          setOpenBatch={setOpenBatch}
        />
      )}
    </div>
  );
}

export default Batch;
