import React from "react";
import classnames from "classnames";
import "Input.css";
import { useState } from "react";
import { IProps, InputState } from './InputMask.types';
export const InputMask: React.FC<IProps | InputState> = (props: IProps) => {
    const [state, setState] = useState<any>({ hasFocus: false, value: props.value });

    const onChange = (e: { target: { value: any; }; }) => {
        setState({ value: e.target.value });
    }

    const onBlur = (e: any) => {
        const { type } = props;

        let result = e.target.value;
        if (type == "number") {
            let result = e.target.value ? parseFloat(e.target.value) : "";
            e.target.value = result;
        }
        props["onBlur"](result);
        setState({ hasFocus: false });
    }
    const onFocus = (e: { target: { value: string | number; }; }) => {
        const { value } = props;
        if (state.hasFocus) return;
        e.target.value = value;
        setState({ hasFocus: true, value });
    }

    const {
        icon,
        value,
        formattedValue,
        disabled,
        type,
        placeholder,
        autoFocus,
        error,
        className,
        min,
        max,
        step,
        maxLength,
        inputRef
    } = props;

    const { hasFocus } = state;

    const resolvedClassName = classnames(
        "bf-ui-form-input",
        "form-input",
        { "has-icon-left": icon },
        { "is-error": error },
        { disabled: disabled },
        className
    );
    const inputValue = hasFocus ? state.value : formattedValue;

    return (
        <input
            ref={(ref => inputRef(ref))}
            className={resolvedClassName}
            type={type || "text"}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            value={inputValue}
            min={min}
            max={max}
            step={step}
            maxLength={maxLength}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}
