import {useEffect, useRef} from "react";


const useUpdate = (fn: () => void, dependency: any) => {
    const count = useRef(0)
    useEffect(() => {
        count.current++
    })// 第二个参数不填 任何state变化都执行

    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, [fn , dependency])

}
export {useUpdate}
