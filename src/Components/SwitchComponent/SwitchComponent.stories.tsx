  import React from "react";
  import { Box } from "../../../util/layout/Box";
import { Switch } from "./SwitchComponent";
import "../../../util/layout/Base.css"

export default {
  title: "SwitchComponent",
};

  const SwitchContainer = (props) => (
    <Box className="container">
      <Box className="columns">
        <Box className="column col-3">
          <Switch label="This is enabled" value={true} onChange={(e) => {}} />
          <Switch
            label="This is not enabled"
            value={false}
            onChange={(e) => {}}
          />
          <Switch
            label="This has an error"
            error={true}
            value={false}
            onChange={(e) => {}}
          />
          <Switch
            label="This has an error"
            error={true}
            value={true}
            onChange={(e) => {}}
          />
          <Switch
            label="This is disabled"
            disabled={true}
            value={true}
            onChange={(e) => {}}
          />
          <Switch
            label="This is disabled"
            disabled={true}
            value={false}
            onChange={(e) => {}}
          />
        </Box>
        <Box className="column col-3">
          <Switch
            label="This is enabled"
            value={true}
            onChange={(e) => {}}
            size="mini"
          />
          <Switch
            label="This is not enabled"
            value={false}
            onChange={(e) => {}}
            size="mini"
          />
          <Switch
            label="This has an error"
            error={true}
            value={false}
            onChange={(e) => {}}
            size="mini"
          />
          <Switch
            label="This has an error"
            error={true}
            value={true}
            onChange={(e) => {}}
            size="mini"
          />
          <Switch
            label="This is disabled"
            disabled={true}
            value={true}
            onChange={(e) => {}}
            size="mini"
          />
          <Switch
            label="This is disabled"
            disabled={true}
            value={false}
            onChange={(e) => {}}
            size="mini"
          />
        </Box>
      </Box>
    </Box>
  );

  export const WithSwitch = () => <SwitchContainer />;