import React from 'react';

const Test = ({Increasing, decreasing}) => {
    

    return (
        <div>
            <div className='countStyle mt-5'>

                <button className='ms-3 p-3' onClick={Increasing}>+</button>
                <button className='ms-3 p-3' onClick={decreasing}>-</button>

            </div>
            
        </div>
    );
};

export default Test;