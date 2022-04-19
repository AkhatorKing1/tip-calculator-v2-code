import React, { useState, useEffect } from 'react'
import Bill from './Bill'
import Tip from './Tip'
import People from './People'
import Total, { calculate } from './Total'
import Reset from './Reset'

const Inputs = () => {
    const [billValue, updateBill] = useState("")
    const [tipValue, updateTip] = useState("")
    const [customTip, updateCustomTip] = useState("")
    const [people, updatePeople] = useState("")
    const [resetSwitch, updateResetSwitch] = useState("OFF")
    const[tipPerPerson, updateTipPerPerson] = useState(0)
    const[totalVal, updateTotalVal] = useState(0)

    calculate(billValue, tipValue, people, updateTipPerPerson, updateTotalVal)
    
    return(
        <div className='main'>
            <div className='input-wrapper'>
                <div className='input'>
                    <Bill bvalue={billValue} uBill={updateBill} uResetSwitch={updateResetSwitch} />
                    <Tip cTip={customTip} tvalue={tipValue} uTip={updateTip} uCustomTip={updateCustomTip} uResetSwitch={updateResetSwitch} />
                    <People pvalue={people} uPeople={updatePeople} uResetSwitch={updateResetSwitch} />
                </div>
            </div>
            <div className='output-wrapper'>
                <div className='output'>
                    <Total bvalue={billValue} tvalue={tipValue} pvalue={people} displayTip={tipPerPerson} displayTotal={totalVal} />
                    <Reset bvalue={billValue} tvalue={tipValue} pvalue={people} rSwitch={resetSwitch} uBill={updateBill} uTip={updateTip} uPeople={updatePeople} uCustomTip={updateCustomTip} uResetSwitch={updateResetSwitch} />
                </div>
            </div>
        </div>
    )
}

export default Inputs