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

            <CategorySection>
                <ul>
                    <li className="selected">收入</li>
                    <li>支出</li>
                </ul>
            </CategorySection>
            <KeyboardSection>
                <div className="output">
                    100
                </div>
                <div className="keyboard">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>

            </KeyboardSection>
        </Layout>
    );
}

export default Money
