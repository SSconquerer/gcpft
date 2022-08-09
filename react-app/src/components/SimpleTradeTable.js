import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { data } from '../data/simple-data';
import '../styles/SimpleTable.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import axios from 'axios';
export default class SimpleTradeTable extends Component {

    constructor(props) {

        super(props); 
        console.log(this.props.alldata);  
        this.state = {
            products: [],
            multiSortMeta: [{ field: 'category', order: -1 }]
        };
 
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
     //console.log(`http://localhost:8080/api/v1/securities/getAllTradesForSecurity/${this.props.alldata.id}`);
        axios.get(`http://localhost:8080/api/v1/securities/getAllTradesForSecurity/${this.props.alldata.id}`)
                                 .then(response => response.data)
                                 .then((data) => {
                                      console.log(data);
                                     this.setState({products : data})
                                 });
//         console.log(this.state.products);
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    statusBodyTemplate(rowData) {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }
 
   

    render() {
        return (
            <div>
                <div className="card">  
                    <DataTable value={this.state.products} responsiveLayout="scroll"  showGridlines>
                        <Column field="id" filterField="id" header="Id" sortable filter></Column>
                        <Column field="bookId" filterField="bookID" header="BookId" sortable filter></Column>
                        <Column field="cpid" filterField="cpid" header="CPID" sortable filter ></Column>
                        <Column field="sid" filterField="sid" header="SID" sortable filter></Column>
                        <Column field="quantity" filterField="quantity" header="Quantity" sortable filter></Column>
                        <Column field="status" filterField="status" header="Status" sortable filter></Column>
                        <Column field="price" filterField="price" header="Price" sortable filter ></Column>
                        <Column field="buySell" filterField="buySell" header="BuySell" sortable filter></Column>
                        <Column field='tradeDate' filterField="tradeDate" header="TradeDate" sortable filter></Column>
                        <Column field='settlementDate' filterField="settlementDate" header="settlementDate" sortable filter></Column>
                    </DataTable> 
                </div> 
            </div>
        );
    }
}