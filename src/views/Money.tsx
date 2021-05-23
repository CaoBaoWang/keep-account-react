import React, {useState} from "react";
import Layout from "../components/Layout";
import {TagSection} from "./money/TagSection";
import {NoteSection} from './money/NoteSction'
import {Category, CategorySection} from './money/CategorySection'
import {KeyboardSection} from "./money/KeyboardSection";

function Money() {
    const [selected,setSelected] = useState({
        tagIds:[] as number[],
        note:'1',
        category:'-' as Category ,
        amount: 0
    })
    type Selected = typeof selected


    const onChange = (obj:Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    return (
        <Layout>
            {selected.note}
            <TagSection value={selected.tagIds} onChange={tagIds=> onChange({tagIds})}  />

            <NoteSection value={selected.note} onChange={note=> onChange({note})}/>

            <CategorySection value={selected.category} onChange={(category => onChange({category}) )} />

            <KeyboardSection value={selected.amount} onChange={amount => onChange({amount})}/>
        </Layout>
    );
}

export default Money
