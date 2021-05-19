import styled from "styled-components";

const TagSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > ul {
    flex-wrap: wrap;

    margin: 0 -12px;
    display: flex;
    padding-left: 4px;

    > li {
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      border-radius: 18px;
      background: #D9D9D9;
    }
  }

  > button {
    flex-shrink: 0;
    max-width: 70px;
    font-size: 14px;
    border: none;
    background: none;
    padding: 2px 4px;
    border-bottom: 1px solid #666666;
    color: #666;
    margin-top: 8px;


  }
`
export {TagSection}
