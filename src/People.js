import React, { useState, useEffect } from 'react'
import PersonIcon from './images/icon-person.svg'


const People = (props) => {
    const [peopleBorder, setPeopleBorder] = useState('none')

    const peopleInput = {
        textAlign: "right",
        fontFamily : "inherit",
        fontWeight: 700,
        fontSize: '24px',
        color: '#00474B',
        backgroundColor: '#F3F9FA',
        border: `${peopleBorder}`,
        borderRadius: '5px',
        // borderColor: '#26C2AE',
        paddingRight: '12px',
        paddingLeft: '29px',
        boxSizing: 'border-box',
        caretColor: '#26C2AE',
    }

    useEffect(() => {
        if(props.pvalue > 0) {
            setPeopleBorder('3px solid  #26C2AE')
        }
        else if(props.pvalue === '') {
            setPeopleBorder('none')
        }
        else {
            setPeopleBorder('3px solid  #E17052')
        }
    }, [props.pvalue])
    
    function peopleMouseEnter(a) {
        if(a > 0 || a === '') {
            setPeopleBorder('3px solid  #26C2AE')
        }
        else {
            setPeopleBorder('3px solid  #E17052')
        }
    }
    function peopleMouseLeave(a) {
        if(a > 0 || a === '') {
            setPeopleBorder('none')
        }
        else {
            setPeopleBorder('3px solid  #E17052')
        }
    }
    function handlePeopleChange(e) {
        props.uPeople(e.target.value)
        props.uResetSwitch("ON")
    }

    
    return(
        <div className='people'>
            <div className='people-and-err'>
                <p>Number of People</p>
                {props.pvalue === '0' && <p id='err-disp'>Can't be zero</p>}
                {Number(props.pvalue) < 0 && <p id='err-disp'>Can't be -ve</p>}
            </div>
            <input className="people-input" style={peopleInput} onMouseEnter={() => peopleMouseEnter(props.pvalue)} onMouseLeave={() => peopleMouseLeave(props.pvalue)} type='number' value={props.pvalue} placeholder='0' onChange={(e)=> handlePeopleChange(e)} />
            <div className="icon-person">
                    <img src={PersonIcon} alt="icon" />
            </div>
        </div>
    )
}

export default People