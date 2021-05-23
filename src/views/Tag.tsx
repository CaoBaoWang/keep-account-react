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
import {Input} from "../components/Input";

type Params = {
    tagId: string
}


const TopBar = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px 16px;
  background: white;


  & > label {
    position: absolute;
    left: 16px;
    padding: 8px;
    margin-top: -8px;

  }

`

const InputWrapper = styled.div`
  padding: 0 16px;
  background: white;
  margin-top: 8px;
  border-bottom: 1px solid #e3e3e3;

`
const Wrapper = styled.div`
  background: #F5F5F5;

`
const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    const tag = findTag(parseInt(tagId))

    return (
        <Wrapper>

            <Layout>
                <TopBar>
                    <label>
                        <Icon name="left"/>
                    </label>
                    <span>编辑标签</span>
                </TopBar>

                <InputWrapper>
                    <Input label='标签名' value={tag.name} placeholder='请输入标签名'/>

                </InputWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button>删除标签</Button>
                </Center>
            </Layout>
        </Wrapper>

    )

}

export {Tag}
