export class ProductService {

    getProductsSmall() {
        return fetch('../../public/demo-data2.json').then(res => res.json()).then(d => d.data);
    }

    // getProducts() {
    //     return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    // }

    // getProductsWithOrdersSmall() {
    //     return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    // }
}
     