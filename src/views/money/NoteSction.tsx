import styled from "styled-components";

const NoteSection = styled.section`
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
export {NoteSection}
