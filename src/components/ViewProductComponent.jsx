import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import UserService from '../services/ProductService';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
    }

      /*   this.state = { 
            id: this.props.match.params.id,
            product:{}
        } */
    }

 /*    componentDidMount() {
        ProductService.getUserByID(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    } */

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

      render() {
        return (
         <div>
        <h2 className="text-center">Product List</h2>
        <div className = "row">
           <button className="btn btn-primary" 
             onClick={this.addUser}> Add Product</button>
        </div>
        <br></br>
        <div className = "row">
<table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                           <th> Product Name</th>
                           <th> Product Description</th>
                           <th> Starting Price</th>
                           <th> Bid Price</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.products.map(
                               product => 
                        <tr key = {product.id}>
                         <td> { product.productname} </td>   
                         <td> {product.productdescription}</td>
                         <td> {product.startprice}</td>
                         <td> {product.bidprice}</td>
                   <td>
                    <button onClick={ () => this.editProduct(product.id)} 
                             className="btn btn-info">Update </button>
                    <button style={{marginLeft: "10px"}} 
                             onClick={ () => this.deleteProduct(product.id)} 
                             className="btn btn-danger">Delete </button>
                    <button style={{marginLeft: "10px"}} 
                             onClick={ () => this.viewProduct(product.id)} 
                             className="btn btn-info">View </button>
                                    </td>
                               </tr>
                           )
                       }
                   </tbody>
               </table>
        </div>
   </div>
        )
      }

}

export default ViewProductComponent