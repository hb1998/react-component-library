import React from "react";
import { Box } from "../../layout/Box";
import Radio from "./Radio";

export default {
  title: "Radio"
};

const RadioContainer = (props) => (
  <Box className="container">
    <Box className="columns">
      <Box className="column col-12">
        <Radio label="This is selected" value={true} onChange={(e) => { }} />
        <Radio
          label="This is not selected"
          value={false}
          onChange={(e) => { }}
        />
        <Radio
          label="This has an error"
          error={true}
          value={true}
          onChange={(e) => { }}
        />
        <Radio
          label="This has an error"
          error={true}
          value={false}
          onChange={(e) => { }}
        />
        <Radio
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={(e) => { }}
        />
        <Radio
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={(e) => { }}
        />
      </Box>
    </Box>
  </Box>
);

export const WithCheckbox = () => <RadioContainer />;