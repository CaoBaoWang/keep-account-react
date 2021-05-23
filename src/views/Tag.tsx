import React
    from "react";
import {useTags} from "useTags";

import {useParams} from 'react-router-dom'
import Layout from "components/Layout";
import Icon from "components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

type Params = {
    tagId: string
}


const TopBar = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px 16px;

  & > label {
    position: absolute;
    left: 16px;
    padding: 8px;
    margin-top: -8px;
    
  }

`

const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    const tag = findTag(parseInt(tagId))

    return (
        <Layout>
            <TopBar>
                <label >
                    <Icon name="left"/>
                </label>
                <span>编辑标签</span>
            </TopBar>
            <label>
                <span>标签名</span>
                <input type="text"  value={tag.name} placeholder="请输入标签名"/>
            </label>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )

}

export {Tag}
