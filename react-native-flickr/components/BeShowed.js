import React from 'react'

const BeShowed = (props) => {
    if(props.show){
        return(
            <>
            {props.children}
            </>
        )
    }
    else{
        return(<></>)
    }
}

export default BeShowed