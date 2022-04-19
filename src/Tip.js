import React, { useState, useEffect } from 'react'


const Tip = (props) => {
    // For Custom Tip Iput
    const[tipBorder, setTipBorder] = useState('none')
    const tipInput = {
        textAlign: "right",
        fontFamily : "inherit",
        fontWeight: 700,
        fontSize: '24px',
        color: '#00474B',
        backgroundColor: '#F3F9FA',
        border: `${tipBorder}`,
        borderRadius: '5px',
        // borderColor: '#26C2AE',
        paddingRight: '12px',
        paddingLeft: '29px',
        boxSizing: 'border-box',
        caretColor: '#26C2AE',
    }
    useEffect(() => {
        if(props.cTip > 0 || props.cTip === '0') {
            setTipBorder('3px solid  #26C2AE')
        }
        else if(props.cTip === '') {
            setTipBorder('none')
        }
        else {
            setTipBorder('3px solid  #E17052')
        }
    }, [props.cTip])

    function tipMouseEnter(a) {
        if(a >= 0 || a === '') {
            setTipBorder('3px solid  #26C2AE')
        }
        else {
            setTipBorder('3px solid  #E17052')
        }
    }
    function tipMouseLeave(a) {
        if(a >= 0 || a === '') {
            setTipBorder('none')
        }
        else {
            setTipBorder('3px solid  #E17052')
        }
    }
    function handleTipCustomChange(e) {
        props.uResetSwitch("ON")
        props.uTip(e.target.value)
        props.uCustomTip(e.target.value)
    }

    // For the Buttons
    const [colorOne, setColorOne] = useState('#00474B')
    const [colorTwo, setColorTwo] = useState('#00474B')
    const [colorThree, setColorThree] = useState('#00474B')
    const [colorFour, setColorFour] = useState('#00474B')
    const [colorFive, setColorFive] = useState('#00474B')

    let btnStyle = {
        btn1 : {backgroundColor: `${colorOne}`},
        btn2 : {backgroundColor: `${colorTwo}`},
        btn3 : {backgroundColor: `${colorThree}`},
        btn4 : {backgroundColor: `${colorFour}`},
        btn5 : {backgroundColor: `${colorFive}`}
    }

    useEffect(() => {
        if(props.tvalue === '5') {
            setColorOne('#26C2AE')
            setColorTwo('#00474B')
            setColorThree('#00474B')
            setColorFour('#00474B')
            setColorFive('#00474B') 
        }
        else if(props.tvalue === '10') {
            setColorTwo('#26C2AE')
            setColorOne('#00474B')
            setColorThree('#00474B')
            setColorFour('#00474B')
            setColorFive('#00474B') 
        }
        else if(props.tvalue === '15') {
            setColorThree('#26C2AE')
            setColorOne('#00474B')
            setColorTwo('#00474B')
            setColorFour('#00474B')
            setColorFive('#00474B') 
        }
        else if(props.tvalue === '25') {
            setColorFour('#26C2AE')
            setColorOne('#00474B')
            setColorThree('#00474B')
            setColorTwo('#00474B')
            setColorFive('#00474B') 
        }
        else if(props.tvalue === '50') {
            setColorFive('#26C2AE')
            setColorOne('#00474B')
            setColorThree('#00474B')
            setColorFour('#00474B')
            setColorTwo('#00474B') 
        }
        else {
            setColorTwo('#00474B')
            setColorOne('#00474B')
            setColorThree('#00474B')
            setColorFour('#00474B')
            setColorFive('#00474B') 
        }
    }, [props.tvalue])

    function buttonMouseLeave(a, b, c) {
        if(a === b) {
            c('#26C2AE')
        }
        else {
            c('#00474B')
        }
    }
    function handleColorChange(e, i, j, k, l, m) {
        props.uTip(e.target.value)
        props.uCustomTip('')
        props.uResetSwitch("ON")
        i('#26C2AE')
        j('#00474B')
        k('#00474B')
        l('#00474B')
        m('#00474B')
    }


    return(
        <div className='select-tip'>
            <div className='tip-and-err'>
                <p>Select Tip %</p>
                {Number(props.tvalue) < 0 && <p id="tip-err-disp">Can't be -ve</p>}
            </div>
            <div className='btns'>
                <button style={btnStyle.btn1} onMouseEnter={() => setColorOne('#9FE8DF')} onMouseLeave={() => buttonMouseLeave(props.tvalue, '5', setColorOne)} value='5' className='btn' onClick={(e) => handleColorChange(e, setColorOne, setColorTwo, setColorThree, setColorFour, setColorFive)}>5%</button>
                <button style={btnStyle.btn2} onMouseEnter={() => setColorTwo('#9FE8DF')} onMouseLeave={() => buttonMouseLeave(props.tvalue, '10', setColorTwo)} value='10' className='btn' onClick={(e) => handleColorChange(e, setColorTwo, setColorOne, setColorThree, setColorFour, setColorFive)}>10%</button>
                <button style={btnStyle.btn3} onMouseEnter={() => setColorThree('#9FE8DF')} onMouseLeave={() => buttonMouseLeave(props.tvalue, '15', setColorThree)} value='15' className='btn' onClick={(e) => handleColorChange(e, setColorThree, setColorTwo, setColorOne, setColorFour, setColorFive)}>15%</button>
                <button style={btnStyle.btn4} onMouseEnter={() => setColorFour('#9FE8DF')} onMouseLeave={() => buttonMouseLeave(props.tvalue, '25', setColorFour)} value='25' className='btn' onClick={(e) => handleColorChange(e, setColorFour, setColorTwo, setColorThree, setColorOne, setColorFive)}>25%</button>
                <button style={btnStyle.btn5} onMouseEnter={() => setColorFive('#9FE8DF')} onMouseLeave={() => buttonMouseLeave(props.tvalue, '50', setColorFive)} value='50' className='btn' onClick={(e) => handleColorChange(e, setColorFive, setColorTwo, setColorThree, setColorFour, setColorOne)}>50%</button>
                <input className='tip-input' value={props.cTip} style={tipInput} onMouseEnter={() => tipMouseEnter(props.tvalue)} onMouseLeave={() => tipMouseLeave(props.tvalue)} type='number' placeholder="Custom" onChange={(e) => handleTipCustomChange(e)} />
            </div>
        </div>
    )
}

export default Tip