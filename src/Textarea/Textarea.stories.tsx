import React from "react";
import Textarea  from '../Textarea/Textarea';

const Textareastory = (props) =>{
    return(<Textarea onChange={(e) => { }} onKeyDown={() => { }}  rows={10} value={""}/>)
}

export default { title: "TextArea" };
export const WithTextarea = () => <Textareastory />;