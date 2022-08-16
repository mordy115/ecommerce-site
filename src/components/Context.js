import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "ADIDAS Shoes 01",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf9XwFCQwE9mevXaJ5mkAFSbhg1TIXJHWyw&usqp=CAU",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "ADIDAS Shoes 02",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/238391/1.jpg?0946",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "ADIDAS Shoes 03",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/238391/1.jpg?0946",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "ADIDAS Shoes 04",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/337231/1.jpg?9819",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "ADIDAS Shoes 05",
                "src": "https://lh3.googleusercontent.com/-8jfbUlx-py0/YcNGZKiJhnI/AAAAAAAAEQI/gufalIO651YoWjV5UyyF6M5Z0ThZUVMOwCNcBGAsYHQ/s16000/55Wl.webp",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "ADIDAS Shoes 06",
                "src": "https://www.mexatk.com/wp-content/uploads/2016/10/%D8%B5%D9%88%D8%B1-%D8%A7%D8%AD%D8%B0%D9%8A%D8%A9-%D9%85%D8%A7%D8%B1%D9%83%D8%A9-%D8%A7%D8%AF%D9%8A%D8%AF%D8%A7%D8%B3-2.jpg",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "ADIDAS Shoes 02",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/238391/1.jpg?0946",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 17,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "ADIDAS Shoes 03",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/238391/1.jpg?0946",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 58,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "ADIDAS Shoes 04",
                "src": "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/337231/1.jpg?9819",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 13,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "ADIDAS Shoes 05",
                "src": "https://lh3.googleusercontent.com/-8jfbUlx-py0/YcNGZKiJhnI/AAAAAAAAEQI/gufalIO651YoWjV5UyyF6M5Z0ThZUVMOwCNcBGAsYHQ/s16000/55Wl.webp",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 20,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "ADIDAS Shoes 06",
                "src": "https://www.mexatk.com/wp-content/uploads/2016/10/%D8%B5%D9%88%D8%B1-%D8%A7%D8%AD%D8%B0%D9%8A%D8%A9-%D9%85%D8%A7%D8%B1%D9%83%D8%A9-%D8%A7%D8%AF%D9%8A%D8%AF%D8%A7%D8%B3-2.jpg",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 28,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "ADIDAS Shoes 01",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf9XwFCQwE9mevXaJ5mkAFSbhg1TIXJHWyw&usqp=CAU",
                "description": "Fake data !! ",
                "content": "Welcome to my e-commerce site, here most of the data is not real, but it is to show the design and",
                "price": 35,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                // item.count === 1 ? item.count = 1 : ;
                if(item.count===1){
                    item.count -=1;
                    if(item.count===0){
                        if(window.confirm("Do you want to delete this product?")){
                            const {cart} = this.state;
                            cart.forEach((item, index) =>{
                                if(item._id === id ){
                                    cart.splice(index, 1)
                                }
                            })
                            
                            this.setState({cart: cart});
                            this.getTotal();
                        }
                        item.count=0
                    }
                    
                }else{
                    item.count -=1
                }
                
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id ){
                    cart.splice(index, 1)
                }
            })
            
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


