import React from 'react';

export default function MessageBox(props){
    return(
        <div className={`alert alert-${props.variant||'information'}`}>
            {props.children}

            </div>
    )
}