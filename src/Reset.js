import React, { useState, useEffect } from "react"

const Reset = (props) => {
    const [bgCol, setBgCol] = useState('#0D686D')

    const resetIt = () => {
        props.uBill('')
        props.uTip('')
        props.uPeople('')
        props.uCustomTip('')
        props.uResetSwitch('OFF')
    }
    
    const resetStyle = {
        backgroundColor: `${bgCol}`
    }

    useEffect(() => {
        if (props.rSwitch === "OFF") {
            setBgCol('#0D686D')
        }
        else {
            setBgCol("#26C2AE")
        }
    }, [props.bvalue, props.tvalue, props.pvalue])

    function resetMouseEnter() {
        if (props.rSwitch === "OFF") {
            setBgCol('#0D686D')
        }
        else {
            setBgCol("#9FE8DF")
        }
    }
    function resetMouseLeave() {
        if (props.rSwitch === "OFF") {
            setBgCol('#0D686D')
        }
        else {
            setBgCol("#26C2AE")
        }
    }

    return(
        <div>
            <button id='reset' style={resetStyle} onMouseEnter={() => resetMouseEnter()} onMouseLeave={() => resetMouseLeave()} onClick={() => resetIt()} >RESET</button>
        </div>
    )
}

export default Reset