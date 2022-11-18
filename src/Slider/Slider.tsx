import * as React from 'react';
import { Component } from 'react';
import '../Slider/Slider.css';
import {ISliderProps} from './Slider.types'

const Slider:React.FC<ISliderProps> = (props:ISliderProps) => {

    const { value, min, max } = props;

    return (
      <div className="bf-ui-form-slider">
        <input role="slider" 
        value={value} 
        className="slider" 
        type="range" 
        min={min || 0} 
        max={max || 100}
        aria-valuemax={max || 100}
        aria-valuemin={min || 0}
        aria-valuenow={parseInt(value)}></input>
      </div>
    );
  }

  export default Slider;
