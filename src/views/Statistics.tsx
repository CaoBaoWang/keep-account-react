import React, {useState} from "react";
import Layout from "../components/Layout";
import {Category, CategorySection} from "./money/CategorySection";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";


const RecordItem = styled.div`
background: white;
  font-size: 18px;
  padding: 9px 16px;
  display: flex;
  justify-content: space-between;
  
  & > .note {
    color: #999999;
    margin-left: 16px;
    margin-right: auto;
  }

`

function Statistics() {
    const [category,setCategory] = useState<Category>('-')
    const {records} = useRecords()
    const {getTagName} = useTags()


    const onChange = (c:Category) =>{
        setCategory(c)
    }
    return (
        <Layout>
            <CategorySection value={category} onChange={onChange}/>
            {

                records.map((record)=>{
                    return (
                        <RecordItem key={record.createAt}>
                            {record.tagIds.map(tagId => getTagName(tagId))}
                            <span className="note">{record.note}</span>
                            <span className="amount">
                            {'￥'+record.amount}
                            </span>
                        </RecordItem>
                    )
                })
            }
        </Layout>

    );
}


export default Statistics
