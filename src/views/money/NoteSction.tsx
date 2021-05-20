import styled from "styled-components";
import React, {useState} from "react";

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
    const [note,setNote] = useState('')

    return (
        <Wrapper>
            {note}
            <label>
                备注
                <input type="text"
                       value={note}
                       onChange={e=> setNote(e.target.value)}
                       placeholder='输入备注'/>
            </label>
        </Wrapper>
    )
}

export {NoteSection}
