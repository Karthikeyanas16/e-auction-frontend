import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productname: '',
            productdescription: '',
            category: '',
            startprice: '',
            bidprice: ''
        }
    }
}