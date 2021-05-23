import styled from "styled-components";
import React from "react";


const Label = styled.label`

  display: flex;
  align-items: center;

  > input {
    background: #f5f5f5;
    border: none;
    margin-left: 16px;
    flex-grow: 1;
    height: 44px;

  }

`

type Props = {
    label:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {

    const {label,children,...reset } = props

    return (
        <Label>
            <span>备注</span>
            <input
                value={label}
                {...reset}
            />
        </Label>
    )
}


export {Input}
