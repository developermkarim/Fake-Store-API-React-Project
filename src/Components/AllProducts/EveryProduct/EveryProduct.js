//import React, { useState } from 'react';
import './EveryProduct.css'
import ReactModals from '../../ReactModals/ReactModal';

const EveryProduct = (props) => {
const {id,title,price,image,category,rating:{rate},description} = props.productDetails;
const {clickingCart} = props;

console.log("🚀 props", props)
    



    return ( 
        
           
        
        <div className='col-md-4  gy-5 everyCart'>
         
                   <div className=" pt-4 card h-100 text-center" style={{width:'18rem'}}>
                    <h5>Code: <span>1TQSA</span>{id}</h5>
                    <p>{category}</p>
                    <img src={image} alt="" className='card-img-top' width={250} height={250}/>
                    <div className='card-body'>
                    <h6 className='card-title'>{title.slice(0,20)}</h6>
                    <h5>{price}$</h5>
                    <div>
                         <small className='d-block rating'>Rating: {rate}<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></small>
                    </div>
                  
                    <button className='btn btn-primary p-1' onClick={clickingCart}>Add Cart </button>
                    <button  className='btn btn-warning p-1'>Delete</button>
                    {/* <button className='btn btn-secondary p-1' onClick={description}>Details </button> */}
                    <ReactModals detailsShow = {description} ModalTitle = {title.slice(0,20)} modalimg={image} modalPrice = {price}></ReactModals>

                    <div class="card-footer">
      <small class="text-muted">Last updated {id}0 mins ago</small>
    </div>
                    </div>
                   </div>
                  

                   {/* <div className="col-4">

                   </div>

                   <div className="col-4">

                   </div> */}
              
           </div>
      
    );
};

export default EveryProduct;