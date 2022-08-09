//
//import React, { Component } from 'react';
//import { classNames } from 'primereact/utils';
//import { DataTable } from 'primereact/datatable';
//import { Column } from 'primereact/column';
//import { data } from '../data/crud-data';
//import { Toast } from 'primereact/toast';
//import { Button } from 'primereact/button';
//import { FileUpload } from 'primereact/fileupload';
//import { Toolbar } from 'primereact/toolbar';
//import { InputTextarea } from 'primereact/inputtextarea';
//import { RadioButton } from 'primereact/radiobutton';
//import { InputNumber } from 'primereact/inputnumber';
//import { Dialog } from 'primereact/dialog';
//import { InputText } from 'primereact/inputtext';
//import '../styles/CrudTable.css';
//
//class Table extends Component {
//
//    emptyProduct = {
//        id: null,
//        name: '',
//        description: '',
//        category: null,
//        price: 0,
//        quantity: 0,
//        inventoryStatus: 'INSTOCK'
//    };
//
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            products: null,
//            productDialog: false,
//            deleteProductDialog: false,
//            deleteProductsDialog: false,
//            product: this.emptyProduct,
//            selectedProducts: null,
//            submitted: false,
//            globalFilter: null
//        };
//
//        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
//        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
//        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
//
//        this.openNew = this.openNew.bind(this);
//        this.hideDialog = this.hideDialog.bind(this);
//        this.saveProduct = this.saveProduct.bind(this);
//        this.editProduct = this.editProduct.bind(this);
//        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
//        this.deleteProduct = this.deleteProduct.bind(this);
//        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
//        this.deleteSelectedProducts = this.deleteSelectedProducts.bind(this);
//        this.onCategoryChange = this.onCategoryChange.bind(this);
//        this.onInputChange = this.onInputChange.bind(this);
//        this.onInputNumberChange = this.onInputNumberChange.bind(this);
//        this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
//        this.hideDeleteProductsDialog = this.hideDeleteProductsDialog.bind(this);
//    }
//
//    componentDidMount() {
//        this.setState({ products: data });
//    }
//
//    formatCurrency(value) {
//        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//    }
//
//    openNew() {
//        this.setState({
//            product: this.emptyProduct,
//            submitted: false,
//            productDialog: true
//        });
//    }
//
//    hideDialog() {
//        this.setState({
//            submitted: false,
//            productDialog: false
//        });
//    }
//
//    hideDeleteProductDialog() {
//        this.setState({ deleteProductDialog: false });
//    }
//
//    hideDeleteProductsDialog() {
//        this.setState({ deleteProductsDialog: false });
//    }
//
//    saveProduct() {
//        let state = { submitted: true };
//
//        if (this.state.product.name.trim()) {
//            let products = [...this.state.products];
//            let product = {...this.state.product};
//            if (this.state.product.id) {
//                const index = this.findIndexById(this.state.product.id);
//
//                products[index] = product;
//                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
//            }
//            else {
//                product.id = this.createId();
//                products.push(product);
//                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
//            }
//
//            state = {
//                ...state,
//                products,
//                productDialog: false,
//                product: this.emptyProduct
//            };
//        }
//
//        this.setState(state);
//    }
//
//    editProduct(product) {
//        this.setState({
//            product: { ...product },
//            productDialog: true
//        });
//    }
//
//    confirmDeleteProduct(product) {
//        this.setState({
//            product,
//            deleteProductDialog: true
//        });
//    }
//
//    deleteProduct() {
//        let products = this.state.products.filter(val => val.id !== this.state.product.id);
//        this.setState({
//            products,
//            deleteProductDialog: false,
//            product: this.emptyProduct
//        });
//        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
//    }
//
//    findIndexById(id) {
//        let index = -1;
//        for (let i = 0; i < this.state.products.length; i++) {
//            if (this.state.products[i].id === id) {
//                index = i;
//                break;
//            }
//        }
//
//        return index;
//    }
//
//    createId() {
//        let id = '';
//        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//        for (let i = 0; i < 5; i++) {
//            id += chars.charAt(Math.floor(Math.random() * chars.length));
//        }
//        return id;
//    }
//
//    confirmDeleteSelected() {
//        this.setState({ deleteProductsDialog: true });
//    }
//
//    deleteSelectedProducts() {
//        let products = this.state.products.filter(val => !this.state.selectedProducts.includes(val));
//        this.setState({
//            products,
//            deleteProductsDialog: false,
//            selectedProducts: null
//        });
//        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
//    }
//
//    onCategoryChange(e) {
//        let product = {...this.state.product};
//        product['category'] = e.value;
//        this.setState({ product });
//    }
//
//    onInputChange(e, name) {
//        const val = (e.target && e.target.value) || '';
//        let product = {...this.state.product};
//        product[`${name}`] = val;
//
//        this.setState({ product });
//    }
//
//    onInputNumberChange(e, name) {
//        const val = e.value || 0;
//        let product = {...this.state.product};
//        product[`${name}`] = val;
//
//        this.setState({ product });
//    }
//
//
//    priceBodyTemplate(rowData) {
//        return this.formatCurrency(rowData.price);
//    }
//    statusBodyTemplate(rowData) {
//        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
//    }
//
//    actionBodyTemplate(rowData) {
//        return (
//            <React.Fragment>
//                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => this.editProduct(rowData)} />
//                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteProduct(rowData)} />
//            </React.Fragment>
//        );
//    }
//
//    render() {
//        const header = (
//            <div className="table-header">
//                <h5 className="mx-0 my-1">Manage Products</h5>
//                <React.Fragment>
//                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={this.openNew} />
//                </React.Fragment>
//                <span className="p-input-icon-left">
//                    <i className="pi pi-search" />
//                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Search..." />
//                </span>
//            </div>
//        );
//        const productDialogFooter = (
//            <React.Fragment>
//                <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={this.hideDialog} />
//                <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={this.saveProduct} />
//            </React.Fragment>
//        );
//        const deleteProductDialogFooter = (
//            <React.Fragment>
//                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductDialog} />
//                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteProduct} />
//            </React.Fragment>
//        );
//        const deleteProductsDialogFooter = (
//            <React.Fragment>
//                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductsDialog} />
//                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedProducts} />
//            </React.Fragment>
//        );
//
//        return (
//            <div className="datatable-crud-demo">
//                <Toast ref={(el) => this.toast = el} />
//
//                <div className="card">
//                    {/* <Toolbar className="mb-4" left={this.leftToolbarTemplate}></Toolbar> */}
//
//                    <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
//                        dataKey="id" paginator rows={5} rowsPerPageOptions={[5, 10, 25]}
//                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
//                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
//                        globalFilter={this.state.globalFilter} header={header} responsiveLayout="scroll">
//                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
//                        <Column field="code" header="Code" sortable style={{ minWidth: '8rem' }}></Column>
//                        <Column field="name" header="Name" sortable style={{ minWidth: '8rem' }}></Column>
//                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
//                        <Column field="category" header="Category" sortable style={{ minWidth: '8rem' }}></Column>
//                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
//                        <Column body={this.actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
//                    </DataTable>
//                </div>
//
//                <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={this.hideDialog}>
//                    {this.state.product.image && <img src={`images/product/${this.state.product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={this.state.product.image} className="product-image block m-auto pb-3" />}
//                    <div className="field">
//                        <label htmlFor="name">Name</label>
//                        <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
//                        {this.state.submitted && !this.state.product.name && <small className="p-error">Name is required.</small>}
//                    </div>
//                    <div className="field">
//                        <label htmlFor="description">Description</label>
//                        <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
//                    </div>
//
//                    <div className="field">
//                        <label className="mb-3">Category</label>
//                        <div className="formgrid grid">
//                            <div className="field-radiobutton col-6">
//                                <RadioButton inputId="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
//                                <label htmlFor="category1">Accessories</label>
//                            </div>
//                            <div className="field-radiobutton col-6">
//                                <RadioButton inputId="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
//                                <label htmlFor="category2">Clothing</label>
//                            </div>
//                            <div className="field-radiobutton col-6">
//                                <RadioButton inputId="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
//                                <label htmlFor="category3">Electronics</label>
//                            </div>
//                            <div className="field-radiobutton col-6">
//                                <RadioButton inputId="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
//                                <label htmlFor="category4">Fitness</label>
//                            </div>
//                        </div>
//                    </div>
//
//                    <div className="formgrid grid">
//                        <div className="field col">
//                            <label htmlFor="price">Price</label>
//                            <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
//                        </div>
//                        <div className="field col">
//                            <label htmlFor="quantity">Quantity</label>
//                            <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} integeronly />
//                        </div>
//                    </div>
//                </Dialog>
//
//                <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
//                    <div className="confirmation-content">
//                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
//                        {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
//                    </div>
//                </Dialog>
//
//                <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={this.hideDeleteProductsDialog}>
//                    <div className="confirmation-content">
//                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
//                        {this.state.product && <span>Are you sure you want to delete the selected products?</span>}
//                    </div>
//                </Dialog>
//            </div>
//        );
//    }
//}
//
//export default Table;


import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
//import { data } from '../data/simple-data';
//import './DataTableDemo.css';
import axios from 'axios';
export default class CrudTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products : []
        };

        this.columns = [
            { field: 'id', header: 'ID' },
            { field: 'isin', header: 'ISIN' },
            { field: 'cusip', header: 'CUSIP' },
            { field: 'issuer', header: 'ISSUER' },
            { field: 'coupon', header: 'COUPON' },
            { field: 'type', header: 'TYPE' },
             { field: 'faceValue', header: 'FACEVALUE' },
             { field: 'status', header: 'STATUS' },
             {field : 'maturityDate',header : 'Maturity Date'}
        ];

        this.statuses = [
            { label: 'matured', value: 'matured' },
            { label: 'not_matured', value: 'not_matured' },
        ];


        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.onRowEditComplete1 = this.onRowEditComplete1.bind(this);
        this.onRowEditChange = this.onRowEditChange.bind(this);
    }

//    componentDidMount() {
//        this.setState({products : data});
//    }

    componentWillMount() {
        axios.get("http://localhost:8080/api/v1/securities/all")
                                 .then(response => response.data)
                                 .then((data) => {
                                      console.log(data);
                                     this.setState({products : data})
                                 });
                             console.log(this.state.products);
    }


    getStatusLabel(status) {
        switch (status) {
            case 'matured':
                return 'matured';

            case 'not_matured':
                return 'not_matured';

            default:
                return 'NA';
        }
    }


    onRowEditComplete1(e) {
        let products = [...this.state.products];
        let { newData, index } = e;

        products[index] = newData;
        console.log(newData);
        this.setState({ products });
    }


    onRowEditChange(e) {
        this.setState({ editingRows: e.data });
    }
    textEditor(options) {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    statusEditor(options) {
        return (
            <Dropdown value={options.value} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }


    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />



                <div className="card p-fluid">
                    <DataTable value = {this.state.products}  editMode="row" dataKey="id" onRowEditComplete={this.onRowEditComplete1} responsiveLayout="scroll">
                        <Column field="id" filterField="id" header="ID" sortable filter body = {this.codeBodyTemplate}></Column>
                                                <Column field="isin" filterField="isin" header="ISIN" editor={(options) => this.textEditor(options)} style={{ minWidth: '8rem' }}></Column>
                                                <Column field="cusip" filterField="cusip" header="CUSIP"  editor={(options) => this.textEditor(options)} ></Column>
                                                <Column field="issuer" filterField="issuer" header="ISSUER" editor={(options) => this.textEditor(options)}></Column>
                                                <Column field="coupon" filterField="coupon" header="COUPON" editor={(options) => this.textEditor(options)}></Column>
                                                <Column field="type" filterField="type" header="TYPE" editor={(options) => this.textEditor(options)} ></Column>
                                                <Column field="faceValue" filterField="faceValue" header="FACE VALUE" editor={(options) => this.textEditor(options)}  ></Column>
                                                <Column field="status" filterField="status" header="STATUS" editor={(options) => this.statusEditor(options)} ></Column>
                                                <Column field="maturityDate" filterField="maturityDate" header="Maturity Date" editor={(options) => this.textEditor(options)} ></Column>
                                                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                     </DataTable>
                </div>




            </div>
        );
    }
}

