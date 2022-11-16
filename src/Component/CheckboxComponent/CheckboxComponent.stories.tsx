import React from "react";
import { Box } from "../../layout/Box";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox"
};

// export const WithText = () => (
//   <Checkbox
//     heading="I am a test component"
//     content={<h2>Made with love by Harvey</h2>}
//   />
// );

const CheckboxContainer = (props) => (
  <Box className="container">
    <Box className="columns">
      <Box className="column col-12">
        <Checkbox label="This is checked" value={true} onChange={(e) => { }} />
        <Checkbox
          label="This is unchecked"
          value={false}
          onChange={(e) => { }}
        />
        <Checkbox
          label="This has an error"
          error={true}
          value={true}
          onChange={(e) => { }}
        />
        <Checkbox
          label="This has an error"
          error={true}
          value={false}
          onChange={(e) => { }}
        />
        <Checkbox
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={(e) => { }}
        />
        <Checkbox
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={(e) => { }}
        />
      </Box>
    </Box>
  </Box>
);

export const WithCheckbox = () => <CheckboxContainer />;