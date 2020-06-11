import React from 'react'
import '../ReusableComponentCss/Line_Title.css'

const Line_Title = (props) => {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <div style={{border:'4px solid #A5A5A5',height:0, width:'10%',marginRight:15, ...props.styles}} ></div>
            <div className="head-title">{props.title}</div>
        </div>
    )
}

export default React.memo(Line_Title)
