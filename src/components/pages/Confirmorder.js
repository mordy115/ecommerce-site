import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/comfirmorder.css'
import {DataContext} from '../Context'


export default class confirmorder extends Component {
    static contextType = DataContext;
state={
    ordered:[]
}
    componentDidMount(){
        localStorage.setItem("dataordered", Date.now());
    }
  render() { 
    const {cart} = this.context;
    const ordered= this.state.ordered;
    let final_address = JSON.parse(localStorage.getItem("dataAddress"));
    // let final_cart =  JSON.parse(localStorage.getItem("dataCart"));
 
   let confirmOrder = (id)=>{
       if(final_address[0]["country"] ===""){
           alert("please add address")
       }else{
           //send data by ajax
           const order =  cart.filter(el=>el._id===id);
           if(order[0]["color"]==="" || order[0]["size"]===" "){
            alert("please add color and size ")
           }else{
            // send data by ajax 
            let productordered =cart.filter(el=>el._id === id)
            ordered.unshift(productordered)
         

            localStorage.setItem('dataordered', JSON.stringify(ordered)); 
            console.log(localStorage.dataordered);
            //before delete product
              let filterproduct =cart.filter(el=>el._id !== id)
               
              localStorage.setItem('dataCart', JSON.stringify(filterproduct)); 
             document.location.reload();
             alert("Operation Completed Successfully")

        }
           
       }
   }
   let final_ordered = JSON.parse(localStorage.getItem("dataordered"));

   console.log(final_ordered);
    return (
        <div className='header-confirm'>
            <div className='row'> 
                {cart.map(product => (
                    <div className="card-confirm col-lg-3 col-md-6 col-sm-12" key={product._id}>
                        <img src={product.src} alt=""/>
                    <div className="content">
                        <h3>
                            {product.title}
                        </h3>
                        <span>${product.price}</span>
                        <p>{product.description}</p>
                        <Link to="/payment/">Edit Oreder</Link>
                        <button onClick={()=>confirmOrder(product._id)} >Confirm Order</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     
    )
  }
}
