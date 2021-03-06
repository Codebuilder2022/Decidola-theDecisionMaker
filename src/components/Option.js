import React from 'react'

const Option = (props) => (
    <div className="option">
    <p className ="optionText">{props.count}.  {props.optionText}</p>
    <button 
    className = "button--link"
    onClick={(e) => {
        props.onRemoveOption(props.optionText)
    }}
        
    ><i class="fas fa-trash-alt"></i></button>
    </div>
)

export default Option