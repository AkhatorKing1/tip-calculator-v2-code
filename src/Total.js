import React, { useEffect } from 'react'

function calculate(bvalue, tvalue, pvalue, utip, utotal) {
    //function to handle conversion from 0 or 1 decimal places to 2 decimal places
    function toTwoDecimalPlaces(a, b) {
        if(!a[1]) {
            return `${b}.00`
        }
        else if(a[1].length > 1) {
            return b
        }
        else {
            return b + '0'
        }
    }

    useEffect(() => {
        const calcTipPerPerson = (Number(bvalue) * (Number(tvalue)/100)) / Number(pvalue)
        const calTotalPerPerson = Number(bvalue)/Number(pvalue) + calcTipPerPerson

        //function to convert tip per person to 2 decimal places
        function convertTip() {
            const Str = `$${+(Math.round(calcTipPerPerson + "e+2") + "e-2")}`
            let arr = Str.split('.')
            let str2 = toTwoDecimalPlaces(arr, Str)
            return str2
        }
        utip(convertTip())

        //function to convert total per person to two decimal places
        function convertTotal() {  
            const Str = `$${+(Math.round(calTotalPerPerson + "e+2") + "e-2")}`
            let arr = Str.split('.')
            let str2 = toTwoDecimalPlaces(arr, Str)
            return str2
        }
        utotal(convertTotal())
    }, [bvalue, tvalue, pvalue])
}

const Total = (props) => {
    return(
        <div className='tip-and-total'>
            <div id='output-one'>
                <div className='tip-per-person'>
                    <p className="tip-text">Tip Amount</p>
                    <p className="per-person">/  person</p>
                </div>
                {(Number(props.bvalue) <= 0 || Number(props.tvalue) < 0 || Number(props.pvalue) <= 0 || props.bvalue === '' || props.tvalue === '' || props.pvalue === '') &&
                <p id="tip-amount">$0.00</p>}
                {Number(props.bvalue) > 0 && (Number(props.tvalue) > 0 || props.tvalue === '0') && Number(props.pvalue) > 0 &&
                <p id="tip-amount">{props.displayTip}</p>}
            </div>
            <div id='output-two'>
                <div className='total-per-person'>
                    <p className="total-text">Total Amount</p>
                    <p className="per-person">/  person</p>
                </div>
                {(Number(props.bvalue) <= 0 || Number(props.tvalue) < 0 || Number(props.pvalue) <= 0 || props.bvalue === '' || props.tvalue === '' || props.pvalue === '') &&
                <p id="total">$0.00</p>}
                {Number(props.bvalue) > 0 && (Number(props.tvalue) > 0 || props.tvalue === '0') && Number(props.pvalue) > 0 &&
                <p id="total">{props.displayTotal}</p>}
            </div>
        </div>
    )
}

export {calculate}
export default Total