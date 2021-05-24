import {useState} from "react";
import {createId} from "./lib/createId";

let defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]
type Tag  = {
    id:number,
    name:string
}

const useTags = () => {
    const [tags, setTags] = useState<Tag[]>(defaultTags)

    const findTag = (tagId: number) => tags.filter(tag => tag.id === tagId)[0]
    const findIndex = (tagId: number) => tags.findIndex(tag => tag.id=== tagId)

    const deleteTag = (tagId: number) => setTags(tags.filter(tag=> tag.id!==tagId))

    const editTag = (tagId: number, tagName: string) => {
        const newTags = tags.map(tag=> tag.id === tagId ? {id:tagId,name:tagName} : tag)
        setTags(newTags)
    }

    return {
        tags,
        setTags,
        findTag,
        findIndex,
        deleteTag,
        editTag
    }
}

export {useTags,}
export type {Tag}
