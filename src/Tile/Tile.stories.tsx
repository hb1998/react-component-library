import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Box  from '../Box/Box';
import { Tile } from "./Tile";
import './Tile.css';

const TileBasic = (props) => (
  <Box className = "container" >
    <Box className="columns">
      <Box className="column col-3">
        <Tile onClick={() => {}}
          title="Default"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={() => {}}
          primary
          title="Primary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={() => {}}
          secondary
          title="Secondary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={() => {}}
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
        onClick={(e) => e}
          icon="Refresh"
          title="Default"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={(e) => e}
          primary
          icon="Search"
          title="Primary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={(e) => e}
          secondary
          icon="Settings"
          title="Secondary"
          subtitle="This is a test tile, don't click"
        />
      </Box>
      <Box className="column col-3">
        <Tile
        onClick={(e) => e}
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

