import React from 'react';

const UnderConstruction = props=>{
    const {text} = props;
    return (
    <div style={{margin:'20px'}}>This '{text}' is under construction</div>
    )
}
export default React.memo(UnderConstruction);