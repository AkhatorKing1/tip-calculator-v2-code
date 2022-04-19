import React, { useState, useEffect } from 'react'
import DollarIcon from './images/icon-dollar.svg'

const Bill = (props) => {
  const [border, setBorder] = useState('none')

  const billInput = {
      textAlign: "right",
      fontFamily : "inherit",
      fontWeight: 700,
      fontSize: '24px',
      color: '#00474B',
      backgroundColor: '#F3F9FA',
      border: `${border}`,
      borderRadius: '5px',
      // borderColor: '#26C2AE',
      paddingRight: '12px',
      paddingLeft: '29px',
      boxSizing: 'border-box',
      caretColor: '#26C2AE',
  }

  useEffect(() => {
      if(props.bvalue > 0) {
          setBorder('3px solid  #26C2AE')
      }
      else if(props.bvalue === "") {
          setBorder('none')
      }
      else {
          setBorder('3px solid  #E17052')
      }
  }, [props.bvalue])

  function mouseEnter(a) {
      if(a > 0 || a === '') {
          setBorder('3px solid  #26C2AE')
      }
      else {
          setBorder('3px solid  #E17052')
      }
  }
  function mouseLeave(a) {
      if(a > 0 || a === '') {
          setBorder('none')
      }
      else {
          setBorder('3px solid  #E17052')
      }
  }
  function handleBillChange(e) {
      props.uBill(e.target.value)
      props.uResetSwitch("ON")
  }

  return(
    <div className='bill'>
        <div className='bill-and-err'>
            <p>Bill</p>
            {props.bvalue === '0' && <p id="bill-err-disp">Can't be zero</p>}
            {Number(props.bvalue) < 0 && <p id="bill-err-disp">Can't be -ve</p>}
        </div>
        <input id="bill" style={billInput} onMouseEnter={() => mouseEnter(props.bvalue)} onMouseLeave={() => mouseLeave(props.bvalue)} type='number' value={props.bvalue} placeholder='0' onChange={(e) => handleBillChange(e)} />
        <div className="icon-dollar">
            <img src={DollarIcon} alt="icon" />
        </div>
    </div>
  )
}

export default Bill