import React from "react";
import Input from "./Input";

export default {
  title: "Input"
};

export const WithText = () => (
  <Input
    heading="I am a test component"
    content={<h2>Made with love by Harvey</h2>}
  />
);

export const WithButtons = () => (
  <Input
    heading="I have a button"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);
