import { useField } from "@unform/core";
import React, { ComponentType, FunctionComponent, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { IconBaseProps } from "react-icons/lib";

import { InputWrapper, InputStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  icon?: ComponentType<IconBaseProps>;
}

export const Input: FunctionComponent<InputProps> = ({ icon: Icon, name, title, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  },[fieldName, registerField]);

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  },[])

  return (
    <InputWrapper>
      <label>{title}
        <InputStyled isFilled={isFilled} isFocused={isFocused}>
          <input
            {...rest}
            onFocus={() => setIsFocused(true)}
            onBlur={handleInputBlur}
            ref={inputRef}
            defaultValue={defaultValue}
          />
          {Icon && <Icon size={18} color="#918A93" />}
        </InputStyled>
      </label>
    </InputWrapper>
  )
};
