import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8082/e-auction/api/v1/seller/show-bids/";

class ProductService {

    getProducts() {
        return axios.get(PRODUCT_API_BASE_URL);
    }
    
}

export default new ProductService()