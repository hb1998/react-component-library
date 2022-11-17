import { ReactNode } from "react";

export interface ISwitchProps{
  value:boolean
  size?:string
  onChange:(checked:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void ;
  label?:string
  disabled?:boolean
  error?:boolean
  className?:string
}

