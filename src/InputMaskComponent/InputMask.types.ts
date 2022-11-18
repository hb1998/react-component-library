export interface IProps {
    onBlur?: any
    icon?: string;
    value?: string | number;
    formattedValue?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    type?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    onChange?: Function;
    inputRef?: Function;
    step?: string;
}

export interface InputState {
    hasFocus: boolean;
    value?: string | number;
}
