import React from 'react';
import { connect } from "react-redux";

const DCustomer = (props) => {
    return (<div>form DCustomer</div> );
}
 
const mapStateToProps=state=>{
    return{
        dCusftomerList:state.dCustomer.list
    }
}

export default connect()(DCustomer);