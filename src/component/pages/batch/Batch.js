import React from "react";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "../../atom/ButtonComponent";
import { Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";

function Batch() {
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
            showIcon={true}
            iconOrintation="start"
            iconName="add"
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent />
      </div>
    </div>
  );
}

export default Batch;
