export class ProductService {

    getProductsSmall() {
        return fetch('../src/data/demo-data.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('../src/data/demo-data.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('../src/data/demo-data.json').then(res => res.json()).then(d => d.data);
    }
}
     