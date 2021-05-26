import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

type Tag = {
    id: number,
    name: string
}

const useTags = () => {
    const [tags, setTags] = useState<Tag[]>([])


    useEffect(() => {
        //    componentDidMount
        let tags = JSON.parse(localStorage.getItem('tags') || '[]')
        if(tags.length === 0 ) {
            tags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'},
            ]
        }

        setTags(tags)
    }, [])

    useUpdate(()=>{
        window.localStorage.setItem('tags', JSON.stringify(tags))
    },[tags])



    const findTag = (tagId: number) => tags.filter(tag => tag.id === tagId)[0]
    const findIndex = (tagId: number) => tags.findIndex(tag => tag.id === tagId)
    const deleteTag = (tagId: number) => setTags(tags.filter(tag => tag.id !== tagId))
    const editTag = (tagId: number, tagName: string) => {
        const newTags = tags.map(tag => tag.id === tagId ?
            {id: tagId, name: tagName} : tag
        )
        setTags(newTags)
    }
    const addTag = () => {
        const name = window.prompt('请输入标签名')
        if (name) {
            setTags([...tags, {id: createId(), name}])
        }
    }

    return {
        tags,
        setTags,
        findTag,
        findIndex,
        deleteTag,
        editTag,
        addTag

    }
}

export {useTags,}
export type {Tag}
