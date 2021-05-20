import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 12px 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > input {
      background: #f5f5f5;
      border: none;
      margin-left: 16px;
      flex-grow: 1;
      height: 72px;
    }

  }
`

const NoteSection: React.FC = () => {
    const [note, setNote] = useState('')

    const refInput = useRef<HTMLInputElement>(null)
    const x = () => {
        if (refInput.current !== null) {
            setNote(refInput.current.value);
            // v-model.lazy="value"
        }
    }
    return (
        <Wrapper>
            <label>
                备注
                <input type="text" placeholder='输入备注'
                       ref={refInput}
                       defaultValue={note}
                       onBlur={x}
                />
            </label>
        </Wrapper>
    )
}

export {NoteSection}
