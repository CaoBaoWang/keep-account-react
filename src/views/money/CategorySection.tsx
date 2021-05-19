import styled from "styled-components";

const CategorySection = styled.section`
  background-color: #c4c4c4;

  > ul {
    display: flex;

    > li {
      padding: 22px 0;
      flex-grow: 1;
      text-align: center;
      font-size: 24px;

      position: relative;

      &.selected:after {
        content: '';
        display: block;
        background: #333;
        height: 3px;
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
  }

`
export {CategorySection}
