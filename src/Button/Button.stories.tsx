import React from "react";
import { Box } from '../Layout/Box';
import  Button  from '../Button/Button';
import '../../src/Base.css';

export const ButtonColors = (props) => {
  return (
    <Box className="container">
      <Box className="columns p-16">
        <Box className="mr-8">
          <Button onClick={(e) => e}>Default</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e}primary="primary">Primary</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e} secondary="secondary">Secondary</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e} disabled>Disabled</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e} success="success">Success</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e} error="error">Error</Button>
        </Box>
      </Box>
    </Box>
  )
}

export const ButtonSizes = (props) => {
  return (
    <Box className="container">
      <Box className="columns p-16">
        <Box className="mr-8">
          <Button primary="primary" onClick={(e) => e} size="sm">Primary</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e}>Default</Button>
        </Box>
        <Box className="mr-8">
          <Button onClick={(e) => e} secondary="secondary" size="lg">Secondary</Button>
        </Box>
      </Box>
    </Box>
  )
}


export default { title: "Button" };

export const WithColorVariations = () => <ButtonColors />;
export const WithSizeVariations = () => <ButtonSizes />;
