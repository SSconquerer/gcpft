import React,{Component} from 'react';
import { useLocation } from 'react-router-dom'
import SimpleTradeTable from '../components/SimpleTradeTable';

function Trade_surv(props) {
  const location = useLocation();
  const data = location.state;
  console.log("* * * * * * * * * * *");
 // console.log(data);
return ( 
      <div>
        <h3>Trade Surveillance related to Code id {data.id} </h3>
        <SimpleTradeTable alldata = {data}/>
      </div> 
     
  );
}

export default Trade_surv;