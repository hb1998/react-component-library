import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Layout/Box';
import { Tile } from "./Tile";
import './Tile.css';

const TileBasic = (props) => (
  <Box className = "container" >
    <Box className="columns">
      <Box className="column col-3">
        <Tile
          title="Default"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          primary
          title="Primary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          secondary
          title="Secondary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          disabled
          title="Disabled"
          subtitle="This is a test tile, don't click"
        />
      </Box>
    </Box>
  </Box>
)

const TileIcon = (props) => (
  <Box className="container">
    <Box className="columns">
      <Box className="column col-3">
        <Tile
          icon="Refresh"
          title="Default"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          primary
          icon="Search"
          title="Primary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          secondary
          icon="Settings"
          title="Secondary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
          disabled
          icon="Message"
          title="Disabled"
          subtitle="This is a test tile, don't click"
        />
      </Box>
    </Box>
  </Box>
)

const TileOnClick = (props) => (
  <Box className="container">
    <Box className="columns">
      <Box className="column col-3">
        <Tile
          onClick={() => alert('Hey, I just got clicked!')}
          title="Clickable tile"
          subtitle="Click me like you mean it"
        />
      </Box>
    </Box>
  </Box>
)

export default { title: "Tile" };
export const WithBasic = () => <TileBasic />;
export const WithIcon = () => <TileIcon />;
export const WithOnClick = () => <TileOnClick />;

