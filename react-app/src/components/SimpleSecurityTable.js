import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { data } from '../data/simple-data';
import '../styles/SimpleTable.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import 'primeicons/primeicons.css';
export default class SimpleSecurityTable extends Component {


    constructor(props) {
        super(props);

        this.state = {
            products: [],
            multiSortMeta: [{ field: 'category', order: -1 }]
        };

        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
                this.onRowEditComplete1 = this.onRowEditComplete1.bind(this);
                this.onRowEditChange = this.onRowEditChange.bind(this);
    }

    componentWillMount(){
             axios.get("http://localhost:8080/api/v1/securities/all")
                         .then(response => response.data)
                         .then((data) => {
                              console.log(data);
                             this.setState({products : data})
                         });
                     console.log(this.state.products);
        }

    componentDidMount() {
        //this.setState({ products: data });
//         axios.get("http://localhost:8080/api/v1/securities/all")
//             .then(response => response.data)
//             .then((data) => {
//                  console.log(data);
//                 this.setState({products : data})
//             });
//         console.log(this.state.products);
    }





    codeBodyTemplate(rowData) { 
        return <Link to={`/trade_surv/${rowData.id}`} state = {rowData}>{rowData.id}</Link>
    }

    updateTemplate(rowData) {
        return (
        <Link to={`/update/security/${rowData.id}`} state = {rowData}>
            <i className="pi pi-pencil" style={{'fontSize': '1.5em'}}></i>
        </Link>
        );
    }

    deleteTemplate(rowData) {
        return (
                <Link to={`/delete/security/${rowData.id}`} state = {rowData}>
                    <i className="pi pi-trash" style={{'fontSize': '1.5em'}}></i>
                </Link>
        );
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

    render() {
        return (
            <div>
                <div className="card">  
                    <DataTable value={this.state.products} editMode="row" dataKey="id" onRowEditComplete={this.onRowEditComplete1}  responsiveLayout="scroll"  showGridlines>
                        <Column field="id" filterField="id" header="ID" sortable filter body = {this.codeBodyTemplate}></Column>
                        <Column field="isin" filterField="isin" header="ISIN" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="cusip" filterField="cusip" header="CUSIP" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="issuer" filterField="issuer" header="ISSUER" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="coupon" filterField="coupon" header="COUPON" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="type" filterField="type" header="TYPE" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="faceValue" filterField="faceValue" header="FACE VALUE" sortable filter editor={(options) => this.textEditor(options)}></Column>
                        <Column field="status" filterField="status" header="STATUS" sortable filter editor={(options) => this.statusEditor(options)}></Column>
                        <Column field="maturityDate" filterField="maturityDate" header="Maturity Date" sortable filter editor={(options) => this.textEditor(options)}></Column>
                       <Column header="Update" body = {this.updateTemplate}>Update</Column>
                        <Column header="Delete" body = {this.deleteTemplate}>Delete</Column>
                         <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div> 
            </div>
        );
    }
}