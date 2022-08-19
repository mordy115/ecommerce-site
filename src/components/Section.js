import React, { Component } from 'react'
import Products from './pages/Products'
import Details from './pages/Details'
import {Route} from "react-router-dom"
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Address from './pages/Address'


 class Section extends Component {
    render() {
        return (
            <div>
                    <Route path="/" component={Products} exact />
                    <Route path="/ecommerce-site/product" component={Products} exact  />
                    <Route path="/ecommerce-site/product/:id" component={Details} exact />
                    <Route path="/ecommerce-site/cart" component={Cart}  exact/>
                    <Route path="/ecommerce-site/payment" component={Payment} exact />
                    <Route path="/ecommerce-site/contact" component={Contact} exact />
                    <Route path="/ecommerce-site/about" component={About} exact />
                    <Route path="/ecommerce-site/login" component={Login} exact />
                    <Route path="/ecommerce-site/address" component={Address} exact />
            </div>
        )
    }
}

export default Section;
