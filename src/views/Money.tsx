import React, {useState} from "react";
import Layout from "../components/Layout";
import {TagSection} from "./money/TagSection";
import {NoteSection} from './money/NoteSction'
import {Category, CategorySection} from './money/CategorySection'
import {KeyboardSection} from "./money/KeyboardSection";
import {Record, useRecords} from "../hooks/useRecords";
import styled from "styled-components";




const CategoryWrapper = styled.div `
  background: #c4c4c4;
`

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
        <Layout scrollTop={9999} className='fuck'>
            <TagSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>

            <NoteSection value={selected.note} onChange={note => onChange({note})}/>

            <CategoryWrapper>
                <CategorySection value={selected.category} onChange={(category => onChange({category}))}/>
            </CategoryWrapper>

            <KeyboardSection value={selected.amount}
                             submit={submit}
                             onChange={amount => onChange({amount})}/>
        </Layout>
    );
}

export default Money
