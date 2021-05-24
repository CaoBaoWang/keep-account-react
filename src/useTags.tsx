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
    const findIndex = (tagId: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tagId === tags[i].id) {
                result = i
            }
        }
        return result
    }

    const deleteTag = (tagId: number) => {
        const index = findIndex(tagId)
        let tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index, 1)
        setTags(tagsClone)
    }
    const editTag = (tagId: number, tagName: string) => {
        const index = findIndex(tagId)
        let tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id: tagId, name: tagName})
        setTags(tagsClone)
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
