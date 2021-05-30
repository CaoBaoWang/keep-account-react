import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  //background-color: #c4c4c4;

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
        //background: white;
        height: 3px;
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
  }

`

// type X = typeof categoryMap  //X = {"+": string, "-": string}


// type Category = '+' | '-'

const categoryMap = {'-': '支出', '+': '收入'}

//Category = '-'|'+'
type Category = keyof typeof categoryMap

type Props = {
    value: string,
    onChange: (category: Category) => void
}

const CategorySection: React.FC<Props> = (props) => {


    const [categoryList] = useState<Category[]>(['-', '+'])

    const category = props.value

    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map(c =>
                        <li
                            key={c}
                            onClick={() => props.onChange(c)}
                            className={c === category ? 'selected' : ''}>{categoryMap[c]}</li>
                    )
                }

            </ul>
        </Wrapper>
    )
}
export {CategorySection}
export type {Category}

