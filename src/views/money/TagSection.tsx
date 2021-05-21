import styled from "styled-components";
import React, { useState} from "react";

const Wrapper = styled.section`
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
      
      &.selected {
        background: red;
      }
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
type Props = {
    value:string[],
    onChange : (selectedTags:string[])=> void
}

const TagSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    // const [selectedTags, setSelectedTags] = useState<string[]>([])
    const selectedTags = props.value
    const addTag = () => {
        const newTag = window.prompt('请输入新标签名称')
        console.log(newTag)
        if (newTag !== null) {
            setTags([...tags, newTag])
        }
    }
    const onToggleTag = (tag: string) => {
        if (selectedTags.indexOf(tag) >= 0) {
            props.onChange(selectedTags.filter(s => s !== tag))
        } else {
            props.onChange([...selectedTags,tag])
        }

    }
    const getClass = (tag: string) => {
        const index  = selectedTags.indexOf(tag)

        return index >=0? 'selected':''
    }

    return (
        <Wrapper>

            <ul>
                {
                    tags.map((tag) => {
                            return (
                                <li className={getClass(tag)} onClick={() => onToggleTag(tag)} key={tag}>{tag}</li>
                            )
                        }
                    )
                }
            </ul>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection}
