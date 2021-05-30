import styled from "styled-components";
import React, { } from "react";
import {useTags} from "hooks/useTags";
import {createId} from "lib/createId";

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
      background: #EBEBEB;
      color: #3E4459;
      
      &.selected {
        background: #C5D2FF;
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
    value:number[],
    onChange : (selectedTags:number[])=> void
}

const TagSection: React.FC<Props> = (props) => {
    const {tags,setTags} = useTags()

    const selectedTagIds = props.value
    const addTag = () => {
        const tagName = window.prompt('请输入新标签名称')
        console.log(tagName)
        if (tagName !== null) {
            setTags([...tags, {id:createId(),name:tagName}])
        }
    }
    const onToggleTag = (tagId: number) => {
        const isSelected = selectedTagIds.indexOf(tagId) >= 0
        if (isSelected) {
            props.onChange(selectedTagIds.filter(s => s !== tagId))
        } else {
            props.onChange([...selectedTagIds,tagId])
        }

    }
    const getClass = (tagId: number) => {
        const isSelected  = selectedTagIds.indexOf(tagId) >=0
        return isSelected ? 'selected':''
    }

    return (
        <Wrapper>

            <ul>
                {
                    tags.map((tag) => {
                            return (
                                <li className={getClass(tag.id)} onClick={() => onToggleTag(tag.id)} key={tag.name}>{tag.name}</li>
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
