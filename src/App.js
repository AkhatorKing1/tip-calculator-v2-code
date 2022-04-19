import React from 'react';
import Logo from './images/logo.svg'
// import Inputs from './Values';
import AllValues from './AllValues'

const App = () => {
    return(
        <div className='container'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <AllValues />
        </div>
    )
}

export default App;