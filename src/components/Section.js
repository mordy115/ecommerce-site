import React, { Component } from 'react'
import Products from './pages/Products'
import Details from './pages/Details'
import {Route} from "react-router-dom"
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'


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
                    <Route path="/about" component={About} exact />
                    <Route path="/login" component={Login} exact />
            </div>
        )
    }
}

export default Section;
