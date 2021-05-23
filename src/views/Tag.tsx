import React
    from "react";
import {useTags} from "useTags";

import {useParams} from 'react-router-dom'
import Layout from "components/Layout";
import Icon from "components/Icon";

type Params = {
    tagId : string
}

const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    const tag =  findTag(parseInt(tagId))

    return (
        <Layout>
            <header>
                <Icon  name="left"/>
                <span>编辑</span>
                <span>编辑</span>
            </header>
            <div>{tag.name}</div>
        </Layout>
    )

}

export {Tag}
