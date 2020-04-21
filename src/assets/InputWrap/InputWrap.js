import React from "react";

export const InputWrap = React.forwardRef(
    (
        {
            label,
            disabled = false,
            type = "text",
            placeholder = "",
            value = "",
            onChange,
            className ="",
            ...restProps
        },
        ref,
    ) => (
        <div className="form-group">
            {!!label && (
                <label>
                    {label}
                </label>
            )}
            <input
                disabled={disabled}
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                ref={ref}
                {...restProps}
            />
        </div>
    ),
);
InputWrap.displayName = "InputWrap";
