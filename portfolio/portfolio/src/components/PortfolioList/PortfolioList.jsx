import React from 'react'
import './PortfolioList'
function PortfolioList({title ,active,setSelected,id}) {
    return (
        <li  className={active ? 'portfolioList active' :'portfolioList'}
        onClick={()=>setSelected(id)}
        >
            {title}
        </li>
    )
}

 export default PortfolioList
