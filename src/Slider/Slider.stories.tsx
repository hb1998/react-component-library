import React from "react";
import Slider  from '../Slider/Slider';

const Sliderstory = (props) =>{
    return(<Slider value={"10"} disabled={true}/>)
}

export default { title: "Slider" };
export const WithSlider = () => <Sliderstory />;