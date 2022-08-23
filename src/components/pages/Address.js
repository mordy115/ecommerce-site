import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../css/address.css"
import {DataContext} from '../Context'


export class Address extends Component  {
    state ={
        address:[
            {country:"",street:"",name:"",building:"",city:"",phone:""},
        ]
    }
    static contextType = DataContext;
    componentDidUpdate(){
        localStorage.setItem('dataAddress', JSON.stringify(this.state.address))
    };

    render() { 
        const {address} = this.state;
        let handelclick = ()=>{
            let country =document.querySelector("#country");
            let street =document.querySelector("#street");
            let name =document.querySelector("#name");
            let building =document.querySelector("#building");
            let city =document.querySelector("#city");
            let phone =document.querySelector("#phone");
            if(country.value==="" ||street.value==="" ||name.value===""||city.value==="" ||phone.value==="" ){
                alert("please fill in the form")
            }else{
                address[0].building=building.value;
                address[0].city=city.value;
                address[0].country=country.value;
                address[0].name=name.value;
                address[0].phone=phone.value;
                address[0].street=street.value;
               
                alert("Operation Completed Successfully")
            }
            localStorage.setItem('dataAddress', JSON.stringify(address)); 
             
        }
        console.log(address);
                return (
                    <div className='home-address'> 
                        <h2>Create Address</h2>
                        <hr/>
                        <div className='inputs'>
                    
                             <input type="text" required name='country' placeholder='Country'  id='country'/>
                             <input type="text" required name='name' placeholder='Name' id='name'/>
                             <input type="text" required name='street' placeholder='street name' id="street"/>
                             <input type="text"  name='building ' placeholder='building name' id="building"/>
                             <input type="text" required name='city' placeholder='City/Area' id="city"/>
                             <input type="number" required name='phone' placeholder='Phone' id="phone"/>
                             <button className='Save-choose' onClick={handelclick}>Save</button>
                            
                        </div>

                        <div className='btn-pages'>
                            <Link to="/payment">back</Link>
                            <Link to="/confirm-order">Next</Link>
                        </div>
                    </div>
                )
            }
}
