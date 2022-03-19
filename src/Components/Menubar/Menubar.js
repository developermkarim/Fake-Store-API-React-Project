import React from 'react';

import './menubar.css'

const Menubar = (props) => {

    
    
    return (
        <div>
            
            <div className="container">
                <div className="row py-5 d-flex justify-content-between">
                    <div className="col-md-4 logostyle"><img width={150} src="https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg" alt="" /></div>
                    <div className="col-md-6 ">
                        <ul className='list-unstyled ulstyle'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Services</li>
                            <li>Cart <sup >{props.Counter}</sup> </li>
                            <li>Log In</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Menubar;