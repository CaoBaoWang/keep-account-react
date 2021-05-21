import React, {useState} from "react";
import {Wrapper} from './keyboardSection/Wrapper'
import {getOutput} from "./keyboardSection/getOutput";


type Props = {
    value : number,
    onChange :(amount:number)=> void
}

const KeyboardSection: React.FC<Props> = (props) => {
    // const [output, _setOutput] = useState<string>('0')
    const [output,_setOutput] = useState(props.value.toString())

    const setOutput = (newOutput:string)=>{
        console.log(`newOutput=${newOutput}`);
        if(newOutput.length > 16) {
            newOutput = newOutput.slice(0,16)
        }else if (newOutput.length === 0) {
            newOutput = '0'
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }

    const onBtnWrapperClick = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) return
        if(text ==='OK'){
            console.log("TODO ok")
        }
        const validInput = ('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0)
        if(validInput) {
            setOutput(getOutput(text, output))
        }

    }


    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="keyboard" onClick={onBtnWrapperClick}>
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

        </Wrapper>
    )
}
export {KeyboardSection}
