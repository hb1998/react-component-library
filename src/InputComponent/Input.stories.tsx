import React from "react";
import Input from "./Input";

export default {
  title: "Input"
};

export const WithText = () => (
  <Input
    heading="I am a test component"
    content={<h2>Made with love by Harvey</h2>} onBlur={function (arg0: string | number): unknown {
      throw new Error("Function not implemented.");
    } }  />
);

export const WithButtons = () => (
  <Input
    heading="I have a button"
    content={<div>
      <button onClick={() => alert("You clicked me!")}>Click me</button>
    </div>} onBlur={function (arg0: string | number): unknown {
      throw new Error("Function not implemented.");
    } }  />
);
