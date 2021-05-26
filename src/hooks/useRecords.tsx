import {Category} from "../views/money/CategorySection";
import {useEffect, useState} from "react";
import webpack from "webpack";
import {useUpdate} from "./useUpdate";



type RecordItem = {
    tagIds: number[],
    note:string,
    category:Category,
    amount:number,
    createAt:string // ISO 8601
}



type Record =  Omit<RecordItem, 'createAt'>


const useRecords = ()=>{
    const [records,setRecords]  = useState<RecordItem[]>([])


    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')|| '[]'))
    },[])

    useUpdate(()=>{
        window.localStorage.setItem('records' ,JSON.stringify(records))
    },[records])

    const addRecord = (record:Record)=>{
        if(record.tagIds.length === 0) {
            alert("请选择标签")
            return false
        }
        if(record.amount === 0) {
            alert("请输入金额")
            return false
        }

        const ri = {...record,createAt:(new Date().toISOString())}
        setRecords([...records , ri])
        return true
    }


    return {
        addRecord
    }
}


export {useRecords}

export type {Record}
