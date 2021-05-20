import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
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
// type Category = '+' | '-'

const CategorySection: React.FC = () => {
    const categoryMap = {'-': '支出', '+': '收入'}
    // type X = typeof categoryMap  //X = {"+": string, "-": string}
    type Category = keyof typeof categoryMap //Category = '-'|'+'

    const [categoryList] = useState<Category[]>(['-', '+'])

    const [category, setCategory] = useState('-')


    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map(c =>
                        <li
                            onClick={() => setCategory(c)}
                            className={c === category ? 'selected' : ''}>{categoryMap[c]}</li>
                    )
                }
                {/*<li className="selected"> 支出</li>*/}
                {/*<li>收入</li>*/}
            </ul>
        </Wrapper>
    )
}
export {CategorySection}
