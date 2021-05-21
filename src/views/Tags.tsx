import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/Icon";

const TagsList = styled.ul`
  font-size: 16px;
  background: white;

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;

    .icon {
      min-width: 16px;
      min-height: 16px;
    }
  }

`


const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: red;
  color:white;
  border-radius: 4px;
  width: 100px;
  height: 40px;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Space = styled.div `
  height: 16px;
`


function Tags() {
    const {tags, setTags} = useTags()
    return (
        <Layout>
            <TagsList>
                {
                    tags.map(tag =>
                        <li>

                            <span className="oneLine">{tag}
                            </span>
                            <Icon name="right"/>

                        </li>
                    )
                }

            </TagsList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags
