import React, { Component } from 'react'
import Products from './pages/Products'
import Details from './pages/Details'
import {Route} from "react-router-dom"
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Contact from './pages/Contact'
import Ordered from './pages/Ordered'
import Login from './pages/Login'
import { Address } from './pages/Address'
import Confirmorder from './pages/Confirmorder'

 class Section extends Component {
    render() {
        return (
            <div>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/ordered" component={Ordered} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/address" component={Address} exact />
                    <Route path="/confirm-order" component={Confirmorder} exact />
            </div>
        )
    }
}

export default Section;
