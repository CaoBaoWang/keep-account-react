import styled from "styled-components";
import React from "react";


const Label = styled.label`

  display: flex;
  align-items: center;

  > input {
    border: none;
    margin-left: 16px;
    flex-grow: 1;
    height: 44px;
    background: none;

  }

`

type Props = {
    label:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {

    const {label,children,...reset } = props

    return (
        <Label>
            <span>{label}</span>
            <input
                {...reset}
            />
        </Label>
    )
}


export {Input}
