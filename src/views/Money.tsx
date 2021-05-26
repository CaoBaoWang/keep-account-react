import React, {useState} from "react";
import Layout from "../components/Layout";
import {TagSection} from "./money/TagSection";
import {NoteSection} from './money/NoteSction'
import {Category, CategorySection} from './money/CategorySection'
import {KeyboardSection} from "./money/KeyboardSection";
import {Record, useRecords} from "../hooks/useRecords";

const initialRecord = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = useState<Record>(initialRecord)
    type Selected = typeof selected


    const {addRecord} = useRecords()

    const submit = () => {
        console.log('submit')
        const success = addRecord(selected)
        if(success) {
            setSelected(initialRecord)
        }
    }

    const onChange = (obj: Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    return (
        <Layout>
            <TagSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>

            <NoteSection value={selected.note} onChange={note => onChange({note})}/>

            <CategorySection value={selected.category} onChange={(category => onChange({category}))}/>

            <KeyboardSection value={selected.amount}
                             submit={submit}
                             onChange={amount => onChange({amount})}/>
        </Layout>
    );
}

export default Money
