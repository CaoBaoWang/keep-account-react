import React, {useState} from "react";
import Layout from "../components/Layout";
import {Category, CategorySection} from "./money/CategorySection";

function Statistics() {
    const [category,setCategory] = useState<Category>('-')

    const onChange = (c:Category) =>{
        setCategory(c)
    }
    return (
        <Layout>
            <CategorySection value={category} onChange={onChange}/>
        </Layout>

    );
}


export default Statistics
