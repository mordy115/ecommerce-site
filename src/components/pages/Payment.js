import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'




export class Payment extends Component {
    static contextType = DataContext;
    render() {  
        const {cart} = this.context;
        //  console.log(cart);
        let confirmorder = (id)=>{
            const order =  cart.filter(el=>el._id===id);
            let SizeID = "#size"+id;
            let Size = document.querySelector(SizeID)
            Object.assign(order[0], {size: Size.value });
            let colorID = "#color"+id;
            var color = document.querySelector(colorID);
            var colorvalue = color.options[color.selectedIndex].value;
            Object.assign(order[0], {color: colorvalue });
            localStorage.setItem('dataCart', JSON.stringify(cart))
            document.location.reload();
        }
         
        return (
            <div>
                <div>
                    {
                         cart.map( el => (
                            <div className="details cart" key={el._id}>
                                <img src={el.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{el.title}</h2>
                                        <span>${el.price * el.count}</span>
                                    </div>
                                    <p>{el.description}</p>
                                    <p>{el.content}</p>
                                    <div className='choose-order'>
                                        <input type="number" name='Size' placeholder='Size' id={"size"+el._id}/>
                                        <select name="color" id={"color"+el._id}>
                                            {
                                                el.colors.map(el=>(
                                                    <option value={el}>{el}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <p className='p-colors'>{el.color === ""?"please choose Color ":"Color Selected :"+ el.color}</p>
                                    <p>{el.size === ""?"please choose Size ":"Size Selected :"+ el.size}</p>
                                    <button type='submit' className='Save-choose' onClick={() => confirmorder(el._id)}>Save</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='btn-pages'>
                  <Link to="/cart">back</Link>
                  <Link to="/address">Next</Link>
                </div>
            </div>
        )
    }
}

export default Payment
