import React, {useState} from "react";
import Layout from "../components/Layout";
import {Category, CategorySection} from "./money/CategorySection";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";

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
                        <div key={record.createAt}>
                            {record.tagIds.map(tagId => getTagName(tagId))}
                            <hr/>
                            {record.amount}
                        </div>
                    )
                })
            }
        </Layout>

    );
}


export default Statistics
