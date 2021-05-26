import styled from "styled-components";
import React, { ChangeEventHandler } from "react";

import {Input} from "../../components/Input";

const Wrapper = styled.section`
  background: #f5f5f5;
  font-size: 14px;
  padding: 12px 16px;



`
type Props = {
    value:string,
    onChange:(newValue:string)=> void
}

const NoteSection: React.FC<Props> = (props) => {
    // const [note, setNote] = useState('')
    const note = props.value

    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
            props.onChange(e.target.value);
    }
    return (
        <Wrapper>
            <Input label="备注" placeholder="请输入备注" value={note} onChange={onChange} />

        </Wrapper>
    )
}

export {NoteSection}
