import React from "react";
import Layout from "../components/Layout";
import {TagSection} from "./money/TagSection";
import {NoteSection} from './money/NoteSction'
import {CategorySection} from './money/CategorySection'
import {KeyboardSection} from "./money/KeyboardSection";

function Money() {
    return (
        <Layout>
            <TagSection/>

            <NoteSection/>

            <CategorySection />

            <KeyboardSection/>
        </Layout>
    );
}

export default Money
