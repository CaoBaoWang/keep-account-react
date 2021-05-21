import React
    from "react";
import {useTags} from "../useTags";

import {useParams} from 'react-router-dom'

type Params = {
    tagId : string
}

const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    const tag =  findTag(parseInt(tagId))

    return (
        <div>{tag.name}</div>
    )

}

export {Tag}
