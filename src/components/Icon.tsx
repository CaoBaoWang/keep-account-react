import React from "react";
import cs from 'classnames'

// import tag from 'icons/tag.svg'
// import money from 'icons/money.svg'
// import chart from 'icons/chart.svg'

// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props:Props)=>{
    const {name,children,className,...reset} = props
    return (
        <svg className={cs("icon",className)} {...reset}>
            {name &&  <use xlinkHref={'#'+name} />}
        </svg>
    )
}


export default Icon
