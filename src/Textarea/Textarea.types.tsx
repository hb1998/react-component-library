
export interface ITextareaProps{
    value:string;
    disabled?:boolean;
    rows:number;
    placeholder?:string;
    onChange:(data:string,value:React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown:(data:React.KeyboardEvent<HTMLElement>) => void;
    error?:string;
    className?:string;
    style?:React.CSSProperties;
    autoFocus?: boolean;
}