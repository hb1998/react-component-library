import React from "react";
import { Box } from "../../../util/layout/Box";
import { Select } from "./SelectComponent";

export default {
  title: "SelectComponent",
};


const SelectContainer = (props) => {
  const options = [
    {
      value: "first-item",
      label: "First Item",
    },
    {
      value: "second-item",
      label: "Second Item",
    },
    {
      value: "third-item",
      label: "Third Item",
      selected: true,
    },
  ];

  return (
    <Box className="container p-16">
      <Box className="columns pb-16">
        <Box className="column col-3">
          <Select
            defaultValue={"second-item"}
            options={options}
            placeholder="This is a default select"
          />
        </Box>
      </Box>
      <Box className="columns pb-16">
        <Box className="column col-3">
          <Select
            options={options}
            placeholder="This is a default select (with value)"
            value="first-item"
          />
        </Box>
      </Box>
      <Box className="columns pb-16">
        <Box className="column col-3">
          <Select
            options={options}
            placeholder="This has an error"
            error={true}
            value="first-item"
          />
        </Box>
      </Box>
      <Box className="columns pb-16">
        <Box className="column col-3">
          <Select
            options={options}
            placeholder="This is a disabled select"
            disabled={true}
            value="first-item"
          />
        </Box>
      </Box>
    </Box>
  );
};

export const WithSelect = () => <SelectContainer />;
